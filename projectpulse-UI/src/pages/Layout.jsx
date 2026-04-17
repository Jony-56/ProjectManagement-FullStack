import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadTheme } from '../features/themeSlice'
import { setProjects, setLoading } from '../features/workspaceSlice'
import { getProjects } from '../api/projectApi'
import { Loader2Icon } from 'lucide-react'

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const { loading, projects } = useSelector((state) => state.workspace)
    const dispatch = useDispatch()

    // Normalize project structure
    const normalizeProject = (project) => ({
        ...project,
        id: project.id ?? project._id,
        tasks: (project.tasks || []).map((task) => ({
            ...task,
            id: task.id ?? task._id,
            projectId:
                task.projectId ??
                task.project_id ??
                project.id ??
                project._id,
        })),
        members: project.members || [],
    })

    const loadData = async () => {
        dispatch(setLoading(true))

        try {
            const projectsRes = await getProjects()
            const projectsData = projectsRes?.data ?? []
            const normalizedProjects = Array.isArray(projectsData)
                ? projectsData.map(normalizeProject)
                : []

            dispatch(setProjects(normalizedProjects))
        } catch (error) {
            console.error('Failed to load projects:', error)
            dispatch(setProjects([]))
        } finally {
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        dispatch(loadTheme())
        loadData()
    }, [])

    const isInitialLoading = loading && projects.length === 0

    if (isInitialLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white dark:bg-zinc-950">
                <Loader2Icon className="size-7 text-blue-500 animate-spin" />
            </div>
        )
    }

    // ================= MAIN LAYOUT =================
    return (
        <div className="flex bg-white dark:bg-zinc-950 text-gray-900 dark:text-slate-100">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            <div className="flex-1 flex flex-col h-screen">
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                <div className="flex-1 h-full p-6 xl:p-10 xl:px-16 overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
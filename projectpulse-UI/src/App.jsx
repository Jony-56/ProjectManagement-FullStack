import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader2Icon } from "lucide-react";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Projects = lazy(() => import("./pages/Projects"));
const Team = lazy(() => import("./pages/Team"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Notifications = lazy(() => import("./pages/Notifications"));
const RequireAuth = lazy(() => import("./components/RequireAuth"));

const App = () => {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3500,
                    style: {
                        background: 'var(--toast-bg, #fff)',
                        color: 'var(--toast-color, #111)',
                        border: '1px solid var(--toast-border, #e5e7eb)',
                        fontSize: 13,
                        fontFamily: 'inherit',
                    },
                    success: { iconTheme: { primary: '#10b981', secondary: '#fff' } },
                    error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
                }}
            />
            <Suspense fallback={
                <div className="flex items-center justify-center h-screen bg-white dark:bg-zinc-950">
                    <Loader2Icon className="size-7 text-blue-500 animate-spin" />
                </div>
            }>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<RequireAuth />}>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="team" element={<Team />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="projectsDetail" element={<ProjectDetails />} />
                            <Route path="taskDetails" element={<TaskDetails />} />
                            <Route path="notifications" element={<Notifications />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;

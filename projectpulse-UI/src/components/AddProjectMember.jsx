import { useState, useEffect } from "react";
import { UserPlus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addMember, getProject } from "../api/projectApi";
import { getAllUsers } from "../api/userApi";
import { updateProject, selectAllUsers, selectProjectById, setAllUsers } from "../features/workspaceSlice";

const AddProjectMember = ({ isDialogOpen, setIsDialogOpen, projectId }) => {
    const dispatch = useDispatch();
    const allUsers = useSelector(selectAllUsers);
    const project = useSelector(selectProjectById(projectId));
    const [userId, setUserId] = useState("");
    const [role, setRole] = useState("Member");
    const [isAdding, setIsAdding] = useState(false);
    const [localUsers, setLocalUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(false);

    // ✅ Fetch users every time dialog opens — guaranteed fresh list
    useEffect(() => {
        if (!isDialogOpen) return;
        const fetchUsers = async () => {
            setLoadingUsers(true);
            try {
                const res = await getAllUsers();
                const users = res?.data ?? [];
                dispatch(setAllUsers(users));
                setLocalUsers(users);
            } catch {
                // fallback to store if API fails
                setLocalUsers(allUsers);
            } finally {
                setLoadingUsers(false);
            }
        };
        fetchUsers();
    }, [isDialogOpen]);

    // Users not already in the project
    const existingMemberIds = (project?.members || []).map(m => m.userId);
    const usersToShow = (localUsers.length > 0 ? localUsers : allUsers)
        .filter(u => !existingMemberIds.includes(u.id));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) return toast.error("Please select a user");
        setIsAdding(true);
        try {
            await addMember(projectId, { userId, role });
            const res = await getProject(projectId);
            if (res?.data) {
                dispatch(updateProject({
                    ...res.data,
                    tasks: res.data.tasks || [],
                    members: res.data.members || []
                }));
            }
            toast.success("Member added successfully.");
            setUserId("");
            setRole("Member");
            setIsDialogOpen(false);
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to add member.");
        } finally {
            setIsAdding(false);
        }
    };

    if (!isDialogOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl p-6 w-full max-w-md text-zinc-900 dark:text-zinc-200">
                <div className="mb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <UserPlus className="size-5" /> Add Member to Project
                    </h2>
                    {project && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                            Adding to: <span className="text-blue-600 dark:text-blue-400">{project.name}</span>
                        </p>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Select User</label>
                        {loadingUsers ? (
                            <div className="flex items-center gap-2 py-2 text-sm text-zinc-400">
                                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"/>
                                Loading users...
                            </div>
                        ) : (
                            <>
                                <select
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="w-full rounded border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 text-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                                    required>
                                    <option value="">Choose a user...</option>
                                    {usersToShow.map(u => (
                                        <option key={u.id} value={u.id}>
                                            {u.fullName} ({u.email})
                                        </option>
                                    ))}
                                </select>
                                {usersToShow.length === 0 && (
                                    <p className="text-xs text-zinc-400 dark:text-zinc-500">
                                        {loadingUsers ? "Loading..." : "No available users to add. All users may already be members."}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full rounded border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 text-sm py-2 px-3 focus:outline-none focus:border-blue-500">
                            <option value="Manager">Manager</option>
                            <option value="Member">Member</option>
                            <option value="Viewer">Viewer</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setIsDialogOpen(false)}
                            className="px-5 py-2 text-sm rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isAdding || !userId || loadingUsers}
                            className="px-5 py-2 text-sm rounded bg-gradient-to-br from-blue-500 to-blue-600 text-white disabled:opacity-50 transition">
                            {isAdding ? "Adding..." : "Add Member"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProjectMember;
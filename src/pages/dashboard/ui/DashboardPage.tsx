import { useAuth } from "@/app/providers";

export const DashboardPage = () => {
    const { user } = useAuth();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <p>Welcome back, <strong>{user?.firstName}</strong>! 👋</p>
            <div className="mt-4 p-4 bg-blue-50 rounded">
                <p>This is a protected page. You can only see this because you're logged in!</p>
            </div>
        </div>
    )
}
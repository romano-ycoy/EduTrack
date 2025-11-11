import { useAuth } from '@/app/providers';
import { MainLayout } from '@/widgets/layout';

export const DashboardPage = () => {
    const { user } = useAuth();

    return (
        <MainLayout>
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600 mb-6">
                    Welcome back, <strong>{user?.firstName}</strong>! 👋
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Stats Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Total Students</p>
                        <p className="text-3xl font-bold text-gray-900">150</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">Added Today</p>
                        <p className="text-3xl font-bold text-gray-900">5</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <p className="text-sm text-gray-600 mb-1">This Week</p>
                        <p className="text-3xl font-bold text-gray-900">23</p>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-blue-900 mb-2">
                        🎉 Getting Started
                    </h2>
                    <p className="text-blue-800">
                        This is a protected page. You can only see this because you're logged in!
                        Navigate to the Students page to manage student records.
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/app/providers';

// Props interface - what this component accepts
interface ProtectedRouteProps {
    children: React.ReactNode; // The page we want to protect
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    // Get authentication state from AuthProvider
    const { isAuthenticated, isLoading } = useAuth();

    console.log('ProtectedRoute Check:');
    console.log(' - isAuthenticated:', isAuthenticated);
    console.log(' - isLoading:', isLoading);

    // step 1: Show loading while checking auth
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    // STEP 2: if not authenticated. redirect to login
    if (!isAuthenticated) {
        console.log('Not authenticated - Redirecting to /login');
        return <Navigate to="/login" replace />;
    }

    // STEP 3: If authenticated, show the protected page
    console.log('Authenticated - Showing protected page');
    return <>{children}</>
}
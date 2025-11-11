import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '@/app/providers';
import { logout } from '@/features/auth';
import { Button } from '@/shared/ui/button';

export const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo/Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            Student Management System
          </h1>
        </div>

        {/* Right: User Info + Logout */}
        <div className="flex items-center gap-4">
          {/* User Info */}
          <div className="flex items-center gap-2 text-sm">
            <User className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700 font-medium">
              {user?.email}
            </span>
          </div>

          {/* Logout Button */}
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
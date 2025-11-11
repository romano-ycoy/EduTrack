import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Body: Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
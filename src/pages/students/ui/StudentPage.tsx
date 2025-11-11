import { MainLayout } from '@/widgets/layout';

export const StudentsPage = () => {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Students Management</h1>
        <p className="text-gray-600 mb-6">
          Manage all student records in one place
        </p>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <p className="text-gray-600">
            Student table and CRUD operations will go here in the next phase!
          </p>
        </div>
      </div>
    </MainLayout>
  );
};
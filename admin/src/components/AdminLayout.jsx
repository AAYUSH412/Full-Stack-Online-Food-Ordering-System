// src/components/admin/AdminLayout.jsx
import { Link, Outlet } from 'react-router-dom';
import { LayoutGrid, UtensilsCrossed, Users, PackageOpen } from 'lucide-react';

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">BiteBuddy Admin</h1>
        <nav className="space-y-2">
          <Link to="/admin" className="flex items-center p-3 hover:bg-gray-700 rounded">
            <LayoutGrid className="mr-2" /> Dashboard
          </Link>
          <Link to="/admin/restaurants" className="flex items-center p-3 hover:bg-gray-700 rounded">
            <UtensilsCrossed className="mr-2" /> Restaurants
          </Link>
          <Link to="/admin/menus" className="flex items-center p-3 hover:bg-gray-700 rounded">
            <PackageOpen className="mr-2" /> Menus
          </Link>
          <Link to="/admin/users" className="flex items-center p-3 hover:bg-gray-700 rounded">
            <Users className="mr-2" /> Users
          </Link>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
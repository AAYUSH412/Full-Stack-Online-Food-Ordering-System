import { Link } from 'react-router-dom';
import { Store, MenuSquare, ClipboardList } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { path: '/admin/add-restaurant', label: 'Add Restaurant', icon: Store },
    { path: '/admin/add-menu', label: 'Add Menu', icon: MenuSquare },
    { path: '/admin/manage-orders', label: 'Manage Orders', icon: ClipboardList }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/admin" className="text-2xl font-bold text-gray-800">
              BiteBuddy Admin
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <link.icon className="w-5 h-5 mr-2" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
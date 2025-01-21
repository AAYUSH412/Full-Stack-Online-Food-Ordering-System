import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, Menu, X, ChevronDown, LayoutDashboard, LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signout`, {
        method: 'POST',
        credentials: 'include'
      });
      const data = await response.json();
      if (data.success) {
        setUser(null);
        setDropdownOpen(false);
        navigate('/');
      }
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
      hasScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className={`font-bold transition-all duration-300 ${
              hasScrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
            }`}>
              BiteBuddy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
            </Link>

            {/* Desktop Auth */}
            <div className="hidden md:block">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-gray-700">{user.name}</span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-x-4">
                  <Link
                    to="/sign-in"
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/sign-up"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white">
            <div className="px-4 pt-8 pb-6 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-medium text-gray-900 hover:text-blue-600 py-2"
                >
                  {item.label}
                </Link>
              ))}
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="block text-xl font-medium text-gray-900 hover:text-blue-600 py-2"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left text-xl font-medium text-gray-900 hover:text-blue-600 py-2"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <div className="mt-8 space-y-4">
                  <Link
                    to="/sign-in"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/sign-up"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/restaurants', label: 'Restaurants' },
  { path: '/aboutus', label: 'About Us' },
  { path: '/contact', label: 'Contact Us' },
];

export default Navbar;
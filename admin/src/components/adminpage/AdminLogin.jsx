// src/pages/AdminLogin.jsx
const AdminLogin = () => {
    const [credentials, setCredentials] = useState({
      email: '',
      password: ''
    });
  
    const handleLogin = async (e) => {
      e.preventDefault();
      // Verify admin credentials and set isAdmin in localStorage
      if (credentials.email === 'admin@bitebuddy.com' && credentials.password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        navigate('/admin');
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
          {/* Add login form fields */}
        </form>
      </div>
    );
  };
// src/components/admin/ManageMenus.jsx
const ManageMenus = () => {
    const [menuData, setMenuData] = useState({
      name: '',
      description: '',
      price: '',
      isVeg: false,
      image: null,
      restaurantId: ''
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      
      Object.keys(menuData).forEach(key => {
        formData.append(key, menuData[key]);
      });
  
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/menus/restaurant/${menuData.restaurantId}`, {
          method: 'POST',
          body: formData
        });
  
        if (response.ok) {
          alert('Menu item added successfully!');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Add Menu Item</h2>
        {/* Add form fields */}
      </div>
    );
  };
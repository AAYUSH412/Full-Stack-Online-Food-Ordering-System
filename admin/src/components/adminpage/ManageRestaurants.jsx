// src/components/admin/ManageRestaurants.jsx
import { useState } from 'react';

const ManageRestaurants = () => {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    deliveryTime: '',
    costForTwo: '',
    rating: '',
    image: null,
    offers: ['']
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key === 'offers') {
        formData[key].forEach(offer => {
          if (offer) formDataToSend.append('offers', offer);
        });
      } else if (key === 'image') {
        if (formData.image) {
          formDataToSend.append('image', formData.image);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants`, {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        alert('Restaurant added successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label className="block mb-2">Restaurant Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* Add other form fields similarly */}
      </form>
    </div>
  );
};
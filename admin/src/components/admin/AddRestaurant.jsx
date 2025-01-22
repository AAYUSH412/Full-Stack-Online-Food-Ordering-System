// src/components/admin/AddRestaurant.jsx

import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { toast } from 'react-toastify';

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    deliveryTime: '',
    costForTwo: '',
    rating: '',
    offers: [''],
    images: []
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: files
    }));
    setImagePreview(URL.createObjectURL(files[0]));
  };

  const handleOfferChange = (index, value) => {
    const newOffers = [...formData.offers];
    newOffers[index] = value;
    setFormData(prev => ({
      ...prev,
      offers: newOffers
    }));
  };

  const addOfferField = () => {
    setFormData(prev => ({
      ...prev,
      offers: [...prev.offers, '']
    }));
  };

  const removeOfferField = (index) => {
    const newOffers = formData.offers.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      offers: newOffers
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      
      // Append text fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('cuisine', formData.cuisine);
      formDataToSend.append('deliveryTime', formData.deliveryTime);
      formDataToSend.append('costForTwo', formData.costForTwo);
      formDataToSend.append('rating', formData.rating);
      
      // Append offers
      formData.offers.forEach(offer => {
        if (offer.trim()) {
          formDataToSend.append('offers', offer);
        }
      });

      // Append images
      formData.images.forEach(image => {
        formDataToSend.append('image', image);
      });

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/restaurants`, {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Restaurant added successfully!');
        // Reset form
        setFormData({
          name: '',
          cuisine: '',
          deliveryTime: '',
          costForTwo: '',
          rating: '',
          offers: [''],
          images: []
        });
        setImagePreview(null);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to add restaurant');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Restaurant</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Restaurant Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Cuisine */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cuisine Type
            </label>
            <input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Delivery Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery Time (in minutes)
            </label>
            <input
              type="text"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Cost for Two */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cost for Two (₹)
            </label>
            <input
              type="number"
              name="costForTwo"
              value={formData.costForTwo}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Offers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Offers
            </label>
            {formData.offers.map((offer, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={offer}
                  onChange={(e) => handleOfferChange(index, e.target.value)}
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Enter offer details"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeOfferField(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addOfferField}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              + Add Another Offer
            </button>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Restaurant Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="images" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                    <span>Upload files</span>
                    <input
                      id="images"
                      name="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="sr-only"
                      required
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-24 w-24 object-cover rounded"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Adding Restaurant...' : 'Add Restaurant'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
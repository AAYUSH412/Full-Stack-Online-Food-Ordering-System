# BiteBuddy - Your Ultimate Food Ordering Buddy

Welcome to BiteBuddy! A modern and intuitive online food ordering platform designed to connect food lovers with their favorite restaurants seamlessly.

---

## **Features**

- **User-Friendly Interface**: Enjoy an effortless browsing and ordering experience.
- **Search & Filter**: Quickly find your favorite dishes or restaurants 
- **Secure Authentication**: Sign up and log in securely using email and password.
- **Mobile Responsiveness**: Access BiteBuddy on any device with an optimized and responsive design.

---

## **Tech Stack**

### Frontend
- React
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Additional Tools
- Firebase Authentication
- ImageKit.io for image management
- Razorpay for payment integration

---

## **Installation**

### Prerequisites
- Node.js and npm installed on your system
- MongoDB instance running locally or in the cloud

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/bitebuddy.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd backend and frontend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   RAZORPAY_KEY=your_razorpay_key
   ```

5. **Start the Development Server**:
   ```bash
   npm run dev
   ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:4000`.

---

## **Folder Structure**

```
📁 bitebuddy
├── 📁 server       # Express backend
├── 📁 public       # Public assets
├── 📁 config       # Configuration files
├── 📁 models       # Mongoose schemas
├── 📁 routes       # API routes
├── 📁 controllers  # Backend logic
├── .env            # Environment variables
├── README.md       # Documentation
└── package.json    # Project dependencies
```

---

## **How to Use**

1. **Sign Up or Log In**: Create an account or log in to access your dashboard.
2. **Explore Restaurants**: Browse a wide range of restaurants and cuisines.
3. **Add to Cart**: Select your favorite meals and add them to your cart.
4. **Checkout**: Complete the payment process securely using Razorpay.
5. **Track Your Order**: Stay updated with real-time order tracking.

---

## **Contributing**

We welcome contributions to BiteBuddy! If you'd like to help improve the platform, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

For any questions or feedback, feel free to reach out:

- 📧 Email: [support@bitebuddy.com](mailto:support@bitebuddy.com)
- 🌐 Website: [www.bitebuddy.com](http://www.bitebuddy.com)
- 📱 Social Media: [Instagram](https://instagram.com/BiteBuddy), [Facebook](https://facebook.com/BiteBuddyOfficial), [Twitter](https://twitter.com/BiteBuddy)

---

**Thank you for choosing BiteBuddy! Your satisfaction is our priority.**

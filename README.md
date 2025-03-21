# BiteBuddy - Your Ultimate Food Ordering Buddy

<p align="center">
  <img src="https://ik.imagekit.io/r9naagwrj/Github/utensils.svg" alt="BiteBuddy Logo" width="150"/>
</p>

<p align="center">
  A modern, full-stack food ordering platform connecting food lovers with their favorite restaurants seamlessly.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#environment-variables">Environment Variables</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#how-to-use">How to Use</a> •
  <a href="#api-endpoints">API Endpoints</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a> •
  <a href="#contact">Contact</a>
</p>

---

## **Features**

### Customer-facing Application
- **User-Friendly Interface**: Intuitive browsing and ordering experience
- **Restaurant Discovery**: Browse restaurants by cuisine, location, or ratings
- **Search & Filter Options**: Find dishes or restaurants quickly and efficiently
- **Real-time Order Tracking**: Track your order status in real-time
- **Secure Authentication**: Email/password authentication with JWT
- **Order History**: View past orders and reorder with a single click
- **Payment Integration**: Secure payments via Razorpay
- **Mobile Responsiveness**: Optimized for all devices

### Restaurant Admin Panel
- **Order Management**: Accept, reject, and manage incoming orders
- **Menu Management**: Add, edit, and organize menu items
- **Inventory Control**: Track and manage food inventory
- **Analytics Dashboard**: View sales data and customer insights
- **Profile Management**: Update restaurant information and operational hours

### System Features
- **Notifications**: Email notifications for order updates
- **Rating & Reviews**: Customer feedback system for continuous improvement
- **Image Management**: Integrated with ImageKit for efficient image storage

---

## **Tech Stack**

### Frontend
- **React**: UI library for building interactive interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: For navigation and routing
- **Redux Toolkit**: State management
- **React Query**: Data fetching and caching
- **Vite**: Build tool for faster development

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: Authentication middleware

### Additional Technologies
- **ImageKit.io**: Image management services
- **Razorpay**: Payment gateway integration
- **Nodemailer**: Email service integration
- **Express Validator**: Request validation

---

## **Demo**

<p align="center">
  <img src="https://ik.imagekit.io/r9naagwrj/Github/Screenshot%202025-03-21%20at%202.14.07%E2%80%AFPM.png" alt="BiteBuddy Website"/>
</p>

Check out our live demo: [BiteBuddy Demo](https://bite-buddy-food.vercel.app)

**Test Credentials:**
- Customer:
  - Email: test@example.com
  - Password: test123
---

## **Installation**

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB (local instance or cloud connection)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AAYUSH412/Full-Stack-Online-Food-Ordering-System.git
   cd Full-Stack-Online-Food-Ordering-System
   ```

2. **Install Dependencies**:
   ```bash
   # Install root dependencies
   npm install
   
   # Install workspace dependencies
   npm run setup
   ```

   Or install each workspace manually:
   ```bash
   # Backend dependencies
   cd backend && npm install
   
   # Frontend dependencies
   cd frontend && npm install
   
   # Admin panel dependencies
   cd admin && npm install
   ```

3. **Environment Variables**:
   - Create `.env` files in each directory (backend, frontend, admin) using the provided `.env.example` files
   - Fill in required environment variables (see [Environment Variables](#environment-variables) section)

4. **Start Development Servers**:
   ```bash
   # Run all services concurrently
   npm run dev
   
   # Or run individual services
   npm run dev:backend
   npm run dev:frontend
   npm run dev:admin
   ```

5. **Access the Applications**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4000
   - Admin Panel: http://localhost:5174

---

## **Environment Variables**

Create the following environment files with these variables:

### Backend (.env)
```
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
EMAIL_USER=your_email_user
EMAIL=your_email_address
EMAIL_PASSWORD=your_email_password
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Admin (.env)
```
VITE_API_URL=http://localhost:4000
```

---

## **Project Structure**

```
📁 Full-Stack-Online-Food-Ordering-System
├── 📁 frontend            # Customer-facing React application
│   ├── 📁 public          # Static assets
│   ├── 📁 src             # Source code
│   │   ├── 📁 assets      # Images and static resources
│   │   ├── 📁 components  # Reusable UI components
│   │   ├── 📁 context     # React context providers
│   │   ├── 📁 hooks       # Custom React hooks
│   │   ├── 📁 pages       # Application pages
│   │   ├── 📁 services    # API service functions
│   │   └── 📁 utils       # Utility functions
│   ├── .env.local         # Environment variables
│   └── package.json       # Dependencies and scripts
│
├── 📁 backend             # Express API server
│   ├── 📁 config          # Configuration files
│   ├── 📁 controllers     # Request handlers
│   ├── 📁 middleware      # Express middleware
│   ├── 📁 models          # Mongoose models
│   ├── 📁 routes          # API routes
│   ├── 📁 services        # Business logic
│   ├── 📁 utils           # Utility functions
│   ├── .env.local         # Environment variables
│   └── package.json       # Dependencies and scripts
│
├── 📁 admin               # Restaurant admin panel
│   ├── 📁 public          # Static assets
│   ├── 📁 src             # Source code
│   ├── .env.local         # Environment variables
│   └── package.json       # Dependencies and scripts
│
├── package.json           # Root package with workspace configurations
├── README.md              # Project documentation
└── CONTRIBUTING.md        # Contribution guidelines
```

---

## **How to Use**

### For Customers:

1. **Registration/Login**: Create an account or log in to access the platform
2. **Browse Restaurants**: Explore restaurants and their menus
3. **Add to Cart**: Select desired items and add them to your cart
4. **Checkout**: Review order and proceed to payment
5. **Track Order**: Monitor your order status in real-time
6. **Rate & Review**: Share your experience after receiving your order

### For Restaurant Owners:

1. **Dashboard Access**: Log in to the admin panel
2. **Manage Orders**: View and process incoming orders
3. **Update Menu**: Add, edit, or remove menu items
4. **Profile Settings**: Update restaurant information and business hours
5. **View Analytics**: Access sales data and performance metrics

---

## **API Endpoints**

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant details
- `GET /api/restaurants/:id/menu` - Get restaurant menu

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PATCH /api/orders/:id` - Update order status

*For a complete list of endpoints, refer to the API documentation.*

---

## **Contributing**

We welcome contributions to BiteBuddy! Please follow these steps:

1. Review the [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines
2. Fork the repository
3. Create a new branch (`git checkout -b feature/your-feature-name`)
4. Make your changes
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature-name`)
7. Open a Pull Request

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Contact**

- **GitHub Repository**: [AAYUSH412/Full-Stack-Online-Food-Ordering-System](https://github.com/AAYUSH412/Full-Stack-Online-Food-Ordering-System)
- **Developer**: Aayush Vaghela
- **Email**: [aayushvaghela12@gmail.com](mailto:aayushvaghela12@gmail.com)
---

**Thank you for choosing BiteBuddy! Your satisfaction is our priority.**

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import connectdb from "./config/mongo.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(fileUpload());

dotenv.config();

// Allow CORS from specific origins
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:4000",
    "http://localhost:5174", 
    "https://full-stack-online-food-ordering-system-frontend.vercel.app",
    "https://full-stack-online-food-ordering-system-backend.vercel.app",
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Set-Cookie']
}));
app.use(cookieParser());

// Connect to MongoDB
connectdb();

const port = process.env.PORT;

// Routes
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send(`
      <html>
        <head>
          <title>API Status</title>
        </head>
        <body>
          <h1>API is working</h1>
          <p>Welcome to the Food delivery website. Everything is running smoothly.</p>
        </body>
      </html>
    `);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

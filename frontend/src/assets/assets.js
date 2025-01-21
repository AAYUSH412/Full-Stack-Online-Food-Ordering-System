import dessetimage from "./berry-cheesecake.jpg";
import fastfoodimage from "./food.jpg";
import healthyimage from "./pexels-janetrangdoan-1092730.jpg";
import beveragesimage from "./beverages.jpg";

export const categories = [
  { name: "Desserts", image: dessetimage, link: "/menu/desserts" },
  { name: "Fast Food", image: fastfoodimage, link: "/menu/fast-food" },
  { name: "Healthy", image: healthyimage, link: "/menu/healthy" },
  { name: "Beverages", image: beveragesimage, link: "/menu/beverages" },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    comment:
      "BiteBuddy has transformed how I order food. The variety and service are exceptional!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    comment:
      "Quick delivery and amazing food quality. This is my go-to food ordering platform.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Jessica Williams",
    comment:
      "I love the healthy options available on BiteBuddy. It has made my life so much easier.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
];

export const blogs = [
  {
    id: 1,
    title: "10 Quick Tips for Healthy Eating",
    thumbnail: "https://via.placeholder.com/400x250",
    description:
      "Learn how to make healthy eating simple and sustainable with these 10 easy tips.",
    link: "/blog/healthy-eating-tips",
  },
  {
    id: 2,
    title: "The Art of Meal Prepping",
    thumbnail: "https://via.placeholder.com/400x250",
    description:
      "Discover how meal prepping can save time and help you stay on track with your goals.",
    link: "/blog/meal-prepping-guide",
  },
  {
    id: 3,
    title: "Top 5 Superfoods for a Healthy Life",
    thumbnail: "https://via.placeholder.com/400x250",
    description:
      "Boost your health with these nutrient-packed superfoods that are easy to include in your diet.",
    link: "/blog/top-superfoods",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Plant-Based Diets",
    thumbnail: "https://via.placeholder.com/400x250",
    description:
      "Explore the benefits of plant-based eating and how to get started.",
    link: "/blog/plant-based-diet-guide",
  },
];

export const faqs = [
    {
      question: "What services does BiteBuddy offer?",
      answer:
        "BiteBuddy provides an online food ordering experience with a variety of cuisines, from local favorites to international delicacies.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After placing an order, you can track it in real-time from your dashboard, where you'll see live updates on its status.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Yes, you can cancel or modify your order within a specific time frame after placing it. Check the order details page for more information.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit/debit cards, digital wallets, and cash on delivery, depending on your location.",
    },
  ];

export default categories;

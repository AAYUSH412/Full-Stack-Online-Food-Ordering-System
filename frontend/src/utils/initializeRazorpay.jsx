// src/utils/initializeRazorpay.jsx
import { useNavigate } from "react-router-dom";

const initializeRazorpay = async (total, cart, onSuccess, onFailure) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/payment/create-order`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total * 100,
          currency: "INR",
        }),
      }
    );

    const data = await response.json();
    if (!data.success) throw new Error(data.message);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: total * 100,
      currency: "INR",
      name: "BiteBuddy",
      description: "Food Order Payment",
      order_id: data.orderId,
      handler: async (paymentResponse) => {
        try {
          // First verify the payment
          const verifyResponse = await fetch(
            `${import.meta.env.VITE_API_URL}/api/payment/verify`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_signature: paymentResponse.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            // If payment is verified, create order
            const orderResponse = await fetch(
              `${import.meta.env.VITE_API_URL}/api/orders`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                  paymentId: paymentResponse.razorpay_payment_id,
                  razorpayOrderId: paymentResponse.razorpay_order_id,
                  items: cart.items,
                  totalAmount: total,
                }),
              }
            );

            const orderData = await orderResponse.json();
            if (orderData.success) {
              onSuccess({
                _id: orderData.data._id, // MongoDB ID
                orderId: paymentResponse.razorpay_order_id, // Razorpay Order ID
                paymentId: paymentResponse.razorpay_payment_id,
                items: cart.items,
                total,
                date: new Date().toLocaleString(),
              });
            }
          }
        } catch (error) {
          console.error("Payment initialization failed:", error);
          onFailure(); // Use the callback instead of direct navigation
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment initialization failed:", error);
    window.location.href = "/payment-failed";
  }
};

export default initializeRazorpay;

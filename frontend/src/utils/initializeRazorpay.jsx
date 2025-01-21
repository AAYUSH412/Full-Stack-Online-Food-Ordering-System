const initializeRazorpay = async (total, onSuccess, onFailure) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: total * 100,
        currency: 'INR'
      })
    });
    
    const data = await response.json();
    if (!data.success) throw new Error(data.message);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: total * 100,
      currency: 'INR',
      name: 'BiteBuddy',
      description: 'Food Order Payment',
      order_id: data.orderId,
      handler: async (response) => {
        try {
          // First verify the payment
          const verifyResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/payment/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });

          const verifyData = await verifyResponse.json();
          
          if (verifyData.success) {
            // If payment is verified, create order
            const orderResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({
                paymentId: response.razorpay_payment_id
              })
            });
          
            const orderData = await orderResponse.json();
            if (orderData.success) {
              onSuccess(response.razorpay_order_id);
            } else {
              onFailure();
            }
          } else {
            onFailure();
          }
        } catch (error) {
          console.error('Payment verification or order creation failed:', error);
          onFailure();
        }
      },
      modal: {
        ondismiss: onFailure
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#16a34a'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error('Payment initialization failed:', error);
    onFailure();
  }
};

export default initializeRazorpay;
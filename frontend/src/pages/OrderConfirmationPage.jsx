import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../redux/slices/orderSlice";
import { clearCart } from "../redux/slices/cartSlice";

const OrderConfirmationPage = () => {
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { orderDetails, loading, error } = useSelector((s) => s.orders);
  const { checkout } = useSelector((state) => state.checkout);

  const orderId = searchParams.get("orderId");
  const order = state?.order || orderDetails;

  useEffect(() => {
    // Fetch order if not passed via state
    if (!state?.order && orderId) {
      dispatch(fetchOrderDetails(orderId));
    }

    // Clear cart after successful checkout
    if (checkout) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [dispatch, orderId, state?.order, checkout, navigate]);

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  if (!order && loading) {
    return (
      <div className="mx-auto max-w-4xl bg-white p-6">
        <p className="text-gray-600">Loading order confirmation...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="mx-auto max-w-4xl bg-white p-6">
        <h1 className="mb-4 text-3xl font-bold text-emerald-700">
          Order confirmation unavailable
        </h1>
        {error && <p className="mb-2 text-red-600">{error}</p>}
        <p className="mb-6 text-gray-600">
          We could not find a recent order in this session.
        </p>
        <Link to="/my-orders" className="text-blue-600 hover:underline">
          View my orders
        </Link>
      </div>
    );
  }

  const orderItems = order.orderItems || order.checkoutItems || [];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank you for your Order!
      </h1>

      <div className="p-6 rounded-lg border">
        <div className="flex justify-between mb-20">
          <div>
            <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
            <p className="text-gray-600">
              Order Date: {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-emerald-700 text-sm">
              Estimated Delivery: {calculateEstimatedDelivery(order.createdAt)}
            </p>
          </div>
        </div>

        <div className="mb-20">
          {orderItems.map((item) => (
            <div
              key={item.productId || item._id}
              className="flex items-center mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded-md mr-4"
              />
              <div>
                <h4 className="text-md font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.color || "Default"} | {item.size || "Default"}
                </p>
              </div>

              <div className="ml-auto text-right">
                <p className="text-md">
                  BDT {Number(item.price).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Payment</h4>
            <p className="text-gray-600">{order.paymentMethod}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Delivery</h4>
            <p className="text-gray-600">{order.shippingAddress.address}</p>
            <p className="text-gray-600">
              {order.shippingAddress.city}, {order.shippingAddress.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

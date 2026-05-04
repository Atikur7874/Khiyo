import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../redux/slices/orderSlice";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (id) dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  return (
    <div className=" max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className=" text-2xl md:text-3xl font-bold mb-6">Order details</h2>
      {loading ? (
        <p className="text-gray-600">Loading order details...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : !orderDetails ? (
        <p className="text-gray-600">No order details found</p>
      ) : (
        <div className=" p-4 sm:p-6 rounded-lg border">
          {/**Order info */}
          <div className=" flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className=" text-lg md:text-xl font-semibold">
                Order Id: #{orderDetails._id}
              </h3>
              <p className=" text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className=" flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
              >
                {orderDetails.isPaid ? "Paid" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-2 py-1 rounded-full text-xs sm:text-sm font-medium mt-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>
          {/**Customer, payment, shipping info */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className=" text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment method: {orderDetails.paymentMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress?.city || ""}, ${
                  orderDetails.shippingAddress?.country || ""
                }`}
              </p>
            </div>
          </div>
          {/**Product list */}
          <div className=" overflow-x-auto">
            <h4 className=" text-lg font-semibold mb-4">Products</h4>
            <table className=" min-w-full text-gray-600 mb-4">
              <thead className=" bg-gray-100">
                <tr>
                  <th className=" py-2 px-2">Name</th>
                  <th className=" py-2 px-2">Unit price</th>
                  <th className=" py-2 px-2">Quantity</th>
                  <th className=" py-2 px-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className=" border-b">
                    <td className=" py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className=" w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className=" text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>

                    <td className=" py-2 px-4">BDT {Number(item.price)}</td>
                    <td className=" py-2 px-4">{item.quantity}</td>
                    <td className=" py-2 px-4">
                      BDT {Number(item.price) * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/**Back to my order page */}
          <Link to="/my-order" className=" text-blue-500 hover:underline">
            Back to My Order
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;

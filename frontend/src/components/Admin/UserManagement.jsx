import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  fetchUser,
  updateUser,
} from "../../redux/slices/adminSlice";

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((s) => s.admin);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleRoleChange = (userId, newRole) => {
    const user = users.find((u) => u._id === userId);
    if (!user) return;
    dispatch(
      updateUser({
        id: userId,
        name: user.name,
        email: user.email,
        role: newRole,
      })
    );
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete the user")) {
      dispatch(deleteUser(userId));
    }
  };



  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className=" max-w-7xl mx-auto p-6">
      <h2 className=" text-2xl font-bold mb-4">User Management</h2>
      {loading && <div className="mb-4 text-gray-600">Loading users...</div>}
      {error && <div className="mb-4 text-red-600">{error}</div>}
      {/**Add users */}
      <div className=" p-6 rounded-lg mb-6">
        <h3 className=" text-lg font-bold mb-4">Add new User</h3>
        <form onSubmit={handleSubmit}>
          <div className=" mb-6">
            <label className=" block text-gray-700 ">Role</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" w-full p-2 border rounded "
              required
            />
          </div>
          <div className=" mb-6">
            <label className=" block text-gray-700 ">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" w-full p-2 border rounded "
              required
            />
          </div>
          <div className=" mb-6">
            <label className=" block text-gray-700 ">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" w-full p-2 border rounded "
              required
            />
          </div>
          <div className=" mb-6">
            <label className=" block text-gray-700 ">Name</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className=" w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className=" bg-green-500 text-white py-2p px-4 rounded hover:bg-green-700"
          >
            Add User{" "}
          </button>
        </form>
      </div>
      {/**User list management */}
      <div className=" overflow-x-auto shadow sm:rounded-lg">
        <table className=" min-w-full text-left text-gray-500">
          <thead className=" bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className=" border-b hover:bg-gray-50">
                <td className=" p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className=" p-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className=" p-2 border rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className=" p-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;

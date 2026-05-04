import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  updateProduct,
} from "../../redux/slices/adminProductSlice";

const EditProductPage = () => {
  const { id } = useParams();
  const isCreateMode = !id || id === "new";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.adminProducts);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collection: "",
    material: "",
    gender: "",
    images: [],
  });

  useEffect(() => {
    if (isCreateMode) return;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
        );
        const product = response.data;
        setProductData({
          name: product.name || "",
          description: product.description || "",
          price: product.price || 0,
          countInStock: product.countInStock || 0,
          sku: product.sku || "",
          category: product.category || "",
          brand: product.brand || "",
          sizes: product.sizes || [],
          colors: product.colors || [],
          collection: product.collections || "",
          material: product.material || "",
          gender: product.gender || "",
          images: product.images || [],
        });
      } catch (error) {
        console.error("Failed to load product details", error);
      }
    };

    fetchProduct();
  }, [id, isCreateMode]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setProductData((prev) => ({
          ...prev,
          images: [...prev.images, { url: response.data.imageUrl }],
        }));
      })
      .catch((error) => {
        console.error("Image upload failed", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...productData,
      collections: productData.collection,
    };

    try {
      if (isCreateMode) {
        await dispatch(createProduct(payload)).unwrap();
      } else {
        await dispatch(updateProduct({ id, productData: payload })).unwrap();
      }
      navigate("/admin/products");
    } catch (error) {
      console.error("Failed to save product", error);
      alert(error?.message || "Failed to save product");
    }
  };
  return (
    <div className=" max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className=" text-3xl font-bold mb-2">
        {isCreateMode ? "Create Product" : "Edit Product"}
      </h2>
      <form onSubmit={handleSubmit}>
        {/**Name */}
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/**Description */}
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>
        {/**Price */}
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/**SKU */}
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Collection</label>
          <input
            type="text"
            name="collection"
            value={productData.collection}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Brand</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Material</label>
          <input
            type="text"
            name="material"
            value={productData.material}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Gender</label>
          <select
            name="gender"
            value={productData.gender}
            onChange={handleChange}
            className=" w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/**Sizes */}
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className=" w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/**Colors */}
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className=" w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/**Image upload */}
        <div className=" mb-6">
          <label className=" block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          <div className=" flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md "
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className=" w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors "
        >
          {loading
            ? isCreateMode
              ? "Creating..."
              : "Updating..."
            : isCreateMode
            ? "Create Product"
            : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;

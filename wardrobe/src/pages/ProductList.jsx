import React, { useState, useEffect, useRef } from "react";

const ProductList = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    size: "",
    image: null,
  });

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: URL.createObjectURL(e.target.files[0]) });
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.size && newProduct.image) {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      setNewProduct({ name: "", price: "", size: "", image: null }); // Reset the form
      // Clear the file input by resetting the ref value
      fileInputRef.current.value = ""; 
    }
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-10">
        <input
          type="text"
          name="name"
          placeholder="Məhsulun adı"
          value={newProduct.name}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />

        <input
          type="number"
          name="price"
          placeholder="Qiymət"
          value={newProduct.price}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          name="size"
          placeholder="Ölçü"
          value={newProduct.size}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
          ref={fileInputRef} // Attach the ref here
        />

        <button
          onClick={addProduct}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          MƏHSUL ƏLAVƏ ET
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div>
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
            </div>
            <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
            <p className="text-gray-500 mb-1">Qiymət: {product.price} AZN</p>
            <p className="text-gray-500 mb-1">Ölçü: {product.size}</p>
            <div><button
              onClick={() => deleteProduct(product.id)} // Call deleteProduct with the product's id
              className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition-colors flex justify-self-end"
            >
              Sil
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;






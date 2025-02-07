import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875247418-18.jpg",
    },
    {
      productId: 2,
      name: "shirt",
      size: "L",
      color: "Olive Green",
      quantity: 1,
      price: 250,
      image:
        "https://static.cilory.com/406638-thickbox_default/estonished-olive-shirt.jpg",
    },
    {
      productId: 3,
      name: "Jeans",
      size: "34",
      color: "Black",
      quantity: 1,
      price: 450,
      image:
        "https://www.rockstarjeans.com/cdn/shop/products/RDG0149_1.jpg?v=1673620030",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>₹ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;

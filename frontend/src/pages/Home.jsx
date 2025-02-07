import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 120,
    images: [
      {
        url: "https://muselot.in/cdn/shop/products/Plaintshirtsforwomenonline-Greyplaintshirtforwomen-Muselot_1.jpg?v=1657571397",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    images: [
      {
        url: "https://images.meesho.com/images/products/348858433/r5alq_512.webp",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 120,
    images: [
      {
        url: "https://static.cilory.com/406638-thickbox_default/estonished-olive-shirt.jpg",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 120,
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpH_zNx4WDZes9v4qlNKkIUYSJEepV7OWGg&s",
      },
    ],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 120,
    images: [
      {
        url: "https://muselot.in/cdn/shop/products/Plaintshirtsforwomenonline-Greyplaintshirtforwomen-Muselot_1.jpg?v=1657571397",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 120,
    images: [
      {
        url: "https://images.meesho.com/images/products/348858433/r5alq_512.webp",
      },
    ],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 120,
    images: [
      {
        url: "https://static.cilory.com/406638-thickbox_default/estonished-olive-shirt.jpg",
      },
    ],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 120,
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpH_zNx4WDZes9v4qlNKkIUYSJEepV7OWGg&s",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller*/}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears For Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;

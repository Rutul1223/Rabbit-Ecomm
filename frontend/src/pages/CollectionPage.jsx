import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = (e) => {
    // Close sidebar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // clean event Listner
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid Options */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;

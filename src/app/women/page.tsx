"use client";
import products from "../../data.json"; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/women.jpg";
import React, { useEffect, useState } from "react";
import LoadingScreen from '../../components/LoadingScreen';
import CategoryButtons from '../../components/CategoryButtons';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products?category=women"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.result);
        console.log("response", data.result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return  <LoadingScreen />
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-6 py-8 flex">
        <div className="w-1/6 pr-4">
        <CategoryButtons currentCategory="women" />
      </div>
      <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <Link
            key={product.id}
            href={`/women/${product.id}`}
            className="block border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingBottom: "100%",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover" // or "contain" based on your preference
                />
              </div>

              <h3 className="text-lg font-semibold my-2">{product.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 line-through">${product.cutPrice}</p>
                <p className="text-lg font-bold">${product.finalPrice}</p>
              </div>
              <p className="text-sm text-gray-700 mt-1">
                Seller: {product.sellerName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

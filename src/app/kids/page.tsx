import products from '../../data.json'; // Adjust the path as necessary
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../images/kids.jpg";

export default function Products() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product:any) => (
          <Link key={product.id} href={`/women/${product.id}`} className="block border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            
              <div className="p-4">
                <Image
                  src={logo}
                  alt={product.title}
                  width={300}
                  height={300}
                  objectFit="contain"
                />
                <h3 className="text-lg font-semibold my-2">{product.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 line-through">{product.cutPrice}</p>
                  <p className="text-lg font-bold">{product.finalPrice}</p>
                </div>
                <p className="text-sm text-gray-700 mt-1">Seller: {product.sellerName}</p>
              </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

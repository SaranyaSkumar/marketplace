import Image from "next/image";
import mainImage from "../images/main.jpg";
import logo from "../images/logo_marketplace.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Full-Page Image with Text */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center mt-auto pt-5">
              <Image src={logo} alt="Logo" width={130} height={130} />
            </div>
            <div className="flex mt-auto">
              <div className="-ml-2 mr-2 flex items-center ">
                {/* Navbar content here */}
                <Link className="text-lg font-semibold hover:text-gray-300" href='/'>
                  Home
                </Link>
                <a className="ml-6 text-lg font-semibold hover:text-gray-300" href='/women'>
                  Women
                </a>
                <a className="ml-6 text-lg font-semibold hover:text-gray-300" href='/men'>
                  Men
                </a>
                <a className="ml-6 text-lg font-semibold hover:text-gray-300" href='/kids'>
                  Kids
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative h-screen flex items-center justify-center">
    <Image
      src={mainImage}
      alt="Background"
      layout="fill"
      objectFit="cover"
      priority
      className="pointer-events-none"
    />
    <div className="absolute inset-0 flex items-center justify-start bg-black bg-opacity-20">
      <div className="pl-8 md:pl-16 lg:pl-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold  leading-none tracking-tighter">
          Discover style that <br></br>speaks to you
        </h1>
      </div>
    </div>
  </div>
  
      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 p-4 text-center">
        {/* Footer Content */}
        {/* ... */}
      </footer>
    </div>
  );
}

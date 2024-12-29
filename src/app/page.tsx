"use client"

import { ArrowRight, ShoppingCart, Calendar, MessageSquare  } from "lucide-react";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footerr";


const products = [
  {
    id: 1,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img1.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 2,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img2.jpg",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 3,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img3.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 4,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img4.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 5,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img5.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 6,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img6.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 7,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img7.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
  {
    id: 8,
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    image: "/Images/img8.png",
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  },
];
export default function Hero() {
  return (
    <>
    <div>
    <Navbar />
    </div>

    <section 
  className="relative min-h-[800px] w-full bg-cover bg-center bg-no-repeat bg-gradient-to-br from-cyan-400 to-cyan-600" 
  style={{ backgroundImage: "url('/Images/hero.jpg')" }}
>
  <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 md:flex-row md:justify-between md:px-8">
    {/* Left Content */}
    <div className="z-10 mb-12 w-full max-w-xl text-white md:mb-0">
      <p className="mb-4 animate-fade-in font-medium tracking-widest">
        SUMMER 2020
      </p>

      <h1 className="mb-6 animate-slide-up text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
        NEW COLLECTION
      </h1>

      <p className="mb-8 animate-fade-in text-lg opacity-90">
        We know how large objects will act, but things on a small scale.
      </p>

      <button
        className="group inline-flex items-center rounded-lg bg-white px-6 py-3 font-semibold text-cyan-600 transition-all hover:bg-opacity-90"
        aria-label="Shop Now"
      >
        SHOP NOW
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
</section>

      
    {/* Best seller products */}

    <section className="w-full bg-white px-4 py-8">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
      BESTSELLER PRODUCTS
    </h2>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative h-[400px] w-full overflow-hidden rounded-lg border border-gray-100 p-4 shadow-sm"
        >
          <div className="h-[250px] w-full flex items-center justify-center bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="mt-4 flex h-[110px] flex-col items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">{product.department}</p>
            <p className="text-sm font-medium text-gray-900">
              ${product.price}
            </p>

            <div className="flex justify-center gap-2">
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
    <section className="relative min-h-[500px] bg-gradient-to-br from-emerald-500 to-emerald-700 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <span className="inline-block text-sm tracking-wider font-medium">
              SUMMER 2020
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Vita Classic Product
            </h1>

            <p className="text-lg opacity-90 max-w-lg">
              Experience timeless elegance with our signature Vita Classic
              collection. Meticulously crafted for those who appreciate refined
              aesthetics and superior quality.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-3xl font-bold">$16.48</span>

              <button
                className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg 
                font-medium transition-transform hover:scale-105 active:scale-95"
                aria-label="Add to cart"
              >
                <ShoppingCart size={20} />
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/Images/image.jpg"
              alt="Product showcase"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent 
      pointer-events-none"
      />

      <div
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-white/10 rounded-full 
      blur-3xl"
      />

      <div
        className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-400/20 rounded-full 
      blur-3xl"
      />
    </section>

    <section className="container mx-auto px-4 py-12 md:py-24">
  <div className="flex flex-col md:flex-row items-center gap-12">
    <div className="w-full md:w-1/2">
      <img
        src="/Images/winter.jpg"
        alt="Lifestyle photography"
        className="w-full max-h-[500px] object-contain rounded-lg"
      />
    </div>

    <div className="w-full md:w-1/2 space-y-6">
      <span className="text-sm font-medium tracking-wider text-gray-500">
        SUMMER 2020
      </span>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        Part of the Neural Universe
      </h1>

      <p className="text-xl text-gray-600">
        We know how large objects will act, but things on a small scale.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          className="px-8 py-4 bg-green-600 text-white font-medium rounded-lg 
                     transition-colors duration-200 hover:bg-green-700
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Buy now"
        >
          BUY NOW
        </button>

        <button
          className="px-8 py-4 border border-green-300 text-green-800 font-medium rounded-lg
                     inline-flex items-center gap-2 transition-colors duration-200
                     hover:bg-gray-100 hover:border-gray-400
                     focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          aria-label="Read more"
        >
          READ MORE
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</section>


    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-sm text-sky-500 font-medium">
          Practice Advice
        </span>
        <h2 className="text-3xl font-bold mt-2">Featured Posts</h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src="/Images/fixed-height.jpg"
              alt="Featured post"
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="text-sky-500 text-sm">Google</span>
              <span className="text-gray-600 text-sm">Trending</span>
              <span className="text-gray-600 text-sm">New</span>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L'integral)
            </h3>

            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>22 April 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>10 comments</span>
              </div>
            </div>

            <button className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 group">
              Learn More
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src="/Images/car.jpg"
              alt="Featured post"
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="text-sky-500 text-sm">Google</span>
              <span className="text-gray-600 text-sm">Trending</span>
              <span className="text-gray-600 text-sm">New</span>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L'integral)
            </h3>

            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>22 April 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>10 comments</span>
              </div>
            </div>

            <button className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 group">
              Learn More
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src="/Images/umbrella.jpg"
              alt="Featured post"
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <span className="text-sky-500 text-sm">Google</span>
              <span className="text-gray-600 text-sm">Trending</span>
              <span className="text-gray-600 text-sm">New</span>
            </div>

            <h3 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L'integral)
            </h3>

            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>22 April 2021</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>10 comments</span>
              </div>
            </div>

            <button className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 group">
              Learn More
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
          <div>
            <Footer />
          </div>
    
      </>
  );
}


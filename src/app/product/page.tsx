"use client"

import {
    Menu,
    Search,
    User,
    ShoppingCart,
    Heart,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Instagram,
    X,
    LayoutGrid,
    List,
    ChevronDown,
  } from "lucide-react";
  import React, { useState } from "react";
import Footer from "../components/Footerr";
import Link from "next/link";
  export default function EcommerceNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <><header className="w-full">
            <div className="bg-emerald-600 text-white py-2 px-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <Phone size={14} className="mr-1" />
                            <span>(555) 555-0110</span>
                        </div>
                        <div className="flex items-center">
                            <Mail size={14} className="mr-1" />
                            <span>hello@example.com</span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <span className="mr-4">
                            Follow Us and get a chance to win 80% off
                        </span>
                        <div className="flex space-x-3">
                            <Facebook size={14} className="cursor-pointer hover:opacity-80" />
                            <Twitter size={14} className="cursor-pointer hover:opacity-80" />
                            <Instagram
                                size={14}
                                className="cursor-pointer hover:opacity-80" />
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bg-white shadow-sm">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <div className="flex-shrink-0 font-bold text-xl">Bandage</div>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <Link href="/shop" className="hover:text-emerald-600 transition-colors">
          Shop
        </Link>
        <Link href="/about" className="hover:text-emerald-600 transition-colors">
          About
        </Link>
        <Link href="/blog" className="hover:text-emerald-600 transition-colors">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-emerald-600 transition-colors">
          Contact
        </Link>
        <Link href="/pages" className="hover:text-emerald-600 transition-colors">
          Pages
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <div className="flex items-center text-emerald-600">
          <User size={20} className="mr-2" />
          <span>Login / Register</span>
        </div>
        <Search
          size={20}
          className="text-gray-600 hover:text-emerald-600 cursor-pointer"
        />
        <div className="flex items-center">
          <ShoppingCart
            size={20}
            className="text-gray-600 hover:text-emerald-600 cursor-pointer"
          />
          <span className="ml-1 text-xs">1</span>
        </div>
        <div className="flex items-center">
          <Heart
            size={20}
            className="text-gray-600 hover:text-emerald-600 cursor-pointer"
          />
          <span className="ml-1 text-xs">1</span>
        </div>
      </div>

      <button
        className="md:hidden rounded-md p-2 hover:bg-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>
    </div>

    {isMenuOpen && (
      <div className="md:hidden py-4">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-emerald-600 transition-colors">
            Shop
          </Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">
            Contact
          </Link>
          <Link href="/pages" className="hover:text-emerald-600 transition-colors">
            Pages
          </Link>
        </div>
      </div>
    )}
  </div>
</nav>


            <section className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Shop</h2>
                    <div className="flex items-center text-sm">
                        <span className="text-gray-600">Home</span>
                        <X size={14} className="mx-2 text-gray-400" />
                        <span>Shop</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        {
                            image: "/Images/clothes1.png",
                        },
                        {
                            image: "/Images/clothes2.png",
                        },
                        {
                            image: "/Images/clothes3.png",
                        },
                        {
                            image: "/Images/clothes4.png",
                        },
                        {
                            image: "/Images/clothes5.png",
                        },
                    ].map((category, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg cursor-pointer"
                        >
                            <img
                                src={category.image}
                                className="w-full h-[360px] object-cover transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-6 border-t">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-gray-600">Showing all 12 results</div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">Views:</span>
                            <button
                                className="p-2 hover:bg-gray-100 rounded-md"
                                aria-label="Grid view"
                            >
                                <LayoutGrid size={20} className="text-emerald-600" />
                            </button>
                            <button
                                className="p-2 hover:bg-gray-100 rounded-md"
                                aria-label="List view"
                            >
                                <List size={20} className="text-gray-400" />
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-md py-2 pl-4 pr-10 text-gray-600 cursor-pointer focus:outline-none focus:border-emerald-600">
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Latest</option>
                                </select>
                                <ChevronDown
                                    size={16}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>

                            <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 border-t">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
                    {[
                        { name: "Hooli", logo: "/Images/hooli.jpg" },
                        { name: "Lyft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png" },
                        { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo.svg.png" },
                        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
                        { name: "Reddit", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Reddit_logo.svg/2560px-Reddit_logo.svg.png" },
                        { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" },
                    ].map((company) => (
                        <div
                            key={company.name}
                            className="w-24 h-12 relative flex items-center justify-center"
                        >
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-200" />
                        </div>
                    ))}
                </div>
            </section>
            <section className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
            "products1.png", "products2.png", "products3.png", "products4.png",
            "products5.png", "products6.png", "products7.png", "products8.png"
        ].map((image, index) => (
            <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                        src={`/image/${image}`}  // Adjust this path based on your project structure
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-4">
                    <div className="text-gray-500 text-sm">Graphic Design</div>
                    <h3 className="font-semibold mt-1">English Department</h3>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="text-gray-400 line-through">$16.48</span>
                        <span className="text-emerald-600 font-semibold">$6.48</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                        {[
                            "bg-blue-500",
                            "bg-green-500",
                            "bg-orange-500",
                            "bg-black",
                        ].map((color, i) => (
                            <div
                                key={i}
                                className={`w-4 h-4 rounded-full ${color} cursor-pointer hover:ring-2 ring-offset-2 ring-gray-300`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>

    <div className="flex justify-center items-center gap-2 mt-12">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            First
        </button>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md">
            1
        </button>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            2
        </button>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            3
        </button>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            Next
        </button>
    </div>
</section>


        </header>
        <Footer /></>
    );
  }

  
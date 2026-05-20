"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm shadow">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Desktop + Mobile Top */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold text-sky-500"
            >
              Wanderlast
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            
            {/* Left Menu */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="text-sky-500 border-b-2 border-sky-500 pb-1"
              >
                Home
              </Link>

              <Link
                href="/destinations"
                className="hover:text-sky-500 transition"
              >
                Destinations
              </Link>

              <Link
                href="/bookings"
                className="hover:text-sky-500 transition"
              >
                My Bookings
              </Link>

              <Link
                href="/admin"
                className="hover:text-sky-500 transition"
              >
                Admin
              </Link>
              <Link
                href="/addDestination"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Add Destination
              </Link>
            </div>

            {/* Right Menu */}
            <div className="flex items-center gap-5 text-sm font-medium">
              <Link
                href="/profile"
                className="hover:text-sky-500 transition"
              >
                Profile
              </Link>

              <Link
                href="/login"
                className="hover:text-sky-500 transition"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="hover:text-sky-500 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-5">
            <div className="flex flex-col gap-4 text-sm font-medium">

              <Link
                href="/"
                className="text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/destinations"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </Link>

              <Link
                href="/bookings"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                My Bookings
              </Link>

              <Link
                href="/admin"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
              <Link
                href="/addDestination"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Add Destination
              </Link>

              <hr />

              <Link
                href="/profile"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>

              <Link
                href="/login"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="hover:text-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
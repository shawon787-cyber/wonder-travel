"use client";

import React, { useEffect, useState } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import {
    FaMapMarkerAlt,
    FaClock,
    FaCalendarAlt,
    FaDollarSign,
    FaTag,
} from "react-icons/fa";
import Link from "next/link";

const Destinations = () => {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/destinations")
            .then((res) => res.json())
            .then((data) => setDestinations(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Destinations</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {destinations.map((destination) => (
                <div
                    key={destination._id}
                    className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group'
                >
                    <div className='overflow-hidden'>
                        <img
                            src={destination.imageUrl}
                            alt={destination.destinationName}
                            className='w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>

                    <div className='p-5'>
                        <h2 className='text-2xl font-bold text-sky-600 mb-4'>
                            {destination.destinationName}
                        </h2>

                        <div className='mb-5 text-gray-700 flex flex-wrap gap-4'>

                            <p className='flex items-center gap-2'>
                                <FaMapMarkerAlt className='' />
                                {destination.country}
                            </p>

                            <p className='flex items-center gap-2'>
                                <FaTag className='' />
                                {destination.category}
                            </p>

                            <p className='flex items-center gap-2'>
                                <FaClock className='' />
                                {destination.duration}
                            </p>

                            <p className='flex items-center gap-2'>
                                <FaCalendarAlt className='' />
                                {destination.departureDate}
                            </p>

                            
                        </div>
                        <p className='flex items-center gap-2 text-xl font-bold'>
                                <FaDollarSign className='' />
                                ${destination.price}
                            </p>
                        <p className='mt-4 text-gray-500 text-sm'>
                            {destination.description}
                        </p>
                        <Link href={`/destinations/${destination._id}`}>
                        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 w-full mt-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                            View Details <TiLocationArrowOutline />
                        </button>
                        </Link>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>
    );
};

export default Destinations;
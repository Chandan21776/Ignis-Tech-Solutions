#
React Frontend Setup

# First, create a new React app with Tailwind CSS: #npx create - react - app airbnb - clone - frontend# cd airbnb - clone - frontend# npm install axios react - router - dom @heroicons / react tailwindcss postcss autoprefixer# npx tailwindcss init - p

# Project structure: #src / #├──components / #│├──Header.js#│├── Footer.js#│├── ListingCard.js#│├── SearchForm.js#│├── ListingDetails.js#│└── Amenities.js#├── pages / #│├──SearchResults.js#│└── ListingPage.js#├── App.js#├── index.js#└── index.css

// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'airbnb-red': '#FF5A5F',
                'airbnb-pink': '#FF385C',
            },
        },
    },
    plugins: [],
}

// src/index.css
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.listing-card:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform: scale(1.01);
  transition: all 0.2s ease-in-out;
}
*/

// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

function Header({ onSearch }) {
    const [showSearch, setShowSearch] = useState(false);

    return ( <
        header className = "sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10" > { /* Left - Logo */ } <
        div className = "relative flex items-center h-10 cursor-pointer my-auto" >
        <
        Link to = "/" >
        <
        div className = "flex items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-10 text-airbnb-pink"
        viewBox = "0 0 24 24"
        fill = "currentColor" >
        <
        path d = "M12 2.5C14.5 2.5 16.5 4.5 16.5 7C16.5 9 14.5 11 12 13.5C9.5 11 7.5 9 7.5 7C7.5 4.5 9.5 2.5 12 2.5ZM12 0C8.5 0 5.5 3 5.5 7C5.5 11 12 18 12 18C12 18 18.5 11 18.5 7C18.5 3 15.5 0 12 0Z" / >
        <
        /svg> <
        span className = "text-airbnb-pink font-bold text-xl ml-2" > airbnb < /span> <
        /div> <
        /Link> <
        /div>

        { /* Middle - Search */ } <
        div className = "flex items-center justify-center" >
        <
        div onClick = {
            () => setShowSearch(!showSearch) }
        className = "flex items-center border-2 rounded-full py-2 px-4 shadow-sm hover:shadow-md cursor-pointer" >
        <
        input type = "text"
        placeholder = "Start your search"
        className = "outline-none bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400"
        readOnly /
        >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-8 w-8 bg-airbnb-red text-white rounded-full p-2 ml-2"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        strokeWidth = "2" >
        <
        circle cx = "11"
        cy = "11"
        r = "8" > < /circle> <
        line x1 = "21"
        y1 = "21"
        x2 = "16.65"
        y2 = "16.65" > < /line> <
        /svg> <
        /div> <
        /div>

        { /* Right - User */ } <
        div className = "flex items-center justify-end space-x-4" >
        <
        div className = "flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-6 w-6"
        fill = "none"
        viewBox = "0 0 24 24"
        stroke = "currentColor" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "2"
        d = "M4 6h16M4 12h16M4 18h16" / >
        <
        /svg> <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-6 w-6"
        fill = "none"
        viewBox = "0 0 24 24"
        stroke = "currentColor" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "2"
        d = "M12 2C14.5 2 16.5 4 16.5 6.5C16.5 9 14.5 11 12 11C9.5 11 7.5 9 7.5 6.5C7.5 4 9.5 2 12 2ZM12 17C15.5 17 19.5 18.5 20 20H4C4.5 18.5 8.5 17 12 17Z" /
        >
        <
        /svg> <
        /div> <
        /div>

        { /* Search Modal */ } {
            showSearch && ( <
                div className = "absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white p-5 rounded-xl shadow-xl z-50" >
                <
                SearchForm onSearch = { onSearch }
                onClose = {
                    () => setShowSearch(false) }
                /> <
                /div>
            )
        } <
        /header>
    );
}

export default Header;

// src/components/Footer.js
import React from 'react';

function Footer() {
    return ( <
        footer className = "bg-gray-100 py-14 border-t border-gray-200" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        div className = "grid grid-cols-1 md:grid-cols-4 gap-8" >
        <
        div >
        <
        h5 className = "text-sm font-bold text-gray-800 mb-4" > ABOUT < /h5> <
        ul className = "space-y-2" >
        <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > How Airbnb works < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Newsroom < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Investors < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Careers < /li> <
        /ul> <
        /div> <
        div >
        <
        h5 className = "text-sm font-bold text-gray-800 mb-4" > COMMUNITY < /h5> <
        ul className = "space-y-2" >
        <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Diversity & Belonging < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Accessibility < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Airbnb Associates < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Host Afghan refugees < /li> <
        /ul> <
        /div> <
        div >
        <
        h5 className = "text-sm font-bold text-gray-800 mb-4" > HOST < /h5> <
        ul className = "space-y-2" >
        <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Host your home < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Host an experience < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Responsible hosting < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Resource Center < /li> <
        /ul> <
        /div> <
        div >
        <
        h5 className = "text-sm font-bold text-gray-800 mb-4" > SUPPORT < /h5> <
        ul className = "space-y-2" >
        <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Help Center < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Safety information < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Cancellation options < /li> <
        li className = "text-sm text-gray-600 hover:underline cursor-pointer" > Our COVID - 19 Response < /li> <
        /ul> <
        /div> <
        /div> <
        div className = "border-t border-gray-200 mt-8 pt-8 flex justify-between" >
        <
        div className = "text-sm text-gray-600" > ©2025 Airbnb Clone, Inc. <
        /div> <
        div className = "flex space-x-6" >
        <
        span className = "text-sm text-gray-600 hover:underline cursor-pointer" > Privacy < /span> <
        span className = "text-sm text-gray-600 hover:underline cursor-pointer" > Terms < /span> <
        span className = "text-sm text-gray-600 hover:underline cursor-pointer" > Sitemap < /span> <
        /div> <
        /div> <
        /div> <
        /footer>
    );
}

export default Footer;

// src/components/SearchForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm({ onSearch, onClose }) {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minRating, setMinRating] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const searchParams = {
            location,
            check_in: checkIn,
            check_out: checkOut,
            guests,
            min_price: minPrice || undefined,
            max_price: maxPrice || undefined,
            min_rating: minRating || undefined
        };

        // Call the onSearch prop function with search parameters
        if (onSearch) {
            onSearch(searchParams);
        }

        // Build query string
        const queryString = new URLSearchParams();
        Object.entries(searchParams).forEach(([key, value]) => {
            if (value) queryString.append(key, value);
        });

        // Redirect to search results page with query parameters
        navigate(`/search?${queryString.toString()}`);

        // Close the search form if a close function was provided
        if (onClose) {
            onClose();
        }
    };

    return ( <
        form onSubmit = { handleSubmit }
        className = "p-5" >
        <
        div className = "grid grid-cols-1 md:grid-cols-4 gap-4" >
        <
        div className = "col-span-4 md:col-span-1" >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1" > Location < /label> <
        input type = "text"
        value = { location }
        onChange = {
            (e) => setLocation(e.target.value) }
        placeholder = "Where are you going?"
        className = "w-full p-2 border border-gray-300 rounded-md focus:ring-airbnb-red focus:border-airbnb-red"
        required /
        >
        <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1" > Check - in < /label> <
        input type = "date"
        value = { checkIn }
        onChange = {
            (e) => setCheckIn(e.target.value) }
        className = "w-full p-2 border border-gray-300 rounded-md focus:ring-airbnb-red focus:border-airbnb-red" /
        >
        <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1" > Check - out < /label> <
        input type = "date"
        value = { checkOut }
        onChange = {
            (e) => setCheckOut(e.target.value) }
        className = "w-full p-2 border border-gray-300 rounded-md focus:ring-airbnb-red focus:border-airbnb-red" /
        >
        <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1" > Guests < /label> <
        input type = "number"
        value = { guests }
        onChange = {
            (e) => setGuests(Math.max(1, parseInt(e.target.value))) }
        min = "1"
        className = "w-full p-2 border border-gray-300 rounded-md focus:ring-airbnb-red focus:border-airbnb-red" /
        >
        <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1" > Min Price($) < /label> <
        input type = "number"
        value = { minPrice }
        onChange = {
            (e) => setMinPrice(e.target.value) }
        min = "0"
        className = "w-full p-2 border border-gray-300 rounded-md focus:ring-airbnb-red focus:border-airbnb-red" /
        >
        <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1" > Max Price($) < /label> <
        input type = "number"
        value = { maxPrice }
        onChange = {
            (e) => setMaxPrice(e.target.value) }
        min = "0"
        className = "w-full p-2 border border-gray-300 rounded-md focus:ring-airbnb-red focus:border-airbnb-red" /
        >
        <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-gray-700 mb-1" > Min Rating < /label> <
        input type = "number"
        value = { minRating }
        onChange = {
            (e) => setMinRating(e.target.value) }
        min = "0"
        max = "5"
        step = "0.1"
        className = "w-full p-2 border border-gray-300 rounded-md focus:ring-airbnb-red focus:border-airbnb-red" /
        >
        <
        /div>

        <
        div className = "col-span-4 flex justify-center" >
        <
        button type = "submit"
        className = "bg-airbnb-red hover:bg-red-500 text-white font-bold py-2 px-8 rounded-full transition duration-150 ease-in-out" >
        Search <
        /button> <
        /div> <
        /div> <
        /form>
    );
}

export default SearchForm;

// src/components/ListingCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ListingCard({ listing }) {
    return ( <
        Link to = { `/listing/${listing.id}` }
        className = "listing-card block rounded-xl overflow-hidden transition duration-300" >
        <
        div className = "relative h-60" >
        <
        img src = { listing.main_image || "https://via.placeholder.com/800x600.png?text=Airbnb+Listing" }
        alt = { listing.title }
        className = "object-cover w-full h-full" /
        >
        <
        /div>

        <
        div className = "p-4" >
        <
        div className = "flex justify-between items-start" >
        <
        h3 className = "text-lg font-semibold truncate" > { listing.title } < /h3> <
        div className = "flex items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        className = "h-4 w-4 text-airbnb-pink"
        viewBox = "0 0 20 20"
        fill = "currentColor" >
        <
        path d = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /
        >
        <
        /svg> <
        span className = "ml-1 text-sm" > { listing.ratings ? .toFixed(1) || "New" } < /span> <
        /div> <
        /div>

        <
        p className = "text-gray-500 text-sm mt-1" > { listing.location } < /p>

        <
        div className = "mt-4" >
        <
        p className = "text-lg font-semibold" >
        $ { listing.price_per_night } { " " } <
        span className = "text-sm font-normal text-gray-500" > night < /span> <
        /p> <
        /div> <
        /div> <
        /Link>
    );
}

export default ListingCard;

// src/components/Amenities.js
import React from 'react';

function Amenities({ amenities }) {
    if (!amenities || amenities.length === 0) return null;

    return ( <
        div className = "mt-8" >
        <
        h2 className = "text-xl font-semibold mb-4" > What this place offers < /h2> <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8" > {
            amenities.map((amenity, index) => ( <
                div key = { index }
                className = "flex items-center" >
                <
                svg xmlns = "http://www.w3.org/2000/svg"
                className = "h-5 w-5 mr-3 text-gray-600"
                fill = "none"
                viewBox = "0 0 24 24"
                stroke = "currentColor" >
                <
                path strokeLinecap = "round"
                strokeLinejoin = "round"
                strokeWidth = "2"
                d = "M5 13l4 4L19 7" / >
                <
                /svg> <
                span className = "text-gray-800" > { amenity } < /span> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
}

export default Amenities;

// src/components/ListingDetails.js
import React from 'react';
import Amenities from './Amenities';

function ListingDetails({ listing }) {
    if (!listing) return <div className = "text-center py-10" > Loading... < /div>;

    return ( <
            div className = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" >
            <
            h1 className = "text-3xl font-bold text-gray-900" > { listing.title } < /h1>

            <
            div className = "flex justify-between items-center mt-2" >
            <
            div className = "flex items-center" >
            <
            svg xmlns = "http://www.w3.org/2000/svg"
            className = "h-4 w-4 text-airbnb-pink"
            viewBox = "0 0 20 20"
            fill = "currentColor" >
            <
            path d = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /
            >
            <
            /svg> <
            span className = "ml-1 text-sm" > { listing.ratings ? .toFixed(1) || "New" }· { listing.number_of_reviews }
            reviews <
            /span> <
            /div> <
            div className = "text-sm text-gray-600" > { listing.location } < /div> <
            /div>

            { /* Gallery */ } <
            div className = "mt-6 relative" >
            <
            div className = "grid grid-cols-1 md:grid-cols-4 gap-2 rounded-xl overflow
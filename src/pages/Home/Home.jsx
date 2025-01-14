import React from 'react'
import { Link } from 'react-router-dom';

// export default function Home() {
//     return (
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-20">
//                 <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
//         </div>
//     );
// }


const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://your-image-url.com')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center py-20">
          <h1 className="text-6xl font-bold">MadGear Gaming Cafe</h1>
          <p className="mt-4 text-xl">Level Up Your Gaming Experience</p>
          <div className="mt-6">
            <a href="#booking" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">Book a Slot</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg">Experience the best gaming setups, food, and community.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Game Library</h3>
              <p className="mt-2">Access a wide variety of games from the latest releases to all-time classics.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">High-End Equipment</h3>
              <p className="mt-2">Enjoy top-notch gaming PCs, consoles, and VR setups for the ultimate experience.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Food & Beverages</h3>
              <p className="mt-2">Enjoy snacks, drinks, and meals while gaming with friends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Upcoming Events</h2>
          <p className="mt-4 text-lg">Join us for tournaments, competitions, and more!</p>
          <div className="mt-8">
            <div className="bg-blue-600 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold">Monthly Tournament</h3>
              <p className="mt-2">Get ready to compete! Join our monthly gaming tournament and win exciting prizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-800 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white">Book Your Gaming Slot</h2>
          <p className="mt-4 text-lg text-gray-300">Reserve your spot and start gaming!</p>
          <a href="#" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">Book Now</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg">Have any questions? Get in touch with us!</p>
          <div className="mt-6">
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: contact@madgear.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-white">
        <p>&copy; 2025 MadGear Gaming Cafe. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

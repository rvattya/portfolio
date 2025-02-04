import React from 'react'

const Contact = () => {
  return (
   <>

   <section id='contact' className=' '> 
   <div className="bg-gray-800 text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-500 text-2xl mr-4">📍</span>
              <p>Near Canara Bank Biaora Rajgarh MP(465674)</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 text-2xl mr-4">📞</span>
              <p>+91 93406 10359 | +91 7566470980</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 text-2xl mr-4">📧</span>
              <p>rahuljatav4578@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Contact Number</label>
              <input
                type="tel"
                className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                placeholder="000 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Type your Message</label>
              <textarea
                className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default Contact
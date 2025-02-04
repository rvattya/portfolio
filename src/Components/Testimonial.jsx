import React from 'react'

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Innovators",
      feedback:
        "Working with this team was a game-changer for our business. Their expertise in digital marketing helped us achieve amazing results in a short time!",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      name: "Sarah Smith",
      role: "Founder, Green Solutions",
      feedback:
        "Their attention to detail and commitment to delivering top-quality work exceeded our expectations. Highly recommend their services!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Michael Brown",
      role: "Manager, Real Estate Co.",
      feedback:
        "The web application they built for us transformed the way we manage our clients. The user-friendly interface is exactly what we needed!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Emma Wilson",
      role: "Owner, Fashion World",
      feedback:
        "Our e-commerce website turned out fantastic, thanks to their creativity and technical skills. It has boosted our online sales significantly!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "David Johnson",
      role: "Marketing Head, Bright Ideas",
      feedback:
        "Their digital marketing strategies are unparalleled. Our campaigns have seen a massive increase in engagement and conversions!",
      image: "https://via.placeholder.com/100",
    },
  ];
  return (
   <>
    
   <section id='testimonial' className='py-10 px-6 md:px-20'>
   <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border hover:shadow-xl transition"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-gray-600 mt-4 text-center">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
   </section>
   </>
  )
}

export default Testimonial
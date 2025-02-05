import React from "react";
import Carousel from "better-react-carousel";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Innovators",
      feedback:
        "Working with this team was a game-changer for our business. Their expertise in digital marketing helped us achieve amazing results in a short time!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sarah Smith",
      role: "Founder, Green Solutions",
      feedback:
        "Their attention to detail and commitment to delivering top-quality work exceeded our expectations. Highly recommend their services provide best solution!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Michael Brown",
      role: "Manager, Real Estate Co.",
      feedback:
        "The web application they built for us transformed the way we manage our clients. The user-friendly interface is exactly what we needed good in understand market! ",
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
    <section id="testimonial" className=" bg-gradient-to-b from-[#6665E7] via-cyan-500 to-blue-800 py-10 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">Testimonials</h2>
        <Carousel cols={3} rows={1} gap={10} loop>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="bg-gradient-to-b from-purple-700 via-cyan-400 to-blue-800 text-white shadow-lg rounded-lg p-6 flex flex-col items-center border hover:shadow-xl transition">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <h3 className="text-lg font-bold text-white ">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-white">{testimonial.role}</p>
                <p className="text-white mt-4 text-center">
                  {testimonial.feedback}
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;

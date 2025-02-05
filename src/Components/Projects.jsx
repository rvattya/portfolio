import React from 'react'
import Carousel from "better-react-carousel";

const Projects = () => {
  const projects = [
    {
        title: "Meta Ads & Google Ads Campaign Management",
        description: "Successfully managed ad budgets of ₹40,000/month for Meta Ads and ₹1,00,000/month for Google Ads, optimizing ROI and audience engagement.",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "MERN Stack CRM Development (On-Working)",
        description: "Built a customer relationship management (CRM) system using MERN stack, integrating social media and WhatsApp APIs for seamless communication.",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "Real Estate Multi-Vendor Platform (On-Working)",
        description: "Developed a real estate listing platform where vendors can list properties, and buyers can filter & contact sellers easily.",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "E-commerce WordPress Website (On-Working)",
        description: "Designed and developed a WooCommerce-based e-commerce platform with secure payment gateways and user-friendly UI.",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "E-learning Platform",
        description: "Designed a custom WordPress website with LMS integration.",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "Social Media Marketing & SEO Strategies",
        description: "Managed SEO and social media campaigns for businesses, leading to increased website traffic and customer engagement.",
        image: "https://via.placeholder.com/300",
    },
    {
        title: "Ride-Booking App Marketing Campaign",
        description: "Created and executed a digital marketing plan for an Ola/Uber-like ride-booking app in Bhopal, optimizing brand visibility within a ₹4 lakh budget.",
        image: "https://via.placeholder.com/300",
    }
];


  return (
    <>
      <section id='projects' className='bg-gradient-to-b from-blue-950 via-cyan-500 to-[#060648] py-10 px-6 md:px-20'>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-8">Projects</h2>
          
          {/* Correct Carousel Structure */}
          <Carousel cols={3} rows={1} gap={10} loop>
            {projects.map((project, index) => (
              <Carousel.Item key={index}> 
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          
        </div>
      </section>
    </>
  );
};

export default Projects;

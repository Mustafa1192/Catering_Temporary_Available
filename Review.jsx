import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Farsi",
    username: "TheRealAhmed",
    quote: "لقد جعلوا احتفالنا خاصًا جدًا. الطعام كان لذيذًا والخدمة احترافية للغاية.",
    image: "https://i.pinimg.com/736x/a3/c9/c0/a3c9c01b2aea6857519af976fe55b66e.jpg",
  },
  {
    id: 2,
    name: "Khalid Al Nuaimi",
    username: "@Khalid_AlNuaimi",
    quote: "The food was excellent and every detail was carefully considered. Great service, I will recommend it to everyone",
    image: "https://i.pinimg.com/736x/5b/be/90/5bbe909df140388a27298ebd2692be0d.jpg",
  },
  {
    id: 3,
    name: "Mariam Al Saadi",
    username: "Mariam_Grace",
    quote: "خدمة الطعام ممتازة، كل شيء كان لذيذًا ومنظمًا بشكل رائع. أنصح بها بشدة",
    image: "https://i.pinimg.com/736x/be/fb/45/befb45ee93d9d4478f182e13d64810e3.jpg",
  },
  {
    id: 4,
    name: "Fatima Al Harbi",
    username: "AlHarbi_Flame",
    quote: "Thank you for the wonderful catering service. Everyone loved the food, and I’m sure we’ll order again",
    image: "https://i.pinimg.com/736x/28/00/9f/28009fe75134f540e8f63f33e3e79303.jpg",
  },
];

const TestimonialSection = () => {
  const containerRef = React.useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-white py-16 px-4">
      <h3 className="text-sm font-medium text-gray-500 text-center mb-2">
        Testimonial
      </h3>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Client Stories of Delicious Moments
      </h2>
      <div className="relative flex justify-center">
        <div
          className="review_box flex gap-8 overflow-x-auto no-scrollbar"
          ref={containerRef}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="each bg-gray-100 p-6 rounded-lg shadow-md shadow-2xl max-w-sm w-80 h-96 flex flex-col justify-between"
            >
              <blockquote className="para text-gray-800 text-lg font-medium mb-6">
                <span className="block text-8xl text-gray-400 leading-none">“</span>
                {testimonial.quote}
              </blockquote>
              <div className="profile flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="username text-sm font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="username text-xs text-gray-500">
                    {testimonial.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons for responsive navigation */}
        <button
          className="arrow-left hidden absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md"
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>
        <button
          className="arrow-right hidden absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md"
          onClick={scrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;

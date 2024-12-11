import React from "react";

function Eventpg() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
        {/* Header */}
        <section
          className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url('https://i.pinimg.com/736x/93/cb/fc/93cbfc40b65aad51972857bd058855f1.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-4">
              Experience the Magic of Unforgettable Moments.
            </h2>
            <p className="text-xl">
              From grand gatherings to intimate celebrations, we transform every
              occasion into something truly special. <br />
              Experience the perfect blend of elegance, entertainment, and
              unforgettable memories.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="flex justify-center items-center w-5/6 mx-auto mt-16 mb-16">
          <img
            className="hidden md:block w-full h-96 md:h-[400px] lg:h-[500px] rounded-lg shadow-lg object-cover"
            src="https://i.pinimg.com/736x/77/b3/b6/77b3b630e7ad7d85c1cfd304b055d72b.jpg"
            alt="Celebration Image"
          />
        </section>

        {/* Events Section */}
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <h2 className="text-center text-3xl font-bold mb-8">
            Featured Catering Events
          </h2>

          {/* Event 1 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg"
                alt="Elegant Wedding Catering"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Elegant Wedding Catering
                </h3>
                <p className="text-base text-gray-600 mt-1">
                  Our wedding catering service offers a sophisticated touch to your special day. From gourmet appetizers to elegant main courses, we create custom menus to suit every taste. Let us take care of the details while you enjoy your celebration with family and friends.
                </p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg"
                alt="Corporate Luncheons"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Corporate Luncheons
                </h3>
                <p className="text-base text-gray-600 mt-1">
                  Impress your clients and colleagues with a professional and delicious corporate luncheon experience. We offer a variety of menus tailored to your business needs, from light bites to full meals. Perfect for meetings, presentations, or corporate events.
                </p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg"
                alt="Gala Dinner Service"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Gala Dinner Service
                </h3>
                <p className="text-base text-gray-600 mt-1">
                  Elevate your event with a luxurious gala dinner service that includes a selection of exquisite dishes and impeccable presentation. Whether it’s a charity event, awards ceremony, or celebration, we ensure a memorable dining experience that reflects your event's elegance.
                </p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventpg;













// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// function Eventpg() {
//   return (
//     <div>
//       <div className="bg-gray-100 min-h-screen" id="ExploreMoment">
//         {/* Header */}
//         <section
//           className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
//           style={{
//             backgroundImage: `url('https://i.pinimg.com/736x/93/cb/fc/93cbfc40b65aad51972857bd058855f1.jpg')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="relative text-center text-white px-4">
//             <h2 className="text-4xl font-bold mb-4">
//               Experience the Magic of Unforgettable Moments.
//             </h2>
//             <p className="text-xl">
//               From grand gatherings to intimate celebrations, we transform every
//               occasion into something truly special. <br />
//               Experience the perfect blend of elegance, entertainment, and
//               unforgettable memories.
//             </p>
//           </div>
//         </section>

//         {/* Image Section */}
//         <section className="flex justify-center items-center w-5/6 mx-auto mt-16 mb-16">
//           <img
//             className="hidden md:block w-full h-96 md:h-[400px] lg:h-[500px] rounded-lg shadow-lg object-cover"
//             src="https://i.pinimg.com/736x/77/b3/b6/77b3b630e7ad7d85c1cfd304b055d72b.jpg"
//             alt="Celebration Image"
//           />
//         </section>

//         {/* Events Section */}
//         <div className="max-w-7xl mx-auto mt-6 px-4">
//           <h2 className="text-center text-3xl font-bold mb-8">
//             Featured Catering Events
//           </h2>

//           {/* Event 1 */}
//           <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4 mb-8">
//             {/* Event Image */}
//             <div className="w-full md:w-1/3 mb-4 md:mb-0">
//               <img
//                 src="https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg"
//                 alt="Elegant Wedding Catering"
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>
//             {/* Event Text */}
//             <div className="flex flex-col justify-between w-full md:ml-6">
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Elegant Wedding Catering
//                 </h3>
//                 <p className="text-base text-gray-600 mt-1">
//                   Our wedding catering service offers a sophisticated touch to your special day. From gourmet appetizers to elegant main courses, we create custom menus to suit every taste. Let us take care of the details while you enjoy your celebration with family and friends.
//                 </p>
//               </div>
//               <Link to="/event/1">
//                 <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Event 2 */}
//           <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4 mb-8">
//             {/* Event Image */}
//             <div className="w-full md:w-1/3 mb-4 md:mb-0">
//               <img
//                 src="https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg"
//                 alt="Corporate Luncheons"
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>
//             {/* Event Text */}
//             <div className="flex flex-col justify-between w-full md:ml-6">
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Corporate Luncheons
//                 </h3>
//                 <p className="text-base text-gray-600 mt-1">
//                   Impress your clients and colleagues with a professional and delicious corporate luncheon experience. We offer a variety of menus tailored to your business needs, from light bites to full meals. Perfect for meetings, presentations, or corporate events.
//                 </p>
//               </div>
//               <Link to="/event/2">
//                 <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Event 3 */}
//           <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-4 mb-8">
//             {/* Event Image */}
//             <div className="w-full md:w-1/3 mb-4 md:mb-0">
//               <img
//                 src="https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg"
//                 alt="Gala Dinner Service"
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>
//             {/* Event Text */}
//             <div className="flex flex-col justify-between w-full md:ml-6">
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Gala Dinner Service
//                 </h3>
//                 <p className="text-base text-gray-600 mt-1">
//                   Elevate your event with a luxurious gala dinner service that includes a selection of exquisite dishes and impeccable presentation. Whether it’s a charity event, awards ceremony, or celebration, we ensure a memorable dining experience that reflects your event's elegance.
//                 </p>
//               </div>
//               <Link to="/event/3">
//                 <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Eventpg;

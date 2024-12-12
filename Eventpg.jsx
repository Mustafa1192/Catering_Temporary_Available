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
            <h2 className="text-4xl font-bold mb-4 sm:text-3xl text-center">
              Experience the Magic of Unforgettable Moments.
            </h2>
            <p className="text-xl sm:text-lg">
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
            src="https://i.pinimg.com/736x/11/19/02/111902f0ee420cd85d5b305ef279173d.jpg"
            alt="Celebration Image"
          />
        </section>

        {/* Events Section */}
        <div className="max-w-7xl mx-auto mt-6 px-4">
          <h2 className="text-center text-3xl font-bold mb-8 sm:text-2xl">
            Featured Catering Events
          </h2>

          {/* Event 1 */}
          <div className="flex flex-col md:flex-row items-start rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/736x/47/dc/4c/47dc4c01772834bf935754563692ab83.jpg"
                alt="Elegant Wedding Catering"
                className="w-full h-48 rounded-lg object-cove"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Elegant Wedding Catering
                </h3>
                <p className="text-base text-gray-600 mt-1">
                  Our wedding catering service offers a sophisticated touch to
                  your special day. From gourmet appetizers to elegant main
                  courses, we create custom menus to suit every taste. Let us
                  take care of the details while you enjoy your celebration with
                  family and friends.
                </p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
              Savor the Experience
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex flex-col md:flex-row items-start rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/736x/44/81/e4/4481e418327fce6c08836aa105d64634.jpg"
                alt="Corporate Luncheons"
                className="w-full h-48 rounded-lg object-cove"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Corporate Luncheons
                </h3>
                <p className="text-base text-gray-600 mt-1">
                Impress your clients and colleagues with a professional and delicious corporate luncheon experience. We offer a variety of menus tailored to your business needs, from light bites to full meals. Perfect for meetings, presentations, or corporate events, our catering ensures a seamless dining experience that enhances your professional gatherings.
                </p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
              Savor the Experience
              </button>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex flex-col md:flex-row items-start rounded-lg p-4 mb-8">
            {/* Event Image */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src="https://i.pinimg.com/736x/ba/86/3c/ba863cd8d8826ca92df16ad7605c79c2.jpg"
                alt="Gala Dinner Service"
                className="w-full h-48 rounded-lg object-cove"
              />
            </div>
            {/* Event Text */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 justify-between w-full md:ml-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Gala Dinner Service
                </h3>
                <p className=" text-base text-gray-600 mt-1">
                  Elevate your event with a luxurious gala dinner service that
                  includes a selection of exquisite dishes and impeccable
                  presentation. Whether it's a charity event, awards ceremony, or
                  celebration, we ensure a memorable dining experience that
                  reflects your event's elegance.
                </p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg self-end mt-4 hover:bg-blue-600 text-sm">
              Savor the Experience              
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventpg;
















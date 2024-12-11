import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/herosection';
import Review from './components/Review';
import Footer from './components/Footer';
// import EventDetail from './pages/EventDetail'; // Component for event detail page
// import ContactForm from './pages/ContactForm'; 

import Eventpg from './pages/Eventpg'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      {/* <Router> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Eventpg />} /> */}
        {/* <Route path="/event/:id" element={<EventDetail />} /> */}
      {/* </Routes> */}
    {/* </Router> */}
      <Review />
      <Eventpg />
      <Footer />
    </div>
  );
}









// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './pages/herosection';
// import Review from './components/Review';
// import Footer from './components/Footer';
// import Eventpg from './pages/Eventpg'; // Event page
// import EventDetail from './pages/EventDetail'; // Event detail page
// // import ContactForm from './pages/ContactForm'; // Contact form page

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <Router>
//       <div className="bg-white">
//         {/* Navbar */}
//         <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

//         {/* Routes for navigation */}
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/events" element={<Eventpg />} />
//           <Route path="/event/:id" element={<EventDetail />} />

//         </Routes>

//         {/* Review and Footer components remain static */}
//         <Review />
//         <Footer />
//       </div>
//     </Router>
//   );
// }

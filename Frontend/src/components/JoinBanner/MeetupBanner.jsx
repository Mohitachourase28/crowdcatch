/* eslint-disable no-unused-vars */
import React from 'react';
import volImage from '../../assets/vol.png';

const MeetupBanner = () => {
  return (
    <div className="meetup-banner-container max-w-screen-xl mx-auto w-full flex justify-center py-10 px-6 relative z-10">
      <div className="max-w-screen-xl w-full bg-gray-50 flex flex-col md:flex-row items-center justify-between rounded-lg py-10 px-6">
        
        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Join CrowdCatch</h2>
          <p className="text-base mb-6">
            People use CrowdCatch to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.
          </p>
          <button className="bg-blue-600 text-white rounded-md w-32 h-10 flex items-center justify-center text-sm md:text-base hover:bg-blue-300 hover:text-black transition duration-300">
            Sign Up
          </button>
        </div>
        
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
          <img src={volImage} alt="Hands raised illustration" className="w-full md:w-auto max-w-sm h-auto" />
        </div>
      </div>
    </div>
  );
};

export default MeetupBanner;



// const MeetupBanner = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1023);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1023); // Mobile layout for widths <1023px
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return isMobile ? (
//     // Mobile Layout
//     <div className="meetup-banner-container bg-blue-100 text-center py-8 px-4">
//       <h2 className="text-xl font-bold mb-4">Join Meetup and Find Your Community</h2>
//       <button className="bg-blue-600 text-white rounded-md w-[125px] h-[40px] flex items-center justify-center text-sm hover:bg-blue-300 hover:text-black transition duration-300 mx-auto">
//         Sign Up
//       </button>
//     </div>
//   ) : (
//     // Default Layout
    

import React from "react";
import TabWidget from "./components/TabWidget";
import GalleryWidget from "./components/GalleryWidget";
import line from '../src/assets/line.svg'
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] text-white flex flex-col justify-center items-center px-8">
      <div className="flex w-full max-w-[85rem] space-x-8 mt-10">
        {/* Left empty space */}
        <div className="w-1/2 hidden lg:block bg-[#616161] border border-[#96BEE7] rounded-[27px]"></div>
        
        {/* Right side with widgets */}
        <div className="w-full lg:w-1/2 space-y-4">

          <TabWidget />
          <img src={line} alt="" className="mt-1 ml-5" />
          <GalleryWidget />
          <img src={line} alt="" className="mt-0.5 ml-5" />
        </div>
      </div>
    </div>
  );
}

export default App;

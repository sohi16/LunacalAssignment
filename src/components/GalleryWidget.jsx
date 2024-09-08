import React, { useState } from "react";
import question from '../assets/Vectorquestion.svg';
import square from '../assets/square.svg';
import angle from '../assets/Angle.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import image from '../assets/img.png';

const GalleryWidget = () => {
  const [isLeftClicked, setIsLeftClicked] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);

  const handleLeftClick = () => {
    setIsLeftClicked(true);
    setTimeout(() => setIsLeftClicked(false), 300);
  };

  const handleRightClick = () => {
    setIsRightClicked(true);
    setTimeout(() => setIsRightClicked(false), 300);
  };

  return (
    <div className="flex flex-col gap-4 bg-[#363C43] p-4 rounded-[18.89px] shadow-lg shadow-black">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img src={question} alt="" className="self-start" />
          <h2 className="bg-[#171717] py-2 px-6 rounded-[20px] font-primary text-[20px] shadow-lg">Gallery</h2>
        </div>
        <div className="flex items-center gap-10">
          <button className="flex items-center px-3 xl:px-6 py-2 text-white rounded-full shadow-inner backdrop-blur-xl bg-opacity-80 shadow-gray-300 before:blur-lg">
            <span className="mr-2">+</span> ADD IMAGE
          </button>
          <div className="flex gap-3">
            <div
              className={`w-[45px] h-[45px] rounded-full cursor-pointer ${isLeftClicked ? 'bg-gradient-to-r from-[#95BCE9] to-[#161718]' : 'bg-gradient-to-r from-[#303439] to-[#161718] hover:bg-gradient-to-r hover:from-[#1E252D] hover:to-[#161718]'} shadow-custom-arrow flex justify-center items-center`}
              onClick={handleLeftClick}
            >
              <FaArrowLeft className={`${isLeftClicked ? 'text-white' : 'text-[#6F787C]'} font-thin w-[20px] h-[20px]`} />
            </div>

            <div
              className={`w-[45px] h-[45px] rounded-full cursor-pointer ${isRightClicked ? 'bg-gradient-to-r from-[#95BCE9] to-[#161718]' : 'bg-gradient-to-r from-[#303439] to-[#161718] hover:bg-gradient-to-r hover:from-[#1E252D] hover:to-[#161718]'} shadow-custom-arrow flex justify-center items-center`}
              onClick={handleRightClick}
            >
              <FaArrowRight className={`${isRightClicked ? 'text-white' : 'text-[#6F787C]'} font-thin w-[20px] h-[20px]`} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 lg:w-[85%] xl:w-[98%] relative">
        <img src={square} alt="" className="self-start" />
        {[image, image, image].map((img, index) => (
          <div key={index} className="relative w-1/3 h-44 group overflow-hidden">
            <img src={img} alt="" className="w-full h-full rounded-md object-cover transition-opacity duration-300 group-hover:opacity-0" />
            <img
              src={angle}
              alt="angle overlay"
              className="absolute inset-0 w-svw h-44 opacity-0 transform scale-100 transition-transform ease-in-out duration-1000 group-hover:opacity-100 group-hover:scale-110 group-hover:translate-y-[10%] rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;

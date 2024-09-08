// TabWidget.js
import React, { useState } from "react";
import question from '../assets/Vectorquestion.svg';
import square from '../assets/square.svg';
import rectangle from '../assets/Rectangle.svg';

const TabWidget = () => {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { name: "About Me", key: "about" },
        { name: "Experiences", key: "experiences" },
        { name: "Recommended", key: "recommended" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return <div><p className="text-[20px]">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                    <p className="mt-3 text-[20px]"> I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p></div>;
            case "experiences":
                return <div><p className="text-[20px]">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                    <p className="mt-3 text-[20px]"> I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p></div>;
            case "recommended":
                return <div><p className="text-[20px]">Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                    <p className="mt-3 text-[20px]"> I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p></div>;
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#363C43] xl:p-3 lg:p-2 sm:p-4 rounded-[18.89px] shadow-lg shadow-black">
            <div className="flex items-start sm:gap-2 xl:gap-4">
                <img src={question} alt="" className="mt-0.5" />
                <div className="flex xl:gap-6 items-center justify-between mb-4 basis-[88%] bg-[#171717] shadow-xl shadow-black p-2 rounded-[23px]">
                    {tabs.map((tab) => (
                        //   <button
                        //     key={tab.key}
                        //     onClick={() => setActiveTab(tab.key)}
                        //     className={`basis-1/3 px-4 py-[10px] rounded-[16px] ${activeTab === tab.key ? "bg-[#28292F] shadow-lg" : "bg-[#171717] text-[#A3ADB2] "} text-[18px] font-primary`}
                        //   >
                        //     {tab.name}
                        //   </button>
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`relative overflow-hidden basis-1/3 px-4 py-[10px] rounded-[16px] ${activeTab === tab.key ? "bg-[#28292F] shadow-xl" : "bg-[#171717] text-[#A3ADB2]"} text-[18px] font-primary transition-all duration-300 group`}
                        >
                            {/* Sliding gradient effect on hover for inactive tabs */}
                            <span className={`absolute inset-0 w-full h-full  ${activeTab !== tab.key ? "bg-gradient-to-l from-[#373E44] to-[#191B1F] transform -translate-x-full group-hover:translate-x-0" : "translate-x-0 "} transition-transform duration-700`}></span>

                            {/* Content */}
                            <span className="relative z-10">{tab.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-2 bg-[#363C43] p-2 rounded-md text-[#969696] font-secondary">
                <img src={square} alt="" />
                {renderContent()}
                <img src={rectangle} alt="" className="self-start"/>
            </div>
        </div>
    );
};

export default TabWidget;

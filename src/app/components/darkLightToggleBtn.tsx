import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxSlider } from "react-icons/rx";

const DarkLightToggleBtn: React.FC = () => {
    return (
        <button
                className="relative bg-blue-500 text-white py-2 px-4 rounded transition-colors bg-gray-800">
                <MdDarkMode size={20} />
                <div
                    className="absolute left-0 top-0 bottom-0 w-1/2 bg-gray-800 rounded-l opacity-100 transition-opacity"
                ></div>
                <MdLightMode size={20} />
                <div
                    className="absolute right-0 top-0 bottom-0 w-1/2 bg-blue-500 rounded-r opacity-0 transition-opacity"
                ></div>
                {/* <RxSlider size={20}/>
                <div className="relative z-10"></div> */}
            </button>
    )
}

export default DarkLightToggleBtn;

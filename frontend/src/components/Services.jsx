import React from "react";
import background from "../assets/backgound.jpg";
import laser from "../assets/laser.webp";
import white from "../assets/white.webp";
import root from "../assets/ROOT-CANAL-TREATMENT.webp"
import braces from "../assets/DENTAL-BRACES.webp";
import filling from "../assets/filling.webp";
import denImplement from "../assets/DENTAL-IMPLANT.webp"
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-slate-200 h-auto">
      <div>
        <h1 className="text-2xl font-bold ml-10 border-b-2 border-blue-600 w-1/4 pt-5">Our Services</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-2 py-20 md:grid-cols-2 grid-cols-1 px-5">
      <Link to="/toothExtraction" className="cursor-pointer">
        <div className="h-auto max-w-full rounded-lg px-5 bg-slate-50 py-8 flex flex-col gap-3 border-gray-300 border-x-2 shadow-md">
          <div>
            <img src={laser} className="w-12 h-12" />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">Tooth Extraction</h3>
            <span>
              “Experience the future of painless and precise dental care with
              our cutting-edge laser treatment at LASER DENTAL. Your smile, our
              precision!”
            </span>
          </div>
        </div>
        </Link>
        <Link to="/teethWhitening" className="cursor-pointer">
        <div className="h-auto max-w-full rounded-lg px-5 bg-slate-50 py-8 flex flex-col gap-3 border-gray-300 border-x-2 shadow-md">
          <div>
            <img src={white} alt="" className="w-12 h-12" />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">TEETH WHITENING</h3>
            <span>
              “Experience the future of painless and precise dental care with
              our cutting-edge laser treatment at LASER DENTAL. Your smile, our
              precision!”
            </span>
          </div>
        </div>
        </Link>
        <Link to="/rootCanal" className="cursor-pointer">
        <div className="h-auto max-w-full rounded-lg px-5 bg-slate-50 py-8 flex flex-col gap-3 border-gray-300 border-x-2 shadow-md">
          <div>
            <img src={root} alt="" className="w-12 h-12"  />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">Root Canal Treatment</h3>
            <span>
              “Experience the future of painless and precise dental care with
              our cutting-edge laser treatment at LASER DENTAL. Your smile, our
              precision!”
            </span>
          </div>
        </div>
        </Link>
        <Link to="/dentalBraces" className="cursor-pointer">
        <div className="h-auto max-w-full rounded-lg px-5 bg-slate-50 py-8 flex flex-col gap-3 border-gray-300 border-x-2 shadow-md">
          <div>
            <img src={braces} alt="" className="w-12 h-12" />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">DENTAL BRACES</h3>
            <span>
              “Experience the future of painless and precise dental care with
              our cutting-edge laser treatment at LASER DENTAL. Your smile, our
              precision!”
            </span>
          </div>
        </div>
        </Link>
        <Link to="/toothFilling" className="cursor-pointer">
        <div className="h-auto max-w-full rounded-lg px-5 bg-slate-50 py-8 flex flex-col gap-3 border-gray-300 border-x-2 shadow-md">
          <div>
            <img src={filling} alt="" className="w-12 h-12" />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">TOOTH FILLING</h3>
            <span>
              “Experience the future of painless and precise dental care with
              our cutting-edge laser treatment at LASER DENTAL. Your smile, our
              precision!”
            </span>
          </div>
        </div>
        </Link>
        <Link to="/dentalImplant" className="cursor-pointer">
        <div className="h-auto max-w-full rounded-lg px-5 bg-slate-50 py-8 flex flex-col gap-3 border-gray-300 border-x-2 shadow-md">
          <div>
            <img src={denImplement} alt="" className="w-12 h-12" />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">DENTAL IMPLANT</h3>
            <span>
              “Experience the future of painless and precise dental care with
              our cutting-edge laser treatment at LASER DENTAL. Your smile, our
              precision!”
            </span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;

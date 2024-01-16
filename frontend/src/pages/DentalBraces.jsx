import React from "react";
import MainLayout from "../components/MainLayout";
import Braces from "../assets/Bra.jpg";

const DentalBraces = () => {
  return (
    <MainLayout>
      <div className=" pt-14 bg-slate-200 pb-10">
        <div className="p-10 flex justify-center items-center">
          <img src={Braces} alt="tooth" className=" w-11/12 lg:px-20" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              When Do We Recommend?
            </span>
            <p className="w-1/2 text-xl">
              If your teeth aren’t perfectly aligned, you may experience
              discomfort or pain when eating, chewing, speaking, and smiling.
              The improper bite caused by this irregularity is called
              malocclusion. This improper teeth position is the reason both
              adults and teenagers need Braces treatment.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              What Is The Average Cost For Dental Braces?
            </span>
            <p className="w-1/2 text-xl">
              Orthodontic treatment is highly personalized. Your teeth braces
              cost will depend on your age, teeth’s alignment status and the
              type of braces you want to wear. At DENTY, we utilize world’s no.1
              orthodontic braces system. We are offering 3 types of braces: 1.
              MBT braces system 2. Ceramic braces system 3. Self ligating braces
              system. We can assure you of best quality materials and treatment
              standard.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              What Braces Do To Your Teeth?
            </span>
            <p className="w-1/2 text-xl">
              An Orthodontist usually recommends braces treatment to improve a
              patient’s dental & facial appearance. Through braces treatment,
              problems like crooked or crowded teeth can be corrected. Braces
              treatment can also treat other problems like overbite or underbite
              and jaw joint problems. At LASER DENTAL, we are utilizing Smile
              Design Software as an orthodontic clinic. We utilize Smile Design
              Software while correcting your teeth’s position by braces
              treatment.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              What Is A Good Age For Braces?
            </span>
            <p className="w-1/2 text-xl">
              Patients of almost any age can get benefit from orthodontic
              treatment. A perfect time for placing braces is between 10 & 14
              years of age. At this age, patients jaws are still growing & teeth
              are more likely to move easily to a new position.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Long Do Braces Last?
            </span>
            <p className="w-1/2 text-xl">
              Generally, patients need to wore braces for roughly 12 to 18
              months. There are some conditions when braces need to stay on
              longer. There are also conditions where patients need to wear
              braces for shorter period of time.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
      </div>
    </MainLayout>
  );
};

export default DentalBraces;

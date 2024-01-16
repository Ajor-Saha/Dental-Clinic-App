import React from "react";
import MainLayout from "../components/MainLayout";
import Implant from "../assets/Implant.jpg";

const DentalImplant = () => {
  return (
    <MainLayout>
      <div className=" pt-14 bg-slate-200 pb-10">
        <div className="p-10 flex flex-col justify-center items-center">
          <img src={Implant} alt="tooth" className=" w-11/12 lg:h-128" />
          <h1 className="font-semibold text-xl py-2">Dental Implant</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              What is Guided Dental Implant Surgery?
            </span>
            <p className="w-1/2 text-xl">
              Guided dental implant surgery is a cutting-edge technique that
              uses advanced technology, such as computer-guided imaging and 3D
              printing, to precisely plan and place dental implants. This
              procedure offers a higher level of accuracy, safety, and
              predictability compared to traditional implant surgery.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 h-auto justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Benefits of Guided Dental Implant Surgery
            </span>
            <p className="w-1/2 text-xl">
              <ul className="list-decimal">
                <li>
                  <b>Enhanced Accuracy:</b> With the help of computer-guided
                  technology, dental professionals can precisely plan the exact
                  position, angle, and depth of the dental implant before the
                  surgery. This accuracy leads to a more predictable outcome and
                  ensures a better fit and alignment of the implant.
                </li>
                <li>
                  <b>Minimally Invasive:</b> Guided implant surgery allows for a
                  minimally invasive approach, which means smaller incisions and
                  less trauma to the surrounding tissues. This leads to reduced
                  post-operative discomfort, faster healing, and a shorter
                  recovery period.
                </li>
                <li>
                  <b>Improved Safety:</b> The digital planning process in guided
                  implant surgery helps identify any potential anatomical
                  limitations or complications before the actual procedure. This
                  allows the dentist to make necessary adjustments to ensure the
                  safety of the patient during the surgery.
                </li>
                <li>
                  <b>Time Efficiency:</b> Guided implant surgery streamlines the
                  treatment process by minimizing the number of appointments
                  required. The digital planning allows for efficient
                  communication between the dentist and the dental laboratory,
                  reducing overall treatment time.
                </li>
              </ul>
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              The Guided Dental Implant Surgery Process
            </span>
            <p className="w-1/2 text-xl">
              <ul className="list-decimal">
                <li>
                  <b>Comprehensive Examination:</b> Your dentist will conduct a
                  thorough examination, including a review of your dental and
                  medical history, X-rays, and 3D scans to assess the condition
                  of your teeth, gums, and jawbone.
                </li>
                <li>
                  <b>Digital Planning:</b> Using specialized software, your
                  dentist will create a virtual 3D model of your mouth. They
                  will determine the ideal position and angulation for the
                  dental implant based on your specific needs and anatomical
                  considerations.
                </li>
              </ul>
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How A Tooth Filling Is Done?
            </span>
            <p className="w-1/2 text-xl">
              During tooth filling procedure, we will clean away the decay
              inside the cavity. Dental Filling will replace the part of tooth
              destroyed by tooth decay. We will inject you with painless
              injection system, then will start placing Nano-hybrid composite
              tooth filling material and cure it. Then we will finish & polish
              the filling. We can assure that the end result will satisfy you.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Much Dental Implant Costs?
            </span>
            <p className="w-1/2 text-xl">
              The Guided Dental Implant cost depends on your individual
              situation and what your mouth requires. Please visit at LASER
              DENTAL in Uttara, Dhaka for consultation and review of your mouth.
              It will allow us to give you an accurate estimate of your tooth
              implant cost. We know that not all our patients can afford
              cosmetic dentistry right away. So we offer a wide range of payment
              options. With our convenient financing, you can take care of your
              dental problems now and pay off the cost of your treatments on a
              monthly basis. We give our best effort to find the right financial
              answer to your dental needs.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
      </div>
    </MainLayout>
  );
};

export default DentalImplant;

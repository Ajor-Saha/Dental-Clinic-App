import React from "react";
import MainLayout from "../components/MainLayout";
import Root from "../assets/Root.jpg";

const RootCanal = () => {
  return (
    <MainLayout>
      <div className=" pt-14 bg-slate-200 pb-10">
        <div className="p-10 flex justify-center items-center">
          <div className="relative w-11/12 lg:h-1/5 lg:px-10">
            <img src={Root} alt="tooth" className="w-full h-full" />
            <p className="absolute top-0 left-0 p-4 text-white mt-40 lg:mt-72 text-xl lg:ml-10">
              Root Canal Treatment
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Root Canal Treatment Procedures
            </span>
            <p className="w-1/2 text-xl">
              When decay or disease reaches the pulp of a tooth, you’ll know it.
              The pain and discomfort that result is unmistakable. The only
              solution to get rid of them and to save your natural tooth is Root
              Canal Therapy.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              What Is A Root Canal Treatment Procedure
            </span>
            <p className="w-1/2 text-xl">
              This procedure restores the strength of your tooth. Your pain and
              discomfort are gone as soon as your root canal is over, and you
              have full use of your tooth once again. We are utilising the most
              advanced equipments & techniques when performing a Tooth Root
              Canal Therapy. We are committed to keep you comfortable. We’ll
              utilise every possible option to make the procedure quick and
              comfortable. No matter how badly damaged your teeth are, we are
              committed to help you restore them. We’ll protect your natural
              teeth whenever possible. We believe in keeping your teeth healthy
              from the inside out. We’re here for you when you need a difficult
              procedure like a Root Canal Therapy.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Painful Is A Root Canal Treatment?
            </span>
            <p className="w-1/2 text-xl">
              Root Canal Treatment is performed when the pulp becomes infected
              or damaged. Dental Pulp is composed of nerves and blood vessels in
              the tooth. People fear Root Canal Treatment because they assume
              they are painful. At DENTY, we are ensuring painless Root Canal
              Treatment. We are using Painless Injection System. So that, giving
              local anesthesia is also painless at our clinic.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Long Does A Root Canal Take?
            </span>
            <p className="w-1/2 text-xl">
              Simple or minor Root Canal Treatment cases usually take about 30
              to 60 minutes of treatment. While a more complex Root Canal
              Treatment case takes a longer treatment time of about 90 minutes.
              Unlike other dental clinics, at DENTY– we are offering Single
              Appointment Root Canal Treatment for almost 95% of cases.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Much Does A Root Canal & Crown Cost?
            </span>
            <p className="w-1/2 text-xl">
              Root Canal cost & Crown cost depends on the facility used,
              materials used, service provided & expertise of doctor. At LASER
              DENTAL, we are utilising world’s no.1 rated equipments and
              materials. We don’t offer any cheap alternatives. We are focused
              on best quality treatment & service.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
      </div>
    </MainLayout>
  );
};

export default RootCanal;

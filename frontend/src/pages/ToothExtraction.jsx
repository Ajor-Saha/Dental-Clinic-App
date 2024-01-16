import React from "react";
import MainLayout from "../components/MainLayout";
import Extraction from "../assets/Extraction.jpg";

const ToothExtraction = () => {
  return (
    <MainLayout>
      <div className=" pt-14 bg-slate-200 pb-10">
        <div className="p-10 flex justify-center items-center flex-col">
          <img src={Extraction} alt="tooth" className=" w-11/12 lg:h-128" />
          <h1 className="font-semibold text-xl py-2">Tooth Extraction</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Our Philosophy
            </span>
            <p className="w-1/2 text-xl">
              At DENTY, our goal is to not remove teeth, but we understand that
              some teeth are not able to be saved. Removing a tooth on a broken
              or decayed tooth is typically a last option. We consider Tooth
              Extraction only after other treatment method fails.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How We Do It?
            </span>
            <p className="w-1/2 text-xl">
              You might feel nervous, worried, or even downright terrified at
              the idea of having a tooth removed. However, Dr. Shihabur Rahman &
              DENTY team is here to help. First, we’ll decide if a tooth
              extraction is the best course of treatment for you. We’ll do
              everything we can to save your tooth using restorative procedures.
              However, in some cases a tooth extraction is the best option to
              help you:
              <ul className="list-none font-medium p-2">
                <li> {">"} Fix teeth that are too damaged to save </li>
                <li>{">"} Relieve pain and stop decay and disease</li>
                <li>{">"} Maintain lifelong dental health</li>
                <li>{">"} Improve the appearance of your smile</li>
              </ul>
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Long Does It Take To Recover From A Tooth Extraction?
            </span>
            <p className="w-1/2 text-xl">
              Though aftercare may differ based on the type of Extraction and
              location of your tooth. You can usually expect to heal in a matter
              of 7 to 10 days. It’s important to do what you can to keep the
              blood clot in place in the tooth socket. Dislodging it can cause
              what’s called dry socket, which can be painful. So, it is very
              important to follow the aftercare instructions seriously.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Is Tooth Extraction Painful?
            </span>
            <p className="w-1/2 text-xl">
              No, it is completely painless. We will give you painless local
              anaesthesia during the procedure to eliminate the pain. Also,
              following the procedure, we recommend pain medication to help you
              manage post-extraction pain. If we utilize Laser Therapy, then you
              will feel minimum discomfort.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              What Happens After Tooth Extraction?
            </span>
            <p className="w-1/2 text-xl">
              Take painkillers as prescribed. Bite firmly on the gauze pad
              placed by your dentist to stop bleeding and allow a clot to form
              in the tooth socket. Avoid rinsing or spitting forcefully for 24
              hours after the extraction. This will help to avoid dislodging the
              clot that forms in the socket.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
      </div>
    </MainLayout>
  );
};

export default ToothExtraction;

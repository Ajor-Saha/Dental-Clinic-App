import React from "react";
import MainLayout from "../components/MainLayout";
import toothFilling from "../assets/toothFilling.jpg";
import White from "../assets/white1.jpg";

const TeethWhite = () => {
  return (
    <MainLayout>
      <div className=" pt-14 bg-slate-200 pb-10">
        <div className="p-10 flex justify-center items-center flex-col gap-3">
          <img src={White} alt="tooth" className=" w-11/12 lg:h-128" />
          <h1 className="font-semibold text-xl">Teeth Whitening</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              ZOOM! Teeth Whitening
            </span>
            <p className="w-1/2 text-xl">
              If you are dissatisfied with your smile because of discolored,
              dull teeth, ZOOM! Teeth Whitening may be the right choice for you.
              DENTY is committed to providing every patient with a bright
              and radiant smile that can completely transform their whole facial
              aesthetic. People with unattractive teeth are less likely to show
              their smiles and often appear unhappy or sullen. ZOOM! Teeth
              Whitening is a quick and painless in-office whitening system that
              provides dramatic results—teeth that are up to eight shades
              whiter!
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Why Choose ZOOM! Teeth Whitening?
            </span>
            <p className="w-1/2 text-xl">
              Why Choose ZOOM! Teeth Whitening? Many times teeth are beautifully
              shaped, but are with dark color. Bleaching is the perfect solution
              to get a brighter & whiter smile. Many times, your Natural Teeth
              Whitening will be a part of a comprehensive plan to bring your
              smile back to life. Dr. Denty usually recommends Teeth Whitening
              treatment before any Cosmetic dental treatment.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Much Does It Costs To Get My Teeth Professionally Whitened?
            </span>
            <p className="w-1/2 text-xl">
              You should invest in Teeth Whitening since a beautiful smile is
              priceless. Based on the patient’s specific needs, cost of Zoom!
              Teeth Whitening varies. The amount of whitening needed will
              determine how much will be your ultimate cost. A detailed estimate
              will be given to you by  DENTY during your appointment.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Is Teeth Whitening Permanent?
            </span>
            <p className="w-1/2 text-xl">
              The development of new stains cannot be prevented by teeth
              whitening. Though, ZOOM! offers the most durable teeth whitening
              results of any product available.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Does Teeth Whitening Harm Enamel?
            </span>
            <p className="w-1/2 text-xl">
              Are there any risks associated with professional teeth whitening?
              The two side effects that occur most often are a temporary
              increase in tooth sensitivity and mild irritation of the soft
              tissues of the mouth, particularly the gums. Teeth sensitivity
              often occurs during early stages of teeth bleaching treatment.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeethWhite;

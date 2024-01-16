import React from "react";
import MainLayout from "../components/MainLayout";
import toothFilling from "../assets/toothFilling.jpg";

const ToothFilling = () => {
  return (
    <MainLayout>
      <div className=" pt-14 bg-slate-200 pb-10">
        <div className="p-10 flex justify-center items-center">
          <img src={toothFilling} alt="tooth" className=" w-11/12 lg:h-1/3" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Confident Smiles Through Dental Filling
            </span>
            <p className="w-1/2 text-xl">
              Are your teeth unevenly spaced, irregular, or crowded together?
              Are they ground down, chipped, or cracked? In all these cases, we
              can restore your teeth to beauty instantly with Cosmetic Dental
              Filling. This popular form of smile enhancement is extremely
              conservative, removing only a minimal amount of tooth structure,
              and yet it produces incredible results. Take a look at the
              specifics.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              Repairing A Chipped Tooth
            </span>
            <p className="w-1/2 text-xl">
              Let’s say you’ve chipped a tooth. What could be a disfiguring
              injury can be restored almost instantly with Composite Filling,
              using layers of resin to enhance the shape, shade, and coluor
              translucency of your tooth. We start by applying thicker, more
              opaque layers near the center of each tooth, then use translucent
              materials and appropriate tints near the edges to make your
              repaired tooth appear absolutely natural. We use the most advanced
              composite resins so we can fine-tune the details of your bonding
              procedure with detailed precision and control. Finally, we apply a
              high-powered LED curing light to speed up the process of hardening
              your new tooth, and then we polish each tooth individually to
              enhance its natural appearance
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row bg-slate-50 md:justify-between gap-3 py-10 px-3 lg:h-80 justify-center items-center">
            <span className="font-bold text-2xl text-blue-400 lg:pl-5">
              How Long Do Dental Fillings Last?
            </span>
            <p className="w-1/2 text-xl">
              Composite fillings are the most modern filling material. They are
              very durable and natural looking. The longevity and performance of
              a Dental Filling will depend on the quality of Filling material
              and technique used. At Denty we can assure you of at least 10
              years of service for filling.
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
              How Much Is A Dental Filling?
            </span>
            <p className="w-1/2 text-xl">
              Tooth Filling, while more expensive than basic dental check-ups,
              both fix cavities and protect your mouth’s future health. Fee for
              fillings depend on many factors: facilities available, quality of
              material, expense of material, expertise of dentist etc. At 
              DENTY, we utilize world’s most advanced & expensive dental
              filling material to ensure highest possible outcome.
            </p>
          </div>
          <span className="border-2 border-blue-400"></span>
        </div>
      </div>
    </MainLayout>
  );
};

export default ToothFilling;

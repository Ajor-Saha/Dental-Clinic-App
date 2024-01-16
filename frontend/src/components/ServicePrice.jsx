import React from "react";

const ServicePrice = () => {
  return (
    <div className="h-auto bg-slate-200 py-10" id="pricing">
      <div>
        <h2 className="text-center text-2xl py-3">
          Pricing
        </h2>
      </div>
      <div className="relative overflow-x-auto lg:px-5 px-3 rounded-sm shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-blue-400 dark:bg-blue-400 dark:text-slate-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Service Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Stage
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-700 dark:text-slate-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
              >
                Lasser Technology
              </th>
              <td className="px-6 py-4">Cosmetic</td>
              <td className="px-6 py-4">2 times</td>
              <td className="px-6 py-4">$1000</td>
            </tr>
            <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-700 dark:text-slate-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
              >
                Teeth Whitening
              </th>
              <td className="px-6 py-4">Cosmetic</td>
              <td className="px-6 py-4">3 times</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-700 dark:text-slate-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
              >
                Dental Braces
              </th>
              <td className="px-6 py-4">Cosmetic</td>
              <td className="px-6 py-4">20 times</td>
              <td className="px-6 py-4">$7000</td>
            </tr>
            <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-700 dark:text-slate-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
              >
                Root Canal Treatment
              </th>
              <td className="px-6 py-4">Cosmetic</td>
              <td className="px-6 py-4">1 times</td>
              <td className="px-6 py-4">$1800</td>
            </tr>
            <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-700 dark:text-slate-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
              >
                Tooth Filling
              </th>
              <td className="px-6 py-4">General</td>
              <td className="px-6 py-4">2 times</td>
              <td className="px-6 py-4">$200</td>
            </tr>
            <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-700 dark:text-slate-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
              >
                Dental Implant
              </th>
              <td className="px-6 py-4">General</td>
              <td className="px-6 py-4">1 times</td>
              <td className="px-6 py-4">$300</td>
            </tr>
            <tr className="bg-white border-b dark:bg-slate-50 dark:border-gray-700 dark:text-slate-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-700"
              >
                Dental Bridge
              </th>
              <td className="px-6 py-4">General</td>
              <td className="px-6 py-4">2 times</td>
              <td className="px-6 py-4">$500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicePrice;

import React from "react";

const AdminPageDetails = ({ subFieldObj }) => {
  return (
    <div className="flex flex-col items-center px-12 py-8">
      <h1 className="text-2xl font-medium text-amber-900 ">
        {subFieldObj.subField}
      </h1>
      <div className="grid grid-rows-2 gap-4 py-4 w-full">
        <div className="flex flex-wrap">
          <div className="flex bg-slate-50 p-2 rounded-lg m-2">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="minProfit">
                მინიმალური მოგება
              </label>
              <input
                className="bg-transparent"
                type="number"
                name="minProfit"
                placeholder={`${subFieldObj.minProfit} ლარი`}
                disabled
              />
            </div>
          </div>
          <div className="flex bg-slate-50 p-2 rounded-lg m-2">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="minProfit">
                მინიმალური მოგება
              </label>
              <input
                className="bg-transparent"
                type="number"
                name="minProfit"
                placeholder={`${subFieldObj.minProfit} ლარი`}
                disabled
              />
            </div>
          </div>
          <div className="flex bg-slate-50 p-2 rounded-lg m-2">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="minProfit">
                მინიმალური მოგება
              </label>
              <input
                className="bg-transparent"
                type="number"
                name="minProfit"
                placeholder={`${subFieldObj.minProfit} ლარი`}
                disabled
              />
            </div>
          </div>
          <div className="flex bg-slate-50 p-2 rounded-lg m-2">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="minProfit">
                მინიმალური მოგება
              </label>
              <input
                className="bg-transparent"
                type="number"
                name="minProfit"
                placeholder={`${subFieldObj.minProfit} ლარი`}
                disabled
              />
            </div>
          </div>
          <div className="flex bg-slate-50 p-2 rounded-lg m-2">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="minProfit">
                მინიმალური მოგება
              </label>
              <input
                className="bg-transparent"
                type="number"
                name="minProfit"
                placeholder={`${subFieldObj.minProfit} ლარი`}
                disabled
              />
            </div>
          </div>
          <div className="flex bg-slate-50 p-2 rounded-lg m-2">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="minProfit">
                მინიმალური მოგება
              </label>
              <input
                className="bg-transparent"
                type="number"
                name="minProfit"
                placeholder={`${subFieldObj.minProfit} ლარი`}
                disabled
              />
            </div>
          </div>
          <div className="flex bg-slate-50 p-2 rounded-lg m-2">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="minProfit">
                მინიმალური მოგება
              </label>
              <input
                className="bg-transparent"
                type="number"
                name="minProfit"
                placeholder={`${subFieldObj.minProfit} ლარი`}
                disabled
              />
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default AdminPageDetails;

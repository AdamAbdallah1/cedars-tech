import React from "react";
import pricingData from "../PricingData";

const Pricing = () => {
  return (
    <div className="py-16 px-6">
      <h1 className="lg:text-6xl text-3xl font-bold text-center">Our Prices</h1>

      {pricingData.map((service, serviceIndex) => (
        <div key={serviceIndex} className="mb-16">
          <h2 className="text-3xl font-bold text-center mt-10 mb-10">
            {service.service} Offers
          </h2>

          <div
            className={`max-w-4xl mx-auto ${
              service.plans.length <= 2
                ? "flex justify-center gap-8"
                : "grid md:grid-cols-3 gap-8"
            }`}
          >
            {service.plans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#300958] text-white rounded-2xl shadow-lg p-6 hover:shadow-3xl transition w-full md:w-80"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">{plan.title}</h3>
                <ul className="space-y-2">
                  {Object.entries(plan.prices).map(([duration, price]) => (
                    <li
                      key={duration}
                      className="flex justify-between border-b border-gray-700 py-2"
                    >
                      <span>{duration}</span>
                      <span className="font-bold">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;

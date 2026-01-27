import React, { useState } from "react";

const PricingCalculator = () => {
  const [type, setType] = useState("Landing Page");
  const [features, setFeatures] = useState({
    SEO: false,
    Maintenance: false,
    Streaming: false,
  });

  const basePrices = {
    "Landing Page": 500,
    "Business Website": 900,
    "Streaming Add-on": 300,
  };

  const calcPrice = () => {
    let price = basePrices[type];
    Object.keys(features).forEach(f => {
      if (features[f]) price += f === "Streaming" ? 300 : 100;
    });
    return price;
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Cedars Tech! I want a ${type} website with features: ${
      Object.keys(features)
        .filter(f => features[f])
        .join(", ") || "None"
    }. Estimated price: $${calcPrice()}`
  );

  return (
    <div className="bg-slate-800 text-white p-8 rounded-3xl max-w-3xl mx-auto flex flex-col gap-6 shadow-lg">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
        Calculate Your Price
      </h2>

      <div>
        <label className="font-medium mb-2 block">Select Website Type:</label>
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="w-full p-2 rounded-lg bg-slate-900"
        >
          {Object.keys(basePrices).map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-medium">Select Features:</span>
        {Object.keys(features).map(f => (
          <label key={f} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={features[f]}
              onChange={() =>
                setFeatures({ ...features, [f]: !features[f] })
              }
              className="accent-purple-500"
            />
            {f}
          </label>
        ))}
      </div>

      <div className="text-2xl font-semibold">
        Total Price: ${calcPrice()}
      </div>

      <a
        href={`https://wa.me/message/I3EGKHRI2X5EI1?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl transition-all"
      >
        Contact Us with This Quote
      </a>
    </div>
  );
};

export default PricingCalculator;

// Recommendation.jsx
import { useState } from "react"
import { menuData } from "../data/menuData" // your existing menuData

const preferencesOptions = ["Spicy", "Vegetarian", "Seafood"]

export default function Recommendation() {
  const [selectedPrefs, setSelectedPrefs] = useState([])

  const togglePref = (pref) => {
    setSelectedPrefs((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    )
  }

  const filterMenu = () => {
    if (selectedPrefs.length === 0) return Object.values(menuData).flat()
    return Object.values(menuData)
      .flat()
      .filter((item) => {
        if (selectedPrefs.includes("Spicy") && item.desc.toLowerCase().includes("spicy")) return true
        if (selectedPrefs.includes("Vegetarian") && item.desc.toLowerCase().includes("vegetarian")) return true
        if (selectedPrefs.includes("Seafood") && item.desc.toLowerCase().includes("seafood")) return true
        return false
      })
  }

  const filteredItems = filterMenu()

  return (
    <section id="recommendation" className="py-28 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading mb-6">Personalized Recommendations</h2>
        <p className="text-light/70 mb-8">
          Select your preferences to see recommended dishes:
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {preferencesOptions.map((pref) => (
            <button
              key={pref}
              onClick={() => togglePref(pref)}
              className={`px-6 py-2 rounded-full border transition ${
                selectedPrefs.includes(pref)
                  ? "bg-primary text-dark"
                  : "border-light hover:bg-primary/20"
              }`}
            >
              {pref}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.length === 0 ? (
            <p className="text-light/70 col-span-full">No dishes match your preferences.</p>
          ) : (
            filteredItems.map((item, i) => (
              <div key={i} className="border-b border-light/20 pb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-heading">{item.name}</h3>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
                <p className="text-light/70 mt-2">{item.desc}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

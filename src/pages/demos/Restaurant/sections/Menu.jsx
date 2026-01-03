import { useState } from "react"
import { motion } from "framer-motion"

export const menuData = {
  Starters: [
    { name: "Bruschetta", price: "$8", desc: "Grilled bread with tomatoes, garlic, and basil" },
    { name: "Garlic Bread", price: "$5", desc: "Toasted bread with garlic butter" }
  ],
  Main: [
    { name: "Grilled Steak", price: "$24", desc: "Juicy beef steak grilled to perfection" },
    { name: "Seafood Pasta", price: "$18", desc: "Fresh seafood with homemade pasta" },
    { name: "Classic Burger", price: "$14", desc: "Beef patty, cheddar, fresh vegetables" },
    { name: "Margherita Pizza", price: "$16", desc: "Tomato, mozzarella, basil" }
  ],
  Desserts: [
    { name: "Chocolate Cake", price: "$7", desc: "Rich chocolate layered cake" },
    { name: "Ice Cream", price: "$5", desc: "Vanilla ice cream with toppings" }
  ],
  Drinks: [
    { name: "Coca-Cola", price: "$3", desc: "Refreshing soda drink" },
    { name: "Orange Juice", price: "$4", desc: "Freshly squeezed orange juice" }
  ]
}

export default function Menu() {
  const categories = Object.keys(menuData)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section id="menu" className="py-28 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-heading text-center"
        >
          Our Menu
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-light/70 mt-4 max-w-xl mx-auto"
        >
          A selection of dishes crafted with the finest ingredients
        </motion.p>

        <div className="flex gap-6 mt-8 overflow-x-auto no-scrollbar px-2 md:justify-center">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`shrink-0 px-6 py-2 rounded-full border transition ${
        activeCategory === cat ? "bg-primary text-dark" : "border-light hover:bg-primary/20"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {menuData[activeCategory].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="border-b border-light/20 pb-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-heading">{item.name}</h3>
                <span className="text-primary font-semibold">{item.price}</span>
              </div>
              <p className="text-light/70 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

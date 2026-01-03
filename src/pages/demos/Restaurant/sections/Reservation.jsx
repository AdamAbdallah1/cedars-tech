import { motion } from "framer-motion"
import { useState } from "react"

export default function Reservation() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappNumber = "96181090757"
    const text = `Hello! I want to reserve a table.%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0ATime: ${form.time}%0AMessage: ${form.message}`
    const url = `https://wa.me/${whatsappNumber}?text=${text}`
    window.open(url, "_blank")
    setSubmitted(true)
    setForm({ name: "", phone: "", date: "", time: "", message: "" })
  }

  return (
    <section id="reservation" className="py-28 bg-light text-dark">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-heading mb-8 text-center">Reserve a Table</h2>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
            WhatsApp opened for your reservation!
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
          <input type="date" name="date" value={form.date} onChange={handleChange} required className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
          <input type="time" name="time" value={form.time} onChange={handleChange} required className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
          <input type="text" name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none md:col-span-2" />
          <button type="submit" className="md:col-span-2 px-6 py-4 bg-primary text-light rounded-lg font-semibold hover:bg-primary/90 transition">
            Reserve via WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  )
}

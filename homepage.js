import { motion } from "framer-motion"; import { Button } from "@/components/ui/button";

export default function HomePage() { return ( <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center"> {/* Hero Section */} <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center" > <h1 className="text-4xl font-bold text-gray-800">Welcome to ZenClean</h1> <p className="text-lg text-gray-600 mt-4">Professional Junk Removal & Cleaning Services</p> <Button className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"> Get a Free Quote </Button> </motion.div>

{/* Services Section */}
  <motion.div
    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {[
      { title: "Junk Removal", desc: "Fast and efficient junk removal services." },
      { title: "Window Cleaning", desc: "Crystal clear windows for homes & offices." },
      { title: "Office Cleaning", desc: "Spotless workspaces to boost productivity." },
    ].map((service, index) => (
      <motion.div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
        <p className="text-gray-600 mt-2">{service.desc}</p>
      </motion.div>
    ))}
  </motion.div>

  {/* Testimonials Section */}
  <motion.div className="mt-16 text-center px-8">
    <h2 className="text-2xl font-bold text-gray-800">What Our Clients Say</h2>
    <motion.div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { name: "John Doe", feedback: "ZenClean did an amazing job with my office!" },
        { name: "Jane Smith", feedback: "Highly professional and great service!" },
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-gray-600">"{testimonial.feedback}"</p>
          <h3 className="mt-2 font-semibold text-gray-800">- {testimonial.name}</h3>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>

  {/* Contact Form */}
  <motion.div className="mt-16 w-full max-w-lg px-8">
    <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>
    <form className="mt-6 bg-white p-6 rounded-lg shadow-lg">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded mb-4" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded mb-4" />
      <textarea placeholder="Your Message" className="w-full p-2 border rounded mb-4"></textarea>
      <Button className="w-full bg-blue-600 text-white py-2 rounded">Send Message</Button>
    </form>
  </motion.div>

  {/* Referral System */}
  <motion.div className="mt-16 text-center px-8">
    <h2 className="text-2xl font-bold text-gray-800">Referral Program</h2>
    <p className="text-gray-600 mt-2">Refer a friend and get 10% off your next cleaning!</p>
    <Button className="mt-4 px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg">
      Get Referral Link
    </Button>
  </motion.div>
</div>

); }

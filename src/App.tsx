import React, { useState } from 'react';
import { Building2, CheckCircle, Clock, Sparkles, Star, Phone, ArrowRight, Shield, Zap, Users, PenTool as Tool, Award } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectSize: 'small',
    projectType: 'residential',
    timeline: 'flexible'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
            alt="Construction site"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">From Chaos to Clean</h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200">Post-Construction Experts</p>
          <a href="#contact" className="inline-flex items-center bg-emerald-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-colors">
            Get Started <ArrowRight className="ml-2" />
          </a>
        </div>
      </header>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Transformation Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
                after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              },
              {
                before: "https://images.unsplash.com/photo-1590725140246-20acdee442be",
                after: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
              }
            ].map((set, index) => (
              <div key={index} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <img src={set.before} alt="Before cleaning" className="w-full h-64 object-cover rounded-lg" />
                    <span className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-1 rounded">Before</span>
                  </div>
                  <div className="relative">
                    <img src={set.after} alt="After cleaning" className="w-full h-64 object-cover rounded-lg" />
                    <span className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-1 rounded">After</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our Comprehensive Service</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our post-construction cleaning service is meticulously designed to transform your newly constructed or renovated space into a pristine, move-in ready environment. We combine advanced technology with expert knowledge to ensure no detail is overlooked.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Sparkles, 
                title: "Deep Dust Removal", 
                desc: "Using HEPA filtration systems and advanced air scrubbers, we eliminate construction dust from every surface, including hard-to-reach areas. Our thorough process ensures superior air quality and a truly clean environment." 
              },
              { 
                icon: Building2, 
                title: "Debris Hauling", 
                desc: "Professional removal of all construction waste, including proper sorting and disposal of materials. We handle everything from large debris to the finest particles, ensuring your space is completely clear." 
              },
              { 
                icon: Shield, 
                title: "Air Quality Testing", 
                desc: "Scientific measurement of air particulates using state-of-the-art sensors. We conduct before and after testing to ensure your space meets or exceeds air quality standards." 
              },
              { 
                icon: CheckCircle, 
                title: "Fine Detailing", 
                desc: "Meticulous attention to every surface, including windows, fixtures, and trim. Our detail-oriented team ensures no spot is missed, delivering a truly thorough clean." 
              },
              { 
                icon: Clock, 
                title: "Fast Turnaround", 
                desc: "Efficient cleaning processes and experienced teams working in coordination to meet your timeline. We understand the importance of staying on schedule in construction projects." 
              },
              { 
                icon: Zap, 
                title: "Smart Technology", 
                desc: "Utilizing advanced cleaning equipment and monitoring systems to ensure consistent, high-quality results. Our tech-driven approach sets new standards in post-construction cleaning." 
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <service.icon className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Why Choose ZenClean</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We've revolutionized post-construction cleaning by combining traditional expertise with cutting-edge technology, ensuring superior results every time.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Teams",
                desc: "Our cleaning professionals are thoroughly trained in post-construction cleaning techniques and safety protocols. Each team member is certified and experienced in handling various construction cleanup scenarios."
              },
              {
                icon: Tool,
                title: "Advanced Equipment",
                desc: "We invest in the latest cleaning technology, from HEPA-filtered vacuums to automated scrubbing machines. Our equipment meets or exceeds industry standards for efficiency and effectiveness."
              },
              {
                icon: Award,
                title: "Guaranteed Results",
                desc: "We stand behind our work with a satisfaction guarantee. Our quality control process includes thorough inspections and air quality testing to ensure exceptional results."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="bg-red-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Cleaning Services</h2>
          <p className="text-xl mb-6">24/7 response for urgent post-construction cleaning needs</p>
          <a href="tel:1234567890" className="inline-flex items-center bg-white text-red-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            <Phone className="mr-2" /> Call Now
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Project Manager",
                company: "BuildRight Construction",
                text: "ZenClean transformed our chaotic construction site into a move-in ready space in record time."
              },
              {
                name: "Michael Chen",
                role: "Property Developer",
                company: "Urban Living",
                text: "Their attention to detail and professional approach sets them apart from other cleaning services."
              },
              {
                name: "Emily Rodriguez",
                role: "Interior Designer",
                company: "Modern Spaces",
                text: "I consistently recommend ZenClean to my clients. They never disappoint."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Pricing Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Personalized Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            We offer custom quotes tailored to your unique project. Tell us about your space and needs, and we'll get back to you with a personalized quote within 24 hours.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Factors We Consider:</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                "Project size and scope",
                "Type of construction",
                "Timeline requirements",
                "Specific cleaning needs",
                "Surface materials",
                "Access requirements",
                "Environmental considerations",
                "Special equipment needs"
              ].map((factor, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="#contact" className="inline-flex items-center bg-emerald-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-colors">
                Request Quote <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About ZenClean</h2>
          <div className="space-y-6 text-lg text-gray-600 mb-12">
            <p>
              Since 2020, ZenClean has been at the forefront of post-construction cleaning innovation. We've revolutionized the industry by combining traditional cleaning expertise with cutting-edge technology and unmatched attention to detail.
            </p>
            <p>
              Our commitment to excellence is reflected in our use of advanced technology, including smart sensors for air quality monitoring and drone inspections for comprehensive site assessment. This tech-driven approach allows us to deliver consistent, superior results while maintaining the highest standards of efficiency and thoroughness.
            </p>
            <p>
              Every member of our team is thoroughly trained and certified in post-construction cleaning techniques, safety protocols, and the proper use of our advanced equipment. We take pride in our ability to transform chaotic construction sites into pristine, move-in ready spaces that exceed our clients' expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24h", label: "Average Turnaround" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-emerald-500">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Get Your Personalized Quote</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Tell us about your project, and we'll create a custom cleaning solution that meets your specific needs.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Size</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.projectSize}
                onChange={(e) => setFormData({...formData, projectSize: e.target.value})}
              >
                <option value="small">Small (&lt; 1,000 sq ft)</option>
                <option value="medium">Medium (1,000 - 5,000 sq ft)</option>
                <option value="large">Large (&gt; 5,000 sq ft)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              >
                <option value="residential">Residential Construction</option>
                <option value="commercial">Commercial Construction</option>
                <option value="industrial">Industrial Construction</option>
                <option value="renovation">Renovation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              >
                <option value="urgent">Urgent (Within 24 hours)</option>
                <option value="soon">Soon (2-3 days)</option>
                <option value="flexible">Flexible (Within 1 week)</option>
                <option value="planning">Future Project (Planning Phase)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about any specific requirements or concerns..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Get Quote
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ZenClean</h3>
              <p className="text-gray-400">Professional post-construction cleaning services</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">1234 Clean Street</p>
              <p className="text-gray-400">City, State 12345</p>
              <p className="text-gray-400">contact@zenclean.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-gray-400">Mon-Fri: 8am - 6pm</p>
              <p className="text-gray-400">Sat: 9am - 4pm</p>
              <p className="text-gray-400">24/7 Emergency Service</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZenClean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
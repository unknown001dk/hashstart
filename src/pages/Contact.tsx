import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FormInput } from '../components/ui/FormInput';
import { FormTextarea } from '../components/ui/FormTextarea';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Get in touch with our team to discuss your project
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@startacademy.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Tech Street, Digital City</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                  id="name"
                  name="name"
                  label="Name"
                  required
                />

                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  required
                />

                <FormInput
                  id="subject"
                  name="subject"
                  label="Subject"
                  required
                />

                <FormTextarea
                  id="message"
                  name="message"
                  label="Message"
                  required
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg
                           hover:bg-emerald-700 flex items-center justify-center space-x-2
                           transition-colors shadow-lg hover:shadow-xl"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
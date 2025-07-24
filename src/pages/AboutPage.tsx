import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Eye, Users, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const coreValues = [
    { letter: 'C', value: 'Commitment', description: 'Unwavering dedication to client security', icon: Heart },
    { letter: 'O', value: 'Operational Excellence', description: 'Superior execution in all services', icon: Award },
    { letter: 'L', value: 'Leadership', description: 'Setting industry standards', icon: Users },
    { letter: 'O', value: 'Outstanding Service', description: 'Exceeding client expectations', icon: Target },
    { letter: 'M', value: 'Modern Technology', description: 'Cutting-edge security solutions', icon: Shield },
    { letter: 'B', value: 'Best Practices', description: 'Industry-leading methodologies', icon: Eye },
    { letter: 'O', value: 'Organized Approach', description: 'Systematic and structured operations', icon: Award },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Colombo High Security</h1>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Established on January 1st, 2025, we are Sri Lanka's premier government-approved 
              security and investigation company, committed to excellence in protection services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Colombo High Security (Pvt) Ltd was founded with a clear mission: to provide 
                unparalleled security services across Sri Lanka. As a government-approved company 
                registered with the Ministry of Defence (MOD/CSD/PS/01/938), we operate with the 
                highest standards of professionalism and integrity.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team comprises experienced professionals from military, police, and security 
                backgrounds, bringing decades of combined expertise to every assignment. We serve 
                diverse sectors including retail chains, residential complexes, hotels, industrial 
                facilities, and financial institutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Since our establishment, we have grown to become one of Sri Lanka's most trusted 
                security service providers, maintaining our commitment to excellence while 
                continuously adapting to evolving security challenges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-blue-900" />
                  <span className="text-gray-700">Established: January 1, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-900" />
                  <span className="text-gray-700">MOD Registration: MOD/CSD/PS/01/938</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-900" />
                  <span className="text-gray-700">500+ Trained Personnel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-blue-900" />
                  <span className="text-gray-700">100+ Active Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="bg-blue-900 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To be Sri Lanka's most trusted and innovative security service provider, 
                setting the benchmark for excellence in protection services while contributing 
                to national security and peace of mind for all our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To deliver comprehensive, professional security solutions through highly trained 
                personnel, advanced technology, and unwavering commitment to client safety and 
                satisfaction while maintaining the highest ethical standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - COLOMBO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              C.O.L.O.M.B.O - The foundation of our organizational culture and service excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.letter}
                  </div>
                  <IconComponent className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{item.value}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fully Licensed & Insured
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              We maintain all necessary certifications and insurance coverage to ensure 
              complete protection for our clients and personnel.
            </p>
            <a
              href="/certificates"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Our Certificates</span>
              <Award className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
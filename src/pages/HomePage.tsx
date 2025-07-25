import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Eye, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SecurityScene from '../components/SecurityScene';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)'}}>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-75 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Colombo High Security
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-slate-200"
            >
              Trustworthy • Disciplined • Secure
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-slate-800 mb-2">500+</div>
              <div className="text-gray-600">Security Personnel</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-slate-800 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-slate-800 mb-2">100+</div>
              <div className="text-gray-600">Active Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-slate-800 mb-2">2025</div>
              <div className="text-gray-600">Established</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personal protection to corporate security, we provide tailored solutions 
              for every security need across Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Shield className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Guard Services</h3>
              <p className="text-gray-600 mb-4">
                Professional security personnel deployment for residential, commercial, and industrial properties.
              </p>
              <Link 
                to="/services" 
                className="text-slate-700 font-semibold hover:text-orange-600 flex items-center space-x-1"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Eye className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Investigations</h3>
              <p className="text-gray-600 mb-4">
                Confidential investigation services conducted by experienced professionals with proven track records.
              </p>
              <Link 
                to="/services" 
                className="text-slate-700 font-semibold hover:text-orange-600 flex items-center space-x-1"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Users className="h-12 w-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">VIP Protection</h3>
              <p className="text-gray-600 mb-4">
                Elite protection services for high-profile individuals, executives, and special events.
              </p>
              <Link 
                to="/services" 
                className="text-slate-700 font-semibold hover:text-orange-600 flex items-center space-x-1"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Colombo High Security?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Government-approved, professionally trained, and committed to excellence in every aspect of security services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Award className="h-16 w-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Government Approved</h3>
              <p className="text-slate-300">Officially registered with Ministry of Defence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Users className="h-16 w-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Leadership</h3>
              <p className="text-slate-300">Led by retired military and police officers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Shield className="h-16 w-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Comprehensive Training</h3>
              <p className="text-slate-300">Rigorous training programs for all personnel</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Eye className="h-16 w-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-slate-300">Round-the-clock surveillance and response</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Assets?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a comprehensive security assessment and customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+94764112284"
              className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-200"
            >
              Call: 076 411 2284
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Users, 
  AlertTriangle, 
  Camera, 
  Car, 
  Building, 
  Heart,
  FileText,
  Clock
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Guard Services',
      description: 'Professional security personnel for residential, commercial, and industrial properties.',
      features: ['Armed & Unarmed Guards', 'Access Control', 'Patrol Services', 'Visitor Management']
    },
    {
      icon: Eye,
      title: 'Private Investigations',
      description: 'Confidential investigation services by experienced professionals.',
      features: ['Background Checks', 'Surveillance Operations', 'Corporate Investigations', 'Missing Person Cases']
    },
    {
      icon: AlertTriangle,
      title: 'Fire Safety & Emergency Planning',
      description: 'Comprehensive fire safety solutions and emergency response planning.',
      features: ['Fire Risk Assessment', 'Emergency Evacuation Plans', 'Safety Training', 'Compliance Audits']
    },
    {
      icon: Users,
      title: 'VIP Protection',
      description: 'Elite personal protection services for high-profile individuals.',
      features: ['Executive Protection', 'Event Security', 'Threat Assessment', 'Secure Transportation']
    },
    {
      icon: Camera,
      title: 'Surveillance & CCTV',
      description: 'Advanced surveillance systems and monitoring services.',
      features: ['CCTV Installation', '24/7 Monitoring', 'Remote Access', 'Digital Recording']
    },
    {
      icon: Car,
      title: 'Mobile Patrol Services',
      description: 'Regular patrol services for large properties and multiple locations.',
      features: ['Vehicle Patrols', 'Random Checks', 'Alarm Response', 'Property Inspections']
    },
    {
      icon: Building,
      title: 'Corporate Security',
      description: 'Comprehensive security solutions for businesses and organizations.',
      features: ['Risk Assessment', 'Security Consulting', 'Asset Protection', 'Incident Management']
    },
    {
      icon: Heart,
      title: 'First Aid & Medical Support',
      description: 'Trained personnel for medical emergencies and first aid response.',
      features: ['First Aid Training', 'Medical Emergency Response', 'Health & Safety', 'Certified Personnel']
    }
  ];

  const industries = [
    'Retail Chains & Shopping Centers',
    'Residential Apartments & Villas',
    'Hotels & Hospitality',
    'Office Complexes',
    'Educational Institutions',
    'Industrial & Manufacturing',
    'Construction Sites',
    'Financial Institutions',
    'Healthcare Facilities',
    'Events & Conferences'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Comprehensive security solutions tailored to meet the unique needs of every client, 
              delivered by our team of highly trained professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
                  className="bg-blue-900 text-white p-3 rounded-lg w-fit mb-4 group-hover:bg-[#2C4A39] transition-colors duration-300"
                >
                  <div className="bg-blue-900 text-white p-3 rounded-lg w-fit mb-4 group-hover:bg-red-600 transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-900 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our versatile security solutions cater to diverse sectors across Sri Lanka
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#2C4A39] rounded-full"></div>
                  <span className="text-gray-900 font-medium">{industry}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Qualifications */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Training & Excellence</h2>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Our personnel undergo rigorous training programs to ensure they meet the highest 
                standards of professionalism and competency in security operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-[#2C4A39]" />
                  <span>Security Ethics & Professional Conduct</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-[#2C4A39]" />
                  <span>Risk Assessment & Threat Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-[#2C4A39]" />
                  <span>First Aid & Emergency Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-[#2C4A39]" />
                  <span>Continuous Professional Development</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white bg-opacity-10 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Recruitment Standards</h3>
              <div className="space-y-4 text-blue-200">
                <div>
                  <strong className="text-white">Age Range:</strong> 18-60 years
                </div>
                <div>
                  <strong className="text-white">Height Requirements:</strong> 
                  <br />Male: Minimum 5'4" | Female: Minimum 5'2"
                </div>
                <div>
                  <strong className="text-white">Education:</strong> GCE O/L Pass minimum
                </div>
                <div>
                  <strong className="text-white">Clearances Required:</strong>
                  <br />• Police Clearance Certificate
                  <br />• Grama Niladhari Certificate
                  <br />• HR Clearance (for armed forces personnel)
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need a Custom Security Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our experts for a personalized consultation and security assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#2C4A39] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1F3329] transition-colors duration-200"
              >
                Request Consultation
              </a>
              <a
                href="tel:+94764112284"
                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
              >
                Call: 076 411 2284
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
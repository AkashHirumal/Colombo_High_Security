import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  FileText, 
  CheckCircle, 
  Building, 
  Users,
  Heart,
  AlertTriangle
} from 'lucide-react';

const CertificatesPage = () => {
  const certificates = [
    {
      icon: Shield,
      title: 'Ministry of Defence Registration',
      number: 'MOD/CSD/PS/01/938',
      description: 'Official government approval for security service operations',
      issuer: 'Ministry of Defence, Sri Lanka',
      status: 'Active',
      color: 'bg-blue-900'
    },
    {
      icon: FileText,
      title: 'Certificate of Incorporation',
      number: 'PV 00228468',
      description: 'Legal entity registration with the Registrar of Companies',
      issuer: 'Registrar of Companies, Sri Lanka',
      status: 'Active',
      color: 'bg-green-600'
    },
    {
      icon: Building,
      title: 'Tax Identification Certificate',
      number: 'TIN-334455789',
      description: 'Valid tax registration for business operations',
      issuer: 'Inland Revenue Department',
      status: 'Active',
      color: 'bg-purple-600'
    },
    {
      icon: Users,
      title: 'Employer Registration',
      number: 'ER-2025-0134',
      description: 'Authorization to hire and employ security personnel',
      issuer: 'Department of Labour',
      status: 'Active',
      color: 'bg-indigo-600'
    },
    {
      icon: Heart,
      title: 'Public Liability Insurance',
      number: 'PLI-CHS-2025-001',
      description: 'Comprehensive public liability coverage up to LKR 50 Million',
      issuer: 'National Insurance Trust Fund',
      status: 'Active',
      color: 'bg-red-600'
    },
    {
      icon: AlertTriangle,
      title: 'Workmen\'s Compensation Insurance',
      number: 'WCI-CHS-2025-002',
      description: 'Employee protection and compensation coverage',
      issuer: 'National Insurance Trust Fund',
      status: 'Active',
      color: 'bg-orange-600'
    }
  ];

  const complianceItems = [
    'Ministry of Defence Security Service Provider Registration',
    'Sri Lanka Police Department Clearance',
    'Inland Revenue Department Tax Compliance',
    'Employees Provident Fund Registration',
    'Employees Trust Fund Registration',
    'National Insurance Trust Fund Coverage',
    'Department of Labour Compliance',
    'Municipal Council Business License',
    'Fire Department Safety Clearance',
    'Environmental Protection License'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificates & Approvals</h1>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Fully licensed, insured, and compliant with all government regulations 
              to ensure the highest standards of security service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Official Certifications</h2>
            <p className="text-xl text-gray-600">
              Our comprehensive licensing ensures complete legal compliance and client protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`${cert.color} text-white p-3 rounded-lg w-fit mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <div className="mb-3">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-mono">
                      {cert.number}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500 mb-2">
                      <strong>Issuer:</strong> {cert.issuer}
                    </p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-semibold text-green-600">{cert.status}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Regulatory Compliance
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We maintain full compliance with all relevant Sri Lankan laws and regulations 
                governing security service providers. Our comprehensive licensing ensures that 
                all operations are conducted within legal frameworks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Regular audits and renewal processes ensure our certifications remain current 
                and our operations continue to meet evolving regulatory standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Compliance Checklist
              </h3>
              <div className="space-y-3">
                {complianceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Insurance Coverage</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Protecting our clients and personnel with extensive insurance coverage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white bg-opacity-10 p-8 rounded-xl"
            >
              <Heart className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Public Liability Insurance</h3>
              <div className="space-y-2 text-blue-200">
                <p><strong>Coverage:</strong> LKR 50 Million</p>
                <p><strong>Provider:</strong> National Insurance Trust Fund</p>
                <p><strong>Covers:</strong> Third-party property damage, injury claims, professional liability</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white bg-opacity-10 p-8 rounded-xl"
            >
              <Users className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Workmen's Compensation</h3>
              <div className="space-y-2 text-blue-200">
                <p><strong>Coverage:</strong> Full Employee Protection</p>
                <p><strong>Provider:</strong> National Insurance Trust Fund</p>
                <p><strong>Covers:</strong> Workplace injuries, medical expenses, disability benefits</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact for Verification */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certificate Verification
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              All our certificates and licenses can be independently verified with the issuing authorities. 
              Contact us for detailed documentation.
            </p>
            <a
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Request Documentation</span>
              <FileText className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CertificatesPage;
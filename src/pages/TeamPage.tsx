import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, Users } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'KAU Ishara Gunasekara',
      position: 'Managing Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading the organization with strategic vision and operational excellence. Brings extensive experience in security management and business development.',
      qualifications: ['Security Management Certification', 'Business Administration'],
      contact: { email: 'md@colombosecurity.lk', phone: '076 411 2284' }
    },
    {
      name: 'DIG (Retd.) Lal Seneviratne',
      position: 'Director Operations',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Retired Deputy Inspector General with decades of experience in law enforcement and security operations. Oversees all operational aspects of the company.',
      qualifications: ['Police Leadership', 'Security Operations', 'Crisis Management'],
      contact: { email: 'operations@colombosecurity.lk', phone: '076 060 1645' }
    },
    {
      name: 'Mr. Chamara Perera',
      position: 'Director Admin & Finance',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Experienced finance professional managing administrative operations and financial planning with meticulous attention to detail.',
      qualifications: ['Chartered Accountant', 'Financial Management', 'Corporate Administration'],
      contact: { email: 'finance@colombosecurity.lk', phone: '077 769 6567' }
    },
    {
      name: 'Major (Retd.) Namal Rathnayake',
      position: 'Co-Director Operations',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Retired military officer with extensive experience in tactical operations and personnel management. Co-leads operational strategies and field operations.',
      qualifications: ['Military Leadership', 'Tactical Operations', 'Personnel Management'],
      contact: { email: 'codirector@colombosecurity.lk', phone: '076 476 0546' }
    },
    {
      name: 'Naval Officer (Retd.) Ajantha Weerasinghe',
      position: 'Operations & Business Development Manager',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former naval officer bringing maritime and coastal security expertise. Manages operations coordination and business development initiatives.',
      qualifications: ['Naval Operations', 'Business Development', 'Strategic Planning'],
      contact: { email: 'bizdev@colombosecurity.lk', phone: '076 411 2284' }
    },
    {
      name: 'Mr. AK Dilruk',
      position: 'Director – Training',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in security training and personnel development. Designs and implements comprehensive training programs for all security personnel.',
      qualifications: ['Training & Development', 'Security Education', 'Curriculum Design'],
      contact: { email: 'training@colombosecurity.lk', phone: '077 769 6567' }
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Led by experienced professionals from military, police, and security backgrounds, 
              our team brings decades of combined expertise to every security challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:space-x-6">
                  <div className="flex-shrink-0 mb-6 md:mb-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-900 font-semibold mb-4">{member.position}</p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-red-600" />
                        Qualifications
                      </h4>
                      <ul className="space-y-1">
                        {member.qualifications.map((qual, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-blue-900 rounded-full mr-2"></div>
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="h-4 w-4 text-blue-900" />
                        <span>{member.contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="h-4 w-4 text-blue-900" />
                        <span>{member.contact.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team by the Numbers</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your security</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white p-6 rounded-xl shadow-md"
            >
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Trained Personnel</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white p-6 rounded-xl shadow-md"
            >
              <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-xl shadow-md"
            >
              <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600">Senior Leadership</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white p-6 rounded-xl shadow-md"
            >
              <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Professional Commitment</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Professional Team
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              We're always looking for dedicated professionals to join our growing team. 
              Apply today and be part of Sri Lanka's premier security service provider.
            </p>
            <a
              href="/contact"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Apply Now</span>
              <Users className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
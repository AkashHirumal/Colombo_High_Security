import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Award, Users } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'KAU Ishara Gunasekara',
      position: 'Managing Director',
      image: 'https://i.postimg.cc/bZRhXFNX/Untitled-design.png',
      bio: 'Leading the organization with strategic vision and operational excellence. Brings extensive experience in security management and business development.',
      qualifications: ['Security Management Certification', 'Business Administration']
    },
    {
      name: 'DIG (Retd.) Lal Seneviratne',
      position: 'Director Operations',
      image: 'https://i.postimg.cc/F7ZWht35/1555754.png',
      bio: 'Retired Deputy Inspector General with decades of experience in law enforcement and security operations. Oversees all operational aspects of the company.',
      qualifications: ['Police Leadership', 'Security Operations', 'Crisis Management']
    },
    {
      name: 'Mr. Chamara Perera',
      position: 'Director Admin & Finance',
      image: 'https://i.postimg.cc/F7ZWht35/1555754.png',
      bio: 'Experienced finance professional managing administrative operations and financial planning with meticulous attention to detail.',
      qualifications: ['Chartered Accountant', 'Financial Management', 'Corporate Administration']
      
    },
    {
      name: 'Major (Retd.) Namal Rathnayake',
      position: 'Co-Director Operations',
      image: 'https://i.postimg.cc/F7ZWht35/1555754.png',
      bio: 'Retired military officer with extensive experience in tactical operations and personnel management. Co-leads operational strategies and field operations.',
      qualifications: ['Military Leadership', 'Tactical Operations', 'Personnel Management']
      
    },
    {
      name: 'Major (Retd.) S.A.P. Peiris',
      position: 'Operations & Business Development Manager',
      image: 'https://i.postimg.cc/F7ZWht35/1555754.png',
      bio: 'Retired Sri Lanka Army officer with 24+ years of service, specializing in leadership, strategic planning, and security management. Combines military discipline with business expertise to drive operational excellence and organizational growth.',
      qualifications: ['Security Operations', 'Leadership & Command', 'Strategic Planning']

    },
    {
      name: 'Mr. AK Dilruk',
      position: 'Director – Training',
      image: 'https://i.postimg.cc/F7ZWht35/1555754.png',
      bio: 'Expert in security training and personnel development. Designs and implements comprehensive training programs for all security personnel.',
      qualifications: ['Training & Development', 'Security Education', 'Curriculum Design']
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white py-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
        <div className="absolute inset-0 bg-slate-800 bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
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
                    <p className="text-slate-700 font-semibold mb-4">{member.position}</p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-orange-600" />
                        Qualifications
                      </h4>
                      <ul className="space-y-1">
                        {member.qualifications.map((qual, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1 h-1 bg-slate-700 rounded-full mr-2"></div>
                            {qual}
                          </li>
                        ))}
                      </ul>
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
              <Users className="h-12 w-12 text-slate-700 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Trained Personnel</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white p-6 rounded-xl shadow-md"
            >
              <Award className="h-12 w-12 text-slate-700 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-xl shadow-md"
            >
              <Users className="h-12 w-12 text-slate-700 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600">Senior Leadership</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white p-6 rounded-xl shadow-md"
            >
              <Award className="h-12 w-12 text-slate-700 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Professional Commitment</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Professional Team
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We're always looking for dedicated professionals to join our growing team. 
              Apply today and be part of Sri Lanka's premier security service provider.
            </p>
            <a
              href="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-flex items-center space-x-2"
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
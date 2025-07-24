import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-white" />
              <div>
                <h3 className="text-xl font-bold">Colombo High Security</h3>
                <p className="text-sm text-blue-200">(Pvt) Ltd</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Government-approved security and investigation company providing professional 
              security solutions across Sri Lanka since 2025.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <p className="font-semibold">MOD Registration: MOD/CSD/PS/01/938</p>
              <p>Trustworthy • Disciplined • Secure</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/services" className="hover:text-white transition-colors">Security Services</a></li>
              <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm">4th Floor, No.280A,<br />Lake Road, Maharagama,<br />Sri Lanka</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm">076 411 2284</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm">info@colombosecurity.lk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2026 Colombo High Security (Pvt) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
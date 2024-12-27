import React from 'react';

const Footer = () => {
  const sections = [
    { t: 'Solutions', i: ['Marketing', 'Analytics', 'Automation', 'Commerce', 'Insights'] },
    { t: 'Support', i: ['Submit Ticket', 'Documentation', 'Guides'] },
    { t: 'Company', i: ['About', 'Blog', 'Jobs', 'Press'] },
    { t: 'Legal', i: ['Terms of Service', 'Privacy Policy', 'License'] },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
        {sections.map((s, idx) => (
          <div key={idx}>
            <h4 className="text-lg font-medium text-gray-900 mb-4">{s.t}</h4>
            <ul className="space-y-2">
              {s.i.map((item, i) => <li key={i} className="text-gray-600 hover:text-gray-900 cursor-pointer">{item}</li>)}
            </ul>
          </div>
        ))}
        <div className="md:col-span-2 lg:col-span-1">
          <h4 className="text-lg font-medium text-gray-900 mb-4">Subscribe</h4>
          <p className="text-gray-600 mb-4">News, articles, resources weekly.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Email" className="border px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-md">Subscribe</button>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Your Company</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <i className="fab fa-facebook-f cursor-pointer hover:text-gray-700"></i>
            <i className="fab fa-instagram cursor-pointer hover:text-gray-700"></i>
            <i className="fab fa-twitter cursor-pointer hover:text-gray-700"></i>
            <i className="fab fa-github cursor-pointer hover:text-gray-700"></i>
            <i className="fab fa-youtube cursor-pointer hover:text-gray-700"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
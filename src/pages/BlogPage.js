import React, { useRef } from 'react';
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Nav'
import track1 from '../Assets/track1.jpg'
import shareholder from '../Assets/shareholder.png'
import fintech  from '../Assets/fintech.jpg'
// import { arrowup, people03, shield } from '../Assets';
import './styles.css'
const BlogPage = () => {
    const contactRef = useRef(null);
  
    const scrollToSection = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 100, 
                behavior: 'smooth'
            });
        }
    };
  return (
    <section>
    < Navbar  scrollToSection={scrollToSection} refs={{ contactRef }} />
    <div className='styles'>
          <div className='container'>
          <div className="max-w-screen-lg mx-auto p-4 mb-24">
      <h1 className="text-3xl font-bold text-center mb-8 mt-15">Blogs</h1>

      <div className="space-y-8">
        {/* Post 1 */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg mt-15">
          <div className="flex space-x-4">
            <div className="w-1/3 bg-gray-200 h-48 rounded-lg">
              <img 
                src= {fintech }
                alt="Blog Post 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold">VATO Bank Wins Best FINTECH Bank in Nigeria in the Global Finance Best Banks Awards 2024</h2>
              <p className="text-gray-700 mt-2">VATO Bank has been named “Best Bank in Nigeria” in the Global Finance Best Banks Awards 2024, 
                winning the award for the fifth time in six years. The Bank was among winners from 36 countries in Africa recognised by the prestigious 
                Global Finance in its 32nd Annual Best Bank Awards.</p>
              <button className="mt-4 text-blue-500 hover:underline">Read more...</button>
            </div>
          </div>
        </div>

        {/* Post 2 */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg mt-36">
          <div className="flex space-x-4">
            <div className="w-1/3 bg-gray-200 h-48 rounded-lg">
              <img 
                src= {shareholder}
                alt="Blog Post 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold">VATO Bank Delights Shareholders with Dividend Payout of N195.67 Billion, Promises Quantum Leap in Future Dividends</h2>
              <p className="text-gray-700 mt-2">Shareholders of VATO Bank Plc, at the 34th Annual General Meeting (AGM) held at the Civic Centre, Victoria Island, Lagos, 
                on Tuesday, April 29, 2025, approved the proposed final dividend payment of NGN4.00 per share, bringing the total dividend for the 2024 financial year to NGN5.00 per share, 
                with a total value of NGN195.67 billion.</p>
              <button className="mt-4 text-blue-500 hover:underline">Read more...</button>
            </div>
          </div>
        </div>

        {/* Post 3 */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg mt-36">
          <div className="flex space-x-4">
            <div className="w-1/3 bg-gray-200 h-48 rounded-lg">
              <img 
                src={ track1}
                alt="Blog Post 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold">VATO Bank Maintains Impressive Track Record as PBT Hits N1.3 Trillion, Proposes N4.00 Final Dividend</h2>
              <p className="text-gray-700 mt-2">VATO Bank has announced its audited financial results for the year ended December 31, 2024, delivering significant 
                growth across key performance indicators. The Bank's impressive performance reflects effective management and pricing of its risk assets, as well 
                as an optimized treasury portfolio, reinforcing its position as a leader in Nigeria's banking industry.</p>
              <button className="mt-4 text-blue-500 hover:underline">Read more...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
      </div>
   
    < Footer />
    </section>
  );
};

export default BlogPage;

import React from 'react';

const AcheckLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 tracking-tighter">
          acheck
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition">How it Works</a>
          <a href="#community" className="text-gray-600 hover:text-blue-600 transition">Community</a>
        </div>
        <div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-sm">
            Join the Beta
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
          Build better habits. <br className="hidden md:block" /> <span className="text-blue-600">Together.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          The accountability app built to keep you and your friends on track. Log your workouts, dial in your calories, and watch your daily check-ins turn into unbreakable habits.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg w-full sm:w-auto">
            Download for iOS
          </button>
          <button className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition shadow-sm w-full sm:w-auto">
            Download for Android
          </button>
        </div>
        
        {/* Mockup Placeholder */}
        <div className="mt-16 mx-auto w-full max-w-4xl h-96 bg-gray-900 rounded-2xl border-4 border-gray-800 shadow-2xl flex flex-col items-center justify-center overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80"></div>
           
           {/* Faux App UI inside the mockup */}
           <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-left">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl">Today's Check-ins</h3>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  🔥 14 Day Streak
                </span>
             </div>
             
             <div className="space-y-4">
               <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">You</div>
                 <div className="flex-1">
                   <p className="font-semibold text-sm">Post-Workout Meal</p>
                   <p className="text-xs text-gray-500">Logged: 200g beef, 150g rice</p>
                 </div>
                 <div className="text-green-500">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
               </div>

               <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                 <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">AL</div>
                 <div className="flex-1">
                   <p className="font-semibold text-sm">Morning Lift</p>
                   <p className="text-xs text-gray-500">Alex completed: Pull Day</p>
                 </div>
                 <div className="text-green-500">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
               </div>
             </div>
           </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accountability is everything.</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Stop going at it alone. acheck gives you the tools to measure your progress and the community to make sure you stick to it.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1: Social Accountability */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Squad Goals</h3>
              <p className="text-gray-600">Keep your friends accountable. See when your group checks in for their workouts or meals, and send nudges when they fall behind.</p>
            </div>
            
            {/* Feature 2: Diet & Fitness Tracking */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Precise Tracking</h3>
              <p className="text-gray-600">From gym sessions to weight-based meal prep, log your habits with precision. Easily input your daily calories or custom smoothies to stay strictly on target.</p>
            </div>
            
            {/* Feature 3: Habit Streaks */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build the Streak</h3>
              <p className="text-gray-600">Consistency is key. Check in daily to build your momentum, visually track how close you are to forming a permanent habit, and never break the chain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start building habits today.</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            Invite your friends, set your goals, and let acheck keep you all accountable.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Create Your Group
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400 text-sm border-t border-gray-800">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white tracking-tighter mb-4">acheck</div>
            <p>Accountability and habit tracking for you and your friends.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Download</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} acheck Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AcheckLandingPage;
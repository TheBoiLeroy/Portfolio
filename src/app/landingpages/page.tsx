'use client';

import React from 'react';
import Image from 'next/image'; // Import added to fix LCP warning
import { useForm, ValidationError } from '@formspree/react';

export default function ContractorWorks() {
  const [state, handleSubmit] = useForm("xnjopyyp");

  return (
    <div className="min-h-screen bg-[#131313] text-[#c3c5d8] font-sans selection:bg-[#2962ff] selection:text-white">

      {/* TopNavBar Component */}
      <header className="fixed top-0 w-full z-50 bg-[#1C1B1B] font-['Manrope'] font-bold tracking-tight border-b border-zinc-800/50">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            {/* Optimized Next.js Image component */}
            <Image 
              src="/images/projectimgs/logos/logo_ios.png"
              alt="Contractor Works Logo" 
              width={40} 
              height={40}
              className="rounded-xl object-contain bg-[#201f1f] p-1 border border-zinc-700/50"
            />
            <div className="text-xl font-black text-white tracking-tighter">
              Contractor Works
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" 
               style={{ background: 'radial-gradient(circle at 50% -20%, #2962ff33 0%, #131313 70%)' }}></div>
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h1 className="font-['Manrope'] text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
              Command Your <br /> <span className="text-[#2962ff]">Empire</span> with Contractor Works
            </h1>
            <p className="text-lg md:text-xl text-[#c3c5d8] max-w-2xl mx-auto leading-relaxed">
              Streamline contractor management, job assignments, and payments with professional-grade precision. Engineered for the high-stakes site.
            </p>

            <div className="max-w-md mx-auto pt-6">
              {state.succeeded ? (
                <div className="p-4 bg-[#00e47522] border border-[#00e475] rounded-lg text-[#00e475] font-bold animate-pulse">
                  ✓ You&apos;ve been added to the testing list! {/* Fixed apostrophe here */}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <input
                      id="email"
                      type="email" 
                      name="email"
                      placeholder="Enter your email to join testing"
                      required
                      className="w-full md:w-80 px-6 py-4 bg-[#1c1b1b] border border-[#434656] rounded-lg text-white focus:outline-none focus:border-[#2962ff] transition-all"
                    />
                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full md:w-auto px-8 py-4 bg-[#2962ff] text-white rounded-lg font-bold text-lg hover:brightness-110 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {state.submitting ? 'Sending...' : 'Join Testing'}
                    </button>
                  </div>
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm font-bold"
                  />
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Product Showcase (Bento Grid) */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-[#1c1b1b] p-8 rounded-xl flex flex-col justify-between border-l-2 border-[#2962ff]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#2962ff]">location_on</span>
                  <span className="text-xs font-bold tracking-[0.1em] text-[#2962ff] uppercase">ACTIVE DEPLOYMENT</span>
                </div>
                <h3 className="font-['Manrope'] text-3xl text-white mb-4">Real-time Job Tracking</h3>
                <p className="text-[#c3c5d8] mb-8 max-w-md">Monitor site progress across 50+ locations simultaneously with live GPS telemetry and automated milestone reporting.</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#201f1f] p-4 rounded-lg text-center">
                  <div className="text-[#2962ff] font-['Manrope'] text-2xl font-bold">84%</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">Completion</div>
                </div>
                <div className="bg-[#201f1f] p-4 rounded-lg text-center">
                  <div className="text-[#00e475] font-['Manrope'] text-2xl font-bold">12</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">Active Sites</div>
                </div>
                <div className="bg-[#201f1f] p-4 rounded-lg text-center">
                  <div className="text-white font-['Manrope'] text-2xl font-bold">2.4k</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">Man Hours</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#201f1f] p-8 rounded-xl border-l-2 border-[#00e475]">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#00e475]">payments</span>
                <span className="text-xs font-bold tracking-[0.1em] text-[#00e475] uppercase">LEDGER</span>
              </div>
              <h3 className="font-['Manrope'] text-3xl text-white mb-4">Know Your Liquidity</h3>
              <p className="text-[#c3c5d8] mb-8">One-click reconciliation and instant payouts for field contractors.</p>
              <div className="space-y-4">
                {[
                  { name: 'H. Smith - Framing', status: 'PAID', color: 'bg-[#008240] text-[#00e475]' },
                  { name: 'L. Miller - Electrical', status: 'UNPAID', color: 'bg-[#93000a] text-[#ffb4ab]' },
                  { name: 'K. Chen - Plumbing', status: 'PENDING', color: 'bg-[#474747] text-[#c8c6c5]' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg ${idx === 2 ? 'opacity-50' : ''}`}>
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#131313] w-full py-12 border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6 text-sm tracking-wide">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold text-white">Contractor Works</div>
            <p className="text-zinc-500">© 2026 Contractor Works Management. Built for the high-stakes site.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
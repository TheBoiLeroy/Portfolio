import React from 'react';

export default function ContractorWorks() {
  return (
    <div className="min-h-screen bg-[#131313] text-[#c3c5d8] font-sans selection:bg-[#2962ff] selection:text-white">
      {/* Material Symbols Link - Ideally move this to your layout.tsx head */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* TopNavBar Component */}
      <header className="fixed top-0 w-full z-50 bg-[#1C1B1B] font-['Manrope'] font-bold tracking-tight border-b border-zinc-800/50">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-black text-white tracking-tighter">Contractor Works</div>
          <div className="hidden md:flex items-center gap-8">
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 rounded-md bg-[#2962ff] text-white active:scale-95 duration-200 transition-all text-sm font-bold">
              Login
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          {/* Custom Hero Gradient Background */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{ background: 'radial-gradient(circle at 50% -20%, #2962ff33 0%, #131313 70%)' }}></div>
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h1 className="font-['Manrope'] text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
              Command Your <br /> <span className="text-[#2962ff]">Empire</span> with Contractor Works
            </h1>
            <p className="text-lg md:text-xl text-[#c3c5d8] max-w-2xl mx-auto leading-relaxed">
              Streamline contractor management, job assignments, and payments with professional-grade precision. Engineered for the high-stakes site.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full md:w-auto px-8 py-4 bg-[#2962ff] text-white rounded-lg font-bold text-lg hover:brightness-110 transition-all active:scale-95">
                Get Started Now
              </button>
              <button className="w-full md:w-auto px-8 py-4 border border-[#434656] text-white rounded-lg font-bold text-lg hover:bg-[#1c1b1b] transition-all">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Product Showcase (Bento Grid) */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Real-time Tracking */}
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
                <div className="bg-[#201f1f] p-4 rounded-lg">
                  <div className="text-[#2962ff] font-['Manrope'] text-2xl font-bold">84%</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">Completion</div>
                </div>
                <div className="bg-[#201f1f] p-4 rounded-lg">
                  <div className="text-[#00e475] font-['Manrope'] text-2xl font-bold">12</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">Active Sites</div>
                </div>
                <div className="bg-[#201f1f] p-4 rounded-lg">
                  <div className="text-white font-['Manrope'] text-2xl font-bold">2.4k</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">Man Hours</div>
                </div>
              </div>
            </div>

            {/* Integrated Payments */}
            <div className="md:col-span-4 bg-[#201f1f] p-8 rounded-xl border-l-2 border-[#00e475]">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#00e475]">payments</span>
                <span className="text-xs font-bold tracking-[0.1em] text-[#00e475] uppercase">LEDGER</span>
              </div>
              <h3 className="font-['Manrope'] text-3xl text-white mb-4">Instant Liquidity</h3>
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

            {/* Contractor Dashboard */}
            <div className="md:col-span-12 bg-[#1c1b1b] rounded-xl overflow-hidden flex flex-col md:flex-row group">
              <div className="p-12 md:w-1/2">
                <h3 className="font-['Manrope'] text-4xl text-white mb-6 leading-tight">Elite Contractor <br />Experience</h3>
                <p className="text-lg text-[#c3c5d8] mb-8 leading-relaxed">
                  Empower your workforce with a white-labeled dashboard. They get clear tasks; you get total transparency. No more phone tag or missing invoices.
                </p>
                <ul className="space-y-4">
                  {['Mobile-first task assignment', 'Automated photo documentation'].map((text) => (
                    <li key={text} className="flex items-center gap-3 text-white">
                      <span className="material-symbols-outlined text-[#2962ff]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 bg-[#353534] relative min-h-[300px]">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b1b] to-transparent z-10"></div>
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-zinc-500 text-sm">Contractor Interface View</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-[#0e0e0e]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.2em] text-[#2962ff] uppercase mb-4 block">Engineered Outcomes</span>
              <h2 className="font-['Manrope'] text-4xl md:text-5xl text-white">The Executive Advantage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: 'calendar_today', title: 'Precision Scheduling', color: 'text-[#2962ff]', text: 'Eliminate overlapping shifts and crew conflicts. Our algorithmic engine optimizes deployment based on site priority.' },
                { icon: 'account_balance', title: 'Instant Reconciliation', color: 'text-[#00e475]', text: 'Close the gap between work done and money moved. Automated audit logs ensure every dollar is accounted for.' },
                { icon: 'visibility', title: 'Contractor Transparency', color: 'text-white', text: 'Foster trust through data. Contractors see exactly where they stand, what they’ve earned, and what’s next.' }
              ].map((benefit, i) => (
                <div key={i} className="space-y-6">
                  <div className="w-12 h-12 bg-[#393939] rounded-lg flex items-center justify-center">
                    <span className={`material-symbols-outlined ${benefit.color} text-3xl`}>{benefit.icon}</span>
                  </div>
                  <h4 className="font-['Manrope'] text-2xl text-white">{benefit.title}</h4>
                  <p className="text-[#c3c5d8] leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="material-symbols-outlined text-[#2962ff] text-6xl mb-8 opacity-50">format_quote</span>
            <blockquote className="font-['Manrope'] text-3xl md:text-4xl text-white italic leading-snug mb-8">
              "Contractor Works isn’t just a tool; it’s our central nervous system. We scaled from 5 to 22 active job sites in six months without adding a single administrative hire."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#201f1f]"></div>
              <div className="text-left">
                <div className="font-['Manrope'] text-white font-bold">Marcus Vanguard</div>
                <div className="text-xs text-[#c3c5d8] uppercase tracking-widest">Senior Project Manager, Apex Build Group</div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2962ff]/5 rounded-full blur-[100px]"></div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-[#201f1f] rounded-2xl p-12 md:p-20 text-center relative overflow-hidden group border border-zinc-800">
            <div className="relative z-10 space-y-8">
              <h2 className="font-['Manrope'] text-4xl md:text-6xl text-white font-extrabold tracking-tight">Ready to transform your workflow?</h2>
              <p className="text-xl text-[#c3c5d8] max-w-2xl mx-auto">Join the elite firms managing billions in construction assets on the Contractor Works platform.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                <button className="w-full md:w-auto px-10 py-5 bg-[#2962ff] text-white rounded-lg font-bold text-xl hover:shadow-[0_0_30px_rgba(41,98,255,0.4)] transition-all">
                  Start Free Trial
                </button>
                <a className="text-white font-bold flex items-center gap-2 group/link hover:text-[#2962ff] transition-colors" href="#">
                  Schedule a Private Demo
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-[#131313] w-full py-12 border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6 text-sm tracking-wide">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-bold text-white">Contractor Works</div>
            <p className="text-zinc-500">© 2024 Contractor Works Management. Built for the high-stakes site.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-zinc-500 hover:text-[#2962ff] transition-colors" href="#">Privacy Policy</a>
            <a className="text-zinc-500 hover:text-[#2962ff] transition-colors" href="#">Terms</a>
            <a className="text-zinc-500 hover:text-[#2962ff] transition-colors" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
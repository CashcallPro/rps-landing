import React from 'react';
import Header from './Header';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[rgb(235,234,231)]">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-[#191970] mb-8">Terms of Service</h1>
            
            <div className="space-y-6 text-[#191970]/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using RPS Titans, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Game Rules and Fair Play</h2>
                <p>Players must engage in fair play and are prohibited from using any cheating methods, bots, or exploits. Any violation may result in account suspension or termination.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Virtual Assets and Rewards</h2>
                <p>All virtual assets, tokens, and rewards earned in the game are subject to the game's terms and conditions. RPS Titans reserves the right to modify reward structures.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
                <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p>RPS Titans shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
                <p>We reserve the right to modify these terms at any time. Users will be notified of significant changes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us at support@rpstitans.xyz</p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-[#191970]/20">
              <p className="text-sm text-[#191970]/60">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
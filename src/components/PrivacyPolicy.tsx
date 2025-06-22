import React from 'react';
import Header from './Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[rgb(235,234,231)]">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-[#191970] mb-8">Privacy Policy</h1>
            
            <div className="space-y-6 text-[#191970]/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, participate in games, or contact us for support. This may include your Telegram username, game statistics, and communication preferences.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our gaming services</li>
                  <li>To process transactions and manage rewards</li>
                  <li>To communicate with you about the game and updates</li>
                  <li>To improve our services and user experience</li>
                  <li>To ensure fair play and prevent cheating</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Telegram Integration</h2>
                <p>Our game operates through Telegram. Please review Telegram's privacy policy to understand how they handle your data when using their platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                <p>We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@rpstitans.xyz</p>
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

export default PrivacyPolicy;

import React from "react";
import PageTemplate from "../components/PageTemplate";

const Terms = () => {
  return (
    <PageTemplate 
      title="Terms of Service"
      description="Read our terms of service and understand the conditions for using Synapse International's services"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-synapse-gray">
              Last updated: June 8, 2025
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">1. Acceptance of Terms</h2>
              <p className="text-synapse-gray leading-relaxed">
                By accessing and using Synapse International's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">2. Description of Service</h2>
              <p className="text-synapse-gray leading-relaxed">
                Synapse International provides AI-powered recruitment and talent acquisition services, including but not limited to candidate sourcing, screening, placement services, recruitment consulting, and technology solutions. Our services are designed to help organizations find and hire qualified candidates efficiently using advanced artificial intelligence and automation technologies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">3. User Responsibilities</h2>
              <p className="text-synapse-gray leading-relaxed mb-4">By using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-synapse-gray space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes and in accordance with applicable employment laws</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Respect the intellectual property rights of Synapse International and third parties</li>
                <li>Comply with all applicable laws and regulations, including but not limited to employment, privacy, and anti-discrimination laws</li>
                <li>Maintain the confidentiality of any sensitive information shared during the recruitment process</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">4. Service Availability</h2>
              <p className="text-synapse-gray leading-relaxed">
                While we strive to maintain continuous service availability, we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice. We will make reasonable efforts to provide advance notice of planned maintenance or significant service changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">5. Payment Terms</h2>
              <p className="text-synapse-gray leading-relaxed">
                Payment terms for our recruitment services will be specified in individual service agreements. Unless otherwise agreed upon in writing, payment is due within 30 days of invoice date. Late payments may be subject to additional fees as specified in your service agreement. All fees are non-refundable unless otherwise stated in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">6. Confidentiality</h2>
              <p className="text-synapse-gray leading-relaxed">
                We understand the sensitive nature of recruitment information. Both parties agree to maintain the confidentiality of all proprietary and confidential information shared during the course of our business relationship, including candidate information, job requirements, and business strategies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">7. Limitation of Liability</h2>
              <p className="text-synapse-gray leading-relaxed">
                Synapse International shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">8. Intellectual Property</h2>
              <p className="text-synapse-gray leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and designs, are owned by Synapse International and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">9. Termination</h2>
              <p className="text-synapse-gray leading-relaxed">
                Either party may terminate this agreement at any time with written notice. Upon termination, your right to use our services will cease immediately, though certain provisions of these terms will survive termination.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">10. Data Protection and GDPR Compliance</h2>
              <p className="text-synapse-gray leading-relaxed">
                We are committed to protecting your personal data and complying with applicable data protection laws, including GDPR where applicable. Our data processing activities are governed by our Privacy Policy, which forms an integral part of these terms. You have rights regarding your personal data as outlined in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">11. Changes to Terms</h2>
              <p className="text-synapse-gray leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">12. Governing Law</h2>
              <p className="text-synapse-gray leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of British Columbia, Canada.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">13. Contact Information</h2>
              <p className="text-synapse-gray leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-synapse-lighter/50 rounded-lg">
                <p className="text-synapse-gray">
                  Email: <a href="mailto:info@synapseint.com" className="text-synapse-primary hover:underline">info@synapseint.com</a><br />
                  Address: 1927 W Broadway #203, Vancouver, BC V6J 1Z3, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Terms;

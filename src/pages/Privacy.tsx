import React from "react";
import PageTemplate from "../components/PageTemplate";

const Privacy = () => {
  return (
    <PageTemplate 
      title="Privacy Policy"
      description="Learn how Synapse International collects, uses, and protects your personal information"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-synapse-gray">
              Last updated: December 15, 2024
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">Privacy Notice</h2>
              <p className="text-synapse-gray leading-relaxed mb-4">
                This privacy notice for Synapse International ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
              </p>
              <ul className="list-disc pl-6 text-synapse-gray space-y-2">
                <li>Visit our website at synapseint.com, or any website of ours that links to this privacy notice</li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="text-synapse-gray leading-relaxed mt-4">
                <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@synapseint.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">What Information Do We Collect?</h2>
              
              <h3 className="text-xl font-semibold text-synapse-dark mb-3">Personal Information You Disclose to Us</h3>
              <p className="text-synapse-gray leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>
              
              <p className="text-synapse-gray leading-relaxed mb-4">
                <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>
              
              <ul className="list-disc pl-6 text-synapse-gray space-y-1 mb-4">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Mailing addresses</li>
                <li>Job titles</li>
                <li>Contact preferences</li>
                <li>Contact or authentication data</li>
                <li>Resume and professional information (for recruitment purposes)</li>
                <li>Company information and hiring requirements</li>
              </ul>
              
              <p className="text-synapse-gray leading-relaxed">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
              </p>

              <h3 className="text-xl font-semibold text-synapse-dark mb-3 mt-6">Information Automatically Collected</h3>
              <p className="text-synapse-gray leading-relaxed mb-4">
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and other technical information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">How Do We Process Your Information?</h2>
              <p className="text-synapse-gray leading-relaxed mb-4">
                We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
              </p>
              <ul className="list-disc pl-6 text-synapse-gray space-y-2">
                <li>To facilitate recruitment and talent acquisition services</li>
                <li>To respond to user inquiries and offer support to users</li>
                <li>To send administrative information to you</li>
                <li>To request feedback and improve our services</li>
                <li>To send you marketing and promotional communications</li>
                <li>To deliver targeted advertising to you</li>
                <li>To protect our Services and investigate potential violations</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">When and With Whom Do We Share Your Personal Information?</h2>
              <p className="text-synapse-gray leading-relaxed mb-4">
                We may need to share your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-synapse-gray space-y-2">
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>With Clients:</strong> For recruitment purposes, we may share candidate information with our clients who are seeking to hire talent, with appropriate consent.</li>
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services for us or on our behalf.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">How Long Do We Keep Your Information?</h2>
              <p className="text-synapse-gray leading-relaxed">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">Do We Use Cookies and Other Tracking Technologies?</h2>
              <p className="text-synapse-gray leading-relaxed">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">What Are Your Privacy Rights?</h2>
              <p className="text-synapse-gray leading-relaxed mb-4">
                In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right to:
              </p>
              <ul className="list-disc pl-6 text-synapse-gray space-y-2">
                <li>Request access and obtain a copy of your personal information</li>
                <li>Request rectification or erasure</li>
                <li>Restrict the processing of your personal information</li>
                <li>Data portability (if applicable)</li>
                <li>Object to the processing of your personal information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">How Can You Contact Us About This Notice?</h2>
              <p className="text-synapse-gray leading-relaxed">
                If you have questions or comments about this notice, you may email us at <a href="mailto:info@synapseint.com" className="text-synapse-primary hover:underline">info@synapseint.com</a> or contact us by post at:
              </p>
              <div className="mt-4 p-4 bg-synapse-lighter/50 rounded-lg">
                <p className="text-synapse-gray">
                  Synapse International<br />
                  1927 W Broadway #203<br />
                  Vancouver, BC V6J 1Z3<br />
                  Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Privacy;

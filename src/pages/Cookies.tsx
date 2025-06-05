
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cookieTypes = [
  {
    type: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you.",
    examples: ["Session management", "Security features", "Basic functionality"]
  },
  {
    type: "Performance Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    examples: ["Page views", "User interactions", "Site performance metrics"]
  },
  {
    type: "Functional Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalization based on your interactions.",
    examples: ["Language preferences", "Region selection", "User interface customization"]
  },
  {
    type: "Marketing Cookies",
    description: "These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts.",
    examples: ["Targeted advertising", "Social media integration", "Marketing campaign tracking"]
  }
];

const Cookies = () => {
  return (
    <PageTemplate 
      title="Cookie Policy"
      description="Learn about how Synapse International uses cookies and similar technologies on our website"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-synapse-gray">
              Last updated: December 15, 2024
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">What Are Cookies?</h2>
              <p className="text-synapse-gray leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and enhance user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">How We Use Cookies</h2>
              <p className="text-synapse-gray leading-relaxed mb-6">
                Synapse International uses cookies and similar technologies to improve your browsing experience, analyze site traffic, personalize content, and assist with our marketing efforts. We use cookies for the following purposes:
              </p>
              
              <div className="grid gap-6">
                {cookieTypes.map((cookie, index) => (
                  <Card key={index} className="border hover:border-synapse-primary transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-synapse-primary">
                        {cookie.type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-synapse-gray mb-4">
                        {cookie.description}
                      </p>
                      <div>
                        <p className="text-sm font-medium text-synapse-dark mb-2">Examples:</p>
                        <ul className="text-sm text-synapse-gray space-y-1">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-synapse-primary rounded-full"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">Third-Party Cookies</h2>
              <p className="text-synapse-gray leading-relaxed mb-4">
                We may also use third-party cookies from trusted partners to help us:
              </p>
              <ul className="list-disc pl-6 text-synapse-gray space-y-2">
                <li>Analyze website traffic and user behavior (Google Analytics)</li>
                <li>Provide social media functionality</li>
                <li>Deliver targeted advertising</li>
                <li>Improve our services based on user feedback</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-synapse-gray leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-synapse-dark mb-2">Browser Settings</h3>
                  <p className="text-synapse-gray leading-relaxed">
                    Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or to alert you when cookies are being sent.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-synapse-dark mb-2">Cookie Consent</h3>
                  <p className="text-synapse-gray leading-relaxed">
                    When you first visit our website, you'll see a cookie banner where you can choose which types of cookies to accept or reject.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-synapse-dark mb-2">Opt-Out Tools</h3>
                  <p className="text-synapse-gray leading-relaxed">
                    For advertising cookies, you can visit the Digital Advertising Alliance's opt-out page or the Network Advertising Initiative's opt-out page.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">Impact of Disabling Cookies</h2>
              <p className="text-synapse-gray leading-relaxed">
                Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. Essential cookies are necessary for basic website functionality and cannot be disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">Updates to This Cookie Policy</h2>
              <p className="text-synapse-gray leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-synapse-dark mb-4">Contact Us</h2>
              <p className="text-synapse-gray leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default Cookies;

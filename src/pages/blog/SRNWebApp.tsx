
import React from "react";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const SRNWebApp = () => {
  return (
    <BlogPostTemplate
      title="Upcoming Changes to SRN — Web App Beta"
      author="Cody & Ali"
      date="November 7, 2024"
      readTime="6 min read"
      category="Company Updates"
      excerpt="In August 2024, Synapse International (founded in 2013) launched a pilot project, Synapse Recruiter Network (SRN), run entirely on a makeshift infrastructure."
    >
      <img 
        src="https://cdn-images-1.medium.com/max/800/1*3_1Frh_GPGJXSjlD7Dyfnw.png" 
        alt="SRN Web App Beta"
        className="w-full rounded-lg mb-8"
      />
      <p className="text-center text-sm text-synapse-gray mb-8">SRN Web App Beta Launching Soon</p>

      <p className="text-xl text-synapse-gray mb-8 font-medium">
        In August 2024, Synapse International (founded in 2013) launched a pilot project, <strong>Synapse Recruiter Network (SRN)</strong>, run entirely on a makeshift infrastructure of Google Forms, Google Sheets, Google Docs, HelloSign, Make.com, MailerLite, Discord, Lever and Deel.
      </p>

      <p className="mb-6">
        The pilot, for all intents and purposes, has been a success. We've on-boarded 500 recruiters globally. We have achieved submissions, interviews, and hires through the network. We have collected fees from clients and have paid commissions to recruiters in the network. We know this is the beginning of something big.
      </p>

      <p className="mb-6">
        There have been significant learnings in these past 3 months, and we have done our very best to improve the experience for recruiters in the Network. All the while, we recognized the shortcomings of our existing infrastructure. It became clear quite early on that we would need a more scalable solution.
      </p>

      <p className="mb-6">
        So we began to build one. And now, we're in the final phases of Alpha testing.
      </p>

      <div className="bg-synapse-lighter/30 p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-synapse-dark mb-4">Introducing the SRN Web App Beta</h3>
        <p className="mb-4">
          On November 19, we will be moving to an entirely new system, custom-built for SRN. We are pleased to announce the <strong>SRN Web App Beta</strong>. (At this time, the Beta will only be available via invite to existing SRN members).
        </p>
      </div>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">What's New in the SRN Web App?</h2>
      
      <p className="mb-4">In this platform, recruiters will have the ability to:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>View all available roles</li>
        <li>View detailed sourcing notes and collateral</li>
        <li>Submit candidates</li>
        <li>Track their progress through the interview process</li>
        <li>Eventually, even be paid commissions directly through the application</li>
      </ul>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">AI-Powered Quality Assurance</h2>
      <p className="mb-6">
        Also, with the aid of GPT-enabled technology, we ensure our clients only receive the best-of-the-best candidates that are submitted to us, assuring a high interview:submission ratio, leading to more frequent hires for everyone, and greater customer satisfaction.
      </p>

      <p className="mb-6">
        With measures in place to maximize engagement (from both recruiters and clients), we can continuously improve our quality of "fit", as well as our speed of delivery.
      </p>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">Comprehensive Learning Resources</h2>
      <p className="mb-6">
        We will also have a video library with "how-to"s, everything from using the app itself, to sourcing tips and tricks. We have a comprehensive FAQs section. 11 years of industry knowledge all in one place.
      </p>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">Community-First Approach</h2>
      <p className="mb-6">
        And we are not leaving Discord — this is still a community — a group of people that want (dare I say NEED) to be actively communicating with one another in order to be successful. Recruiting is a team sport, and at Synapse, we want to make sure everyone feels they are part of that team.
      </p>

      <div className="bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg p-6 text-white mt-8">
        <h3 className="text-xl font-bold mb-3">Our Mission</h3>
        <p className="mb-4 opacity-90">
          We are on a mission to make 1 million hires by 2030, and we could not do it without you.
        </p>
        <p className="text-sm opacity-80">
          As the Beta launch of the SRN Web App is quickly approaching, we wanted to share this great news with all of you to get you set for the upcoming change. You'll continue to receive emails like this one with updates, and on Nov 19, we will send you the direct link to sign-in.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-8">
        <p className="text-synapse-gray">
          <strong>Thanks for your support.</strong><br/>
          Cody & Ali<br/>
          co-founders @ Synapse
        </p>
      </div>
    </BlogPostTemplate>
  );
};

export default SRNWebApp;

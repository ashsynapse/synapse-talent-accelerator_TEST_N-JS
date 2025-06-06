
import React from "react";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const GoogleXrayBoolean = () => {
  return (
    <BlogPostTemplate
      title="Using ChatGPT + Google Xray Boolean to Find Candidates Not Active on LinkedIn"
      author="Ali Taghikhani"
      date="October 17, 2024"
      readTime="7 min read"
      category="Sourcing Strategies"
      excerpt="In this guide, I will show you how to combine ChatGPT and Google Xray/boolean search to find amazing candidates who don't spend much time on LinkedIn."
    >
      <p className="text-xl text-synapse-gray mb-8 font-medium">
        In this guide, I will show you how to combine ChatGPT and Google Xray/boolean search to find amazing candidates who don't spend much time on LinkedIn. This is a great way to source candidates for example in industries like Health-care!
      </p>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">1. Hiring Physical Therapists in California</h2>
      <p className="mb-4">We are trying to hire physical therapists in California who have never worked at VibrantCare.</p>
      <p className="mb-4">To source suitable candidates, use an X-ray Boolean search on Google to find resumes and contact details (email or phone numbers). Remember, resumes might be labeled as CV, Resume, or Curriculum Vitae.</p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h4 className="font-semibold mb-2">Sample Boolean Search String for California (Physical Therapists):</h4>
        <code className="text-sm">
          ("physical therapist" OR "PT" OR "DPT" OR "doctor of physical therapy") AND ("resume" OR "CV" OR "curriculum vitae") AND ("email" OR "phone" OR "contact") AND ("California" OR "CA") -VibrantCare -site:vibrantcare.com -site:linkedin.com
        </code>
      </div>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">2. Hiring Physical Therapists in Washington</h2>
      <p className="mb-4">Similarly, here's how we can find physical therapists in Washington using the Boolean search method:</p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h4 className="font-semibold mb-2">Sample Boolean Search String for Washington (Physical Therapists):</h4>
        <code className="text-sm">
          ("physical therapist" OR "PT" OR "DPT" OR "doctor of physical therapy") AND ("resume" OR "CV" OR "curriculum vitae") AND ("email" OR "phone" OR "contact") AND ("Washington" OR "WA") -VibrantCare -site:vibrantcare.com -site:linkedin.com
        </code>
      </div>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">3. Hiring Oncologists in California</h2>
      <p className="mb-2"><em>*Avoid Kaiser Permanente</em></p>
      <p className="mb-4">Here's an X-ray Boolean search string for finding oncologists (or doctors of oncology) with contact information, excluding any association with Kaiser Permanente.</p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h4 className="font-semibold mb-2">Sample Boolean Search String for California Oncologists:</h4>
        <code className="text-sm">
          ("oncologist" OR "doctor of oncology" OR "oncology specialist" OR "medical oncologist" OR "cancer specialist") AND ("resume" OR "CV" OR "curriculum vitae") AND ("email" OR "phone" OR "contact") AND ("California" OR "CA") -Kaiser -Permanente -site:kaiserpermanente.org -site:linkedin.com
        </code>
      </div>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">4. Hiring Oncologists in Washington</h2>
      <p className="mb-2"><em>*Avoid Kaiser Permanente</em></p>
      <p className="mb-4">Similarly, to source oncologists in Washington, use this Boolean search string to exclude candidates associated with Kaiser Permanente.</p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h4 className="font-semibold mb-2">Sample Boolean Search String for Washington Oncologists:</h4>
        <code className="text-sm">
          ("oncologist" OR "doctor of oncology" OR "oncology specialist" OR "medical oncologist" OR "cancer specialist") AND ("resume" OR "CV" OR "curriculum vitae") AND ("email" OR "phone" OR "contact") AND ("Washington" OR "WA") -Kaiser -Permanente -site:kaiserpermanente.org -site:linkedin.com
        </code>
      </div>

      <div className="bg-synapse-lighter/30 p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold text-synapse-dark mb-4">Key Benefits of This Approach:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Access Hidden Talent</strong>: Find candidates who aren't actively job searching on LinkedIn</li>
          <li><strong>Reduced Competition</strong>: Less competition from other recruiters for these candidates</li>
          <li><strong>Direct Contact Information</strong>: Often includes email and phone numbers for immediate outreach</li>
          <li><strong>Industry-Specific Results</strong>: Particularly effective for healthcare and specialized professions</li>
          <li><strong>Cost-Effective</strong>: Uses free Google search instead of expensive sourcing tools</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-synapse-dark mb-4 mt-8">Pro Tips for Boolean Search Success</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Always exclude competitor companies when specified by your client</li>
        <li>Include variations of job titles and qualifications</li>
        <li>Use location-specific terms (state abbreviations, major cities)</li>
        <li>Exclude LinkedIn to find candidates not actively networking</li>
        <li>Combine with ChatGPT to analyze and rank the quality of found candidates</li>
        <li>Keep track of successful search strings for future similar roles</li>
      </ul>

      <div className="border-t border-gray-200 pt-6 mt-8">
        <p className="text-synapse-gray">
          <strong>Author:</strong> Ali Taghikhani<br/>
          CEO of Synapse International — <a href="https://synapseint.com" className="text-synapse-primary hover:underline">https://synapseint.com</a><br/>
          LinkedIn — <a href="https://www.linkedin.com/in/alitaghikhani" className="text-synapse-primary hover:underline">https://www.linkedin.com/in/alitaghikhani</a>
        </p>
      </div>
    </BlogPostTemplate>
  );
};

export default GoogleXrayBoolean;

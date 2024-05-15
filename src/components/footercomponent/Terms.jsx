import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="flex items-center justify-center bg-mainBackground-light min-h-screen">
      <div className="shadow-md mt-4 mb-4 rounded-lg p-8 bg-white w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <div className="overflow-y-auto">
          <p className="mb-4 text-base text-justify">
            Please read these terms and conditions carefully before using our calendar web application.
          </p>
          <div className="mb-4">
  <h2 className="text-lg font-sans mb-2">1. Acceptance of Terms</h2>
  <p className="text-base text-justify">
    By accessing or using our calendar web application, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the service. Your continued use of the application constitutes your acceptance of these terms, which form a binding agreement between you and our company.
  </p>
</div>

<div className="mb-4">
  <h3 className="text-lg font-sans mb-2">1.1 Agreement to Terms</h3>
  <p className="text-base text-justify">
    By using our calendar web application, you acknowledge that you have read, understood, and agree to comply with these Terms and Conditions. This agreement is effective immediately upon your first use of the service.
  </p>
</div>

<div className="mb-4">
  <h3 className="text-lg font-sans mb-2">1.2 Changes to Terms</h3>
  <p className="text-base text-justify">
    We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and it is your responsibility to review these terms regularly. Your continued use of the service after any modifications indicates your acceptance of the new terms.
  </p>
</div>

<div className="mb-4">
  <h3 className="text-lg font-sans mb-2">1.3  User Responsibility</h3>
  <p className="text-base text-justify">
    You are responsible for maintaining the confidentiality of your account information, including your username and password, and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
  </p>
</div>

<div className="mb-4">
  <h3 className="text-lg font-sans mb-2">1.4 Eligibility</h3>
  <p className="text-base text-justify">
    By using the service, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into this agreement. If you are using the service on behalf of an organization, you represent and warrant that you have the authority to bind the organization to these terms.
  </p>
</div>

<div className="mb-4">
  <h3 className="text-lg font-sans mb-2">1.5 Compliance with Laws</h3>
  <p className="text-base text-justify">
    You agree to comply with all applicable local, state, national, and international laws and regulations when using the service. You are solely responsible for ensuring that your use of the service is in compliance with these laws.
  </p>
</div>

<div className="mb-4">
  <h3 className="text-lg font-sans mb-2">1.6 Termination</h3>
  <p className="text-base text-justify">
    We reserve the right to terminate or suspend your access to the service at our sole discretion, without prior notice or liability, for any reason, including if you breach any of the terms and conditions. Upon termination, your right to use the service will immediately cease.
  </p>
</div>
           <div className="mb-4">
          <h2 className="text-lg font-sans mb-2">2. Description of Service</h2>
          <p className="mb-4 text-base text-justify">
            Our calendar web application allows users to Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cupiditate illo possimus rerum dolor, ipsum, temporibus optio dolorum facere blanditiis nostrum nemo, officiis voluptatem eos voluptates dolore doloremque porro recusandae? create, manage, and organize events, appointments, and schedules.
          </p>
          </div>

            <div className="mb-4">
          <h2 className="text-lg font-sans mb-2">3. User Conduct</h2>
          <p className="mb-4 text-base text-justify">

          * Uploading, posting, or transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.<br></br><br></br>

        *  Sharing or distributing any content sexual,violent and  that depicts individuals under 
            18 years of age in .<br></br><br></br>
         *   Uploading, posting, or transmitting any content that promotes violence, political 
         extremism, or hatred against any group, including but not limited to, Black people.<br></br><br></br>
        
        * Impersonating any person or entity, including, but not limited to, a company official, 
        forum leader, guide, or host, or falsely stating or otherwise misrepresenting your affiliation 
        with a person or entity.<br></br><br></br>
       
       *  Uploading, posting, or transmitting any content that you do not have the right to transmit
        under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements).<br></br><br></br>
       
       
       * Uploading, posting, or transmitting any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of 
       any computer software or hardware or telecommunications equipment.<br></br><br></br>

       * Interfering with or disrupting the service or servers or networks connected to the service, or disobeying any requirements, procedures, policies, or regulations of networks connected to the service.

          </p>
          </div>
          <h2 className="text-lg font-sans mb-2">4. Breaking the Rules</h2>
          <p className="mb-4 text-base text-justify">
            If you do not accept the terms and conditions, the company will not take full responsibility for your actions, including but not limited to sharing content that is inappropriate or harmful. Specifically, if you upload content to your calendar background that is violent, depicts individuals under 18 years of age, contains racist or hateful imagery, or promotes political extremism or hatred against any group, including Black people, you will be held accountable. Such actions are strictly prohibited, and any violation will result in legal action being taken against the responsible individual. You will be held liable in court for any damages or consequences resulting from the dissemination of such content.
          </p>
          {/* Add more sections as needed */}

          {/* Checkbox for accepting terms */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="acceptTerms"
              className="mr-2 cursor-pointer"
            />
            <div className="flex items-right mt-1">
              <p className="terms2 text-base">Do you accept the terms and conditions ?</p>
            </div>
          </div>

          {/* Accept and Cancel buttons */}
          <div className="flex justify-center">
            <Link to="/" className="bg-mainBackground-light text-white px-4 py-2 rounded-md hover:bg-green-600 mr-4">Continue</Link>
            <Link to="/" className="bg-mainBackground-light text-white px-4 py-2 rounded-md hover:bg-red-600 ml-4">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

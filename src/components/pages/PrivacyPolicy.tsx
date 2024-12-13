import * as React from 'react';
import { NavigationItem } from '../NavigationItem';
import { PolicySection } from '../PolicySection';

const navigationItems = [
  { text: 'Terms of use', isActive: false },
  { text: 'Privacy Policy', isActive: true },
  { text: 'Disclaimer', isActive: false },
  { text: 'Cookie policy', isActive: false }
];

const policySections = [
  {
    title: '1. Privacy Policy',
    content: [
      'This privacy policy applies to Nuqi Wealth India Pvt Ltd (herein referred to as "Nuqi") website at https://www.nuqiwealth.com (the "Website"). PLEASE REVIEW THIS PRIVACY POLICY CAREFULLY. By visiting and/or submitting information to or through this Website, you agree to be bound by the terms and consent to the collection, use, disclosure, retention and processing of your information as described in this privacy policy.'
    ]
  },
  {
    title: '2. Exclusion',
    content: [
      'You might find links to third-party websites on our website. These websites should have their own privacy policies, which you should check. We do not accept any responsibility or liability for their policies whatsoever as we have no control over them.'
    ]
  },
  {
    title: '3. Amendments to the Privacy Policy',
    content: [
      'This Privacy Policy will come into effect on February 20, 2021 (the "Effective Date"). Although most changes are likely to be minor, we may change our privacy policy from time to time, to reflect changes to the Website, customer feedback, and applicable law and in our sole discretion. If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it. We encourage you to frequently check this page for any changes to the privacy policy. We will not make retroactive changes that reduce your privacy rights unless we are legally required to do so. Your continued use of the Website after any change in this privacy policy will constitute your acceptance of the amended privacy policy.'
    ]
  },
  {
    title: '4. Types of Information',
    content: [
      'We collect various kinds of information that you provide to us as well as information we obtain from your use of the Website.',
      'Personal Information: Information associated with or used to identify or contact a specific person. This includes contact data, financial information, demographic data, and certain Usage Data.',
      'Usage Data: Information about an individual\'s online activity that, by itself, does not identify the individual.',
      'Location Data: A category of Personal Information collected about the location of a mobile device or computer.'
    ]
  },
  {
    title: '5. How We Collect Information',
    content: [
      'We collect information in several ways: directly from you, from our business partners and service providers, and automatically through cookies and other data collection tools.'
    ]
  },
  {
    title: '6. How We Use Your Information',
    content: [
      'We may process the information we collect/you provide to us primarily to enable us to provide our services to you and for purposes such as improving services, fraud detection, communication, and targeted advertising.'
    ]
  },
  {
    title: '7. How We Share and Disclose Your Information',
    content: [
      'We may share information when you consent, to perform services, with third-party service providers, for legal purposes, in aggregated form, or during corporate changes.'
    ]
  },
  {
    title: '8. Information Storage and Security',
    content: [
      'We retain information for seven years and use various security measures, including encryption, to protect your Personal Information.'
    ]
  },
  {
    title: '9. Links to Third Party Websites and Services',
    content: [
      'The Services may contain links to third-party websites and services with which we have no affiliation. You assume complete responsibility and risk in your use of any external sites.'
    ]
  },
  {
    title: '10. Dispute & Jurisdiction',
    content: [
      'This will be governed by the Laws of India and any disputes arising herein shall be subject to the exclusive jurisdiction of the Courts of Mumbai.'
    ]
  }
];

export const PrivacyPolicy: React.FC = () => {
    return (
      <div className="self-center mt-28  w-full max-w-[1691px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-8 max-md:flex-col">
          {/* Left Navigation Section */}
          <div className="flex flex-col ml-10 w-[20%] text-lg font-medium space-y-6 max-md:w-full">
            {navigationItems.map((item, index) => (
              <NavigationItem
                key={index}
                text={item.text}
                isActive={item.isActive}
              />
            ))}
          </div>
  
          {/* Content Section */}
          <div className="flex flex-col w-[75%] px-20 text-justify max-md:w-full">
            <div className="self-start text-3xl font-poppins mr-5 font-semibold text-cyan-400 mb-6 max-md:text-2xl">
              Privacy Policy
            </div>
            {policySections.map((section, index) => (
              <PolicySection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
"use client";

import * as React from "react";
import type { ReactElement } from "react";
import RightSidebar from "./RightSidebar";

const content: Record<string, ReactElement> = {
  introduction: (
    <>
      <h1 className="text-3xl font-bold mb-6">Introduction to ClearPrice</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Billing is more than payments. It&apos;s logic, visibility, and
          automation.
        </p>
        <p className="mb-4">
          ClearPrice is a comprehensive billing and pricing platform designed to handle 
          complex usage-based, tiered, and contract billing scenarios. Whether you&apos;re 
          a startup or enterprise, ClearPrice provides the tools you need to implement 
          sophisticated pricing models.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Flexible pricing models (usage-based, tiered, flat-rate)</li>
          <li>Real-time billing and invoicing</li>
          <li>Advanced analytics and reporting</li>
          <li>Multi-tenant architecture</li>
          <li>API-first approach</li>
        </ul>
      </div>
    </>
  ),
  quickstart: (
    <>
      <h1 className="text-3xl font-bold mb-6">Quickstart Setup</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Let&apos;s get you up and running quickly with ClearPrice...
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Step 1: Installation</h2>
        <pre className="bg-gray-100 p-4 rounded-md"><code>npm install @clearprice/sdk</code></pre>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Step 2: Configuration</h2>
        <p>Configure your API keys and initialize the ClearPrice client.</p>
      </div>
    </>
  ),
  "core-concepts": (
    <>
      <h1 className="text-3xl font-bold mb-6">Core Concepts</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Understanding the key building blocks of ClearPrice...
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Organizations</h2>
        <p>Organizations represent your customers or tenants in the system.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Products & Bundles</h2>
        <p>Define what you&apos;re selling and how it&apos;s packaged.</p>
      </div>
    </>
  ),
  "data-model": (
    <>
      <h1 className="text-3xl font-bold mb-6">Data Model</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Learn about ClearPrice&apos;s data structure and relationships.
        </p>
        <p>The ClearPrice data model is designed around key entities that work together to create flexible billing scenarios.</p>
      </div>
    </>
  ),
  organisations: (
    <>
      <h1 className="text-3xl font-bold mb-6">Organisations</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Manage your customer organizations and their billing settings.
        </p>
        <p>Organizations are the top-level entity in ClearPrice, representing your customers or business units.</p>
      </div>
    </>
  ),
  "products-bundles": (
    <>
      <h1 className="text-3xl font-bold mb-6">Products and Bundles</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Define your products and create bundles for complex offerings.
        </p>
        <p>Products represent the individual items or services you offer, while bundles allow you to group products together.</p>
      </div>
    </>
  ),
  "accounts-subscriptions": (
    <>
      <h1 className="text-3xl font-bold mb-6">Accounts and Subscriptions</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Manage customer accounts and their active subscriptions.
        </p>
        <p>Accounts represent individual customers, while subscriptions track their active services and billing cycles.</p>
      </div>
    </>
  ),
  "features-entitlements": (
    <>
      <h1 className="text-3xl font-bold mb-6">Features and Entitlements</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Control feature access and usage limits with entitlements.
        </p>
        <p>Entitlements define what features customers can access and any associated usage limits or quotas.</p>
      </div>
    </>
  ),
  "plans-segments": (
    <>
      <h1 className="text-3xl font-bold mb-6">Plans and Segments</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Create pricing plans and segment customers effectively.
        </p>
        <p>Plans define pricing structures, while segments help you organize customers into different tiers or categories.</p>
      </div>
    </>
  ),
  grandfathering: (
    <>
      <h1 className="text-3xl font-bold mb-6">Grandfathering</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Handle legacy pricing and plan transitions smoothly.
        </p>
        <p>Grandfathering allows you to maintain existing customers on older pricing while transitioning new customers to updated plans.</p>
      </div>
    </>
  ),
  "monetisation-models": (
    <>
      <h1 className="text-3xl font-bold mb-6">Monetisation Models</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Explore different ways to monetize your products and services.
        </p>
        <p>Choose from various monetization strategies including subscription, usage-based, freemium, and hybrid models.</p>
      </div>
    </>
  ),
  "pricing-models": (
    <>
      <h1 className="text-3xl font-bold mb-6">Pricing Models</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Implement sophisticated pricing strategies with ClearPrice.
        </p>
        <p>Support for flat-rate, tiered, volume-based, and usage-based pricing models with custom logic.</p>
      </div>
    </>
  ),
  "billable-metrics": (
    <>
      <h1 className="text-3xl font-bold mb-6">Billable Metrics and Events</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Track usage and define billable events for accurate invoicing.
        </p>
        <p>Billable metrics define what you measure, while events capture the actual usage data from your customers.</p>
      </div>
    </>
  ),
  "tutorial-pricing-model": (
    <>
      <h1 className="text-3xl font-bold mb-6">Tutorial: Designing a Pricing Model</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Step-by-step guide to creating your first pricing model in ClearPrice.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
        <p>Before starting this tutorial, make sure you have completed the quickstart setup.</p>
      </div>
    </>
  ),
  "contact-support": (
    <>
      <h1 className="text-3xl font-bold mb-6">Contact Support</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Get help when you need it from our support team.
        </p>
        <p>Our support team is available to help you with any questions or issues you might encounter.</p>
      </div>
    </>
  ),
  "book-demo": (
    <>
      <h1 className="text-3xl font-bold mb-6">Book a Demo</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Schedule a personalized demo to see ClearPrice in action.
        </p>
        <p>Our team will walk you through ClearPrice&apos;s features and help you understand how it can solve your billing challenges.</p>
      </div>
    </>
  ),
  "community-feedback": (
    <>
      <h1 className="text-3xl font-bold mb-6">Community & Feedback</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Join our community and share your feedback to help us improve.
        </p>
        <p>Connect with other ClearPrice users, share best practices, and provide feedback to help shape the future of the platform.</p>
      </div>
    </>
  ),
  faq: (
    <>
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4">
          Find answers to common questions about ClearPrice.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">General Questions</h2>
        <h3 className="text-xl font-medium mt-6 mb-2">What is ClearPrice?</h3>
        <p>ClearPrice is a comprehensive billing and pricing platform designed for modern SaaS businesses.</p>
      </div>
    </>
  ),
};

const MainContent = ({ slug }: { slug: string }) => {
  // Default to 'introduction' if no slug or if slug doesn't exist in content
  const contentKey = slug && content[slug] ? slug : 'introduction';
  
  return (
    <main className="flex-1 px-6 py-8">
      <div className="mb-6 p-6 md:p-18 bg-black w-full">
        <h2 className="text-3xl leading-[110%] text-white font-twk mb-2">
          Start building with ClearPrice
        </h2>
        <p className="text-[13px] text-[#C0C0C0] max-w-4xl leading-[161%]">
          Everything you need to launch usage-based, tiered, or contract
          billing, from entitlement logic to invoicing.
        </p>
      </div>
      <div className="flex gap-8">
        <div className="flex-1">
          {content[contentKey]}
        </div>
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </main>
  );
};

export default MainContent;
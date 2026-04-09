
import Image from "next/image";
import React, { useState } from "react";

type BillingCycle = "monthly" | "annually";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Perfect for early-stage teams testing monetization",
      price: {
        monthly: "₦0.00/month",
        annually: "₦0.00/month",
      },
      features: [
        "Up to 1,000 events/month",
        "Up to 3 active plans",
        "Hosted pricing pages",
        "Full API & SDK access",
        "7-day data retention",
        "Email support",
      ],
      extra: ["Email support", "Pay-as-you-grow"],
      buttonText: "Choose Plan",
      buttonStyle: "bg-[#047AF0] text-white hover:bg-[#0E152B]",
    },
    {
      name: "Growth",
      description: "Built for growing teams with real revenue",
      price: {
        monthly: "₦100,000/month + Usage Fees",
        annually: "₦1,000,000/year + Usage Fees", // discounted annual option
      },
      features: [
        "Up to 100,000 events/month",
        "Unlimited SKUs & plans",
        "Dynamic pricing support",
        "Segment-based billing",
        "Quote-to-Cash tools (CPQ)",
        "Embedded pricing table component",
        "Slack & email support",
      ],
      extra: [
        "₦0.50 per 1,000 events",
        "0.5% Uplift fee (Optional, performance-based)",
      ],
      buttonText: "Choose Plan",
      buttonStyle: "bg-[#047AF0] text-white hover:bg-[#0E152B]",
    },
    {
      name: "Enterprise",
      description:
        "Ideal for fintechs, utilities, SaaS giants, and large platforms",
      price: {
        monthly: "Custom pricing",
        annually: "Custom pricing",
      },
      features: [
        "Everything in the Growth tier",
        "Multi-segment pricing",
        "Contract & Subscription Workflows",
        "SLA-backed uptime",
        "Dedicated CSM & Onboarding",
        "Private Cloud or on-prem deployment",
        "Billing volume discounts",
        "0.3%-0.5% of revenue billed via Clearprice",
      ],
      buttonText: "Talk to us",
      buttonStyle: "bg-[#047AF0] text-white hover:bg-[#0E152B] rounded-3xl",
      highlight: true,
    },
  ];

  return (
    <section className="px-2 max-w-8xl mx-auto py-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-start w-full mb-6">
          <h2 className="text-3xl font-bold mb-4  max-w-2xl">
            Simple, fair, customized for you
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-center md:items-start justify-between">
            <p className="text-gray-600 mb-12 max-w-xl">
              Start with a plan that fits, and we&apos;ll tailor a quote that
              makes sense for you. This isn&apos;t just a one-time purchase —
              we&apos;re in it for the long haul.
            </p>
            {/* Billing Toggle */}
            <div className="flex mb-10 space-x-2 bg-gray-100 rounded-full p-1 w-fit">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  billingCycle === "monthly"
                    ? "bg-[#047AF0] text-white"
                    : "text-gray-700"
                }`}
              >
                Billed Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annually")}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  billingCycle === "annually"
                    ? "bg-[#047AF0] text-white"
                    : "text-gray-700"
                }`}
              >
                Billed Annually
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col justify-between ${
                plan.highlight ? "bg-black text-white" : "bg-[#F7F7F7]"
              }`}
            >
              <div>
                <h3 className="text-xl font-twk font-bold mb-2">{plan.name}</h3>
                <p
                  className={`mb-4 font-twk ${
                    plan.highlight
                      ? "text-gray-300"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
                <p className="text-2xl font-semibold mb-6">
                  {plan.price[billingCycle]}
                </p>

                <h4 className="font-semibold mb-3">Included in the Plan</h4>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <Image src="/greencheckcircle.svg" alt="green check box" height={20} width={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.extra && (
                  <>
                    <h4 className="font-semibold mb-3">Usage Fees</h4>
                    <ul className="space-y-2 mb-6">
                      {plan.extra.map((extra, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <Image src="/blackcheckcircle.svg" alt="green check box" height={20} width={20} />
                          <span>{extra}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <button
                className={`mt-4 w-full py-3 rounded-3xl font-semibold ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

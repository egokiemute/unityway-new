// src/utils/caseStudies.ts
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  heroImage: string;
  logo: string;
  industry: string;
  size: string;
  greenHighlights?: { 
    id: string;
    heading: string;
    body: string | string[];
  }[];
  sections: {
    id: string;
    heading: string;
    body: string | string[];
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
}


// Updated baseCaseStudy with greenHighlights
export const baseCaseStudy: CaseStudy = {
  id: "1",
  title: "Saafa Energy",
  subtitle:
    "Saafa Energy is a fast-growing clean energy provider focused on delivering reliable solar solutions across emerging markets. As the company expanded its footprint and introduced new subscription-based offerings, it needed a billing infrastructure that could scale with its ambition—without draining engineering resources.",
  thumbnail: "/images/usecase1.png",
  heroImage: "/images/usecase1.png",
  logo: "/images/logos/google.svg",
  industry: "Saafa Energy",
  size: "2000+",
greenHighlights: [
  {
    id: "challenge-green",
    heading: "The Challenge",
    body: [
"Saafa Energy’s existing billing system was too rigid to handle its growth. Manual invoicing, hardcoded pricing logic, and limited reporting tools made it difficult to scale operations or introduce new business models like prepaid solar plans, usage-based billing, and flexible financing"
    ]
  },
  {
    id: "results-green",
    heading: "Results",
    body: [
      "ClearPrice deployed a fully integrated billing solution in just a few weeks—supporting both recurring and consumption-based billing models. Now, Saafa Energy can launch new plans, onboard customers faster, and offer flexible pricing to match diverse energy needs."
    ]
  }
],
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      body: "Saafa Energy is a renewable energy company providing clean, affordable solar power to households and businesses across West Africa. As their growth accelerated, so did the complexity of their customer base and pricing needs. The team needed a modern billing infrastructure that could support both recurring and usage-based models—without increasing engineering overhead.",
    },
    {
      id: "challenge",
      heading: "The Challenge",
      body: [
        "Before ClearPrice, Saafa Energy faced:",
        "Manual billing processes using spreadsheets and hardcoded scripts",
        "Delays in launching new pricing plans for solar subscriptions and energy-as-a-service offerings",
        "Inconsistent revenue reporting and customer confusion due to inaccurate usage tracking",
        "A lack of visibility into customer consumption for both internal teams and customers",
        "Their expansion plans were at risk of stalling due to the limitations of their legacy billing setup.",
      ],
    },
    {
      id: "solution",
      heading: "The Ideal Solution",
      body: [
        "Saafa Energy needed a billing solution that could:",
        "Handle both subscription and usage-based pricing models",
        "Offer real-time metering of customer energy consumption",
        "Integrate seamlessly with internal tools and local payment gateways",
        "Enable the operations and finance teams to work independently from engineering",
        "Support rapid product launches, flexible financing, and partner billing models",
      ],
    },
    {
      id: "why-clearprice",
      heading: "Why Saafa Energy Chose ClearPrice",
      body: [
        "ClearPrice stood out because of:",
        "Real-time rating engine to track and bill customers based on usage (kWh, time of day, etc.)",
        "Entitlement engine to control access to energy tiers, financing offers, and customer plans",
        "Localized billing support for taxes, discounts, and local currencies",
        "No-code configuration for pricing plans and trial offers",
        "Hosted pages & APIs for branded checkouts and customer usage dashboards",
        "We weren’t just looking for a billing tool. We needed a business layer that could evolve with our product — and ClearPrice delivered.",
      ],
    },
    {
      id: "results",
      heading: "Results",
      body: [
        "With ClearPrice, Saafa Energy was able to:",
        "Launched flexible pay-as-you-go solar plans in days.",
        "Scaled billing to 50k+ households with automated invoices and retry logic",
        "Empowered finance teams to handle dunning, invoicing, and reconciliation without dev support.",
        "Provide customers real-time visibility into their usage and payments",
        "Expanded into new regions without having to rebuild billing infrastructure.",
      ],
    },
    {
      id: "quote",
      heading: "Customer Quote",
      body: [
        "“ClearPrice has become the silent engine behind our expansion. It gave us the infrastructure to scale faster while staying compliant and customer-focused”",
      ],
    },
    {
      id: "conclusion",
      heading: "Conclusion",
      body: "By switching to ClearPrice, Saafa Energy turned billing from a bottleneck into a strategic advantage. As they continue to expand their footprint in Africa’s clean energy space, ClearPrice ensures that pricing, packaging, and scaling never slow them down.",
    },
  ],
  quote: {
    text: "“ClearPrice has become the silent engine behind our expansion. It gave us the infrastructure to scale faster while staying compliant and customer-focused”",
    author: "Thomas Jefferson",
    role: "Chief Revenue Officer, Saafa Energy",
    avatar: "/images/avatars/ezekiel.png",
  },
};

// 🔹 Grid card data for other case studies
export const CASE_STUDIES_GRID = Array.from({ length: 6 }).map((_, i) => ({
  id: `${i + 1}`, // numeric IDs starting from 1
  title:
    "How Google moved from spreadsheets to Automated billing with ClearPrice.",
  category: "Google (SAAS)",
  description:
    "Google’s growth was stalling due to manual quote handling and usage tracking. ClearPrice’s CPQ and Rating Engine unlocked scalable, usage-based pricing.",
  logo: "/images/logos/google.svg",
  href: `/use-case/${i + 1}`, // numeric route
}));

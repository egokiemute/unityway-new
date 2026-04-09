import {
  apiPage,
  facebookLink,
  faqPage,
  featurePage,
  helpCenterPage,
  howItWorksPage,
  instagramLink,
  linkendInLink,
  suggestFeaturesPage,
  twitterLink,
} from "../routes";
import { IQuickLink } from "../types";

export const quickLinks: IQuickLink[] = [
  {
    title: "Quick Link",
    links: [
      {
        title: "About Company",
        route: featurePage,
      },
      {
        title: "Book Care",
        route: faqPage,
      },
      {
        title: "Domiciliary Care",
        route: howItWorksPage,
      },
      {
        title: "Contact Us",
        route: apiPage,
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        title: "Butters Close, Huntingdon",
        route: helpCenterPage,
      },
      {
        title: "info@unitywaycare.co.uk",
        route: "mailto:info@unitywaycare.co.uk",
      },
      {
        title: "+44 7955360738",
        route: "tel:+447955360738",
      },
    ],
  },
  {
    title: "Business Hours",
    links: [
      {
        title: "Monday - Sunday",
        route: suggestFeaturesPage,
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        title: "Facebook",
        route: facebookLink,
      },
      {
        title: "X",
        route: twitterLink,
      },
      {
        title: "Instagram",
        route: instagramLink,
      },
      {
        title: "LinkedIn",
        route: linkendInLink,
      },
    ],
  },
];

export const clientTestimonials = [
  {
    id: 1,
    name: "Client Review",
    role: "Domiciliary Care",
    company: "",
    companyLogo: "/images/logos/google-black.svg",
    avatar: "/images/avatars/ezekiel.png",
    quote:
      "The care and support provided have been exceptional. The staff are compassionate, professional, and truly dedicated to their work.",
  },
  {
    id: 2,
    name: "Client Review",
    role: "Domiciliary Care",
    company: "",
    companyLogo: "/images/logos/google.svg",
    avatar: "/images/avatars/ezekiel.png",
    quote:
      "Unity Way has been a huge help with companionship, mobility support, and making everyday life more manageable at home. The team is reliable, respectful, and genuinely caring.",
  },
];

export const logos = [
  { id: 1, src: "/logos/google.png", alt: "Partner logo" },
  { id: 2, src: "/logos/airbnb.png", alt: "Partner logo" },
  { id: 3, src: "/logos/slack.png", alt: "Partner logo" },
  { id: 4, src: "/logos/shopify.png", alt: "Partner logo" },
  { id: 5, src: "/logos/microsoft.png", alt: "Partner logo" },
  { id: 6, src: "/logos/dropbox.png", alt: "Partner logo" },
  { id: 7, src: "/logos/spotify.png", alt: "Partner logo" },
  { id: 8, src: "/logos/netflix.png", alt: "Partner logo" },
];

export const faqsContent = [
  {
    question: "What is domiciliary care?",
    answer:
      "Domiciliary care is professional support provided in your own home to help with daily living, personal care, and wellbeing.",
  },
  {
    question: "Can care be tailored?",
    answer:
      "Yes. Every care plan is personalised to individual needs and routines.",
  },
];

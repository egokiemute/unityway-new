import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";


export interface IQuickLinkItem {
  title: string;
  route: string;
}

export interface IQuickLink {
  title: string;
  links: IQuickLinkItem[];
}


export interface ISubMenuItem {
  name?: string;
  desc?: string;
  link?: string;
  route?: string;
  icon?: LucideIcon;
}

export interface IBanner {
  title: string;
  desc?: string;
  btnText?: string;
  bannerImg?: StaticImageData;
}

export interface IMenu {
  name?: string;
  link?: string;
  gridCol?: number;
  subMenuHeading?: string[];
  subMenu?: ISubMenuItem[];
  banners?: IBanner[];
}

export interface HeroProps {
  badgeText?: string;
  badgeHighlight?: string;
  heading: string;
  subtext: string;
  primaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export interface FeatureSectionProps {
  badgeText: string;
  heading: string;
  description: string;
  bullets?: string[];
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
}

export interface IFaqItem {
  question: string;
  answer: string;
}


export interface ILogin {
  email: string;
  password: string;
}

// Represents a single block/section of content on the page
export interface UseCaseSection {
  id: string;               // unique id for the section
  title: string;            // section title
  description?: string;     // optional description text
  imageUrl?: string;        // optional image (hero, diagram, etc.)
  items?: SectionItem[];    // list of items/features in the section
}

// Represents an item inside a section (e.g. feature, bullet point)
export interface SectionItem {
  id: string;
  heading: string;
  content: string;
  iconUrl?: string;
}

// Represents the full page
export interface UseCaseContentPage {
  id: string;                   // page id (e.g., "fragrance", "manufacturing")
  title: string;                // main page title
  subtitle?: string;            // optional subtitle/tagline
  heroImageUrl?: string;        // hero/cover image
  sections: UseCaseSection[];   // all sections in order
}

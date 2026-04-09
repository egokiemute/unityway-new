export type ServiceCard = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

export const SERVICES: ServiceCard[] = Array.from({ length: 9 }).map((_, i) => {
  const services = [
    {
      slug: "/booking",
      title: "Personal Care & Hygiene Assistance",
      image: "/images/services/personal-hygeine-care.jpg",
      description:
        "Dignified support with bathing, grooming, dressing, and daily hygiene within the comfort of home.",
    },
    {
      slug: "/booking",
      title: "Medication Support",
      image: "/images/services/medical-support.jpg",
      description:
        "Safe and reliable support with medication routines to promote health and consistency.",
    },
    {
      slug: "/booking",
      title: "Companionship & Emotional Support",
      image: "/images/services/compassion.jpg",
      description:
        "Meaningful companionship that reduces isolation and supports emotional wellbeing at home.",
    },
    {
      slug: "/booking",
      title: "Meal Preparation & Nutritional Assistance",
      image: "/images/services/meal-preparation.jpg",
      description:
        "Nutritious meal support designed around individual needs, routines, and preferences.",
    },
    {
      slug: "/booking",
      title: "Mobility Assistance & Safe Transfers",
      image: "/images/services/mobility.jpg",
      description:
        "Support with safe movement around the home to reduce risk and maintain independence.",
    },
    {
      slug: "/booking",
      title: "Home Environment Support",
      image: "/images/services/home-environment.jpg",
      description:
        "Light household support that helps maintain a safe, clean, and comfortable living space as part of care.",
    },
    {
      slug: "/booking",
      title: "Household Routine Support",
      image: "/images/services/home-routine.jpg",
      description:
        "Support with laundry and daily routines to make everyday living more manageable.",
    },
    {
      slug: "/booking",
      title: "Specialist Care Services",
      image: "/images/services/special-care.jpg",
      description:
        "Tailored domiciliary care for complex needs delivered with consistency and attention.",
    },
    {
      slug: "/booking",
      title: "Live-In Care",
      image: "/images/services/line-in.jpg",
      description:
        "24-hour domiciliary care support providing continuous assistance and reassurance at home.",
    },
  ];

  const service = services[i];

  return {
    slug: service.slug,
    title: service.title,
    image: service.image,
    category: "Care",
    description: service.description,
  };
});

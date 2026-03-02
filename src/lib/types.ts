export interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
}

export interface ProblemProps {
  statement: string;
  painPoints: [string, string, string] | string[]; // Allow array of strings, ideally max 3 based on instructions
}

export interface Feature {
  title: string;
  description: string;
}

export interface SolutionProps {
  sectionTitle: string;
  features: [Feature, Feature, Feature] | Feature[]; // Ensure exactly 3 items where possible, or an array
}

export interface Testimonial {
  quote: string;
  name: string;
  handle: string;
}

export interface TestimonialProps {
  sectionTitle: string;
  testimonials: Testimonial[];
}

export interface CTAProps {
  headline: string;
  subheadline: string;
  buttonText: string;
}

export interface SiteData {
  hero: HeroProps;
  problem: ProblemProps;
  solution: SolutionProps;
  testimonial: TestimonialProps;
  cta: CTAProps;
}

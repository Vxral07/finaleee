export interface FeatureCardProps {
    title: string;
    description: string;
    className?: string;
  }
  
  export interface InvestmentFeature {
    title: string;
    description: string;
  }

  export interface NavItemProps {
    text: string;
    isActive?: boolean;
  }
  
  export interface OfficeLocationProps {
    country: string;
    address: string;
    iconSrc: string;
  }
  
  export interface ContactFormProps {
    onSubmit: (data: FormData) => void;
  }
  
  export interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export interface SocialIconProps {
    src: string;
    alt: string;
  }
  
  export interface FooterLinkProps {
    text: string;
    isActive?: boolean;
  }

  export interface NavigationItemProps {
    text: string;
    isActive?: boolean;
  }
  
  export interface PolicySectionProps {
    title: string;
    content: string[];
  }

  export interface HeroSectionProps {
    title: string;
    highlightedText: string;
    imageSrc: string;
    description: string;
  }

  type ServiceCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    imageAlt: string;
    customStyles?: {
    container?: string;
    image?: string;
    };
  };
  
  type ServicesData = {
    services: ServiceCardProps[];
  };
  
  export type { ServiceCardProps, ServicesData };

  export interface PortfolioCardProps {
    icon: string;
    title: string;
    description: string;
    index: number;
    basket: string;
  }
  
  export interface LearnMoreButtonProps {
    onClick?: () => void;
  }

  export type FAQCardProps = {
    title: string;
    description: string;
    customStyles?: {
      container?: string; // For container-level custom styles
      padding?: string;   // For dynamic padding
      margin?: string;    // For dynamic margin
    };
  };
  
  export interface FAQSectionProps {
    cards: FAQCardProps[];
  }

  export interface NewsCardProps {
    imageSrc: string;
    title: string;
    imageAlt: string;
  }

  export interface SocialIconProps {
    src: string;
    alt: string;
  }
  
  export interface NavLinkProps {
    label: string;
  }
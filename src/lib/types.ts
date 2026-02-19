export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: ProductImage[];
  category: "kubki" | "miski" | "naczynia";
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "whatsapp" | "email";
  href: string;
  label: string;
}

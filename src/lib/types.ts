export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: ProductImage[];
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

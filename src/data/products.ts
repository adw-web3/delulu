import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "kubek-kraken",
    name: "Kubek Kraken",
    description:
      "Ręcznie toczony kubek z rzeźbionymi mackami krakena oplatającymi naczynie. Każdy egzemplarz jest unikalny — szkliwiony w głębokich odcieniach morza, od fioletu po ciemny błękit. Macki formowane ręcznie, jedna po drugiej.",
    images: [
      { src: "/images/products/kubek_kraken.png", alt: "Kubki Kraken — widok z bliska na macki i szkliwa" },
      { src: "/images/products/kubek_kraken_2.png", alt: "Kubki Kraken — ujęcie z boku na tle śniegu" },
      { src: "/images/products/kubek_kraken_3.png", alt: "Kubki Kraken — detale szkliwienia i macek" },
      { src: "/images/products/kubek_kraken_4.png", alt: "Kubki Kraken — zbliżenie na przyssawki" },
      { src: "/images/products/kubek_kraken_5.png", alt: "Kubki Kraken — detale uchwytu" },
    ],
  },
  {
    id: "miski-oceaniczne",
    name: "Miski Oceaniczne",
    description:
      "Ręcznie toczone miski inspirowane głębią oceanu. Szkliwione w odcieniach błękitu i turkusu, z organicznymi kształtami przypominającymi morskie skały. Idealne do serwowania tapas, sałatek czy ulubionej zupy.",
    images: [
      { src: "/images/products/miski.jpg", alt: "Miski Oceaniczne — zestaw misek w odcieniach błękitu" },
      { src: "/images/products/miski_2.jpg", alt: "Miski Oceaniczne — detale szkliwienia i faktura" },
    ],
  },
];

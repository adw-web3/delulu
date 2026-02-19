import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductShowcase from "@/components/ProductShowcase";
import SocialLinks from "@/components/SocialLinks";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-warm-gray leading-relaxed">
              Każde naczynie jest unikalne — formowane ręcznie, szkliwione
              z dbałością o detal i wypalane w wysokiej temperaturze. Nie
              produkujemy seriami. Tworzymy na zamówienie.
            </p>
            <Link
              href="/o-nas"
              className="inline-block mt-6 text-accent font-medium hover:text-accent-dark transition-colors"
            >
              Poznaj historię Alicji &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section id="kolekcja" className="scroll-mt-20 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Kolekcja</SectionHeading>

          <div className="space-y-24 lg:space-y-32">
            {products
              .filter((p) => p.featured)
              .map((product, i) => (
                <ProductShowcase
                  key={product.id}
                  product={product}
                  reverse={i % 2 !== 0}
                />
              ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/kolekcja"
              className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-colors"
            >
              Zobacz całą kolekcję &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Zainteresowany?
          </h2>
          <p className="mt-4 text-warm-gray text-lg">
            Napisz do nas — chętnie stworzymy coś wyjątkowego specjalnie dla Ciebie.
          </p>
          <div className="mt-8">
            <SocialLinks variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}

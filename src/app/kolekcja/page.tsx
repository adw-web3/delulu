import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import CollectionTabs from "@/components/CollectionTabs";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Kolekcja | ${SITE_NAME}`,
  description:
    "Pełna kolekcja ręcznie robionej ceramiki Delulu — kubki, miski i naczynia ozdobne.",
};

export default function KolekcjaPage() {
  return (
    <>
      <section className="pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Każde naczynie jest unikalne — formowane ręcznie, szkliwione z dbałością o detal.">
            Kolekcja
          </SectionHeading>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CollectionTabs />
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Zainteresowany?
          </h2>
          <p className="mt-4 text-warm-gray text-lg">
            Napisz do nas — chętnie stworzymy coś wyjątkowego specjalnie dla
            Ciebie.
          </p>
          <div className="mt-8">
            <SocialLinks variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}

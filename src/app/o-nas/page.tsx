import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "O nas",
  description: "Poznaj historię Delulu Ceramics i pasję do ręcznie robionej ceramiki.",
};

export default function ONasPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading subtitle="Poznaj naszą historię">
        O Delulu Ceramics
      </SectionHeading>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-light">
            <Image
              src="/images/zdjecie-ali.png"
              alt="Alicja prezentująca swoją ceramikę"
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-charcoal">
              Od vana do pracowni ceramicznej...
            </h3>
            <p className="text-warm-gray leading-relaxed">
              Moja ceramika narodziła się w drodze. Większość projektów, które tu
              widzisz, ma swoje korzenie w podróży vanem przez słoneczną Hiszpanię.
              To tam, między jednym a drugim postojem, chłonęłam kolory, smaki
              i zapachy, które dziś zamykam w glinie.
            </p>
            <p className="text-warm-gray leading-relaxed">
              Inspiruje mnie wszystko, co kojarzy się z wolnością: głęboki błękit
              morza, smak wspólnego jedzenia i fascynujące podwodne żyjątka. Dlatego
              moje prace nie są idealnie proste — mają w sobie energię natury.
              Przykład? Moja niebieska patera na tapas, która bardziej niż naczynie
              przypomina podwodną skałę.
            </p>
            <p className="text-warm-gray leading-relaxed">
              Tworzę dla tych, którzy tak jak ja, kochają celebrować chwile i chcą
              mieć w domu kawałek słońca, niezależnie od pogody za oknem.
            </p>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
            Proces tworzenia
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-bold">1</span>
              </div>
              <h4 className="font-semibold text-charcoal">Formowanie</h4>
              <p className="mt-2 text-sm text-warm-gray">
                Każde naczynie jest ręcznie toczone na kole garncarskim z naturalnej gliny.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-bold">2</span>
              </div>
              <h4 className="font-semibold text-charcoal">Szkliwienie</h4>
              <p className="mt-2 text-sm text-warm-gray">
                Naczynia pokrywane są ręcznie mieszanymi szkliwami w unikalnych kolorach.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-light flex items-center justify-center">
                <span className="text-2xl text-accent font-bold">3</span>
              </div>
              <h4 className="font-semibold text-charcoal">Wypalanie</h4>
              <p className="mt-2 text-sm text-warm-gray">
                Dwukrotne wypalanie w piecu ceramicznym nadaje trwałość i piękny wygląd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

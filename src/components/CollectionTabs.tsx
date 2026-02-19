"use client";

import { useState } from "react";
import ProductShowcase from "./ProductShowcase";
import { products } from "@/data/products";

const categories = [
  { key: "kubki" as const, label: "Kubki" },
  { key: "miski" as const, label: "Miski" },
  { key: "naczynia" as const, label: "Naczynia ozdobne" },
];

export default function CollectionTabs() {
  const [active, setActive] = useState<(typeof categories)[number]["key"]>("kubki");

  const items = products.filter((p) => p.category === active);

  return (
    <>
      <div className="flex justify-center gap-2 sm:gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors ${
              active === cat.key
                ? "bg-accent text-white"
                : "border border-warm-gray/30 text-warm-gray hover:border-accent hover:text-accent"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-24 lg:space-y-32">
        {items.map((product, i) => (
          <ProductShowcase
            key={product.id}
            product={product}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
}

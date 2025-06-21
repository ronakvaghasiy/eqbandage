import { OFFER_CARDS } from "@/config/constant";
import React from "react";
import OfferCard from "./offer-card";

const OfferSection = () => {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {OFFER_CARDS.map((card, index) => (
            <OfferCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { MOBILE_SLIDES } from "@/constants";

export default function BannerCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="py-20">
      <EmblaCarousel slides={MOBILE_SLIDES} options={OPTIONS} />
    </div>
  );
}

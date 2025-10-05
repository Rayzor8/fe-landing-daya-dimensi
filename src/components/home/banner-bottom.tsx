import Image from "next/image";
import React from "react";

export default function HomeBannerBottom() {
  return (
    <Image
      src="/img/home/banner-home-2.png"
      width={1440}
      height={600}
      alt={"banner-bottom"}
      priority
      className="object-cover w-full bg-center"
    />
  );
}

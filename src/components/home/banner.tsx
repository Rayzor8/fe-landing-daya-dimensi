import React from "react";
import { Button } from "../ui/button";

export default function HomeBanner() {
  return (
    <header className="relative">
      <section className="h-[700px] bg-cover bg-right lg:bg-top bg-[url(/img/home/banner-home.png)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col justify-center px-6 lg:px-24 max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-4">
            Adopt Globally,
            <br />
            Adapt Locally
          </h1>
          <p className="text-white/90 text-lg mb-8 font-light leading-relaxed">
            Daya Dimensi Indonesia is a world-class company preferred by
            individual and organizations transforming their managers, leaders,
            and teams to become exceptional leaders.
          </p>
          <div className="flex gap-4">
            <Button className="cursor-pointer px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-sm">
              LEARN MORE ABOUT US
            </Button>
            <Button className="cursor-pointer px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-sm">
              CONTACT US
            </Button>
          </div>
        </div>

        <div className="bg-white  p-6 absolute bottom-0 lg:w-[800px] flex items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 lg:gap-8">
            <div>
              <div className="text-xl lg:text-4xl font-light text-red-600 mb-2">
                24+ Years
              </div>
              <div className="text-gray-600 text-sm">Experience</div>
            </div>
            <div>
              <div className="text-xl lg:text-4xl font-light text-red-600 mb-2">
                50,000+
              </div>
              <div className="text-gray-600 text-sm">Executive Clients</div>
            </div>
            <div>
              <div className="text-xl lg:text-4xl font-light text-red-600 mb-2">
                400+
              </div>
              <div className="text-gray-600 text-sm">Organization Clients</div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

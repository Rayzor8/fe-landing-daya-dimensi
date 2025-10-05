"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  MoveRight,
  MoveUp,
  Send,
  Sprout,
  Squirrel,
  TreePalm,
  Volleyball,
} from "lucide-react";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full  bg-[#2F2A2A]  ">
      {/* circle navigation */}
      <Button
        variant="ghost"
        onClick={scrollToTop}
        className="absolute w-[56px] h-[56px] rounded-full bg-red-primary hover:bg-red-900 cursor-pointer
                right-[7%] top-0 transform -translate-y-1/2"
      >
        <MoveUp size={28} className="text-white" />
      </Button>

      <div className="px-4 lg:px-20  2xl:px-40 py-14">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-row gap-6">
            {/* info */}
            <Image
              src="/img/footer/footer-certif.png"
              alt="certif"
              width={35}
              height={60}
              className="object-contain"
            />
            <Image
              src="/img/footer/footer-unwomen.png"
              alt="unwomen"
              width={152}
              height={50}
              className="object-contain"
            />
            <Image
              src="/img/footer/footer-iso.png"
              alt="iso"
              width={206}
              height={50}
              className="object-contain"
            />
          </div>

          {/* social */}
          <div className="flex flex-row gap-4 items-center">
            <Button
              className="w-10 h-10 bg-transparent hover:bg-red-900 active:bg-red-primary cursor-pointer p-1 rounded-lg"
              type="submit"
              aria-label="Subscribe"
              size={"icon"}
            >
              <TreePalm className="!w-full !h-full text-white" />
            </Button>
            <Button
              className="w-10 h-10 bg-transparent hover:bg-red-900 active:bg-red-primary cursor-pointer p-1 rounded-lg"
              type="submit"
              aria-label="Subscribe"
              size={"icon"}
            >
              <Volleyball className="!w-full !h-full text-white" />
            </Button>
            <Button
              className="w-10 h-10 bg-transparent hover:bg-red-900 active:bg-red-primary cursor-pointer p-1 rounded-lg"
              type="submit"
              aria-label="Subscribe"
              size={"icon"}
            >
              <Squirrel className="!w-full !h-full text-white" />
            </Button>
            <Button
              className="w-10 h-10 bg-transparent hover:bg-red-900 active:bg-red-primary cursor-pointer p-1 rounded-lg"
              type="submit"
              aria-label="Subscribe"
              size={"icon"}
            >
              <Sprout className="!w-full !h-full text-white" />
            </Button>
            <Button
              className="w-10 h-10 bg-transparent hover:bg-red-900 active:bg-red-primary cursor-pointer p-1 rounded-lg"
              type="submit"
              aria-label="Subscribe"
              size={"icon"}
            >
              <Send className="!w-full !h-full text-white" />
            </Button>
          </div>

          <div className="flex flex-col ">
            <p className="text-white text-var-md font-light">
              Subscribe. Join the Community.
            </p>
            <form className="flex gap-1">
              <label className="sr-only w-0" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="bg-white px-4 py-3 w-80"
                required
              />
              <Button
                className="w-12 bg-red-primary hover:bg-red-900 active:bg-red-900 rounded-none h-auto cursor-pointer"
                type="submit"
                aria-label="Subscribe"
                size={"icon"}
              >
                <MoveRight />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 flex flex-col lg:flex-row justify-between px-4 lg:px-20  2xl:px-40 text-white gap-4">
        <p>
          Copyright © 2025 Daya Dimensi Indonesia. Website crafted by Antikode
          and @rayzordev .
        </p>

        <div className="space-x-1">
          <Button variant="ghost" className="text-white">
            Privacy Policy
          </Button>
          <span className="text-white">|</span>
          <Button variant="ghost" className="text-white">
            Terms & Conditions
          </Button>
        </div>
      </div>
    </footer>
  );
}

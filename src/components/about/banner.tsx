import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Link from "next/link";

export default function AboutBanner() {
  return (
    <header className="relative">
      <div className="h-[700px] bg-cover bg-center bg-[url(/img/about/banner-about.png)]">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative h-full flex flex-col justify-end pb-40 px-6 lg:pl-24 lg:max-w-xl bg:transparent xl:bg-[#2F2A2A]">
          <div className="my-10">
            <Breadcrumb aria-label="Breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="text-gray-200 hover:text-white"
                  >
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white font-bold">
                    About
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-4">
            Force of Progress
          </h1>
          <p className="text-white/90 text-lg mb-8 font-light leading-relaxed">
            Daya Dimensi Indonesia is a leadership consultant that supports
            organisations develop and deliver strategic programmes such as
            assessment centre, selection, learning, and personal &
            organisational transformation.
          </p>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import NavigationButton from "../custom-button/navigation-button";
import AboutCollaborate from "./collaborate";
import AboutClients from "./clients";

export default function AboutContent() {
  return (
    <main className="wrapper">
      <section className="lg:mx-12 2xl:mx-30">
        <h2 className="text-var-lg mb-12">Daya Dimensi In Numbers</h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 justify-between">
          <div>
            <div className="text-2xl xl:text-7xl font-light text-red-600 mb-1">
              24+ Years
            </div>
            <div className="text-gray-600 text-sm lg:text-[20px] ">
              Experience
            </div>
          </div>
          <div>
            <div className="text-2xl xl:text-7xl font-light text-red-600 mb-1 text-wrap">
              50,000+
            </div>
            <div className="text-gray-600 text-sm lg:text-[20px] ">
              Executive Clients
            </div>
          </div>
          <div>
            <div className="text-2xl xl:text-7xl font-light text-red-600 mb-1">
              400+
            </div>
            <div className="text-gray-600 text-sm  lg:text-[20px]">
              Organization Clients
            </div>
          </div>
        </div>
      </section>

      <section className="my-24 lg:mx-12 2xl:mx-30 flex flex-col lg:flex-row gap-4 justify-center">
        <div className="space-y-8">
          <div className="relative overflow-hidden w-full max-w-lg aspect-square">
            <Image
              src="/img/about/content-1.png"
              alt="activities"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl lg:text-4xl mb-4">
              Leaders of a New Planet
            </h3>
            <p>
              It is our intention is to generate leaders whose mission is to
              advance humanity through fresh ideas, forefront skills, and
              compassion for future generations. We call them Leaders of a New
              Planet.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative overflow-hidden w-full h-96 md:h-[40rem]">
            <Image
              src="/img/about/content-2.png"
              alt="activities"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl lg:text-4xl mb-4">
              Leaders of a New Planet
            </h3>
            <p>
              In working with clients, we curate and provide integrated business
              and leadership solutions. Therefore, we strive to grow our digital
              solutions to better cater your needs.
            </p>
            <NavigationButton>LEARN MORE</NavigationButton>
          </div>
        </div>
      </section>

      <AboutCollaborate />
    </main>
  );
}

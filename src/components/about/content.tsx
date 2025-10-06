import Image from "next/image";
import NavigationButton from "../custom-button/navigation-button";

export default function AboutContent() {
  return (
    <main className="wrapper">
      <section>
        <h2 className="text-var-lg mb-12">Daya Dimensi In Numbers</h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 justify-between">
          <div>
            <div className="text-2xl lg:text-7xl font-light text-red-600 mb-1">
              24+ Years
            </div>
            <div className="text-gray-600 text-sm lg:text-[20px] ">
              Experience
            </div>
          </div>
          <div>
            <div className="text-2xl lg:text-7xl font-light text-red-600 mb-1">
              50,000+
            </div>
            <div className="text-gray-600 text-sm lg:text-[20px] ">
              Executive Clients
            </div>
          </div>
          <div>
            <div className="text-2xl lg:text-7xl font-light text-red-600 mb-1">
              400+
            </div>
            <div className="text-gray-600 text-sm  lg:text-[20px]">
              Organization Clients
            </div>
          </div>
        </div>
      </section>

      <section className="my-24 flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center">
        <div className="space-y-8">
          <div className="relative overflow-hidden">
            <Image
              src="/img/about/content-1.png"
              alt="activities"
              width={481}
              height={481}
              className="w-full object-cover"
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

        <div className="space-y-4">
          <div className="relative overflow-hidden">
            <Image
              src="/img/about/content-2.png"
              alt="activities"
              width={481}
              height={481}
              className="w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl lg:text-4xl mb-4">
              Leaders of a New Planet
            </h3>
            <p>
              In working with clients, we curate and provide integrated business and leadership solutions. Therefore, we strive to grow our digital solutions to better cater your needs.
            </p>
            <NavigationButton>LEARN MORE</NavigationButton>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

export default function AboutClients() {
  const clients = [
    "/img/about/01.png",
    "/img/about/02.png",
    "/img/about/03.png",
    "/img/about/04.png",
    "/img/about/05.png",
    "/img/about/06.png",
    "/img/about/07.png",
    "/img/about/08.png",
    "/img/about/09.png",
    "/img/about/10.png",
  ];

  return (
    <section className="bg-[#2F2A2A] wrapper text-white">
      <h2 className="text-var-lg mb-12 ">Our Clients</h2>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
        {clients.map((client, index) => (
          <div className="  md:w-[174px] md:h-[174px]" key={index}>
            <Image
              src={client}
              alt="client"
              width={174}
              height={174}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

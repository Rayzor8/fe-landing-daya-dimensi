import Image from "next/image";

export default function HomeContent() {
  const images = [
    "/img/home/expertise-1.png",
    "/img/home/expertise-2.png",
    "/img/home/expertise-3.png",
    "/img/home/expertise-4.png",
    "/img/home/expertise-5.png",
    "/img/home/expertise-6.png",
  ];

  return (
    <main className="wrapper">
      <section>
        <div className="max-w-[789px]">
          <h2 className="text-var-lg mb-2">Expertise</h2>
          <p>
            &quot;Organisations who will succeed in the long-run are those who
            are open to new ideas, embrace innovations, instill compassion in
            every act and decision, and consistent in advancing humanity through
            sustainability.&quot; - Excerpts from &apos;Leaders of a New
            Planet&apos; book.
          </p>
        </div>

        {/* cards */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden aspect-auto">
              <Image
                src={image}
                alt={`image-${index}`}
                width={300}
                height={300}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

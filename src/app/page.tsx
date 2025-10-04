
export default function Home() {
  return (
    <div className="relative">
      <div
        className="h-[700px] bg-cover bg-right lg:bg-top bg-[url(/img/home/banner-home.png)]"
      >
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
            <button className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-sm">
              LEARN MORE ABOUT US
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-sm">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-light text-red-600 mb-2">
              24+ Years
            </div>
            <div className="text-gray-600 text-sm">Experience</div>
          </div>
          <div>
            <div className="text-4xl font-light text-red-600 mb-2">50,000+</div>
            <div className="text-gray-600 text-sm">Participants</div>
          </div>
          <div>
            <div className="text-4xl font-light text-red-600 mb-2">403+</div>
            <div className="text-gray-600 text-sm">Corporate Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}

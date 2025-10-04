export default function About() {
  return (
    <div className="relative ">
      <div className="h-[700px] bg-cover bg-center bg-[url(/img/about/banner-about.png)]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-end pb-40 px-6 lg:pl-24 lg:max-w-xl bg:transparent xl:bg-[#2F2A2A]">
          <h1 className="text-5xl lg:text-6xl font-light text-white mb-4">
           Force of Progress
          </h1>
          <p className="text-white/90 text-lg mb-8 font-light leading-relaxed">
           Daya Dimensi Indonesia is a leadership consultant that supports organisations develop and deliver strategic programmes such as assessment centre, selection, learning, and personal & organisational transformation.
          </p>
        </div>
      </div>
    </div>
  );
}

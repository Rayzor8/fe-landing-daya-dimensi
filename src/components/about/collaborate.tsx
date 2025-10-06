import { Sparkles, Star, HandHeart } from "lucide-react";

export default function AboutCollaborate() {
  return (
    <section className="mb-8">
      <h2 className="text-var-lg mb-12 ">Reasons to Collaborate</h2>
      <div className="border-t border-t-gray-200 py-8 flex flex-col lg:flex-row gap-8">
        <div className="space-y-4">
          <Sparkles className="w-14 h-14 bg-[#B92322] text-white rounded-full p-2" />
          <h3 className="text-4xl font-light">Etnical</h3>
          <p>
            We maintain the confidentiality of our clients&apos; data. We uphold
            our integrity by practicing zero-tolerance policy for bribery.
          </p>
        </div>
        <div className="space-y-4">
          <Star className="w-14 h-14 bg-[#B92322] text-white rounded-full p-2" />
          <h3 className="text-4xl font-light">Reliable</h3>
          <p>
            We strive to provide solutions that are supported by data and
            technology.
          </p>
        </div>
        <div className="space-y-4">
          <HandHeart className="w-14 h-14 bg-[#B92322] text-white rounded-full p-2" />
          <h3 className="text-4xl font-light">Agile</h3>
          <p>
            We listen to our clients deliberately and deliver bespoke solutions
            to achieve excellent outcome.
          </p>
        </div>
      </div>
    </section>
  );
}

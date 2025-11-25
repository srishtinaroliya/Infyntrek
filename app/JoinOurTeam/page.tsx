import Image from "next/image";
import JoinUs from "../../components/animation/JoinUs";
import ApplyForm from "../../components/ui/applyForm";
export default function Home() {
  return (
    <div className="bg-[#0B1220] relative min-h-screen text-white w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[480px]">
        <Image
          src="/home/img10.png" // replace with your hero img
          alt="Hero Background"
          fill
          className="object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
            Shape the Future of FinTech: Join <br />
            Our Elite Training Program.
          </h1>

          <p className="text-gray-300 mt-4 max-w-xl">
            Launch your career as a technologist or industry leader with hands-on FinTech innovation training.
          </p>

          <button className="mt-6  hover:bg-blue-600  font-medium">
           <ApplyForm />
          </button>
        </div>
      </section>

      {/* ================= WHY INFYNTREK ================= */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <section className="py-16 px-6 text-center max-w-6xl mx-auto relative">
  <div className="relative inline-block">
    <h2 className="text-2xl font-semibold">Why Choose Infyntrek Systems?</h2>
    <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
      Our program is designed to provide you with practical application experience, industry connections,
      and valuable mentorship support — all brought to life with real projects.
    </p>

    <div className="absolute top-1/2 -translate-y-1/2 left-full ml-4 animate-bounce text-3xl">
      <JoinUs />
    </div>
  </div>
</section>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* CARD */}
          <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-2">📘</div>
            <h3 className="font-semibold mb-1">Cutting-Edge Curriculum</h3>
            <p className="text-gray-400 text-sm">Full-stack & FinTech modules taught by experts.</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-2">🧑‍🏫</div>
            <h3 className="font-semibold mb-1">Expert-Led Instruction</h3>
            <p className="text-gray-400 text-sm">Learn directly from professionals.</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-2">🏢</div>
            <h3 className="font-semibold mb-1">Strong Industry Connections</h3>
            <p className="text-gray-400 text-sm">Gain access to exclusive hiring partners.</p>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
     <section className="py-16 bg-[#0A101A] px-6 text-center">
  <h2 className="text-2xl font-semibold mb-3">
  Unmatched Program{" "}
  <span className="bg-blue-500 italic text-white px-2 py-1 rounded">
    Benefits & Features
  </span>
</h2>


  <p className="text-gray-400 max-w-3xl mx-auto">
    Everything you need to become industry-ready with hands-on experience & dedicated placement support.
  </p>

  <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">

    {/* CARD 1 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">🛠️</div>
      <h3 className="font-semibold">Real Project Experience</h3>
      <p className="text-gray-400 text-sm mt-1">Work on real-world fintech and full-stack projects.</p>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">💰</div>
      <h3 className="font-semibold">Guaranteed Stipend</h3>
      <p className="text-gray-400 text-sm mt-1">Earn while you learn with performance-based stipends.</p>
    </div>

    {/* CARD 3 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">📈</div>
      <h3 className="font-semibold">High-ROI</h3>
      <p className="text-gray-400 text-sm mt-1">Fast-track your career with a results-oriented program.</p>
    </div>

    {/* CARD 4 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">🎓</div>
      <h3 className="font-semibold">Industry Certifications</h3>
      <p className="text-gray-400 text-sm mt-1">Receive globally recognized certifications.</p>
    </div>

    {/* CARD 5 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">📜</div>
      <h3 className="font-semibold">Letters of Recommendation</h3>
      <p className="text-gray-400 text-sm mt-1">Get LORs from industry mentors & project leads.</p>
    </div>

    {/* CARD 6 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">🚀</div>
      <h3 className="font-semibold">Industry 3.0 Ready</h3>
      <p className="text-gray-400 text-sm mt-1">Learn tools & tech used by top modern companies.</p>
    </div>

    {/* CARD 7 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">🧑‍🏫</div>
      <h3 className="font-semibold">1:1 Mentorship</h3>
      <p className="text-gray-400 text-sm mt-1">Dedicated mentors guiding you throughout.</p>
    </div>

    {/* CARD 8 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10">
      <div className="text-3xl mb-2">💼</div>
      <h3 className="font-semibold">Placement Support</h3>
      <p className="text-gray-400 text-sm mt-1">Mock interviews, referrals & guaranteed assistance.</p>
    </div>

  </div>
</section>


      {/* ================= SUCCESS STORIES ================= */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold">Success Stories</h2>

  <p className="text-gray-400 max-w-2xl mx-auto mt-3">
    Hear from alumni who transformed their careers through our program.
  </p>

  <div className="grid md:grid-cols-2 gap-6 mt-12">

    {/* CARD 1 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10 text-left">
      
      {/* PHOTO */}
      <img 
        src="/home/photo4.png" 
        alt="Priya Sharma" 
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
      />

      <p className="text-gray-300 text-center">
        “This hands-on project experience was a game changer. I secured a high-paying role immediately after the program!”
      </p>

      <h4 className="mt-4 font-semibold text-center">Priya Sharma</h4>
      <p className="text-gray-400 text-sm text-center">Software Engineer • FinTech</p>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#111827] p-6 rounded-xl border border-white/10 text-left">

      {/* PHOTO */}
      <img 
        src="/home/photo5.png" 
        alt="Rakesh Das" 
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
      />

      <p className="text-gray-300 text-center">
        “Infyntrek’s mentorship is incredible. The career support helped me land my dream job.”
      </p>

      <h4 className="mt-4 font-semibold text-center">Rakesh Das</h4>
      <p className="text-gray-400 text-sm text-center">Blockchain Developer</p>
    </div>

  </div>
</section>

      {/* ================= FINAL CTA ================= */}
      <section className=" py-16 text-center px-6">
        <h2 className="text-3xl font-semibold text-blue">
          Limited Seats Available for Our Next Cohort
        </h2>

        <p className="text-blue-100 max-w-xl mx-auto mt-3">
          Don’t miss the opportunity to elevate your career.
        </p>

        <button className="mt-6  text-blue-600 font-semibold">
          <ApplyForm />
        </button>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";
import Footer from "@/components/Footer";

const About = () => {

  return <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      
      {/* Overlay */}
      <div className="fixed inset-0 z-0 bg-background/50 backdrop-blur-3xl" />
      {/* Back Button */}
      <Link to="/" className="fixed top-8 left-8 md:top-12 md:left-12 z-50 bg-white/80 hover:bg-white border border-black/20 rounded-full p-3 transition-all hover:scale-110 active:scale-95 shadow-lg" aria-label="Back to home">
        <ArrowLeft className="w-5 h-5 text-black" />
      </Link>

      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Logo Section */}
          <div className="flex justify-center mb-8" style={{
          marginTop: "-120px"
        }}>
            <img src={saluneLogo} alt="Salune Logo" className="w-64 md:w-96 lg:w-[500px] h-auto" />
          </div>

          {/* Slogan */}
          <div className="w-full max-w-6xl mx-auto mb-12 -mt-[75px] px-4" style={{ textAlign: 'center' }}>
            <p className="text-white text-5xl md:text-[72px] font-medium mb-2 leading-tight" style={{ textAlign: 'center' }}>
              Everyone's got a trail to blaze.
            </p>
            <p className="text-white text-5xl md:text-[72px] font-medium italic leading-tight" style={{ textAlign: 'center' }}>
              Here's where they leave their mark.
            </p>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 mt-[25px]">
            Salune: The New Frontier of Creative Infrastructure
          </h1>

          {/* Text Content */}
          <div className="max-w-3xl mx-auto space-y-8 text-foreground">
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                In every era, new technology forces society to redefine what counts as labor, ownership, and value.
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                The factory redefined craft; the internet redefined communication. Now artificial intelligence is reconfiguring creativity itself. Generative tools have made imagination abundant. Images, scripts, and soundtracks can be produced faster than they can be consumed. The result is a paradox: there has never been more output, yet less certainty about where anything comes from. When production becomes effortless, the scarce resource is not content but credibility.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Salune is set to emerge in New York City as an answer to that scarcity.
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                It is a decentralized studio built on the idea that the creative process is the new infrastructure of culture. The minting of a project begins not at completion, but at the first spark of production, when ideas start to materialize into collective effort. From that moment onward, each stage of development is recorded on Salune: the planning, the sourcing, the making, the revisions. In a landscape where platforms like Pump.fun have shown how quickly speculation can create momentary liquidity, Salune applies that same velocity to the creative process itself, redirecting energy from hype to heritage. The goal is not profit extraction but preservation: a transparent record that secures creative work in public memory at a time when authorship is dissolving into automation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                The entertainment industry itself is beginning to evolve along similar lines.
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Traditional studios, once defined by their ability to finance and distribute finished works, are repositioning themselves as cultural infrastructure developers, entities that seed narratives at the concept stage and profit from their long-term economic ripple effects. A successful production no longer functions solely as entertainment; it acts as a catalyst for tourism, urban branding, and secondary markets. Cities and brands are starting to see cultural production as an investment vehicle, capable of generating measurable returns across sectors. Within this new order, the blockchain should be understood not as a speculative frontier but as an accounting layer for culture: a system that records where creative capital originates, how it circulates, and who benefits from its flow. By embedding authorship and participation directly into the medium, it offers a model of ownership that mirrors what entertainment finance has been chasing for decades: shared upside, transparent equity, and traceable cultural impact.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                In the coming decade, creative regulation will no longer hinge on paperwork or institutional oversight, but on systems that make trust native to the medium itself.
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                The blockchain is not a loophole, it's a framework for self coordination. Rather than waiting for regulators to catch up to cultural innovation, Salune embeds accountability directly into its architecture. Each project becomes a visible record of creative labor: who contributed, when, and under what terms. This replaces the opacity that old industry regulation was built to police. By automating proof, Salune accomplishes what agencies and guilds were meant to safeguard authorship, fair compensation, and traceability. The result isn't deregulation; it's autonomy with evidence with a structure where creative economies can move freely without losing their integrity.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Salune adopts this infrastructural mindset and applies it to the scale of individual producers.</h2>
              <p className="text-base md:text-lg leading-relaxed">
                Each project it hosts is a micro-ecosystem: part creative production, part public ledger, part participatory economy. The people who follow and support a project are not passive audiences; they are stakeholders in its development. Every creative act is treated as a line in a larger civic ledger, an entry in the city's ongoing archive of production.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                This approach reframes how culture is financed and remembered.
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Rather than waiting for institutions to underwrite creativity, Salune allows communities and brands to invest directly in the process. Ownership begins at the earliest sketch, not at the point of sale. The ledger becomes a shared memory of creative labor, one that accumulates value through transparency instead of secrecy. In this sense, Salune transforms cultural work into a new form of infrastructure, comparable to a public utility, where imagination circulates as a verified, durable asset.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                As automation expands the field of what can be produced, the challenge for the creative world is no longer invention but verification.
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                The next frontier will not be about making more things; it will be about proving where meaning begins. Salune exists to build that proof. It treats storytelling as civic architecture, process as currency, and transparency as the raw material of trust. In doing so, it sketches a future where culture funds itself, one token, one trace, one verified act of creation at a time.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;
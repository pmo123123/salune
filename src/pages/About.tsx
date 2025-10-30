import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Logo Section */}
          <div className="flex justify-center mb-12">
            <Logo />
          </div>

          {/* About Content */}
          <article className="space-y-8">
            <section>
              <h1 className="text-4xl font-bold text-foreground mb-6">About Salune</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Salune is a creative platform showcasing innovative projects and ideas. 
                We bring together design, technology, and storytelling to create unique experiences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to inspire creativity and foster innovation by presenting 
                curated projects that push boundaries and challenge conventions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed">
                We curate and showcase exceptional projects across various disciplines, 
                providing a platform for creators to share their work with a wider audience. 
                From design and technology to art and culture, we celebrate innovation in all its forms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Interested in collaborating or learning more? Follow us on{" "}
                <a 
                  href="https://x.com/Selune_io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  X (formerly Twitter)
                </a>
                {" "}to stay updated with our latest projects and announcements.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default About;

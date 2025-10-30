const Navigation = () => {
  return (
    <nav className="flex items-center justify-center gap-6 text-foreground">
      <a
        href="#about"
        className="text-sm md:text-base font-medium tracking-wider hover:opacity-70 transition-opacity"
      >
        ABOUT
      </a>
      <span className="text-sm md:text-base">/</span>
      <a
        href="#newsletter"
        className="text-sm md:text-base font-medium tracking-wider hover:opacity-70 transition-opacity"
      >
        NEWSLETTER
      </a>
      <span className="text-sm md:text-base">/</span>
      <a
        href="https://x.com/Selune_io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm md:text-base font-medium tracking-wider hover:opacity-70 transition-opacity"
      >
        X
      </a>
    </nav>
  );
};

export default Navigation;

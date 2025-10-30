import { Link } from "react-router-dom";

const Navigation = () => {
  return <nav className="flex items-center justify-center gap-6 text-foreground">
      <Link to="/about" className="text-sm md:text-base font-medium tracking-wider hover:opacity-70 transition-opacity">
        ABOUT
      </Link>
      <span className="text-sm md:text-base">/</span>
      
      
      <a href="https://x.com/Salune_io" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-medium tracking-wider hover:opacity-70 transition-opacity">
        X
      </a>
    </nav>;
};
export default Navigation;
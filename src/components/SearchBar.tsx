import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-[280px]">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <Star className="w-5 h-5 fill-current" />
      </div>
      <Input
        type="text"
        placeholder="SEARCH..."
        className="pl-12 pr-4 py-6 bg-search-bg/80 backdrop-blur-md border-search-border text-search-text placeholder:text-search-text/70 rounded-full font-medium tracking-wide focus-visible:ring-foreground/20"
      />
    </div>
  );
};

export default SearchBar;

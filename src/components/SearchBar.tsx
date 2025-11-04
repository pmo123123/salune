import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);
  return <div className="relative">
      {!isExpanded ? <button onClick={() => setIsExpanded(true)} className="p-2 hover:opacity-70 transition-opacity" aria-label="Open search">
          
        </button> : <div className="relative w-[280px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Search className="w-5 h-5 text-search-text" />
          </div>
          <Input ref={inputRef} type="text" placeholder="SEARCH..." className="pl-12 pr-10 py-3 bg-search-bg/40 backdrop-blur-md border-search-border/50 text-search-text placeholder:text-search-text/70 rounded-full font-medium tracking-wide focus-visible:ring-foreground/20" onBlur={() => setIsExpanded(false)} />
          <button onClick={() => setIsExpanded(false)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:opacity-70 transition-opacity" aria-label="Close search">
            <X className="w-4 h-4 text-search-text" />
          </button>
        </div>}
    </div>;
};
export default SearchBar;
import { Star } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-[120px] md:text-[160px] font-light tracking-wide flex items-center leading-none">
        <span>s</span>
        <Star className="w-16 h-16 md:w-20 md:h-20 fill-foreground mx-1" />
        <span>lune</span>
      </h1>
    </div>
  );
};

export default Logo;

import { motion } from "framer-motion";
import crown from "@/assets/crown.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showCrown?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showCrown = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: {
      crown: "w-12",
      text: "text-lg tracking-[0.2em]",
      gap: "gap-1"
    },
    md: {
      crown: "w-24 md:w-32",
      text: "text-xl md:text-2xl tracking-[0.25em]",
      gap: "gap-2"
    },
    lg: {
      crown: "w-32 md:w-48 lg:w-56",
      text: "text-2xl md:text-3xl lg:text-4xl tracking-[0.3em]",
      gap: "gap-3 md:gap-4"
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex flex-col items-center ${currentSize.gap} ${className}`}>
      {showCrown && (
        <img
          src={crown}
          alt=""
          aria-hidden="true"
          className={`${currentSize.crown} opacity-90`}
        />
      )}
      <span 
        className={`font-display font-light text-primary ${currentSize.text}`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        NETWORKWEEN
      </span>
    </div>
  );
};

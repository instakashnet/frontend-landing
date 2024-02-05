import Image from "next/image";
import LogoLight from "@/assets/logo-light.svg";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function Logo({ width = 100, height = 50, className }: LogoProps) {
  return (
    <Image
      src={LogoLight}
      alt='Instakash | casa de cambio digital'
      className={`${className} object-contain`}
      width={width}
      height={height}
    />
  );
}

export default Logo;

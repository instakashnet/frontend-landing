import { cn } from "@/lib/utils";
import styles from "./InternalHeader.module.css";
import { InternalHeaderProps } from "./InternalHeader.interface";

function InternalHeader({ title, children, className, containerClassName }: InternalHeaderProps) {
  return (
    <header
      className={cn("w-full relative bg-gradient-to-r from-secondary from-5% to-primary to-95% py-20 lg:py-40", styles.HeaderBg, className)}
    >
      <div className={`container ${containerClassName}`}>
        <h1 className='text-white text-3xl lg:text-5xl font-bold'>{title}</h1>
        {children}
      </div>
    </header>
  );
}

export default InternalHeader;

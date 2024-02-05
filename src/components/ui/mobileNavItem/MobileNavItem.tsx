import { NavItemProps } from "../navItem/NavItem";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function MobileNavItem({ to, Icon, label, className }: NavItemProps) {
  const linkParams = {
    initial: {
      y: "35vh",
      transition: {
        duration: 0.5
      }
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <motion.div {...linkParams}>
      <Link
        href={to}
        className={cn(
          "flex items-center gap-x-4 py-2 pl-0 lg:px-3 text-sm lg:text-lg text-primary font-semibold hover:text-secondary/90 transition-colors",
          className
        )}
      >
        {Icon && <Icon className='w-5 h-5 mr-2' />}
        {label}
      </Link>
    </motion.div>
  );
}

export default MobileNavItem;

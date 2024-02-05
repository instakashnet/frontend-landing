import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItemProps {
  to: string;
  Icon?: LucideIcon;
  label: string;
  className?: string;
}

function NavItem({ to, Icon, label, className }: NavItemProps) {
  return (
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
  );
}

export default NavItem;

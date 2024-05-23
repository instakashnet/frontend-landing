"use client";

import Logo from "@/components/ui/logo/Logo";
import Link from "next/link";
import Navigation from "../navigation/Navigation";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import MobileNavigation from "../mobile-navigation/MobileNavigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "./Header.module.css";

function Header() {
  const matches = useMediaQuery("(max-width: 1024px)");
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  return (
    <motion.header className={cn("border-b bg-white z-10 relative", styles.Header, show ? styles.OpenMenu : "")}>
      <div className='w-full xl:container mx-auto flex flex-col lg:flex-row items-center justify-between py-7 px-6 overflow-hidden lg:overflow-visible'>
        <div className='flex flex-row justify-between items-center w-full lg:w-auto'>
          <Link href='/'>
            <Logo className='w-40' />
          </Link>
          <button className='text-sm font-semibold text-primary lg:hidden' onClick={toggleShow}>
            MENÚ
          </button>
        </div>
        <Navigation />
        {matches && <MobileNavigation show={show} onToggle={toggleShow} />}
      </div>
    </motion.header>
  );
}

export default Header;

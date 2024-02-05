"use client";

import { Button } from "@/components/ui/button/Button";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import MobileNavItem from "@/components/ui/mobileNavItem/MobileNavItem";
import { NAVIGATION } from "@/enums/navigation";
import { usePathname } from "next/navigation";

function MobileNavigation({ show = false, onToggle }: { show?: boolean; onToggle: () => void }) {
  const [isShown, setIsShown] = useState(show);
  const matches = useMediaQuery("(min-width: 1024px)");
  const pathname = usePathname();

  const navParams = {
    initial: {
      transition: {
        staggerChildren: 0.09
      }
    },
    open: {
      transition: {
        staggerChildren: 0.09
      }
    }
  };

  useEffect(() => {
    setIsShown(matches);
  }, [matches]);

  useEffect(() => {
    setIsShown(show);
  }, [show]);

  useEffect(() => {
    if (isShown) {
      onToggle();
    }
    // disable eslint warning
  }, [pathname]);

  return (
    <AnimatePresence>
      {isShown && (
        <motion.nav
          initial='initial'
          animate='open'
          exit={{ opacity: 0, scaleY: 0, transition: { duration: 0.48 } }}
          variants={navParams}
          className='origin-top w-full mt-4 lg:mt-0'
        >
          <div className='overflow-hidden'>
            <MobileNavItem to={NAVIGATION.NOSOTROS} label='Nosotros' />
            <MobileNavItem to={NAVIGATION.BENEFICIOS} label='Beneficios' />
            <MobileNavItem to={NAVIGATION.NIVELES} label='Niveles' />
            <MobileNavItem to={NAVIGATION.PREGUNTAS_FRECUENTES} label='FAQ' />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              className='mt-6 flex items-center gap-4 w-full'
            >
              <a
                className='lg:text-lg text-primary font-semibold cursor-pointer'
                href='https://app.instakash.net'
                target='_blank'
                rel='noreferrer'
              >
                Acceder
              </a>
              <a
                className='text-sm lg:text-lg p-3 px-6 text-white bg-primary rounded-sm font-semibold text-center cursor-pointer'
                href='https://app.instakash.net/register'
                target='_blank'
                rel='noreferrer'
              >
                Registrarte
              </a>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default MobileNavigation;

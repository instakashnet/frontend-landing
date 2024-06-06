"use client";

import { Alert } from "@/components/ui/alert";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Callout({ children }: { children: React.ReactNode }) {
  const [isFixed, setIsFixed] = useState(false);
  const [show, setShow] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sentinelRef.current) {
        const sentinelPosition = sentinelRef.current.getBoundingClientRect().top;
        setIsFixed(sentinelPosition <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClose = () => {
    setShow(false);
  };

  return (
    <div className='w-full' ref={sentinelRef}>
      <div className={`w-full transition-all duration-300 ${isFixed ? "fixed top-0 left-0 z-50" : ""}`}>
        <AnimatePresence>
          {show && (
            <motion.div initial={{ y: "-100%", opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <Alert variant='info' className='mb-4'>
                <motion.div
                  className='relative'
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{
                    duration: 1.7, // duration of one blink cycle
                    repeat: Infinity,
                    ease: "easeInOut" // easing function
                  }}
                >
                  {children}
                  <button className='absolute right-0 top-1'>
                    <XIcon className='w-5 h-5' onClick={onClose} />
                  </button>
                </motion.div>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Callout;

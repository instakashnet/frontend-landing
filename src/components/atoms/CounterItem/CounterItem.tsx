"use client";

import { Variants, motion } from "framer-motion";

export interface CounterItemProps {
  Icon: React.ReactNode;
  description: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
};

function CounterItem({ Icon, description }: CounterItemProps) {
  return (
    <motion.div
      className='flex flex-col gap-6 items-center justify-center mx-8 max-w-sm'
      variants={variants}
      initial='hidden'
      animate='visible'
    >
      <div className='w-40 h-40 rounded-full bg-primary grid place-items-center p-4'>{Icon}</div>
      <h3 className='text-xl font-semibold text-center text-primary/90'>{description}</h3>
    </motion.div>
  );
}

export default CounterItem;

"use client";

import Image from "next/image";
import SuperKashImg from "@/assets/illustrations/super-kash.svg";
import { motion } from "framer-motion";

function SuperKash() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
      }}
      initial='hidden'
      animate='visible'
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <Image src={SuperKashImg} alt='Instakash con mejor tipo de cambio' className='w-80 lg:w-[26rem] relative bottom-0 left-10' />
    </motion.div>
  );
}

export default SuperKash;

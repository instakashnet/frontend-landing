"use client";

import Image from "next/image";
import { Variants, motion } from "framer-motion";
import APpMockupImg from "@/assets/illustrations/app-mockup.webp";

const variants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.75 } }
};

function AppMockup() {
  return (
    <div className='min-w-[20rem] min-h-[20rem]  lg:min-w-[30rem] lg:min-h-[30rem] rounded-full bg-primary relative'>
      <motion.div variants={variants} whileInView='visible' initial='hidden' viewport={{ once: true }}>
        <Image
          src={APpMockupImg}
          className='w-[24rem] h-[24rem] lg:w-[34rem]  lg:h-[34rem] top-[-1rem] object-contain absolute'
          alt='Descarga app Instakash'
        />
      </motion.div>
    </div>
  );
}

export default AppMockup;

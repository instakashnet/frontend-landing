"use client";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import styles from "./ExchangeStep.module.css";
import Image from "next/image";
import { ExchangeStepProps } from "./ExchangeStep.interfaces";

const variants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.7
    }
  })
};

function ExchangeStep({ title, image, description, index }: ExchangeStepProps) {
  return (
    <motion.div
      variants={variants}
      whileInView='visible'
      initial='hidden'
      viewport={{
        once: true
      }}
      custom={index}
      className={cn("relative flex flex-col items-center text-center", styles.Step)}
      key={title}
    >
      <Image src={image} className='w-20 object-contain' alt={title} />
      <h4 className='font-semibold text-lg text-primary mt-4'>{title}</h4>
      <p className='font-medium'>{description}</p>
    </motion.div>
  );
}

export default ExchangeStep;

"use client";

import { LucideProps } from "lucide-react";

export interface ValueItemProps {
  title: string;
  description: string;
  Icon: React.ComponentType<LucideProps>;
}

function ValueItem({ title, description, Icon }: ValueItemProps) {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-10'>
      <Icon fill='#9ECDCE' size={70} className='text-primary hidden lg:block' />
      <div className='flex flex-col gap-2'>
        <h4 className='text-xl lg:text-3xl font-semibold text-primary'>{title}</h4>
        <p className='font-medium'>{description}</p>
      </div>
    </div>
  );
}

export default ValueItem;

import { LucideProps } from "lucide-react";

export interface CounterItemProps {
  Icon: React.ComponentType<LucideProps>;
  description: string;
}

function CounterItem({ Icon, description }: CounterItemProps) {
  return (
    <div className='flex flex-col gap-6 items-center justify-center mx-8 max-w-sm'>
      <div className='w-40 h-40 rounded-full bg-primary grid place-items-center p-4'>
        <Icon size={50} className='text-white' />
      </div>
      <h3 className='text-xl font-semibold text-center text-primary/90'>{description}</h3>
    </div>
  );
}

export default CounterItem;

import { Card } from "@/components/ui/card/Card";
import { CategoryItemProps } from "./CategoryItem.interface";

function CategoryItem({ Icon, title }: CategoryItemProps) {
  return (
    <Card variant='outline' className='rounded-xl p-0 border-primary/20 hover:shadow-xl transition-all'>
      <div className='flex flex-col items-center justify-center gap-6 w-60 lg:w-72 h-52 lg:h-60'>
        <div className='border border-primary p-2 rounded-full'>
          <div className='bg-primary rounded-full w-20 h-20 grid place-items-center'>{Icon}</div>
        </div>
        <p className='text-xl text-primary font-semibold'>{title}</p>
      </div>
    </Card>
  );
}

export default CategoryItem;

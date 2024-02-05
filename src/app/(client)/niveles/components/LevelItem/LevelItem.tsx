import { Card } from "@/components/ui/card/Card";
import { LevelItemProps } from "./LevelItem.interface";
import { Progress } from "@/components/ui/progress/Progress";

function LevelItem({ amount = 0, limit = 0, levelName, children }: LevelItemProps) {
  const percentage = (amount / limit) * 100;

  return (
    <Card className='px-8 py-10 flex flex-col justify-center relative z-10'>
      <div className='flex flex-col items-center lg:items-start lg:flex-row gap-8'>
        <div className='rounded-full w-24 h-24 grid place-items-center bg-secondary/10 border-2 border-primary text-primary text-lg font-semibold'>
          {levelName}
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <h4 className='font-semibold text-xl text-gray-600 mb-2'>{`Nivel ${levelName}`}</h4>
          {children}
        </div>
      </div>
      <div className='mt-4'>
        <div className='flex items-center justify-between text-sm'>
          <p>Has cambiado:</p>
          <p className='font-semibold'>
            {amount.toLocaleString("en-US", { style: "currency", currency: "USD" })} /{" "}
            {levelName === "Experto" ? "∞" : limit.toLocaleString("en-US", { style: "currency", currency: "USD" })}
          </p>
        </div>
        <Progress value={percentage} className='mt-2' />
        <p className='mt-2'>
          <b>Nivel:</b> {levelName}
        </p>
      </div>
    </Card>
  );
}

export default LevelItem;

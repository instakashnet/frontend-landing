import Card from "@components/UI/Card";

import styles from "./LevelCard.module.scss";
import Levelprogress from "../level-progress/LevelProgress";

function LevelCard({ userLevel = "", levelDescription = "", amountRange = { min: 0, max: 0 }, completed = 0 }) {
  return (
    <Card className='!p-7 max-w-lg lg:max-w-xl relative z-1'>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-3 mb-6'>
        <div className={styles.levelLabel}>
          <span className='text-lg'>{userLevel}</span>
        </div>
        <div className='mt-3 lg:mt-0 lg:text-left'>
          <h3 className='subtitle !font-[600] !text-2xl mb-1'>Nivel {userLevel}</h3>
          <p className='text-sm lg:text-[1rem] leading-6'>{levelDescription}</p>
        </div>
      </div>
      <Levelprogress completed={completed} userLevel={userLevel} amountRange={amountRange} />
    </Card>
  );
}

export default LevelCard;

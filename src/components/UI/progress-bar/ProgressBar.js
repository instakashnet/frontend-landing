import RProgressBar from "@ramonak/react-progress-bar";
import styles from "./ProgressBar.module.scss";

function ProgressBar({ completed = 100 }) {
  return (
    <RProgressBar
      completed={completed}
      labelSize='12px'
      barContainerClassName={styles.ProgressBar}
      height={16}
      customLabel={undefined}
      bgColor='#0d8284'
    />
  );
}

export default ProgressBar;

import styles from '../../styles/UI.module.scss';

const Swipe = ({ onClick, type }) => {
  return (
    <button type='button' onClick={onClick} className={`${styles.swipe} ${type === 'sell' ? '' : styles.swipeRotate}`}>
      <img src='/images/icons/circleArrows.svg' atl='swipe' />
    </button>
  );
};

export default Swipe;

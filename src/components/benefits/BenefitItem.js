import Image from 'next/legacy/image';
import Card from '../UI/Card';
import styles from './BenefitItem.module.scss';

const BenefitItem = ({ benefit }) => {
  return (
    <Card className={styles.Card} key={benefit._id}>
      <div className={styles.Cover}>
        <Image src={benefit.image?.url} alt={benefit.image?.alt} layout='fill' objectFit='cover' />
      </div>
      <div className={styles.Info}>
        <h3>{benefit.subtitle}</h3>
        <h2 className='uppercase'>{benefit.title}</h2>
        {benefit.from && (
          <p className={styles.Date}>
            Del <time dateTime={benefit.from}>{benefit.from}</time>{' '}
            {benefit.until && (
              <>
                al <time dateTime={benefit.until}>{benefit.until}</time>
              </>
            )}
          </p>
        )}
        <p>{benefit.description}</p>
        <div className={styles.Actions}>
          <a href={benefit.accessUrl} className='mr-4'>
            {benefit.btnLabel}
          </a>
          {/* <button type='button' onClick={() => openModalHandler('coupons')}>
                        ¿Cómo uso los cupones?
                      </button> */}
        </div>
      </div>
    </Card>
  );
};

export default BenefitItem;

import { AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import styles from './question-item.module.scss';

const QuestionItem = ({ header, children }) => {
  return (
    <AccordionItem className='cursor-pointer'>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h2 className={styles.QuestionTitle}>{header}</h2>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>{children}</AccordionItemPanel>
    </AccordionItem>
  );
};

export default QuestionItem;

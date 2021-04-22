import { AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

const QuestionItem = ({ header, children }) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{header}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>{children}</AccordionItemPanel>
    </AccordionItem>
  );
};

export default QuestionItem;

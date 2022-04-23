import { AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

const QuestionItem = ({ header, children }) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h2>{header}</h2>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>{children}</AccordionItemPanel>
    </AccordionItem>
  );
};

export default QuestionItem;

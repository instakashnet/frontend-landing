import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs";
import CategoryItem from "../CategoryItem/CategoryItem";
import { LandmarkIcon, RefreshCcw, UserCircleIcon } from "lucide-react";
import { QUESTION_CATEGORIES } from "./Categories.enum";
import Image from "next/image";
import KashIcon from "@/assets/icons/kash.svg";
import styles from "./CategoriesSection.module.css";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion/Accordion";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { getQuestionsQuery } from "../../../../../../sanity/utils/getQuestions";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface Question {
  title: string;
  question: string;
  answer: PortableTextBlock[];
  category: QUESTION_CATEGORIES;
}

async function getQuestions() {
  try {
    const questions = await getQuestionsQuery();
    return questions;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);
  }
}

async function CategoriesSection() {
  const questions: Question[] = await getQuestions();

  return (
    <section className='container py-20'>
      <div className='text-center'>
        <h2 className='text-4xl lg:text-5xl font-semibold max-w-xl mx-auto text-primary lg:leading-[4rem]'>
          Si tienes preguntas te damos las respuestas
        </h2>
        <p className='mt-6'>Selecciona la categoria para ver las preguntas que necesites</p>
      </div>
      <Tabs className='mt-10 lg:pb-0'>
        <TabsList defaultValue={QUESTION_CATEGORIES.EXCHANGE} className='border-none bg-transparent h-auto'>
          <TabsTrigger className={styles.TabItem} value={QUESTION_CATEGORIES.EXCHANGE}>
            <CategoryItem Icon={<LandmarkIcon className='h-10 w-10 text-white' />} title='Casa de cambio' />
          </TabsTrigger>
          <TabsTrigger className={styles.TabItem} value={QUESTION_CATEGORIES.KASH}>
            <CategoryItem Icon={<Image src={KashIcon} width={40} height={40} alt='Moneda KASH' />} title='Kash' />
          </TabsTrigger>
          <TabsTrigger className={styles.TabItem} value={QUESTION_CATEGORIES.ACCOUNT}>
            <CategoryItem Icon={<UserCircleIcon className='h-10 w-10 text-white' />} title='Cuenta y perfil' />
          </TabsTrigger>
          <TabsTrigger className={styles.TabItem} value={QUESTION_CATEGORIES.ORDERS}>
            <CategoryItem Icon={<RefreshCcw className='h-10 w-10 text-white' />} title='Cambios de divisas' />
          </TabsTrigger>
        </TabsList>

        <TabsContent value={QUESTION_CATEGORIES.EXCHANGE}>
          <Accordion collapsible type='single'>
            {questions
              ?.filter((question) => question.category === QUESTION_CATEGORIES.EXCHANGE)
              .map((question) => (
                <AccordionItem key={question.title} value={question.title}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>
                    <PortableText value={question.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </TabsContent>

        <TabsContent value={QUESTION_CATEGORIES.KASH}>
          <Accordion collapsible type='single'>
            {questions
              ?.filter((question) => question.category === QUESTION_CATEGORIES.KASH)
              .map((question) => (
                <AccordionItem key={question.title} value={question.title}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>
                    <PortableText value={question.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </TabsContent>

        <TabsContent value={QUESTION_CATEGORIES.ACCOUNT}>
          <Accordion collapsible type='single'>
            {questions
              ?.filter((question) => question.category === QUESTION_CATEGORIES.ACCOUNT)
              .map((question) => (
                <AccordionItem key={question.title} value={question.title}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>
                    <PortableText value={question.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </TabsContent>

        <TabsContent value={QUESTION_CATEGORIES.ORDERS}>
          <Accordion collapsible type='single'>
            {questions
              ?.filter((question) => question.category === QUESTION_CATEGORIES.ORDERS)
              .map((question) => (
                <AccordionItem key={question.title} value={question.title}>
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>
                    <PortableText value={question.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default CategoriesSection;

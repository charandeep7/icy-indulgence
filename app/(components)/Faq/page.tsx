"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faqs } from "@/lib/constant";

export default function Faq() {
  return (
    <div>
      <h1 className="ml-16 sm:ml-24 md:ml-36 font-semibold text-2xl mb-2">FAQs</h1>
      <Accordion variant="splitted" selectionMode="multiple" className="w-10/12 m-auto">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index.toString()} aria-label="Accordion 6" title={question}>
            {answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
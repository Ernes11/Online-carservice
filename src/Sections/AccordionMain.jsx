import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";

const App = () => (
  <div className="accordion__container">
    <Accordion atomic={true}>
      <h1>Frequently Asked Questions</h1>
      <AccordionItem title="How long should a car repair take?">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="How do I schedule my car's appointment ?">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="What are the repair services provided?">
        <DummyContent />
      </AccordionItem>
      <AccordionItem title="How do I find auto body shops near me?">
        <DummyContent />
      </AccordionItem>
      <AccordionItem title="Genuine spare parts during car repair??">
        <DummyContent />
      </AccordionItem>
    </Accordion>
  </div>
);

const DummyContent = () => (
  <p>
    I have got my car repaired at Finsweet many times before, they are good at
    what they do. Not only did they repair my car I have got my car repaired at
    Finsweet I have got my car repaired at Finsweet
  </p>
);

export default App;

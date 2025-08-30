import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cuándo estará disponible la aplicación?',
    answer: 'Estamos trabajando para lanzar la app lo antes posible. ¡Deja tu correo para ser el primero en saberlo! Esperamos un lanzamiento en el presente año.',
  },
  {
    question: '¿En qué dispositivos funcionará?',
    answer: 'La aplicación estará disponible para dispositivos Android.',
  },
  {
    question: '¿Habrá una versión gratuita?',
    answer: 'Sí, ofreceremos una versión gratuita con funciones esenciales. También tendremos planes premium con características avanzadas a un precio justo.',
  },
  /*{
    question: '¿La aplicación mostrará anuncios?',
    answer: 'Creemos en una experiencia de usuario sin interrupciones. La versión gratuita contará con pequeños anuncios, mientras que la premium no tendrá anuncios.',
  },*/
];

export function FaqSection() {
  return (
    <section className="container mx-auto max-w-3xl py-20 md:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preguntas frecuentes</h2>
      </div>
      <Accordion type="single" collapsible className="w-full mt-8">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitEmail } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Enviando...' : 'Notificarme cuando esté disponible'}
    </Button>
  );
}

export function CtaSection() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(submitEmail, initialState);

  useEffect(() => {
    if (state.message) {
      if (Object.keys(state.errors).length === 0 && state.message !== 'Error de validación.') {
         toast({
          title: '¡Éxito!',
          description: state.message,
        });
        formRef.current?.reset();
      } else if (state.message !== 'Error de validación.') {
         toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="cta-form" className="container mx-auto py-20 md:py-32">
      <Card className="mx-auto max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl">
            ¿Estás listo para transformar tu vida?
          </CardTitle>
          <CardDescription>
            Déjanos tu correo y sé el primero en saber cuando lanzamos.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={dispatch}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input id="name" name="name" placeholder="Tu nombre" required aria-label="Nombre" />
               {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Input id="email" name="email" type="email" placeholder="tu@correo.com" required aria-label="Correo electrónico"/>
              {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}

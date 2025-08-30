'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function CtaSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isFormFilled = name.trim() !== '' && email.trim() !== '';

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
        <form
          action="https://formspree.io/f/xpwjpqrb"
          method="POST"
        >
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input 
                id="name" 
                name="name" 
                placeholder="Tu nombre" 
                required 
                aria-label="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="tu@correo.com" 
                required 
                aria-label="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Textarea id="message" name="message" placeholder="Déjanos un mensaje (opcional)" aria-label="Mensaje" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
             <Button 
                type="submit" 
                className={cn('w-full', { 'bg-indigo-500': isFormFilled })}
                disabled={!isFormFilled}
              >
                Notificarme cuando esté disponible
              </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
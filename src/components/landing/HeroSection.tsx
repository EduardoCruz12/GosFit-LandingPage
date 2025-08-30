import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col items-center gap-10 py-20 text-center md:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
          ¡La App de Fitness que <span className="text-primary">Realmente</span> Necesitas!
        </h1>

        {/* Sección con texto a la izquierda y imagen a la derecha */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="text-left md:w-1/2">
            <p className="text-lg text-muted-foreground md:text-xl">
              Dietas personalizadas, rutinas de ejercicio y mucho más, sin trucos ni complicaciones.
            </p>
            <p className="text-muted-foreground">
              ¿Estás cansado de las aplicaciones de fitness con funciones limitadas, precios elevados y errores técnicos? Nosotros también. Con nuestra app tendrás todo lo que necesitas sin problemas ni costos ocultos. ¡Lo mejor de todo es que será completamente funcional desde el primer día!
            </p>
          </div>

          {/* Imagen de la app */}
          <div className="md:w-1/2">
            <Image
              src="/images/GOSFIT-INICIO.png"
              alt="Vista de la app de fitness"
              width={500}
              height={300}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" asChild>
            <a href="#cta-form">¡Déjanos tu correo y sé el primero en saber!</a>
          </Button>
        </div>
      </div>

      {/* Las 4 imágenes en grilla */}
      <div className="relative mx-auto w-full max-w-[1200px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Image
          src="/images/Imagen3.png"
          alt="Pantalla de inicio de la app de fitness"
          width={300}
          height={600}
          className="rounded-lg shadow-2xl"
        />
        <Image
          src="/images/Imagen4.png"
          alt="Vista de rutinas personalizadas en la app"
          width={300}
          height={600}
          className="rounded-lg shadow-2xl"
        />
        <Image
          src="/images/Imagen5.png"
          alt="Seguimiento de progreso en la app de fitness"
          width={300}
          height={600}
          className="rounded-lg shadow-2xl"
        />
        <Image
          src="/images/Imagen6.png"
          alt="Sección de nutrición y dietas de la app"
          width={300}
          height={600}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}

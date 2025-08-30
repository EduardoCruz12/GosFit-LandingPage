import { Salad, Dumbbell, TrendingUp, CalendarDays, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Salad,
    title: 'Dietas Personalizadas',
    description: 'Planes de alimentación adaptados a tus objetivos, preferencias y necesidades calóricas.',
  },
  {
    icon: Dumbbell,
    title: 'Rutinas de Ejercicio',
    description: 'Programas de entrenamiento para todos los niveles, desde principiantes hasta avanzados.',
  },
  {
    icon: TrendingUp,
    title: 'Control de Progreso',
    description: 'Visualiza tus avances con gráficos y estadísticas detalladas de tu rendimiento.',
  },
  {
    icon: CalendarDays,
    title: 'Planificación Completa',
    description: 'Organiza tus comidas y entrenamientos en un calendario integrado y fácil de usar.',
  },
  {
    icon: Smartphone,
    title: 'Interfaz Intuitiva y Amigable',
    description: 'Una app diseñada para ser amigable y fácil de navegar, sin complicaciones.',
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto space-y-12 py-20 md:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Todo lo que necesitas en una sola app</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Funciones potentes y fáciles de usar para que te concentres en lo que importa: tus resultados.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col items-center p-6 text-center">
            <CardHeader className="p-0">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <feature.icon className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-2">{feature.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}

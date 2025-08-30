const problems = [
  {
    title: 'Funciones Gratis y Útiles',
    description: 'Otras apps te cobran por funciones básicas. Nosotros ofrecemos un plan gratuito robusto.',
  },
  {
    title: 'Transparencia Total',
    description: 'Sin costos ocultos ni suscripciones engañosas. Sabes exactamente por lo que pagas.',
  },
  {
    title: 'Tecnología Confiable',
    description: 'Adiós a los bugs y apps lentas. Nuestra tecnología está diseñada para funcionar siempre.',
  },
  {
    title: 'Precios Justos',
    description: 'Planes premium a un costo accesible para que todos puedan alcanzar sus metas.',
  },
  {
    title: 'Experiencia Sin Anuncios',
    description: 'Concéntrate en tu entrenamiento, no en anuncios molestos que interrumpen tu progreso.',
  },
  {
    title: 'Funcionalidad Completa',
    description: 'Nuestra app se lanza completa, sin promesas de "próximamente" para funciones clave.',
  },
  {
    title: 'Soporte Eficiente',
    description: 'Un equipo de soporte real y dispuesto a ayudarte cuando lo necesites.',
  },
];

export function ProblemsSection() {
  return (
    <section className="w-full bg-muted py-20 md:py-32">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nosotros resolvemos lo que otras apps no logran
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hemos escuchado a los usuarios y diseñado una experiencia que elimina las frustraciones comunes del fitness digital.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem.title} className="grid gap-1">
              <h3 className="text-lg font-bold">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

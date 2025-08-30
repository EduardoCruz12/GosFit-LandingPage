import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="font-bold">GOSFIT</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Tu compañero de fitness definitivo, diseñado para resultados reales.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Términos y condiciones
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Política de privacidad
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-semibold">Contacto</h3>
            <a
              href="mailto:startup.gos.dev@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              startup.gos.dev@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p className="text-sm max-w-2xl mx-auto">
            ¡Sé uno de los primeros en conocer nuestra app! Recibe notificaciones de lanzamiento y ofertas exclusivas. Solo tienes que dejar tu correo y nosotros nos encargamos del resto.
          </p>
          <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} GosFit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

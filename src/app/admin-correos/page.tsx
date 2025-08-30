'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { getSubscriptions } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';

type Subscription = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

// IMPORTANT: In a real application, use a secure authentication system.
// This is a simplified example for demonstration.
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true);
      getSubscriptions()
        .then((data) => {
          setSubscriptions(data);
        })
        .catch(() => setError('Failed to fetch subscriptions.'))
        .finally(() => setIsLoading(false));
    }
  }, [isAuthenticated]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta.');
      setIsAuthenticated(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Acceso de Administrador</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password for admin access"
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Correos Registrados</h1>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Correo Electrónico</TableHead>
                <TableHead>Fecha de Registro</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    Cargando...
                  </TableCell>
                </TableRow>
              ) : subscriptions.length > 0 ? (
                subscriptions.map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell>{sub.name}</TableCell>
                    <TableCell>{sub.email}</TableCell>
                    <TableCell>{format(new Date(sub.createdAt), 'PPpp')}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    No hay correos registrados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

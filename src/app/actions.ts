'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

const emailSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
});

export async function submitEmail(prevState: any, formData: FormData) {
  try {
    const validatedFields = emailSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Error de validación.',
      };
    }

    await db.addSubscription(validatedFields.data);

    // Revalidate the admin path to show the new email
    revalidatePath('/admin-correos');

    return {
      message: '¡Gracias por registrarte! Te avisaremos cuando la app esté lista.',
      errors: {},
    };
  } catch (e) {
    return {
      message: 'Ocurrió un error en el servidor. Inténtalo de nuevo.',
      errors: {},
    };
  }
}

import { z } from "zod";

export const ReclamacionesValidation = z.object({
  name: z.string().min(2, { message: "Ingresa tu(s) nombre(s)" }),
  lastName: z.string().min(2, { message: "Ingresa tu(s) apellido(s)" }),
  email: z.string().email({ message: "Ingresa un correo válido" }),
  phone: z
    .string()
    .regex(/^\+?\d{1,3}?[-. ]?\(?\d{1,3}?\)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,4}$/, { message: "Ingresa un teléfono válido" }),
  documentType: z.string().nullable(),
  documentNumber: z.string().regex(/^[0-9]+$/, { message: "Solo se permiten números" }),
  businessName: z.string().max(40, { message: "Máximo 40 caracteres" }),
  businessRuc: z
    .string()
    .regex(/^$|^\d+$/, { message: "Solo se permiten números" })
    .optional(),
  service: z.string().min(2, { message: "Selecciona un servicio" }),
  amount: z.string().regex(/^[0-9.\,]+$/, { message: "Solo se permiten números y decimales" }),
  claimType: z.string().min(2, { message: "Selecciona un tipo de reclamo" }),
  claim: z.string().min(2, { message: "Escribe tu reclamo" }).max(500, { message: "Máximo 500 caracteres" })
});

import { z } from "zod";

export const CompanyFormSchema = z.object({
  ruc: z.string().length(11, { message: "El RUC ingresado no es correcto. Por favor, verifica los datos" }),
  razonSocial: z.string().min(4, { message: "Ingresa la razón social de tu empresa" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  name: z.string().min(4, { message: "Ingresa tu nómbre completo" }),
  phone: z
    .string()
    .regex(/^\+?\d{1,4}?[-.\s]?\(?(\d{1,3}?\)?[-.\s]?)?(\d{1,4}[-.\s]?)?\d{1,9}(\s\d{1,9})?$/g, { message: "Número de teléfono inválido" }),
  terms: z.boolean().refine((value) => value, { message: "Debes aceptar los términos y condiciones" })
});

export type FormValues = z.infer<typeof CompanyFormSchema>;

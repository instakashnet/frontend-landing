"use client";

import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/inputs/input/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select/Select";
import { Textarea } from "@/components/ui/textarea/Textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReclamacionesFormValues } from "../../enums/reclamacionesValues";
import { IReclamacionesFormInput } from "./ReclamacionesForm.interface";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReclamacionesValidation } from "../../validation/ReclamacionesValidation";

function ReclamacionesForm() {
  const form = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IReclamacionesFormInput>({
    mode: "onBlur",
    resolver: zodResolver(ReclamacionesValidation)
  });
  const onSubmit: SubmitHandler<IReclamacionesFormInput> = async (data) => {
    setIsLoading(true);

    const captchaToken = await recaptchaRef.current?.executeAsync();
    if (!captchaToken) return;

    const formValues = {
      ...data,
      [ReclamacionesFormValues.RECAPTCHA]: captchaToken
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formValues,
        process.env.NEXT_PUBLIC_EMAILJS_P_KEY ?? ""
      );
      setSent(true);
      toast({
        variant: "success",
        title: "Reclamo recibido!",
        description: "Tu reclamo ha sido recibido, en breve nos comunicaremos contigo."
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error al enviar el reclamo",
        description: "Hubo un error al enviar el reclamo, por favor intenta nuevamente o contacta a nuestro canal de atención."
      });
    } finally {
      setIsLoading(false);
    }
  };

  console.log(errors);

  return (
    <form ref={form} className='w-full mt-2 max-w-2xl mx-auto flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Input placeholder='Ingresa tu(s) nombre(s)' {...register(ReclamacionesFormValues.NAME)} error={errors.name?.message} />
        <Input placeholder='Ingresa tu(s) apellido(s)' {...register(ReclamacionesFormValues.LAST_NAME)} error={errors.lastName?.message} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Input placeholder='Ingresa tu correo' type='email' {...register(ReclamacionesFormValues.EMAIL)} error={errors.email?.message} />
        <Input placeholder='Ingresa tu teléfono' type='tel' {...register(ReclamacionesFormValues.PHONE)} error={errors.phone?.message} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Select defaultValue='' onValueChange={(value) => setValue(ReclamacionesFormValues.DOCUMENT_TYPE, value, { shouldValidate: true })}>
          <SelectTrigger error={errors.documentType?.message}>
            <SelectValue placeholder='Documento de identidad' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='DNI'>DNI</SelectItem>
            <SelectItem value='RUC'>RUC</SelectItem>
            <SelectItem value='PTP'>PTP</SelectItem>
            <SelectItem value='CE'>Carnet de Exntranjeria</SelectItem>
            <SelectItem value='PAS'>Pasaporte</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder='Nro. de documento'
          {...register(ReclamacionesFormValues.DOCUMENT_NUMBER)}
          error={errors.documentNumber?.message}
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Input
          placeholder='Razon social (si aplica)'
          {...register(ReclamacionesFormValues.BUSINESS_NAME)}
          error={errors.businessName?.message}
        />
        <Input
          placeholder='RUC de la empresa (si aplica)'
          {...register(ReclamacionesFormValues.BUSINESS_RUC)}
          error={errors.businessRuc?.message}
        />
      </div>
      <Select onValueChange={(value) => setValue(ReclamacionesFormValues.SERVICE, value, { shouldValidate: true })}>
        <SelectTrigger error={errors.service?.message}>
          <SelectValue placeholder='¿Que servicio utilizaste?' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='Compra'>Cambio de divisas (compra)</SelectItem>
          <SelectItem value='Venta'>Cambio de divisas (venta)</SelectItem>
        </SelectContent>
      </Select>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Input
          placeholder='Monto cambiado'
          type='number'
          step='.01'
          {...register(ReclamacionesFormValues.AMOUNT)}
          error={errors.amount?.message}
        />
        <Select onValueChange={(value) => setValue(ReclamacionesFormValues.CLAIM_TYPE, value, { shouldValidate: true })}>
          <SelectTrigger error={errors.claimType?.message}>
            <SelectValue placeholder='Tipo de reclamo' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='queja'>Queja</SelectItem>
            <SelectItem value='reclamo'>Reclamo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        rows={7}
        placeholder='Escribe tu reclamo aquí de forma detallada.'
        {...register(ReclamacionesFormValues.CLAIM)}
        error={errors.claim?.message}
      />
      <div className='flex items-center justify-center py-2'>
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY ?? ""} ref={recaptchaRef} size='invisible' />
      </div>
      <Button type='submit' disabled={sent || isLoading}>
        {sent ? "Reclamo recibido!" : isLoading ? "Enviando..." : "Enviar reclamo"}
      </Button>
    </form>
  );
}

export default ReclamacionesForm;

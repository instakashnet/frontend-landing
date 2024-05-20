"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card/Card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/inputs/input/Input";
import { PhoneInput } from "@/components/ui/inputs/phoneInput/PhoneInput";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CompanyFormSchema, FormValues } from "./CompanyForm.validation";
import { Loader2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import spinnerSuccess from "@/assets/animations/success-badge.json";

function CompanyForm() {
  const [isSending, setIsSending] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    defaultValues: {
      ruc: "",
      razonSocial: "",
      email: "",
      name: "",
      phone: "",
      terms: false
    },
    resolver: zodResolver(CompanyFormSchema),
    mode: "onBlur"
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSending(true);

    console.log("phone", data.phone.replace(/\s/g, ""));

    try {
      const formData = new FormData();
      formData.append("RUC", data.ruc);
      formData.append("Empresa", data.razonSocial);
      formData.append("Email", data.email);
      formData.append("Nombre", data.name);
      formData.append("Telefono", data.phone.replace(/\s/g, ""));

      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbze659rt-uv__R2yr8hksumbCCsf_DsT6XgcBZ-4x0DhBqxCcHu66r940Qd7OuXJj_nWQ/exec",
        formData
      );

      if (response.status !== 200) {
        throw new Error("Error al enviar los datos");
      }

      setOpen(true);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.log("error", error);
      toast({
        title: "Error",
        description: "Ocurrió un error al enviar tus datos. Por favor, intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Card>
        <h3 className='lg:text-2xl text-xl font-[500] mb-4'>
          Cambía dólares para tu empresa <span className='text-primary'>al mejor tipo de cambio</span>.
        </h3>
        <p className='font-[500] lg:text-lg'>¡Deja tus datos y nos pondremos en contacto!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-6'>
            <Label>Escribe el RUC de tu empresa</Label>
            <Input placeholder='00000000000' {...register("ruc")} disabled={isSuccess} />
            {errors.ruc && <p className='text-red-500 text-sm'>{errors.ruc.message}</p>}
          </div>
          <div className='my-6'>
            <Label>Escribe la razón social de tu empresa</Label>
            <Input {...register("razonSocial")} placeholder='Razón social' disabled={isSuccess} />
            {errors.razonSocial && <p className='text-red-500 text-sm'>{errors.razonSocial.message}</p>}
          </div>
          <div className='my-6'>
            <Label>Escribe tu correo</Label>
            <Input placeholder='Escribe tu correo' {...register("email")} disabled={isSuccess} />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>
          <div className='my-6'>
            <Label>Escribe tu nombre y apellido</Label>
            <Input placeholder='Escribe tu nombre completo' {...register("name")} disabled={isSuccess} />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
          </div>
          <div className='my-6'>
            <Label>Escribe tu teléfono</Label>
            <Controller name='phone' control={control} render={({ field }) => <PhoneInput {...field} disabled={isSuccess} />} />
            {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
          </div>
          <div className='flex items-baseline my-6 space-x-2'>
            <Controller
              name='terms'
              control={control}
              render={({ field }) => (
                <Checkbox id='terms' checked={field.value} onCheckedChange={(value) => field.onChange(value)} disabled={isSuccess} />
              )}
            />
            <Label htmlFor='terms' className='leading-5'>
              Declaro que he leído y acepto los{" "}
              <Link href='/terminos-y-condiciones' className='font-bold text-primary'>
                Términos y condiciones
              </Link>{" "}
              y las{" "}
              <Link href='/politicas-de-privacidad' className='font-bold text-primary'>
                Políticas de privacidad
              </Link>
              .
            </Label>
          </div>
          {errors.terms && <p className='text-red-500 text-sm'>{errors.terms.message}</p>}
          <div className='my-6'>
            <Button type='submit' disabled={!isValid || isSending || isSuccess} className='w-full font-semibold text-lg' size='lg'>
              {isSending ? <Loader2Icon className={`w-6 h-6 animate-spin mr-1 block`} /> : isSuccess ? "¡Enviado!" : "Enviar Datos"}
            </Button>
          </div>
        </form>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader className='py-4'>
            <Lottie animationData={spinnerSuccess} loop={false} className='w-24 h-24 text-center mx-auto' />
            <DialogTitle className='text-primary font-[500] text-2xl text-center pb-4'>¡Datos enviados!</DialogTitle>
            <DialogDescription className='text-lg text-center font-[500]'>
              Gracias por tu interés en formar parte de nuestro servicio para empresas. Uno de nuestros asesores se pondrá en contacto
              contigo a la brevedad.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CompanyForm;

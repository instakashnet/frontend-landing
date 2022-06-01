import * as Yup from 'yup';

export const contactValidation = Yup.object().shape({
  firstName: Yup.string().required('Debe colocar su nombre.'),
  lastName: Yup.string().required('Debe colocar su apellido.'),
  email: Yup.string().required('Debe colocar su correo.').email('El correo colocado es inválido.'),
  message: Yup.string().required('Debe colocar un mensaje.').min(25, 'Deben ser mínimo 25 caracteres.').max(150, 'No deben ser más de 350 caracteres.'),
  accept: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones.'),
});

export const reclamacionesValidation = Yup.object().shape({
  firstName: Yup.string().required('Debe colocar su nombre.'),
  lastName: Yup.string().required('Debe colocar su apellido.'),
  fromEmail: Yup.string().required('Debe colocar su correo.').email('Coloque un correo válido.'),
  documentType: Yup.string().required('Debe seleccionar un tipo de documento.'),
  documentNo: Yup.string().required('Debe colocar su nro. de documento.'),
  phone: Yup.string()
    .required('Debe colocar un teléfono de contacto.')
    .matches(/^[+]*[(]{0,1}?[0-9]{1,4}[)]{0,1}[-\s/0-9]{8,13}$/, 'Debe colocar un teléfono válido.'),
  service: Yup.string().required('Debe selecciona un tipo de servicio.'),
  amount: Yup.number().required('Debe colocar el monto solicitado.'),
  formType: Yup.string().required('Debe selecciona una opción.'),
  description: Yup.string().required('Debe escribir algún mensaje.').min(25, 'El mensaje es muy corto.').max(100, 'El mensaje es muy largo.'),
});

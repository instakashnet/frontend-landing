import * as Yup from 'yup';

export const contactValidation = Yup.object().shape({
  firstName: Yup.string().required('Debe colocar su nombre.'),
  lastName: Yup.string().required('Debe colocar su apellido.'),
  email: Yup.string().required('Debe colocar su correo.').email('El correo colocado es inválido.'),
  message: Yup.string().required('Debe colocar un mensaje.').min(25, 'Deben ser mínimo 25 caracteres.').max(150, 'No deben ser más de 350 caracteres.'),
  accept: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones.'),
});

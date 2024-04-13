import * as yup from 'yup';


export const schema = yup.object().shape({
    name: yup.string().required('Name cannot be empty').matches(/^[A-Za-z]+$/, 'Letters only'),
    email: yup.string().required('Email cannot be empty').email('Looks like this is not an email').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
    phone: yup.string().required('Phone Number cannot be empty').matches(/^\+\d+$/, '+ & Numbers only {+111111111}').min(9, 'Min Length 9'),
    address: yup.string().required('Address cannot be empty'),
    zip: yup.string().required('ZIP Code cannot be empty').matches(/^[0-9]+$/, 'Not a valid ZIP'),
    city: yup.string().required('City cannot be empty').matches(/^[A-Za-z]+$/, 'Letters only'),
    country: yup.string().required('Country cannot be empty').matches(/^[A-Za-z]+$/, 'Letters only'),
    checkMony: yup.boolean().required('select one of the options'),
    checkDelivery: yup.boolean().required('select one of the options'),
    num: yup.string().required('E-Money Number cannot be empty').matches(/^[0-9]+$/, 'Numbers only'),
    pin: yup.string().required('E-Money PIN Number cannot be empty').matches(/^[0-9]+$/, 'Numbers only')
  })
  
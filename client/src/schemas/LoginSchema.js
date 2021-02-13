import * as Yup from 'yup';

/**
 * Validation schema rule for login form
 */
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').trim().lowercase().required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be atleast 6 characters long')
    .required('Password is required'),
});

export default LoginSchema;
import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  content: yup.string().required(),
  location_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

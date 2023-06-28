import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

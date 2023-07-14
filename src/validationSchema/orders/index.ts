import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  product_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});

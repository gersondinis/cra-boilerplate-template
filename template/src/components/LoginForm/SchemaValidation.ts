import * as yup from 'yup';

export const schema = yup.object().shape({
  userId: yup.number().required(),
}).required();

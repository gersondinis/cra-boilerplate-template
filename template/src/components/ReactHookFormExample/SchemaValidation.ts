import * as yup from 'yup';
// import {debounce} from '@grd/debouncer';


export const schema = yup.object().shape({
  firstName: yup
    .string().required(),
  /*//Very complex async validation
  .test(async (v, context) => { //This works as a chain workaround.
    try {
      await Yup.string().min(3, 'Min 3 chars msg').max(5, 'Max 5 chars msg').validate(v);
      await new Promise((resolve, reject) => {
        if (v !== 'async') {
          resolve(true)
        } else {
          reject(Error('Promise value should be != async'))
        }
      });
      await new Promise((resolve, reject) => debounce(() => {
        if (v === 'sync') {
          reject(Error('Debounced promise error msg'))
        }
        resolve(true);
      }, 2000));
    } catch ({message}) {
      return context.createError({message});
    }
    return true;
  }),*/
  lastName: yup.string().required(),
  withEmail: yup.bool(),
  email: yup.string().when('withEmail', {
    is: true, // alternatively: (val) => val == true
    then: yup.string().email().required()
  })
}).required();

export const schema2 = yup.object().shape({
  firstName: yup.string().required('Only first name is required')
})

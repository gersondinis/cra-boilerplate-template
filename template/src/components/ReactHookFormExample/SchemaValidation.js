import * as Yup from 'yup';
// import {debounce} from '@grd/debouncer';


export const schema = Yup.object().shape({
  firstName: Yup
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
  lastName: Yup.string().required(),
  withEmail: Yup.bool(),
  email: Yup.string().when('withEmail', {
    is: true, // alternatively: (val) => val == true
    then: Yup.string().email().required()
  })
}).required();

export default schema;

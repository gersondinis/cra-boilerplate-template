import * as Yup from 'yup';
import {debounce} from '@grd/debouncer';


export const schema = Yup.object({
    firstName: Yup
        .string()
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
                    reject(Error('Debounced promise error msg'))
                }, 2000));
            } catch ({message}) {
                return context.createError({message});
            }
            return true;
        }),
    lastName: Yup.string().required(),
}).required();

export default schema;
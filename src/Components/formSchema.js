//schema for the form

import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required')
        .min(2, 'name must be 2 or more characters long'),
    size: yup
        .string()
        .oneOf(['Small 8"', 'Medium 12"', 'Large 16"', 'Xtra Large 20"'], 'Size is required'),
    sauce: yup
        .string()
        .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Toppings is required',
        ),
    substitute: yup.boolean(),
    instructions: yup
        .string()
        .trim()
})

export default formSchema;
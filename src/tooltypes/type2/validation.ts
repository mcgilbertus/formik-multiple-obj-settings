import * as Yup from 'yup';

export const ToolType2Schema = () => ({
  param2: Yup.string().required('param2 is required'),
  ed1: Yup.string().required('ed1 is required').max(10, 'ed1 can only be up to 10 characters.'),
  filePath: Yup.string()
    .trim()
    .transform((value) => (value === '' ? undefined : value))
    .matches(
      /\S+\.(txt|xml)$/,
      'Invalid file format. Please select a valid file with the correct extension (txt / xml)'
    )
    .max(128, `The length of path can only be up to 128 characters.`),
})


import * as Yup from 'yup';

export const ToolType1Schema = () => ({
  name: Yup.string().required('Name is required'),
  ed1: Yup.string().required('ed1 is required'),
})


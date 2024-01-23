// import {useEffect, useState} from 'react';
// import {useFormik} from 'formik';
//
// interface IForm {
//   validationSchema: any;
//   initialValues: any;
//   enableReinitialize?: boolean;
//   validateOnMount?: boolean;
//   onSubmit: (object: any, actions: any) => void;
// }
//
// const useForm = (props: IForm) => {
//   const {validationSchema, initialValues, onSubmit, enableReinitialize, validateOnMount} = props;
//   const {
//     errors: validationErrors,
//     isValid,
//     handleSubmit,
//     handleChange,
//     resetForm,
//     values,
//     setFieldValue,
//     setValues,
//     setFieldTouched,
//     touched,
//   } = useFormik({
//     initialValues,
//     validationSchema,
//     enableReinitialize,
//     validateOnMount: validateOnMount ?? false,
//     onSubmit,
//   });
//   const [errors, setError] = useState(validationErrors);
//   const [hasValidClassName, setValidClassName] = useState(true);
//
//   const formikSetFieldValue = setFieldValue;
//   // const [touched, setTouched] = useState(Object.fromEntries(Object.entries(initialValues).map(([k]) => [k, false])));
//   // if(enableReinitialize){
//   //   setTouched(Object.fromEntries(Object.entries(initialValues).map(([k]) => [k, false])))
//   // }
//
//   const eaSetFieldValue = (name: string, value: any) => {
//     touched[name] = true;
//     return formikSetFieldValue(name, value);
//   };
//
//   const eaHandleChange = (e: any) => {
//     eaSetFieldValue(e.target.name, e.target.value);
//   };
//
//   useEffect(() => {
//     setError(validationErrors);
//     setValidClassName(false);
//   }, [validationErrors]);
//
//   const OnTextFieldChange = (e: any) => {
//     // fieldMaxLength is the max length for the field plus 1 so I can let the user type more than the max length
//     // maxLength is the actual max length value for the validation.
//     const {name, value, maxLength: fieldMaxLength, attributes, ariaLabel} = e.target;
//     const maxLength = fieldMaxLength - 1;
//     const language = Storage.getItem('current-user-language');
//
//     const messageFieldName = () => {
//       if (attributes && attributes['data-errorfield']) {
//         return capitalize(attributes['data-errorfield'].value);
//       }
//       if (ariaLabel && ariaLabel !== '') {
//         return ariaLabel;
//       }
//       return name;
//     };
//
//     const message = FormHelpers.formatErrorMessage({
//       message:
//         language && language === 'fr'
//           ? commonLocale.fr.messages.validate.maxLength
//           : commonLocale.en.messages.validate.maxLength,
//       fieldName: messageFieldName(),
//       maxLength,
//     });
//
//     if (fieldMaxLength) {
//       if (value.length > maxLength) {
//         setError((prevState: any) => ({...prevState, [name]: message}));
//         setValidClassName(false);
//       } else {
//         setError((prevState: any) => ({...prevState, [name]: ''}));
//         setValidClassName(true);
//       }
//
//       if (value?.length === fieldMaxLength) {
//         setFieldValue(name, value.slice(0, -1));
//         setValidClassName(true);
//         return;
//       }
//     }
//
//     setFieldValue(name, value);
//   };
//
//   const onChange = async (e: any) => {
//     const {name, value, maxLength, type} = e.target;
//
//     // TODO: start with simple code, improve this logic
//
//     await setFieldTouched(name, true);
//
//     if (type === 'checkbox') {
//       await setFieldValue(name, e.target.checked);
//     } else {
//       await setFieldValue(name, value);
//     }
//   };
//
//   const onBlur = async (e: any) => {
//     const {name, value, maxLength} = e.target;
//
//     // TODO: start with simple code, improve this logic
//     await setFieldTouched(name, true);
//   };
//
//   return {
//     errors,
//     // OnTextFieldChange,
//     onChange: eaHandleChange,
//     onBlur,
//     isValid,
//     touched,
//     // setFieldTouched,
//     handleSubmit,
//     handleChange,
//     resetForm,
//     values,
//     setFieldValue: eaSetFieldValue,
//     setValues,
//     hasValidClassName,
//   };
// };
//
// export default useForm;

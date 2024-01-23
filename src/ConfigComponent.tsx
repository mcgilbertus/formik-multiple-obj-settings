import {useFormik} from "formik";
import {IStep} from "./interfaces.ts";
import {ToolType1Schema} from "./ValidationSchema.ts";
import * as Yup from "yup";

interface IConfigProps {
  configParams: IStep,
  handleUpdateParams: (params: IStep) => void
}

export function ConfigComponent({configParams, handleUpdateParams}: IConfigProps) {

  const formik = useFormik({
    initialValues: configParams,
    validationSchema: Yup.object().shape(ToolType1Schema()),
    enableReinitialize: true,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      handleUpdateParams(values)
    },
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdateParams({...formik.values, [e.target.name]: e.target.value})
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.handleBlur(e)
    handleTextChange(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(e.target.name, true, true)
    formik.handleChange(e)
  }

  return (
    <>
      <div>
        <input name="name" type="text" className="form-control" value={formik.values.name}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.name && (
          <div className="text-danger">{formik.errors.name}</div>
        )}
      </div>
      <div className="mt-2">
        <input name="ed1" type="text" className="form-control" value={formik.values.ed1}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.ed1 && (
          <div className="text-danger">{formik.errors.ed1}</div>
        )}
      </div>
      <div className="mt-2">
        <input name="ed2" type="text" className="form-control" value={formik.values.ed2}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.ed2 && (
          <div className="text-danger">{formik.errors.ed2}</div>
        )}
      </div>
      <div>
        <div>Values: {JSON.stringify(formik.values)}</div>
        <div>Errors: {JSON.stringify(formik.errors)}</div>
        <div>Touched: {JSON.stringify(formik.touched)}</div>
      </div>
    </>
  )
}
import {useFormik} from "formik";
import {IParams} from "../../interfaces.ts";
import {ToolType1Schema} from "./validation.ts";
import * as Yup from "yup";

interface IConfigProps {
  configParams: IParams,
  handleUpdateParams: (params: IParams) => void
}

export function ConfigType1({configParams, handleUpdateParams}: IConfigProps) {

  const formik = useFormik({
    initialValues: configParams,
    validationSchema: Yup.object().shape(ToolType1Schema()),
    enableReinitialize: true,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: () => {},
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdateParams({...formik.values, [e.target.name]: e.target.value})
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.handleBlur(e)
    handleTextChange(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange', e.target.name, e.target.value)
    formik.setFieldTouched(e.target.name, true, true)
    formik.handleChange(e)
  }

  return (
    <>
      <h3>ToolType1 parameters</h3>
      <div>
        Param1
        <input name="param1" type="text" className="form-control" value={formik.values['param1']}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors['param1'] && (
          <div className="text-danger">{formik.errors['param1']}</div>
        )}
      </div>
      <div className="mt-2">
        ed1
        <input name="ed1" type="text" className="form-control" value={formik.values['ed1']}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors['ed1'] && (
          <div className="text-danger">{formik.errors['ed1']}</div>
        )}
      </div>
      <div className="mt-2">
        filePath
        <input name="filePath" type="text" className="form-control" value={formik.values.filePath}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.filePath && (
          <div className="text-danger">{formik.errors.filePath}</div>
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
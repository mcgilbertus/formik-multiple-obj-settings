import {useFormik} from "formik";
import {IParams} from "../../interfaces.ts";
import {ToolType3Schema} from "./validation.ts";
import * as Yup from "yup";

interface IConfigProps {
  configParams: IParams,
  handleUpdateParams: (params: IParams) => void
}

export function ConfigType3({configParams, handleUpdateParams}: IConfigProps) {

  const formik = useFormik({
    initialValues: configParams,
    validationSchema: Yup.object().shape(ToolType3Schema()),
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
      <h3>ToolType3 parameters</h3>

      <div>
        Param3
        <input name="param3" type="text" className="form-control" value={formik.values.param3}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.param3 && (
          <div className="text-danger">{formik.errors.param3}</div>
        )}
      </div>
      <div className="mt-2">
        ed1
        <input name="ed1" type="text" className="form-control" value={formik.values.ed1}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.ed1 && (
          <div className="text-danger">{formik.errors.ed1}</div>
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
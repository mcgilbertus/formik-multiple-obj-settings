import {useFormik} from "formik";
import {ToolType1Schema} from "./validation.ts";
import * as Yup from "yup";
import {useAtom} from "jotai";
import {selectedStepAtom} from "../../atoms.ts";
import {DisplayFormikState} from "../type2/display-formik-state.tsx";

export function ConfigType1() {

  const [selectedStep, setSelectedStep] = useAtom(selectedStepAtom)

  const formik = useFormik({
    initialValues: selectedStep.params,
    initialTouched: selectedStep.touched,
    initialErrors: selectedStep.errors,
    validationSchema: Yup.object().shape(ToolType1Schema()),
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldTouched(e.target.name, true, true)
    setSelectedStep({
      ...selectedStep,
      touched: formik.touched,
      errors: formik.errors,
      params: {...formik.values, [e.target.name]: e.target.value}
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {formik.errors.param1 && formik.touched.param1 && (
          <div className="text-danger">{formik.errors.param1}</div>
        )}
      </div>
      <div className="mt-2">
        ed1
        <input name="ed1" type="text" className="form-control" value={formik.values['ed1']}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.ed1 && formik.touched.ed1 && (
          <div className="text-danger">{formik.errors.ed1}</div>
        )}
      </div>
      <div className="mt-2">
        filePath
        <input name="filePath" type="text" className="form-control" value={formik.values.filePath}
               onChange={handleChange} onBlur={handleBlur}/>
        {formik.errors.filePath && formik.touched.filePath && (
          <div className="text-danger">{formik.errors.filePath}</div>
        )}
      </div>
      <div className="mt-4">
        <DisplayFormikState formik={formik} />
      </div>
    </>
  )
}
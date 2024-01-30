import {useFormik} from "formik";
import {ToolType2Schema} from "./validation.ts";
import * as Yup from "yup";
import {useAtom} from "jotai/index";
import {selectedStepAtom} from "../../atoms.ts";
import ValidatedControl from "../../validated-control.tsx";
import {DisplayFormikState} from "./display-formik-state.tsx";


export function ConfigType2() {

  const [selectedStep, setSelectedStep] = useAtom(selectedStepAtom)

  const formik = useFormik({
    initialValues: selectedStep.params,
    validationSchema: Yup.object().shape(ToolType2Schema()),
    initialTouched: selectedStep.touched,
    initialErrors: selectedStep.errors,
    enableReinitialize: true,
    onSubmit: () => {
    },
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
      <h3>ToolType2 parameters</h3>

      <div>
        <ValidatedControl name="param2" formik={formik} title="Param2">
          <input name="param2" type="text" className="form-control" value={formik.values.param2}
                 onChange={handleChange} onBlur={handleBlur}/>

        </ValidatedControl>
      </div>
      <div className="mt-2">
        <ValidatedControl name="ed1" formik={formik} title="Ed1">
          <input name="ed1" type="text" className="form-control" value={formik.values.ed1}
                 onChange={handleChange} onBlur={handleBlur}/>
        </ValidatedControl>
      </div>
      <div className="mt-2">
        <ValidatedControl name="filePath" formik={formik} title="File path">
          <input name="filePath" type="text" className="form-control" value={formik.values.filePath}
                 onChange={handleChange} onBlur={handleBlur}/>
        </ValidatedControl>
      </div>
      <div className="mt-2">
        <ValidatedControl name="anotherParam" formik={formik} title="Another param">
          <input name="anotherParam" type="text" className="form-control" value={formik.values.anotherParam}
                 onChange={handleChange} onBlur={handleBlur}/>
          </ValidatedControl>
      </div>
      <div className="mt-4">
        <DisplayFormikState formik={formik}/>
      </div>
    </>
  )
}
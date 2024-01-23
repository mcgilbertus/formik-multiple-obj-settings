import {useFormik} from "formik";
import {IStep} from "./interfaces.ts";

interface IConfigProps {
  configParams: IStep,
  handleUpdateParams: (params:IStep) => void
}

export function ConfigComponent({configParams, handleUpdateParams}:IConfigProps) {

  const formik = useFormik({
    initialValues: configParams,
    enableReinitialize: true,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      handleUpdateParams(values)
    },
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleUpdateParams({...formik.values, [e.target.name]: e.target.value})
  };

  return (
    <>
      <input name="name" type="text" className="form-control" value={formik.values.name} onChange={formik.handleChange} onBlur={(e)=>handleTextChange(e)}/>
      <input name="ed1" type="text" className="form-control" value={formik.values.ed1} onChange={formik.handleChange} onBlur={(e)=>handleTextChange(e)}/>
      <input name="ed2" type="text" className="form-control" value={formik.values.ed2} onChange={formik.handleChange} onBlur={(e)=>handleTextChange(e)}/>
    </>
  )
}
export function DisplayFormikState({formik}) {
  return <>
    <div>Values: {JSON.stringify(formik.values)}</div>
    <div>Errors: {JSON.stringify(formik.errors)}</div>
    <div>Touched: {JSON.stringify(formik.touched)}</div>
  </>;
}
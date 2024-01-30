export default function ValidatedControl({children, name, formik, title}) {

  return (
    <>
      {title}
      {children}
      {name && (
        <>
          {formik.errors[name] && formik.touched[name] && (
            <div className="text-danger">{formik.errors[name]}</div>
          )}
        </>
      )}
    </>
  )
}
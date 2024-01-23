import {IStep, IWorkflow} from "./interfaces.ts";

interface CanvasComponentProps {
  workflow: IWorkflow,
  handleUpdateSelected: (selected:number) => void
}

export function BuilderComponent({workflow, handleUpdateSelected}: CanvasComponentProps) {
  return (
    <>
      {workflow.steps?.map((step:IStep) => (
        <div key={step.id} onClick={()=>handleUpdateSelected(step.id)} className="btn btn-light border ms-2">{step.name}</div>))}
       {/*<button className="btn btn-primary" onClick={()=>handleUpdateSelected(1)}>Obj1</button>*/}
       {/*<button className="btn btn-secondary" onClick={()=>handleUpdateSelected(2)}>Obj2</button>*/}
    </>
  )
}
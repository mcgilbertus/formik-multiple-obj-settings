import {BuilderComponent} from "./BuilderComponent.tsx";
import {ConfigType1} from "./tooltypes/type1/ConfigType1.tsx";
import {useAtom, useAtomValue} from "jotai";
import {actualWorkflowAtom, selectedParamsAtom, selectedToolAtom} from "./atoms.ts";
import {IStep} from "./interfaces.ts";

function App() {

  const actualWorkflow = useAtomValue(actualWorkflowAtom)
  const [actualParams, setActualParams] = useAtom(selectedParamsAtom)
  const [actualTool, setActualTool] = useAtom(selectedToolAtom)

  const updateParamsHandler = (params:IStep) => {
    setActualParams(params)
  }

  const updateSelectedHandler = (selected:number) => {
    setActualTool(selected-1)
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h1>Canvas</h1>
          <BuilderComponent workflow={actualWorkflow} handleUpdateSelected={updateSelectedHandler}/>
        </div>
        <div className="col-5">
          <h1>Config</h1>
          <div>Selected: {actualTool}</div>
          <ConfigType1 configParams={actualParams} handleUpdateParams={updateParamsHandler}/>
        </div>
      </div>
    </div>
  )
}

export default App

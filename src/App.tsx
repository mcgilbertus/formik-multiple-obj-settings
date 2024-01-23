import {useAtom, useAtomValue} from "jotai";
import {IParams} from "./interfaces.ts";
import {actualWorkflowAtom, selectedStepAtom, actualStepNumberAtom} from "./atoms.ts";
import {BuilderComponent} from "./BuilderComponent.tsx";
import {ConfigType1} from "./tooltypes/type1/ConfigType1.tsx";
import {ConfigType2} from "./tooltypes/type2/ConfigType2.tsx";
import {ConfigType3} from "./tooltypes/type3/ConfigType3.tsx";

function App() {

  const actualWorkflow = useAtomValue(actualWorkflowAtom)
  const [actualStep, setActualStep] = useAtom(selectedStepAtom)
  const [actualStepNumber, setActualStepNumber] = useAtom(actualStepNumberAtom)

  const updateParamsHandler = (params:IParams) => {
    setActualStep({...actualStep, params: params})
  }

  const updateSelectedHandler = (selected:number) => {
    setActualStepNumber(selected-1)
  };

  const actualStepParams = () => {
    switch (actualStep.toolType) {
      case 1:
        return <ConfigType1 configParams={actualStep.params} handleUpdateParams={updateParamsHandler}/>
      case 2:
        return <ConfigType2 configParams={actualStep.params} handleUpdateParams={updateParamsHandler}/>
      case 3:
        return <ConfigType3 configParams={actualStep.params} handleUpdateParams={updateParamsHandler}/>
      default:
        return <div>ToolType {actualStep.toolType} not implemented</div>
    }
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
          <div>Selected: {actualStepNumber}</div>
          {actualStepParams()}
        </div>
      </div>
    </div>
  )
}

export default App

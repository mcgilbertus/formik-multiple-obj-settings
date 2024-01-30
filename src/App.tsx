import {useAtomValue, useSetAtom} from "jotai";
import {actualWorkflowAtom, selectedStepAtom, actualStepNumberAtom} from "./atoms.ts";
import {BuilderComponent} from "./BuilderComponent.tsx";
import {ConfigType1} from "./tooltypes/type1/ConfigType1.tsx";
import {ConfigType2} from "./tooltypes/type2/ConfigType2.tsx";
import {ConfigType3} from "./tooltypes/type3/ConfigType3.tsx";

function App() {

  const actualWorkflow = useAtomValue(actualWorkflowAtom)
  const actualStep = useAtomValue(selectedStepAtom)
  const setActualStepNumber = useSetAtom(actualStepNumberAtom)

  const updateSelectedHandler = (selected:number) => {
    setActualStepNumber(selected-1)
  };

  const actualStepParams = () => {
    switch (actualStep.toolType) {
      case 1:
        return <ConfigType1 />
      case 2:
        return <ConfigType2 toolId={actualStep.id}/>
      case 3:
        return <ConfigType3 />
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
          <div>Selected: {actualStep.name}</div>
          {actualStepParams()}
        </div>
      </div>
    </div>
  )
}

export default App

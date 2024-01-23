import {BuilderComponent} from "./BuilderComponent.tsx";
import {ConfigComponent} from "./ConfigComponent.tsx";
import {useState} from "react";

function App_State() {

  const [params1, setParams1] = useState({ed1:'config1ed1', ed2:'config1ed2'})
  const [params2, setParams2] = useState({ed1:'config2ed1', ed2:'config2ed2'})
  const [selectedParams, setSelectedParams] = useState(1)

  const updateParamsHandler = (params:any) => {
    console.log('updateParamsHandler', params);
    if (selectedParams === 1) {
      setParams1(params)
    } else {
      setParams2(params)
    }
  }

  const updateSelectedHandler = (selected:number) => {
    setSelectedParams(selected)
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h1>Canvas</h1>
          <BuilderComponent handleUpdateSelected={updateSelectedHandler}/>
        </div>
        <div className="col-5">
          <h1>Config</h1>
          <div>Selected: {selectedParams}</div>
          <ConfigComponent configParams={selectedParams===1?params1:params2} handleUpdateParams={updateParamsHandler}/>
        </div>
      </div>
    </div>
  )
}

export default App

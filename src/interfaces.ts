
export interface IParams {
  [key: string]: any|undefined
}

export interface ITouchedDictionary {
  [key: string]: boolean
}

export interface IStep {
  id: number
  toolType: number
  name: string
  touched: ITouchedDictionary
  params: IParams
}

export interface IWorkflow {
  steps: IStep[]
}
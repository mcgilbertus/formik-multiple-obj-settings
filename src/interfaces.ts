
export interface IParams {
  [key: string]: any|undefined
}

export interface IDictionary {
  [key: string]: boolean
}

export interface IStep {
  id: number
  toolType: number
  name: string
  touched: IDictionary
  errors: IDictionary
  params: IParams
}

export interface IWorkflow {
  steps: IStep[]
}
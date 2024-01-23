export interface IParams {
  [key: string]: any
}

export interface IStep {
  id: number
  toolType: number
  name: string
  params: IParams
}

export interface IWorkflow {
  steps: IStep[]
}
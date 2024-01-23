export interface IStep {
  id: number
  name: string
  ed1: string
  ed2: string
}

export interface IWorkflow {
  steps: IStep[]
}
export interface IStep {
  id: number
  name: string
  ed1: string
  filePath: string
}

export interface IWorkflow {
  steps: IStep[]
}
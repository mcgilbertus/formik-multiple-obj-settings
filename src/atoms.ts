import {atom} from "jotai";
import {IStep, IWorkflow} from "./interfaces.ts";


export const selectedToolAtom = atom<number>(0)

export const actualWorkflowAtom = atom<IWorkflow>({
  steps: [
    {id: 1, name: 'tool1', ed1: 'config1ed1', filePath: 'one.txt'},
    {id: 2, name: 'tool2', ed1: 'config2ed1', filePath: 'two.xml'},
    {id: 3, name: 'tool3', ed1: 'config3ed1', filePath: ''},
  ]
})

export const selectedParamsAtom = atom(
  (get) => get(actualWorkflowAtom).steps[get(selectedToolAtom)],
  (get, set, update) => {
    const tools = get(actualWorkflowAtom)
    const selected = get(selectedToolAtom)
    set(actualWorkflowAtom, {...tools, steps: tools.steps.map((step, index) => index === selected ? update : step) as IStep[]})
  }
)

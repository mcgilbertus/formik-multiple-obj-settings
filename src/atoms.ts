import {atom} from "jotai";
import {IStep, IWorkflow} from "./interfaces.ts";


export const actualStepNumberAtom = atom<number>(0)

export const actualWorkflowAtom = atom<IWorkflow>({
  steps: [
    {id: 1, toolType: 1, name: 'tool1', params: {param1: 'tool1', ed1: 'config1ed1', filePath: 'one.txt'}},
    {id: 2, toolType: 2, name: 'tool2', params: {param2: 'tool2', ed1: 'config2ed1', filePath: 'two.xml'}},
    {id: 3, toolType: 3, name: 'tool3', params: {param3: 'tool3', ed1: 'config3ed1'}},
  ]
})

// @ts-ignore
export const selectedStepAtom = atom<IStep>(
  (get) => get(actualWorkflowAtom).steps[get(actualStepNumberAtom)],
  (get, set, update) => {
    set(actualWorkflowAtom, {steps: get(actualWorkflowAtom).steps.map((step, index) => index === get(actualStepNumberAtom) ? update : step)})
  }
)

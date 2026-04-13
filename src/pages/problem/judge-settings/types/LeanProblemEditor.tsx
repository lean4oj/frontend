import React from "react";
import { observer } from "mobx-react";

import { JudgeInfoProcessor, EditorComponentProps, Options } from "../common/interface";

import MetaEditor from "../common/MetaEditor";

type LeanAxiom = {
  name: string,
  url: string,
}

export interface JudgeInfoLean {
  axioms: LeanAxiom[];
  checker: string;
  /**
   * Semver request of the Lean version to use.
   * For example, ">=4.29.0-rc2" will make this problem accept
   * only olean with version >= 4.29.0-rc2.
   * If not specified, all Lean version will be accepted.
   */
  version?: string;
}
type LeanProblemEditorProps = EditorComponentProps<JudgeInfoLean>;

export const
  DEFAULT_AXIOMS = [
    { name: 'propext', url: 'https://leanprover-community.github.io/mathlib4_docs/Init/Core.html#propext' },
    { name: 'Quot.sound', url: 'https://leanprover-community.github.io/mathlib4_docs/Init/Core.html#Quot.sound' },
    { name: 'Classical.choice', url: 'https://leanprover-community.github.io/mathlib4_docs/Init/Prelude.html#Classical.choice' }
  ] as LeanAxiom[],
  DEFAULT_CHECKER = `import Lean4OJ.Checker
import Lean4OJ.String

def Lean4OJ.prop (_answer : Unit) : Prop := ∀ a b : Nat, a + b = b + a
def Lean4OJ.answer : Unit := Lean4OJ.extractAnswer (answer := ()) Lean4OJ.prop ⍼

#eval Lean4OJ.defString \`Lean4OJ.answer_str (toString Lean4OJ.answer)
theorem Lean4OJ.answer_sound : Lean4OJ.ToString.toString Lean4OJ.answer = Lean4OJ.answer_str := rfl
`;

const metaEditorOptions: Options<typeof MetaEditor> = {
  enableTimeMemoryLimit: false,
  enableFileIo: false,
  enableRunSamples: false
};

let LeanProblemEditor: React.FC<LeanProblemEditorProps> = props => {
  return null;
};

LeanProblemEditor = observer(LeanProblemEditor);

function parseAxiom(raw: any): LeanAxiom[] {
  if (typeof raw === 'string')
    return [{ name: raw, url: '' }];
  if (typeof raw?.name === 'string')
    return [{ name: raw.name, url: typeof raw.url === 'string' ? raw.url : '' }];
  return [];
}

const judgeInfoProcessor: JudgeInfoProcessor<JudgeInfoLean> = {
  parseJudgeInfo(raw): JudgeInfoLean {
    const axioms = Array.isArray(raw?.axioms) ? raw.axioms.flatMap(parseAxiom) : DEFAULT_AXIOMS;
    const checker = typeof raw?.checker === 'string' ? raw.checker : DEFAULT_CHECKER;
    const version = typeof raw?.version === 'string' ? { version: raw.version } : {};
    return { axioms, checker, ...version };
  },
  normalizeJudgeInfo() {}
};

export default Object.assign(LeanProblemEditor, judgeInfoProcessor);

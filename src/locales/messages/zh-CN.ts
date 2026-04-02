import { flatten } from "flat";

import importMessages from "./importMessages";
const e = compileTime(() => importMessages(import.meta.url));

export default flatten(e);

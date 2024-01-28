import { getEnvVar } from "./utils/env.js";

//read only permission grant
export const keys = {
    clientToken: getEnvVar('CLIENT_TOKEN'),
} as const;

export default keys;
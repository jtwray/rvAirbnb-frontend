// jest.config.ts
import "mutationobserver-shim";
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true
};
export default config;

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true
  };
};

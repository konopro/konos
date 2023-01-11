import { Service as CoreService } from "@umijs/core";

const DEFAULT_CONFIG_FILES = [".konorc.ts", ".konorc.js"];

export class Service extends CoreService {
  constructor(opts?: any) {
    const cwd = process.cwd();
    super({
      ...opts,
      env: process.env.NODE_ENV,
      cwd,
      defaultConfigFiles: DEFAULT_CONFIG_FILES || opts.defaultConfigFiles,
      frameworkName: "konos",
      presets: opts?.presets || [],
      plugins: opts?.plugins || [],
    });
  }
}

import type { PluginAPI } from "@umijs/core";

export default (api: PluginAPI) => {
  api.registerCommand({
    name: "version",
    alias: "v",
    description: "show konos version",
    configResolveMode: "loose",
    fn({}) {
      const version = require("../package.json").version;
      console.log(`konos@${version}`);
      return version;
    },
  });
};

import { printHelp, yParser } from "@umijs/utils";
import { Service } from "./service";

export async function run() {
  const args = yParser(process.argv.slice(2), {
    alias: {
      version: ["v"],
      help: ["h"],
    },
    boolean: ["version"],
  });
  try {
    await new Service({ plugins: [require.resolve("./version")] }).run({
      name: args._[0],
      args,
    });
  } catch (e: any) {
    console.log(e);
    printHelp.exit();
    process.exit(1);
  }
}
run();

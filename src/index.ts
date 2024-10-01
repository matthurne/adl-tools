import figlet from "figlet";
import { program } from "commander";
import { testLambda } from "./commands/test-lambda.js";

console.log(figlet.textSync("A-DL Tools", { font: "Cybermedium" }));

program.command("test-lambda").action(testLambda).parse();

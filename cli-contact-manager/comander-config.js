import { Command } from "commander";
import chalk from "chalk";
import { invokeAction } from "./index.js";

const program = new Command();

program.version("1.0.0").description("Contact Management CLI Application");

program
  .command("list")
  .description("List all contacts")
  .action(() => invokeAction("list"));

program
  .command("get")
  .description("Get a contact by ID")
  .requiredOption("-i, --id <id>", "Contact ID")
  .action((options) => invokeAction("get", options));

program
  .command("add")
  .description("Add a new contact")
  .requiredOption("-n, --name <name>", "Contact name")
  .requiredOption("-e, --email <email>", "Contact email")
  .requiredOption("-p, --phone <phone>", "Contact phone")
  .action((options) => invokeAction("add", options));

program
  .command("remove")
  .description("Remove a contact by ID")
  .requiredOption("-i, --id <id>", "Contact ID")
  .action((options) => invokeAction("remove", options));

export default program;

import program from "./comander-config.js";
import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts.js";
import chalk from "chalk";

export async function invokeAction(action, options) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case "get":
        if (!options.id) {
          console.error(
            chalk.red("Error: Contact ID is required for 'get' action.")
          );
          return;
        }
        const contact = await getContactById(options.id);
        if (contact) {
          console.log(chalk.green("Contact found:"), contact);
        } else {
          console.log(chalk.red("Contact not found."));
        }
        break;

      case "add":
        const { name, email, phone } = options;
        if (!name || !email || !phone) {
          console.error(
            chalk.red(
              "Error: Name, email, and phone are required for 'add' action."
            )
          );
          return;
        }
        const newContact = await addContact(name, email, phone);
        console.log(chalk.green("Contact added successfully!"), newContact);
        break;

      case "remove":
        if (!options.id) {
          console.error(
            chalk.red("Error: Contact ID is required for 'remove' action.")
          );
          return;
        }
        const updatedContacts = await removeContact(options.id);
        console.log(chalk.green("Contact removed successfully."));
        console.table(updatedContacts);
        break;

      default:
        console.error(chalk.red("Unknown action type!"));
    }
  } catch (error) {
    console.error(chalk.red("Error:"), error.message);
  }
}

program.parse(process.argv);

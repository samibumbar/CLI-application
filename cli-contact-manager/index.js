const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");
const chalk = require("chalk");
const yargs = require("yargs");

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case "get":
        const contact = await getContactById(id);
        if (contact) {
          console.log(chalk.green("Contact found:"), contact);
        } else {
          console.log(chalk.red("Contact not found."));
        }
        break;

      case "add":
        const newContact = await addContact(name, email, phone);
        console.log(chalk.green("Contact added successfully!"), newContact);
        break;

      case "remove":
        const updatedContacts = await removeContact(id);
        console.log(chalk.green("Contact removed successfully."));
        console.table(updatedContacts);
        break;

      default:
        console.log(chalk.red("Unknown action type!"));
    }
  } catch (error) {
    console.error(chalk.red("Error:"), error.message);
  }
}

// Configure yargs
yargs
  .command({
    command: "list",
    describe: "List all contacts",
    handler: () => invokeAction({ action: "list" }),
  })
  .command({
    command: "get",
    describe: "Get a contact by ID",
    builder: {
      id: {
        describe: "Contact ID",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => invokeAction({ action: "get", id: argv.id }),
  })
  .command({
    command: "add",
    describe: "Add a new contact",
    builder: {
      name: {
        describe: "Contact name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Contact email",
        demandOption: true,
        type: "string",
      },
      phone: {
        describe: "Contact phone",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) =>
      invokeAction({
        action: "add",
        name: argv.name,
        email: argv.email,
        phone: argv.phone,
      }),
  })
  .command({
    command: "remove",
    describe: "Remove a contact by ID",
    builder: {
      id: {
        describe: "Contact ID",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => invokeAction({ action: "remove", id: argv.id }),
  })
  .demandCommand(1, chalk.red("You need to specify a valid action."))
  .help().argv;

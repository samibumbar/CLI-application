const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// Helper function to read and parse contacts file
async function readContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read contacts file. Make sure the file exists.");
  }
}

// Helper function to write contacts to the file
async function writeContacts(contacts) {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw new Error("Failed to write to contacts file.");
  }
}

async function listContacts() {
  return await readContacts();
}

async function getContactById(contactId) {
  const contacts = await readContacts();
  const contact = contacts.find((c) => c.id === contactId);
  return contact || null;
}

async function addContact(name, email, phone) {
  if (!name || !email || !phone) {
    throw new Error("Name, email, and phone are required.");
  }

  const contacts = await readContacts();
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await writeContacts(contacts);

  return newContact;
}

async function removeContact(contactId) {
  const contacts = await readContacts();
  const filteredContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );

  if (contacts.length === filteredContacts.length) {
    throw new Error(`No contact found with ID: ${contactId}`);
  }

  await writeContacts(filteredContacts);
  return filteredContacts;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

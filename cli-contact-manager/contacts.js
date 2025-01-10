import { promises as fs } from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const contactsPath = path.join(path.resolve(), "db", "contacts.json");

async function readContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read contacts file. Make sure the file exists.");
  }
}

async function writeContacts(contacts) {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw new Error("Failed to write to contacts file.");
  }
}

export async function listContacts() {
  return await readContacts();
}

export async function getContactById(contactId) {
  const contacts = await readContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact || null;
}

export async function addContact(name, email, phone) {
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

export async function removeContact(contactId) {
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

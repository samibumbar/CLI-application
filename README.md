# 📞 Contact Management CLI Application

Manage your contacts easily with this Command Line Interface (CLI) application! This tool helps you create, read, update, and delete (CRUD) contacts stored in a JSON file.

## ✨ Features

- 📋 **List all contacts**
- 🔎 **Get a contact by ID**
- ➕ **Add new contacts**
- ❌ **Remove contacts by ID**
- ✅ **User-friendly CLI with helpful prompts**

---

## 🛠️ Built With

This project was developed using:

- **Node.js** - For running the CLI application.
- **Commander.js** - To manage command-line functionality and arguments.
- **UUID** - For generating unique IDs for each contact.
- **Chalk** - To provide colorful output in the terminal.

---

## 🚀 Getting Started

Follow these steps to get the application up and running:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samibumbar/CLI-application
   ```

2. Navigate to the project directory:

   ```bash
   cd cli-contact-manager
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

Run the following commands to manage your contacts:

#### 1. List all contacts

```bash
node index.js list
```

Displays all contacts in a table format.

#### 2. Get a contact by ID

```bash
node index.js get -i <contact-id>
```

Replace `<contact-id>` with the ID of the contact you want to retrieve.

#### 3. Add a new contact

```bash
node index.js add -n "John Doe" -e "john@example.com" -p "123-456-7890"
```

Replace the values with the contact's name, email, and phone number.

#### 4. Remove a contact

```bash
node index.js remove -i <contact-id>
```

Replace `<contact-id>` with the ID of the contact you want to delete.

## 📸 Screenshots

### 1. Contact List Example

![Contact List] (https://monosnap.com/file/O2xN3h62JXtfYu46S5PWx3qcm7CX4W)

### 2. Adding a New Contact

![Add Contact] (https://monosnap.com/file/AHHzHyuOye32gzEAPqtG4VisSlvP7l)

### 3. Removing a Contact

![Remove Contact] (https://monosnap.com/file/rWMtvXCelKbTjsIUxLs76Je7P3GBRE)

## ⚙️ Project Structure

```
cli-contact-manager/
├── db/
│   └── contacts.json         # JSON file to store contacts
├── index.js                  # Main entry point of the app
├── contacts.js               # Functions for managing contacts
├── commander-config.js       # CLI configuration with Commander.js
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

Feel free to reach out for feedback or contributions! 😊

let addressBook = require('./AddContacts');
function getNumberOfContacts() {
    return addressBook.reduce((count, contact) => count + 1, 0);
}

// Example Usage
console.log("Number of Contacts:", getNumberOfContacts());

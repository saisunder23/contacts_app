import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

// Define the ContactList component
function ContactList() {
  const [contacts, setContacts] = useState([]); // Initial state is an empty array

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const data = await response.json();
        setContacts(data); // Update the state with the fetched contacts
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchContacts(); // Call the function after defining it
  }, []);

  console.log("Updated Contacts: ", contacts); // Log updated contacts

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;

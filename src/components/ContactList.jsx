import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchContacts();
  }, []);

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
          <ContactRow
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId}  // Pass the setter as a prop
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;

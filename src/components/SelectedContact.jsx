import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);  // State to store the fetched contact

  // useEffect to fetch data when the component mounts or selectedContactId changes
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);  // Update the state with the fetched contact
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchContact();  // Call the fetch function
  }, [selectedContactId]);  // Dependency array includes selectedContactId

  if (!contact) {
    return <p>Loading contact...</p>;  // Display loading text until data is fetched
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
    </div>
  );
}

import React, { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);  // State to track selected contact ID

  return (
    <>
      {selectedContactId === null ? (
        <ContactList setSelectedContactId={setSelectedContactId} />
      ) : (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

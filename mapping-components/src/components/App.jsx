import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id} //Must be unique // Cant use it as {props.key}
      name={contact.name}
      img={contact.imgURL}
      email={contact.email}
      tel={contact.phone}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}
// map() loops through the whole array (all the things) in contacts
// maps all the objects inside the array
export default App;

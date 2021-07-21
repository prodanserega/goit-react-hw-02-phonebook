import { Component } from "react";

import ContactForm from ".//ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [],
  };

  handelAddContact = (newContact) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handelCheckUniqueContact = (name) => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find(
      (contacts) => contacts.name === name
    );
    isExistContact && alert("Contact is already exist");

    return !isExistContact;
  };

  handleRemoveContact = (id) =>
    this.state(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactForm
          onAdd={this.handelAddContact}
          onCheckUnique={this.handelCheckUniqueContact}
        />
        <ContactList contacts={contacts} onRemove={this.handleRemoveContact} />
      </>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import ContactForm from 'ContactForm';
import Filter from 'Filter';
import ContactList from 'ContactList';

class App extends Component {
  static CONTACTS = 'contacts-storage';
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount(prevProps, prevState) {
    const contacts = JSON.parse(localStorage.getItem(this.CONTACTS));
    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem(this.CONTACTS, JSON.stringify(this.state.contacts));
    }
  }
  onFormSubmit = event => {
    const { name, number } = event;
    const id = nanoid();
    this.setState(prevState => {
      const existName = name.toLowerCase();
      const exist = prevState.contacts.find(contact => contact.name.toLowerCase() === existName);
      if (exist) {
        alert(`${name} is already in contacts.`);
        return { ...prevState };
      }
      return {
        contacts: [{ id, name, number }, ...prevState.contacts],
      };
    });
  };
  onContactDelete = deletedId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deletedId),
    }));
  };
  setFilter = event => {
    this.setState({
      filter: event.currentTarget.value.toLowerCase(),
    });
  };
  onFilter = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.onFilter(contacts, filter);
    return (
      <div className="phoneBook">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.onFormSubmit} />

        <h2>Contacts</h2>
        <Filter handleFilterChange={this.setFilter} />
        <ContactList contacts={filteredContacts} onDelete={this.onContactDelete} />
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import ContactForm from 'ContactForm';
import Filter from 'Filter';
import ContactList from 'ContactList';
import ContactItem from 'ContactItem';

class App extends Component {
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
  onFormSubmit = ({ event, name, number }) => {
    const id = nanoid();
    event.target.reset();
    this.setState(prevState => {
      const existName = name.toLowerCase();
      const exist = prevState.contacts.find(contact => contact.name.toLowerCase() === existName);
      if (exist) {
        alert(`${name} is already in contacts.`);
        return prevState;
      }
      const contacts = [{ id, name, number }, ...prevState.contacts];
      return { contacts };
    });
    this.clearFilter();
  };
  onContactDelete = deletedId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deletedId),
    }));
    this.clearFilter();
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
        <Filter handleFilterChange={this.setFilter} value={this.state.filter} />
        <ContactList>
          {filteredContacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <ContactItem
                key={id}
                onDeleteClick={() => {
                  this.onContactDelete(id);
                }}
                name={name}
                number={number}
              ></ContactItem>
            );
          })}
        </ContactList>
      </div>
    );
  }
}
export default App;

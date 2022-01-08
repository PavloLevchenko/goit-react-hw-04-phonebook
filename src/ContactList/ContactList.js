import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={s.contactList}>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li className={s.contactItem} key={id}>
              {name} : {number}
              <button
                className={s.btnDelete}
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ContactList;

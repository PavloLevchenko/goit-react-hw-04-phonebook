import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from 'ContactItem';

const ContactList = ({ contacts, contactDelete }) => (
  <ul className={s.contactList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <ContactItem
          key={id}
          onDeleteClick={() => {
            contactDelete(id);
          }}
          name={name}
          number={number}
        />
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactDelete: PropTypes.func.isRequired,
};

export default ContactList;

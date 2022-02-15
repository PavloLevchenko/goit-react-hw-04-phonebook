import s from './ContactList.module.css';

const ContactList = ({ children }) => <ul className={s.contactList}>{children}</ul>;
export default ContactList;

import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteClick }) => (
  <li className={s.contactItem}>
    {name} : {number}
    <button className={s.btnDelete} type="button" onClick={onDeleteClick}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactItem;

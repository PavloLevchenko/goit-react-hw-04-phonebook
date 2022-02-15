import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    event.preventDefault();

    const { value, name } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { handleSubmit } = this.props;
    const { name, number } = this.state;
    return (
      <form
        className={s.form}
        onSubmit={event => {
          event.preventDefault();
          handleSubmit({ event, name, number });
        }}
      >
        <label className={s.form__label}>
          Name
          <input
            className={s.form__input}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.form__label}>
          Number
          <input
            className={s.form__input}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;

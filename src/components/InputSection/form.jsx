import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

let contact = {};

export class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlNameChange = evt => {
    this.setState({ name: evt.currentTarget.value });
  };

  handlSubmitForm = evt => {
    evt.preventDefault();

    contact.name = this.state.name;
    contact.id = nanoid();

    this.props.dataFormHendler(contact);
    this.setState({ name: '' });
    contact = {};
  };

  render() {
    return (
      <section>
        <h2>Input Section</h2>
        <form onSubmit={this.handlSubmitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handlNameChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  dataFormHendler: PropTypes.func.isRequired,
};

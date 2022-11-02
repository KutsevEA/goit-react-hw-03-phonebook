import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    return (
      <section>
        <h2>Contacts</h2>
        <ul>
          {this.props.contacts.map(contact => {
            return <li key={contact.id}>{contact.name} </li>;
          })}
        </ul>
      </section>
    );
  }
}



Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
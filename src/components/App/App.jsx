import { nanoid } from 'nanoid';
import { Component } from 'react';

import { Wrapper } from './App.styled';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';

const LOCALE_STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
    if (savedContacts) {
      this.setState({
        contacts: savedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        LOCALE_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = newContact => {
    const isNotExist = this.state.contacts.every(
      contact => contact.name.toLowerCase() !== newContact.name.toLowerCase()
    );

    if (isNotExist) {
      const addedContact = {
        id: nanoid(),
        name: newContact.name,
        number: newContact.number,
      };

      this.setState(prevState => {
        return {
          contacts: prevState.contacts.concat(addedContact),
        };
      });
    } else {
      alert(`${newContact.name} is alredy in contacts.`);
    }
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normilizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );

    return (
      <Wrapper>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.filterChange} />
          {contacts.length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              remove={this.removeContact}
            />
          ) : (
            <Notification message="There is no contact" />
          )}
        </Section>
      </Wrapper>
    );
  }
}

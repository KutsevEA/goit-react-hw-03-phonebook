import { Component } from 'react';
import { Form } from 'components/InputSection/form';
import { Contacts } from 'components/ContactsSection/contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formDataHendler = data => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.concat(data)};
    });
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>

        <Form dataFormHendler={this.formDataHendler} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}



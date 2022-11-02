import PropTypes from 'prop-types';
import {
  ContactListContainer,
  HeaderCell,
  HeaderRow,
  Row,
  Cell,
  RemoveButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, remove }) => {
  return (
    <ContactListContainer>
      <thead>
        <HeaderRow>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>Phone Number</HeaderCell>
          <HeaderCell></HeaderCell>
        </HeaderRow>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <Row key={contact.id}>
            <Cell>{contact.name}</Cell>
            <Cell>{contact.number}</Cell>
            <Cell>
              <RemoveButton type="button" onClick={() => remove(contact.id)}>
                Delete
              </RemoveButton>
            </Cell>
          </Row>
        ))}
      </tbody>
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  remove: PropTypes.func.isRequired,
};

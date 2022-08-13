import { Component } from 'react';
// import s from './ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  state = {
    name: '',
  };

  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

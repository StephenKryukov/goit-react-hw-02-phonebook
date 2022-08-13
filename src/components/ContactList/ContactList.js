import { Component } from 'react';
// import s from './ContactList/ContactList.module.css';
// import PropTypes from 'prop-types';

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

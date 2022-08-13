import { Component } from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  state = {
    name: '',
  };

  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <li className={s.item} key={id}>
            <p className={s.contact}>
              {name}: {number}
            </p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDelete(id)}
            >
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

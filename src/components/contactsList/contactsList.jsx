import PropTypes from 'prop-types';
import css from './contactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id} className={css.item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={css.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;

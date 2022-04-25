import s from "./ContactItem.module.css";
import PropTypes from "prop-types";

function ContactItem({ name, number, onDeleteContact, id }) {
  return (
    <li className={s.ContactItem}>
      {name}
      <p>( {number} )</p>
      <button
        className={s.button}
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;

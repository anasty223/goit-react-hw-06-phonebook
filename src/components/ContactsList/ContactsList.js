import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactsItem";
import s from "./ContactsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contact/action";
import { getVisibleContacts } from "./items-selector";

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.ContactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={(id) => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

// function ContactList({contacts,onDeleteContact}) {
//    return (
//       <List>
//             {contacts.map(({ id, name, number }) =>
//             <ContactItem
//                key={id}
//                id={id}
//                name={name}
//                number={number}
//                onDeleteContact={onDeleteContact}

//             />
//            )}
//       </List>
//    )
// }

export default ContactsList;

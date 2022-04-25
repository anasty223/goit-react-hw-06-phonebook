import React, { useState } from "react";
import s from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContact } from "../../redux/contact/contact-selectors";
import { addContact } from "../../redux/contact/action";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // const handleChangeName = (e) => {
  //   setName(e.e.currentTarget);
  // };

  // const handleChangeNumber = (e) => {
  //   setNumber(e.e.currentTarget);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const returnName = contacts.find((contact) => contact.name === name);

    if (returnName) {
      return alert("This name in the phonebook ");
    } else {
      dispatch(addContact({ name, number }));
    }

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label>
        Tel.
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};
export default Form;

// class oldForm extends Component {
//   handleChange = (e) => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     const { name, number } = this.state;
//     this.props.onSubmit({ name, number });

//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };
// }

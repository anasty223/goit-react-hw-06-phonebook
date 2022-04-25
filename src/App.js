import "./App.css";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <div className="App">
      <h1 className="phonebook">Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <ContactsList />

      
    </div>
  );
};
export default App;
// class OldApp extends  {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     name: "",
//     filter: "",
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("App componentDidUpdate");
//     const nextContacts = this.state.contacts;
//     const prevContatcs = prevState.contacts;
//     if (nextContacts !== prevContatcs) {
//       console.log("Обновилось поле todos, записываю todos в хранилище");
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//закрытие модалки при добавление туду
// if (this.state.todos.length > prevState.todos.length) {
//   this.toggleModal();
// }
// }

// formSubmitHandler = ({ name, number }) => {
//   const { contacts } = this.state;
//   const ReturnName = contacts.find((contact) => contact.name === name);
//   if (ReturnName) {
//     alert("This name is already in the phone book ");
//   } else {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     console.log(contact);
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   }
// };
// deleteContact = (contactsId) => {
//   console.log(contactsId);
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactsId
//     ),
//   }));
// };
// getVisibleContacts = () => {
//   const { contacts, filter } = this.state;
//   const normalizeFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
// };
// changeFilter = (e) => {
//   this.setState({ filter: e.currentTarget.value });
// };

// }

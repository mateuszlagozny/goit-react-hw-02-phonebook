import { nanoid } from "nanoid";
import React, { Component } from "react";
import InputForm from "./ContactForm/ContactForm";
import Contacts from "./Contacts/Contacts";
import ContactsHeder from "./Contacts/ContactsHeder";
import FilterBook from "./FilterBook/FilterBook";

class App extends Component {
  state ={
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},

    ],
    filter:'',
  };

  formSubmitHandler = data => {


    const isRepeatName = this.state.contacts.some(el => el.name === data.name,);
    if (isRepeatName) { alert(`${data.name} is already in contact`); return; }

    const newContact = { ...data, id: nanoid(), };

    this.setState(prevState => ({
      contacts: prevState.contacts.concat([newContact]), ...prevState.contacts,
    }))
  }

  onChange = e => {
    this.setState({ filter: e.currentTarget.value });

  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();


    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };





  render() {

    const VisibleContacts = this.getVisibleContacts();

    return (
<div>
      <InputForm onSubmit={this.formSubmitHandler}/>
      <ContactsHeder/>
      <FilterBook value={this.state.filter} onChange={this.onChange} />
      <Contacts contacts={VisibleContacts} deleteContact={this.deleteContact} />
    </div>

  );
    
  }

}

export default App;







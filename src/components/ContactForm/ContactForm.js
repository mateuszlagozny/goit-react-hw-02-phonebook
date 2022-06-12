import React, { Component } from "react";
import styles from "../ContactForm/ContactForm.module.css"


 const formValidate = (name, number) => {
    if (name.length < 3) {
      return false;
    }
    if (number.length < 9) {
      return false;
    }
    return true;
  };


class InputForm extends Component {

    state = {
        name: '',
        number: ''
      };

      handleSubmit = (ev) => {
        ev.preventDefault();
        
        this.props.onSubmit({ ...this.state });
        this.reset();
      };

      handleChange = (ev) => {
        const { name, value } = ev.currentTarget;
        this.setState({ [name]: value });
      };

      reset = () => {
        this.setState({ name: '', number: '' });
       };

 
    render(){
      const { name, number } = this.state;
      const isSubmitButtonEnabled = formValidate(
        name,
        number,
      );
        
        return <section>
            <h2 className={styles.phonebookHeader}>Phonebook</h2>
            <h2 className={styles.labelInput}>Name</h2>
            <form onSubmit={this.handleSubmit}>
            
            <input
 onChange={this.handleChange}
  type="text"
  name="name"
  value = {name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
            />

<h2 className={styles.labelInput}>Number</h2>

            <input
 onChange={this.handleChange}
  type="tel"
  name="number"
  value = {number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
            />
    <button 
        disabled={!isSubmitButtonEnabled}
        type="submit" 
        className={styles.button}>
        Add contact 
     </button>
    </form>
        </section>;

    }    
}

export default InputForm;
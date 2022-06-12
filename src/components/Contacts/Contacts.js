import React from "react";

const Contacts = ({contacts, deleteContact}) => (
    <section>

        <ul>
            {contacts.map(contact => (
                <li key={contact.id}
                style={{
                    display:"flex",
                    textDecoration: "none",
                    fontSize:"20px",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    {contact.name}:{contact.number}
                    
                    <button 
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        style={{
                            display:"flex",
                            color: "red",
                            margin: "20px",
                        }}>
                     DELETE
                    </button>
                </li>
            ))}
        </ul>
    </section>
);




export default Contacts;

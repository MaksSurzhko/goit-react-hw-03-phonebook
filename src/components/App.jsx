/*import React, { Component } from "react";
import { nanoid } from "nanoid";
import pcss from "../components/phonebook/phonebook.module.css";
import ContactForm from "../components/contform/form";
import Filter from "../components/filter/filter";
import ContactList from "../components/contlist/list";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: ""
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  handleFilterChange = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={pcss.cont}>
        <h2 className={pcss.ptitle}>Phonebook</h2>

        <ContactForm
          name={name}
          number={number}
          onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />

        <div className={pcss.ccont}>
          <h2 className={pcss.ctitle}>Contacts</h2>

          <Filter
            filter={filter}
            onFilterChange={this.handleFilterChange}
          />

          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;

export const App = () => {
  return (
    <div
      style={{
        padding: "40px",
       // height: '100vh',
        display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        //fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook
        contacts={[]}
        filter=""
        name=""
        number=""
      />
    </div>
  );
};*/


/*import React, { Component } from "react";
import { nanoid } from "nanoid";
import pcss from "../components/phonebook/phonebook.module.css";
import ContactForm from "../components/contform/form";
import Filter from "../components/filter/filter";
import ContactList from "../components/contlist/list";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  handleFilterChange = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={pcss.cont}>
        <h2 className={pcss.ptitle}>Phonebook</h2>

        <ContactForm
          onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />

        <div className={pcss.ccont}>
          <h2 className={pcss.ctitle}>Contacts</h2>

          <Filter onFilterChange={this.handleFilterChange} />

          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;

export const App = () => {
  return (
    <div
      style={{
        padding: "40px",
        color: "#010101"
      }}
    >
      <Phonebook />
    </div>
  );
};*/


import React, { Component } from "react";
import { nanoid } from "nanoid";
import pcss from "../components/phonebook/phonebook.module.css";
import ContactForm from "../components/contform/form";
import Filter from "../components/filter/filter";
import ContactList from "../components/contlist/list";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  handleFilterChange = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={pcss.cont}>
        <h2 className={pcss.ptitle}>Phonebook</h2>

        <ContactForm
          onAddContact={this.handleAddContact}
        />

        <div className={pcss.ccont}>
          <h2 className={pcss.ctitle}>Contacts</h2>

          <Filter onFilterChange={this.handleFilterChange} />

          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;

export const App = () => {
  return (
    <div
      style={{
        padding: "40px",
        color: "#010101"
      }}
    >
      <Phonebook />
    </div>
  );
};
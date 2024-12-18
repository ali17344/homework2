import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import './style.css'
function App() {
  const [currentContact, setCurrentContact] = useState(null);

  return (
    <>
      <h1>Список ваших контактов</h1>
      <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact}  />
      <ContactList setCurrentContact={setCurrentContact} />
    </>
  )
}

export default App

import React from 'react';
import ListReminders from './components/ListReminders';

function App() {
  return (
    <section>
      <form>
        <input type="textarea" placeholder="Title"/>
        <textarea placeholder="Type some to reminder..."/>
        <button>Send</button>
      </form>
      <ListReminders/>
    </section>
  );
}

export default App;

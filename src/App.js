import { useState } from 'react';
import './App.css';
import { InitialItems } from './components/data';
import List from './components/List';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState(InitialItems);

  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item._id !== itemId));
  }

  function handleAddItem() {
    return console.log('hello');
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <List InitialItems={items} onDeleteItem={handleDeleteItem} />
      <AddItem onAddItem={handleAddItem} />
    </div>
  );
}

export default App;

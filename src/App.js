import { useState } from 'react';
import './App.css';
import { InitialItems } from './components/data';
import List from './components/List';
import AddItem from './components/AddItem';

let nextId = 6;

function App() {
  const [items, setItems] = useState(InitialItems);

  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item._id !== itemId));
  }

  function handleAddItem(name) {
    setItems([
      ...items,
      {
        _id: nextId++,
        _type: 'shopping.item',
        category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
        name: { en: name, de: '' },
      },
    ]);
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

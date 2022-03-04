import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
// import { InitialItems } from './components/data';
import List from './components/List';
import AddItem from './components/AddItem';
import SearchAdd from './components/SearchAdd';

function App() {
  //const [items, setItems] = useState(loadFromLocal('items') ?? InitialItems);
  const [items, setItems] = useState(loadFromLocal('items') ?? []);

  useEffect(() => {
    loadItems();
    async function loadItems() {
      try {
        const response = await fetch(
          'https://fetch-me.vercel.app/api/shopping/items'
        );
        const data = await response.json();
        setItems(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  console.log(items);
  // function handleSearchItems() {
  //   setApiItems(
  //     setApiItems()
  //     )
  // }

  useEffect(() => {
    saveToLocal('items', items);
  }, [items]);

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item._id !== itemId));
  }

  function handleAddItem(name) {
    setItems([
      ...items,
      {
        _id: nanoid(),
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
      <SearchAdd />
    </div>
  );
}

export default App;

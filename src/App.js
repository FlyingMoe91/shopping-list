import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
// import AddItem from './components/AddItem';
import SearchAdd from './components/SearchAdd';

function App() {
  const [items, setItems] = useState([]);
  const [shoppingListItem, setShoppingListItem] = useState(
    loadFromLocal('items') ?? []
  );
  const [searchInput, setSearchInput] = useState('');

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

  useEffect(() => {
    saveToLocal('items', shoppingListItem);
  }, [shoppingListItem]);

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
    setShoppingListItem(shoppingListItem.filter((item) => item._id !== itemId));
  }

  function handleAddItem(name) {
    if (shoppingListItem.map((item) => item._id).includes(name._id)) {
      alert(`${name.name.en} is already on the list`);
      setSearchInput('');
    } else {
      setShoppingListItem([
        ...shoppingListItem,
        {
          _id: name._id,
          _type: name._type,
          category: { _type: name.category._type, _ref: name.category._ref },
          name: { en: name.name.en, de: name.name.de },
        },
      ]);
      setSearchInput('');
    }
  }

  return (
    <div className="App">
      <h1 className="Headline">Shopping List</h1>
      <List
        shoppingListItem={shoppingListItem}
        onDeleteItem={handleDeleteItem}
      />
      {/* <AddItem onAddItem={handleAddItem} /> */}
      <SearchAdd
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        InitialItems={items}
        onAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;

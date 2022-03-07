import { useEffect, useState } from 'react';
import { loadFromLocal, saveToLocal } from './lib/localStorage';
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

  return (
    <div className="App">
      <h1 className="Headline">Shopping List</h1>
      <List shoppingListItem={shoppingListItem} onDeleteItem={DeleteItem} />
      {/* <AddItem onAddItem={handleAddItem} /> */}
      <SearchAdd
        onSearch={handleSearch}
        searchInput={searchInput}
        InitialItems={items}
        onAddItem={AddItem}
      />
    </div>
  );

  function handleSearch(title) {
    setSearchInput(title);
  }

  function DeleteItem(itemId) {
    setShoppingListItem(shoppingListItem.filter((item) => item._id !== itemId));
  }

  function AddItem(name) {
    if (shoppingListItem.find((item) => item._id === name._id)) {
      alert(`${name.name.en} is already on the list`);
      setSearchInput('');
    } else {
      setShoppingListItem([...shoppingListItem, name]);
      setSearchInput('');
    }
  }
}

export default App;

import { useState } from 'react';

export default function SearchAdd({ InitialItems, onSearchItems }) {
  const [searchItems, setSearchItems] = useState('');
  return (
    <div>
      <label htmlFor="search">What do you want to buy?</label>
      <input
        placeholder="Search"
        type="text"
        id="search"
        onChange={(event) => setSearchItems(event.target.value)}
      />
      <ul>
        {InitialItems.filter((item) =>
          item.name.en.toLowerCase().includes(searchItems.toLowerCase())
        ).map((item) => {
          return (
            <li key={item._id}>
              <button className="Items">{item.name.en}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

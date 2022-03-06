import { useState } from 'react';

export default function SearchAdd({ InitialItems, onAddItem }) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div>
      <label htmlFor="search">What do you want to buy?</label>
      <input
        placeholder="Search"
        type="text"
        id="search"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <ul>
        {searchInput &&
          InitialItems.filter((item) =>
            item.name.en.toLowerCase().includes(searchInput.toLowerCase())
          ).map((item) => {
            return (
              <li key={item._id}>
                <button
                  onClick={() => {
                    onAddItem(item);
                  }}
                  className="Items"
                >
                  {item.name.en}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

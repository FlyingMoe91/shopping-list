import './SearchAdd.css';

export default function SearchAdd({
  InitialItems,
  onAddItem,
  setSearchInput,
  searchInput,
}) {
  return (
    <div>
      <label className="searchLabel" htmlFor="search">
        What do you want to buy?
      </label>
      <input
        className="searchInput"
        placeholder="Search"
        type="text"
        id="search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <ul className="searchList">
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
                  className="searchItems"
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

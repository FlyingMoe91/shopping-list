import './SearchAdd.css';

export default function SearchAdd({
  InitialItems,
  onAddItem,
  onSearch,
  searchInput,
}) {
  const filteredItems = InitialItems.filter((item) =>
    item.name.en.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="SearchAddContainer">
      <label className="searchLabel" htmlFor="search">
        What do you want to buy?
      </label>
      <input
        className="searchInput"
        placeholder="Search"
        type="text"
        id="search"
        value={searchInput}
        onChange={(event) => onSearch(event.target.value)}
      />
      <ul className="searchList">
        {searchInput &&
          filteredItems.map((item) => {
            return (
              //     searchInput.name.includes(!)
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

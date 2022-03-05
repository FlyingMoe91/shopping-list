export default function SearchAdd({ InitialItems, onSearchItems }) {
  return (
    <div>
      <label htmlFor="search">What do you want to buy?</label>
      <input
        placeholder="Search"
        type="text"
        id="search"
        onChange={(event) => onSearchItems(event.target.value)}
      />
      <ul>
        {InitialItems.map((item) => {
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

//console.log(todo)

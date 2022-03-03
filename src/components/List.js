import './List.css';

export default function List({ InitialItems, onDeleteItem }) {
  return (
    <ul className="ItemList">
      {InitialItems.map((item) => {
        return (
          <li key={item._id}>
            <button onClick={() => onDeleteItem(item._id)} className="Items">
              {item.name.en}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

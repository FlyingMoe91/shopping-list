export default function AddItem(onAddItem) {
  return (
    <form>
      <label for="add" hidden>
        add item
      </label>
      <input id="add" placeholder="add item"></input>
      <button onClick={console.log(onAddItem)}>Add</button>
    </form>
  );
}

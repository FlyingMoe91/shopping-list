import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [name, setName] = useState('');
  return (
    <>
      <input
        id="add"
        placeholder="add item"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          setName('');
          onAddItem(name);
        }}
      >
        Add
      </button>
    </>
  );
}

export const Filter = ({ filter, onSearchPhone }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={e => onSearchPhone(e.target.value)} type="text" />
    </div>
  );
};

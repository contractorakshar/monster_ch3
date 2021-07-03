import "./Search.css";
export const Search = ({ placeholder, handleChange }) => {
  return (
    <>
      <input
        className="search"
        placeholder={placeholder}
        type="search"
        onChange={handleChange}
      />
    </>
  );
};

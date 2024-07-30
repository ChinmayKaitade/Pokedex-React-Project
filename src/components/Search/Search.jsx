import useDebounce from "../../hooks/useDebouce";
import "./Search.css";

function Search({ updateSearchTerm }) {
  const debouncedCallback = useDebounce(
    (e) => updateSearchTerm(e.target.value)
  );
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Pokemon Name"
        id="pokemon-name-search"
        onChange={debouncedCallback}
      />
    </div>
  );
}

export default Search;

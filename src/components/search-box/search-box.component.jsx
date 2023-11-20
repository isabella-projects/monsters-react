import "./search-box.styles.css";

/**
 * SearchBox component for rendering the cards from the input field.
 *
 * @class SearchBox
 * @extends Component
 * @example
 * // Usage example:
 * <SearchBox className="example" placeholder="example" onChange={exampleChangeHandler}
 */
const SearchBox = ({ className, onChangeHandler, ...otherProps }) => (
    <input
        className={`search-box ${className}`}
        type="search"
        onChange={onChangeHandler}
        {...otherProps}
    />
);

export default SearchBox;

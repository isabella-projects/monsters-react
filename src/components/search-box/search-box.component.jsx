import { Component } from "react";
import PropTypes from "prop-types";

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
class SearchBox extends Component {
    render() {
        const { className, onChangeHandler, ...otherProps } = this.props;
        return (
            <input
                className={`search-box ${className}`}
                type="search"
                onChange={onChangeHandler}
                {...otherProps}
            />
        );
    }
}

SearchBox.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

export default SearchBox;

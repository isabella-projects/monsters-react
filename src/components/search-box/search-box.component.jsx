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
        return (
            <input
                className={`search-box ${this.props.className}`}
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}

SearchBox.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

export default SearchBox;

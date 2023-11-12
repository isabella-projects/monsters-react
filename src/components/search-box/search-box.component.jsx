import { Component } from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {
    render() {
        return (
            <input
                className={this.props.className}
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

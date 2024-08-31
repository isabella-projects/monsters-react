import { type ChangeEventHandler, type InputHTMLAttributes } from 'react';

import './search-box.styles.css';

interface ISearchBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ className, onChangeHandler, ...otherProps }: ISearchBoxProps) => (
    <input className={`search-box ${className}`} type="search" onChange={onChangeHandler} {...otherProps} />
);

export default SearchBox;

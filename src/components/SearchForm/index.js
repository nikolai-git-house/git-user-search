import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import 'suitcss-utils-display';
import SearchIcon from './search.svg';

class SearchForm extends Component {

  static defaultProps = {
    initialInputValue: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.initialInputValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialInputValue !== this.props.initialInputValue) {
      this.setInputValueState(nextProps.initialInputValue);
    }
  }

  setInputValueState(inputValue) {
    this.setState(() => ({inputValue}));
  }

  handleOnChange = (event) => {
    event.persist();
    this.setInputValueState(event.target.value);
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    if (!this.state.inputValue) {return;}
    this.props.onSubmit(this.state.inputValue);
  }

  render() {
    return (
      <form
        className={css(styles.SearchForm)}
        onSubmit={this.handleOnSubmit}
      >
        <label
          className="u-hiddenVisually"
          htmlFor="searchInput"
        >
          Search for a user
        </label>
        <input
          className={css(styles.SearchForm_input)}
          type="text"
          id="searchInput"
          placeholder="Search for a user, e.g. nikolai"
          value={this.state.inputValue}
          onChange={this.handleOnChange}
        />
        <button
          className={css(styles.SearchForm_btn)}
          type="submit"
        >
          <SearchIcon width={22} height={24} />
          <span className="u-hiddenVisually">Submit</span>
        </button>
      </form>
    );
  }
}

const styles = StyleSheet.create({
  SearchForm: {
    position: 'relative',
  },

  SearchForm_input: {
    padding: 8,
    paddingRight: 40,
    width: '100%',
    border: '1px solid #bbb',
    boxShadow: 'inset 0 2px 2px rgba(0, 0, 0, .1);',
  },

  SearchForm_btn: {
    padding: '3px 14px',
    position: 'absolute',
    top: 2,
    right: 0,
  },
});

export default SearchForm;

import React, {
  Component,
} from 'react';
import {
  StyleSheet,
} from 'aphrodite/no-important';
import Header from 'components/Header';
import Container from 'components/Container';
import connect from './connect';

export class HeaderContainer extends Component {

  static defaultProps = {
    searchTerm: '',
  };

  constructor(props) {
    super(props);
    this.handleSearchUser(props.searchQuery);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchQuery !== this.props.searchQuery) {
      this.handleSearchUser(nextProps.searchQuery);
    }
  }

  handleSearchUser(searchQuery) {
    if (!searchQuery) {return;}
    this.props.searchForUser(searchQuery);
  }

  render() {
    const {
      onSubmit,
      searchTerm,
    } = this.props;

    return (
      <Container rootStyle={styles.HeaderContainer}>
        <Header
          onSubmit={onSubmit}
          searchTerm={searchTerm}
        />
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #aaa',
    boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, .2)',
  },
});

export default connect(HeaderContainer);

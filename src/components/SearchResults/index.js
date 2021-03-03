import React from 'react';
import curry from 'lodash/fp/curry';
import map from 'lodash/fp/map';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import User from 'components/User';
import {viewport} from 'theme';
import 'suitcss-utils-flex/lib/flex-sm.css';

const renderSearchResult = curry((entities, item) => {
  const {
    id,
  } = entities[item];
  return (
    <li key={id} className={`${css(styles.SearchResults_item)}`}>
      <User {...entities[id]} />
    </li>
  );
});

function SearchResults({entities, ids}) {
  return (
    <ul className={`${css(styles.SearchResults)} u-sm-flex u-sm-flexWrap`}>
      {map(renderSearchResult(entities), ids)}
    </ul>
  );
}

const styles = StyleSheet.create({
  SearchResults: {
    paddingLeft: 3,
  },

  SearchResults_item: {
    marginBottom: 15,

    [viewport.SM]: {
      flexBasis: 'calc(100% / 3)',
      maxWidth:125,
    },
  },
});

export default SearchResults;

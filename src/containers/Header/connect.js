import {connect} from 'react-redux';

export function mapDispatchToProps(dispatch) {
  return {
    searchForUser(search) {
      dispatch({
        type: 'SEARCH_REQUEST',
        payload: {
          search,
        },
      });
    },
  };
}

export default connect(null, mapDispatchToProps);

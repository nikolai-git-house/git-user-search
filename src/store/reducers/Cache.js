import mergeAll from 'lodash/fp/mergeAll';
import isUndefined from 'lodash/fp/isUndefined';
import get from 'lodash/fp/get';
import omit from 'lodash/fp/omit';

const initialState = {
  search: {},
  profile: {},
  repos: {},
  followers: {},
  rateLimit: {},
};

export function addToCache({state, cacheKey, type, data}) {
  if (isUndefined(cacheKey) || state[type][cacheKey]) {
    return state;
  }
  const newState = mergeAll([{}, state]);
  newState[type][cacheKey] = omit('entities', data);
  return newState;
}

export function getSearchFromCache(search) {
  return get(`cache.search.${search}`);
}

export function getProfileFromCache(username) {
  return get(`cache.profile.${username}`);
}

export function getReposFromCache(url) {
  return get(`cache.repos['${url}']`);
}

export function getFollowersFromCache(url) {
  return get(`cache.followers['${url}']`);
}

export default function cacheReducer(state = initialState, action) {
  switch (action.type) {

    case 'SEARCH_SUCCESS':
      return addToCache({
        state,
        cacheKey: action.payload.search,
        type: 'search',
        data: action.payload,
      });

    case 'PROFILE_SUCCESS':
      return addToCache({
        state,
        cacheKey: action.payload.login,
        type: 'profile',
        data: action.payload,
      });

    case 'REPOS_SUCCESS':
      return addToCache({
        state,
        cacheKey: action.payload.url,
        type: 'repos',
        data: {result: action.payload.result},
      });

    case 'FOLLOWERS_SUCCESS':
      return addToCache({
        state,
        cacheKey: action.payload.url,
        type: 'followers',
        data: {result: action.payload.result},
      });

    case 'API_RATE_LIMIT_SUCCESS': {
      const newState = mergeAll([{}, state]);
      newState.rateLimit.latest = action.payload;
      return newState;
    }

    default:
      return state;
  }
}

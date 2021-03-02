

import axios from 'axios';
import assignAll from 'lodash/fp/assignAll';
import parseLinkHeader from 'parse-link-header';

export const PER_PAGE = 42;

const github = axios.create({
  baseURL: 'https://api.github.com/',
});

function addPagination(response){
  const {data, headers} = response;
  const pagination = parseLinkHeader(headers.link);
  return assignAll([
    data,
    {pagination},
  ]);
}

function searchUsers(params){
  const defaultParams = {
    per_page: PER_PAGE,
  };
  return github
    .get('/search/users', {
      params: assignAll([defaultParams, params]),
    })
    .then(addPagination);
}

function getProfile(username) {
  return github.get(`/users/${username}`);
}

export default {
  searchUsers,
  getProfile,
  get: github.get,
};

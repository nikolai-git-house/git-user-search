import isUndefined from 'lodash/fp/isUndefined';

export default function pageTitle(title) {
  const base = 'Github user search';
  if (isUndefined(title)) {return base;}
  return `${title} - ${base}`;
}

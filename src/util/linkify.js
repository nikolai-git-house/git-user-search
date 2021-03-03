export default function linkify(str) {
  return str.replace(/@(\w+)/g, '<a href="http://github.com/$1">@$1</a>');
}

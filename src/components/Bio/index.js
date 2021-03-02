import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import linkify from 'util/linkify';

export default function Bio({text}) {
  if (!text) {return null;}
  return (
    <p
      className={css(styles.Bio)}
      dangerouslySetInnerHTML={{__html: linkify(text)}}
    />
  );
}

const styles = StyleSheet.create({
  Bio: {
    fontSize: 16,
    lineHeight: 1.3,
  },
});

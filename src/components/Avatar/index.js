import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import Image from 'components/Image';

export default function Avatar({url, name, width}) {
  const alt = name ? `${name}'s avatar` : 'User avatar';
  return (
    <Image
      className={css(styles.Avatar)}
      src={`${url}&s=${width * 2}`}
      alt={alt}
      width={width}
    />
  );
}

const styles = StyleSheet.create({
  Avatar: {
    borderRadius: 8,
  },
});

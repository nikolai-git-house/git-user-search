import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important';
import {Link} from 'react-router-dom';
import 'suitcss-utils-flex/lib/flex.css';
import Avatar from 'components/Avatar';

export default function User({login, avatar_url}) {
  return (
    <Link
      to={login}
      className={`${css(styles.User)} u-flex`}
    >
      <div>
        <Avatar
          url={avatar_url}
          name={login}
          width={90}
        />
      </div>
      <p className={css(styles.User_username)}>{login}</p>
    </Link>
  );
}

const styles = StyleSheet.create({
  User: {
    color: 'inherit',
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },

  User_username: {
    fontSize: 16,
  },
});

import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderStyles';

const Header = ({ title, icon, onClick }) => (
  <div className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    <span className={styles.icon} onClick={onClick}>
      {icon}
    </span>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

Header.defaultProps = {
  icon: '',
  onClick: () => null,
};

export default Header;

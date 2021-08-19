import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';
import styles from './HeaderStyles';

const Header = ({ title, icon, iconPosition, onClick }) => {
  const iconButton = (positionClass, testId) => (
    <button
      data-testid={testId}
      type="button"
      className={cx(styles.icon, positionClass)}
      onClick={onClick}
    >
      {icon}
    </button>
  );

  return (
    <div className={styles.header}>
      {icon &&
        iconPosition === 'left' &&
        iconButton(styles.iconLeft, 'header-icon-left')}
      <h1 className={styles.title}>{title}</h1>
      {icon &&
        iconPosition === 'right' &&
        iconButton(styles.iconRight, 'header-icon-right')}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['right', 'left']),
};

Header.defaultProps = {
  icon: '',
  iconPosition: 'right',
  onClick: () => null,
};

export default Header;

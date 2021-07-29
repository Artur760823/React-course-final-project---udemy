import React, { useContext } from 'react';
import block from 'bem-css-modules';
import { StoreContext } from '../../store/StoreProvider';
import { default as HeaderStyles } from './Header.module.scss';

const style = block(HeaderStyles);

const Header = () => {
  const { user, setUser } = useContext(StoreContext);
  const setProperlyLabel = Boolean(user) ? 'Log out' : 'Log in';
  return (
    <header className={style()}>
      <div className={style('logo-wrapper')} />
      <h1 className={style('title')}>The best courses for developers!</h1>
      <button>{setProperlyLabel}</button>

    </header>
  )
};

export default Header;
import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <MainHeader />
      <section className={classes.section}>{props.children}</section>
    </>
  );
}

export default Layout;

import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <main>
        <section className={classes.section}>{props.children}</section>
      </main>
    </div>
  );
}

export default Layout;

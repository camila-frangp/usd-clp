/** @format */

import React from 'react';
import cx from 'classnames';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => (
  <>
    <main className={cx('cnt_principal', 'container-row')}>
      <Aside className="col_3 col_sm_12" />
      <Content className="col_9 col_sm_12" />
    </main>
    <Footer />
  </>
);

App.displayName = 'App';

export default App;

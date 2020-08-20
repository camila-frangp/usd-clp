/** @format */

import React from 'react';
import cx from 'classnames';
import css from './footer.module.scss';

const Footer: React.FC<any> = props => {
  return (
    <footer className={cx(css.footer, 'container-row', 'row--center')}>
      <p className={cx(css.footer_text, 'col_12')}>Prueba Curso React Escala</p>
      <p className={cx(css.footer_text, 'col_12')}>
        Desarrollado por <span className={css.textBold}>Camila GP</span>
      </p>
    </footer>
  );
};

export default Footer;

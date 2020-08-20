/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getConvertApiUrl } from '../../const';
import Input from '../Input/Input';
import cx from 'classnames';
import css from './aside.module.scss';
import moment from 'moment';

interface IAsideProps {
  className?: string;
}
const Aside: React.FC<IAsideProps> = (props: IAsideProps) => {
  const { className } = props;
  const [dolarArray, setDolarArray] = useState([]);
  const [dolarToday, setDolarToday] = useState({ Valor: '', Fecha: '' });
  const [valueConvert, setValueConvert] = useState(null);
  const [totalConvert, setTotalConvert] = useState(0);

  const getData = () => {
    axios
      .get(getConvertApiUrl())
      .then(data => {
        setDolarArray(data.data.Dolares);
        setDolarToday(data.data.Dolares[0]);
      })
      .catch(error => {
        console.log('error convert data', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={cx(css.cntAside, 'container-row', 'row--center', className && className)}>
      <h2 className={cx(css.cntAside_title, 'col_12')}>Convierte dolares a pesos chilenos</h2>
      <p className={cx(css.cntAside_text, 'col_12')}>
        {dolarArray
          ? `Valor dolar hoy ${moment(dolarToday.Fecha).format('DD-MM-YYYY')} es 
        $${parseInt(dolarToday.Valor)}`
          : 'Lo sentimos, intente más tarde.'}
      </p>
      <Input
        className={cx(css.cntAside_input, 'col_12')}
        placeholder="Ingrese xxx"
        type="number"
        value={valueConvert}
        onChange={value => {
          if (value >= 0) {
            const convert = dolarArray && value * parseInt(dolarToday.Valor);
            setValueConvert(value);
            setTotalConvert(convert);
          }
        }}
      />
      {valueConvert && valueConvert !== 0 && (
        <div className={cx(css.cntResult, 'container-row', 'row--center')}>
          <p className={cx(css.cntResult_text, 'col_12')}>
            {`$${valueConvert} USD 
          equivalen a `}
            <span className={cx(css.cntResult_text__bold)}>${totalConvert} CLP</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Aside;

/** @format */

import React, { useState, useEffect, Children } from 'react';
import axios from 'axios';
import moment from 'moment';
import { getDataMonthApiUrl, month, years } from '../../const';
import SelectComponent from '../Select/Select';
import Table from '../Table/Table';
import cx from 'classnames';
import css from './content.module.scss';
import Button from '../Button/Button';

interface IContentProps {
  className?: string;
}

const Content: React.FC<IContentProps> = (props: IContentProps) => {
  const { className } = props;
  const [valueMonth, setValueMonth] = useState({ value: '', label: '' });
  const [valueYearFirst, setValueYearFirst] = useState({ value: '', label: '' });
  const [valueYearCompare, setValueYearCompare] = useState('');
  const [dolarMonth, setDolarMonth] = useState(null);
  const [dolarCompareMonth, setDolarCompareMonth] = useState(null);

  const getData = (year: string, month: string) => {
    axios
      .get(getDataMonthApiUrl(year, month))
      .then((data: any) => {
        setDolarMonth(data.data.Dolares);
      })
      .catch((error: any) => {
        console.log('error month data', error);
      });
  };

  const getDataCompare = (year: string, month: string) => {
    const monthToday = moment(new Date()).format('MM');
    if (parseInt(month) > parseInt(monthToday)) {
      year = '2019';
    } else {
      year = '2020';
    }
    setValueYearCompare(year);
    axios
      .get(getDataMonthApiUrl(year, month))
      .then((data: any) => {
        setDolarCompareMonth(data.data.Dolares);
      })
      .catch((error: any) => {
        console.log('error month compare data', error);
      });
  };

  const arrayChart = dolarCompareMonth && dolarMonth ? [dolarMonth, dolarCompareMonth].flat() : [];

  return (
    <section className={cx(css.content, 'container-row', className && className)}>
      <header className={cx(css.header, 'container-row')}>
        <h2 className={cx(css.header_title, 'col_12')}>
          Elige un mes y compara con el más reciente
        </h2>
        <SelectComponent
          className={cx(css.header_item, 'col_3')}
          placeholder="Mes"
          value={valueMonth}
          options={month}
          onChange={(value: any) => setValueMonth(value)}
          isClearable={true}
        />
        <SelectComponent
          className={cx(css.header_item, 'col_3')}
          placeholder="Año"
          value={valueYearFirst}
          options={years}
          onChange={(value: any) => setValueYearFirst(value)}
          isClearable={true}
        />
        <Button
          children="Comparar"
          className={cx(css.header_item, 'col_3')}
          onClick={() => {
            getData(valueYearFirst.value, valueMonth.value);
            getDataCompare(valueYearCompare, valueMonth.value);
          }}
        />
      </header>

      {dolarMonth && dolarCompareMonth && (
        <section className={cx(css.cntTableCompare, 'container-row')}>
          <Table dataTable={dolarMonth} className={cx(css.cntTableCompare_item, 'col_4')} />
          <Table dataTable={dolarCompareMonth} className={cx(css.cntTableCompare_item, 'col_4')} />
        </section>
      )}
    </section>
  );
};

export default Content;

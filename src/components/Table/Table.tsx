/** @format */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import css from './table.module.scss';
import moment from 'moment';

interface ITableProps {
  dataTable: any;
  className?: string;
}

const Table: React.FC<ITableProps> = (props: ITableProps) => {
  const { dataTable, className } = props;

  return (
    <>
      {dataTable && dataTable.length > 0 && (
        <section className={cx(css.cntTable, 'container-row', className)}>
          <ul className={cx(css.listHeader, 'container-row')}>
            <li className={cx(css.listHeader_item, 'col_3')}>Fecha</li>
            <li className={cx(css.listHeader_item, 'col_9')}>
              <span>{` ${moment(dataTable[0].Fecha)
                .locale('es')
                .format('MMMM')} ${moment(dataTable[0].Fecha).format('YYYY')}`}</span>
            </li>
          </ul>

          {dataTable.map((item: any, indexTable: number) => {
            return (
              <ul className={cx(css.listInfo, 'container-row')} key={indexTable}>
                <li className={cx(css.listInfo_item, 'col_3')}>
                  {moment(item.Fecha).format('DD')}
                </li>
                <li className={cx(css.listInfo_item, 'col_9')}>${parseInt(item.Valor)}</li>
              </ul>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Table;

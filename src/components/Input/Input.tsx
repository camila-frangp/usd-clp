/** @format */

import * as React from 'react';
import cx from 'classnames';
import css from './input.module.scss';

interface IInput {
  name?: string;
  title?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
  type?: string;
  className?: string;
}
class Input extends React.Component<IInput, any> {
  render() {
    const { name, title, placeholder, value, onChange, type, className } = this.props;
    return (
      <input
        className={cx(css.cntInput, className && className)}
        type={`${type || 'text'}`}
        id={name}
        name={name}
        title={title}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(e.currentTarget.value)
        }
      />
    );
  }
}
export default Input;

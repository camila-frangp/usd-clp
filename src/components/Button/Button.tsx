/** @format */

import * as React from 'react';
import cx from 'classnames';
import css from './button.module.scss';

interface IButtonProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}
const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { className, disabled, children, onClick } = props;
  return (
    <button
      className={cx(css.button, className)}
      type="button"
      disabled={disabled}
      onClick={e => onClick && onClick(e)}>
      {children}
    </button>
  );
};
export default Button;

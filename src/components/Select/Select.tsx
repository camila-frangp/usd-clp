/** @format */
import * as React from 'react';
import Select from 'react-select';

export interface IOption {
  label: string;
  value: string;
}
interface ISelect {
  options?: any;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
  className?: string;
  isClearable?: boolean;
  disabled?: boolean;
  onInputChange?: (e: any) => void;
  isLoading?: boolean;
}
const customStyles = {
  control: (values: any) => ({
    ...values,
    fontSize: '0.875rem',
    border: '1px solid #b7b6b6',
  }),
  menu: (provided: any) => ({
    ...provided,
    margin: '0',
    color: '#232323',
    fontSize: '0.875rem',
  }),
};
const SelectComponent: React.FC<ISelect> = (props: ISelect) => {
  const {
    options,
    placeholder,
    onChange,
    value,
    isClearable,
    className,
    disabled,
    onInputChange,
    isLoading,
  } = props;
  return (
    <Select
      styles={customStyles}
      value={value && value}
      placeholder={placeholder}
      isDisabled={disabled && disabled}
      options={options}
      className={className}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: '#f5db6e',
          primary: '#f5db6e',
          neutral80: '#575d62',
          neutral90: '#575d62',
        },
      })}
      isClearable={isClearable}
      onChange={(value: any) => onChange && onChange(value)}
      onInputChange={(value: any) => onInputChange && onInputChange(value)}
      isLoading={isLoading && isLoading}
    />
  );
};
export default SelectComponent;

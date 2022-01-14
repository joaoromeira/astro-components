import {
  ChangeEvent,
  FC,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from 'react';

import { Label } from '../Label';
import { Container, Display, Dropdown } from './styles';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  multiple?: boolean;
}

const DEFAULT_OPTIONS = [
  {
    label: 'Item 1',
    value: 1,
  },
  {
    label: 'Item 2',
    value: 2,
  },
  {
    label: 'Item 3',
    value: 3,
  },
  {
    label: 'Item 4',
    value: 4,
  },
];

export const Select: FC<SelectProps> = ({
  className,
  label,
  multiple = false,
}) => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    console.log(selectedValues);
  }, [selectedValues]);

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  const handleOnChangeSingleInput = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(target.value);
  };

  const handleOnChangeMultipleInput = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setSelectedValues((arr) => [...arr, target.value]);
    } else {
      setSelectedValues((arr) => arr.filter((item) => item !== target.value));
    }
  };

  const handleOpenDropdown = () => {
    setDropdownOpened((b) => !b);
  };

  return (
    <Container className={`astro-select ${className}`}>
      <Label>{label}</Label>
      <Display onClick={handleOpenDropdown} />
      {dropdownOpened && (
        <Dropdown>
          {DEFAULT_OPTIONS.map((item, index) => (
            <label key={index.toString()}>
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name="test"
                value={item.value}
                onChange={
                  multiple
                    ? handleOnChangeMultipleInput
                    : handleOnChangeSingleInput
                }
              />
              <span />
              <span>{item.label}</span>
            </label>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

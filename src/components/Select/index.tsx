import {
  ChangeEvent,
  FC,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from 'react';

// import ArrowDown from '../../images/assets/arrow-down.svg';
import { Label } from '../Label';
import { Container, Display, DisplayItem, Dropdown } from './styles';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  className?: string;
  multiple?: boolean;
}

const DEFAULT_OPTIONS = [
  {
    label: 'Item 1',
    value: '1',
  },
  {
    label: 'Item 2',
    value: '2',
  },
  {
    label: 'Item 3',
    value: '3',
  },
  {
    label: 'Item 4',
    value: '4',
  },
];

export const Select: FC<SelectProps> = ({
  className,
  label,
  multiple = false,
}) => {
  const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    // Clear values when change multiple
    setSelectedValues([]);
  }, [multiple]);

  // Handles
  const handleOnChangeMultipleInput = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setSelectedValues((arr) => [...arr, target.value]);
    } else {
      setSelectedValues((arr) => arr.filter((item) => item !== target.value));
    }
  };

  const handleOnChangeSingleInput = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setSelectedValues([target.value]);
  };

  const handleToggleDropdown = () => {
    setDropdownOpened((b) => !b);
  };

  return (
    <Container className={`astro-select ${className}`}>
      <Label>{label}</Label>
      <Display onClick={handleToggleDropdown}>
        {selectedValues.map((selectedValue, index) => (
          <DisplayItem key={index.toString()}>{selectedValue}</DisplayItem>
        ))}
      </Display>
      {dropdownOpened && (
        <Dropdown>
          {DEFAULT_OPTIONS.map((option, index) => (
            <label key={index.toString()}>
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name="test"
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={
                  multiple
                    ? handleOnChangeMultipleInput
                    : handleOnChangeSingleInput
                }
              />
              <span />
              <span>{option.label}</span>
            </label>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

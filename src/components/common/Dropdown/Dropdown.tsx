import React from 'react';
import { Select, SelectProps } from 'antd';
import { 
  StyledSelectPurple, 
  StyledSelectGrey, 
  StyledDownArrow, 
  StyledDownArrowGrey,
  StyledSelectWhiteGrey
} from './Dropdown.styles';

const { Option } = Select;

// It needs onPointerEnterCapture and onPointerLeaveCapture to satisfy the styled-components typing
const PurpleArrow = () => <StyledDownArrow {...({} as any)} />;
const GreyArrow = () => <StyledDownArrowGrey {...({} as any)} />;

// Casting the styled components to the correct AntD Select type with generics
const SelectPurpleStyled = StyledSelectPurple as typeof Select;
const SelectGreyStyled = StyledSelectGrey as typeof Select;

export const DropdownPurple: React.FC<SelectProps> = (props) => {
  return (
    <SelectPurpleStyled
      suffixIcon={<PurpleArrow />}
      {...props}
    />
  );
};

export const DropdownGrey: React.FC<SelectProps> = (props) => {
  return (
    <SelectGreyStyled
      suffixIcon={<GreyArrow />}
      {...props}
    />
  );
};

export { Option as DropdownOption };

export { StyledSelectWhiteGrey as DropdownWhite }; 
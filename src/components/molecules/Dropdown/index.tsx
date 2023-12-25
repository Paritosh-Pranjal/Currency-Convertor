import { Box, Autocomplete as MuiDropdown } from '@mui/material';
import React, { useState } from 'react';
import TextField from '../../atoms/Textfield';
import { CountryType } from '../../../utils/index';
import Typography from 'components/atoms/Typography';

export interface DropdownProps {
  optionData: CountryType[];
  onSelectionChange: (selectedOption: CountryType | null) => void;
  label: string;
}

const Dropdown = (props: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<CountryType | null>(
    null
  );

  const handleDropdownChange = (
    event: React.ChangeEvent<{}>,
    value: CountryType | null
  ) => {
    setSelectedOption(value);
    props.onSelectionChange(value);
  };

  return (
    <div>
      <Typography variant="subtitle1">{props.label}</Typography>
      <MuiDropdown
        sx={{ minWidth: '10vw' }}
        autoHighlight
        options={props.optionData}
        getOptionLabel={(option) => option.code}
        onChange={handleDropdownChange}
        renderOption={(props, option) => {
          return (
            <Box
              component="li"
              sx={{ '& > img': { mr: 0.2, flexShrink: 0 } }}
              {...props}
            >
              {option && (
                <img
                  src={`https://flagsapi.com/${option.label}/flat/64.png`}
                  alt=""
                />
              )}
              {option.code}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
    </div>
  );
};

export default Dropdown;

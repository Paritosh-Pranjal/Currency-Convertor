import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';
import React from 'react';

const TextField = (props: MuiTextFieldProps) => {
  return (
    <div>
      <MuiTextField {...props} fullWidth />
    </div>
  );
};

export default TextField;

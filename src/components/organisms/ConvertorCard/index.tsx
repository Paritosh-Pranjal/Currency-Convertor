import { Box, Button, Icon, styled } from '@mui/material';
import TextField from 'components/atoms/Textfield';
import Typography from 'components/atoms/Typography';
import Dropdown from 'components/molecules/Dropdown';
import React, { useState } from 'react';
import { ConvertorCardText, CountryType, countryList } from 'utils';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { getExchangeRate } from 'services/calls';

const StyledHeaderTypography = styled(Typography)({
  marginBottom: '1rem',
});
const StyledSubTitle = styled(Typography)({});

const StyledTextField = styled(TextField)({
  borderRadius: '4rem',
});

const DropDownBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '2rem',
  marginBottom: '2rem',
});

const StyledConvertedBox = styled(Box)({
  borderRadius: '1rem',
  backgroundColor: 'white',
  minHeight: '4vh',
  border: '1px solid black',
  paddingLeft: '2rem',
});

const StyledButton = styled(Button)({
  width: '100%',
  height: '5vh',
  backgroundColor: '#af4d98',
  color: '#fff',
  ': hover': {
    backgroundColor: '#af4d98',
    color: '#fff',
  },
  borderRadius: '1rem',
  marginTop: '2rem',
});

const StyledMainBox = styled(Box)({
  borderRadius: '1rem',
  backgroundColor: 'white',
  width: '35vw',
  minHeight: '45vh',
  padding: '2rem',
});

const ConvertorCard = () => {
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [from, setFrom] = useState<CountryType | null>(null);
  const [to, setTo] = useState<CountryType | null>(null);
  const [response, setResponse] = useState();

  let fromCode = from?.code.toString().toLowerCase();
  let toCode = to?.code.toString().toLowerCase();

  const handleButtonClick = async () => {
    if (from && to) {
      const response = await getExchangeRate(fromCode, toCode);
      const values = Object.values(response.data);

      if (values.length >= 2) {
        const secondValue = values[1];
        console.log(secondValue);
        setResponse(secondValue as any);
      } else {
        console.error('Unexpected response structure');
      }
    }
  };

  return (
    <StyledMainBox>
      <StyledHeaderTypography variant="h4">
        <b>{ConvertorCardText.heading}</b>
      </StyledHeaderTypography>

      <StyledSubTitle variant="body2">
        {ConvertorCardText.subTitle}
      </StyledSubTitle>

      <StyledTextField
        placeholder="Enter your amount"
        onChange={(e: any) => {
          setInputAmount(e.target.value);
        }}
      />

      <DropDownBox>
        <Dropdown
          label="From"
          optionData={countryList}
          onSelectionChange={(value) => {
            setFrom(value);
          }}
        />
        <Icon>
          <CompareArrowsIcon />
        </Icon>

        <Dropdown
          label="To"
          optionData={countryList}
          onSelectionChange={(value) => {
            setTo(value);
          }}
        />
      </DropDownBox>

      <StyledHeaderTypography variant="h5">
        {ConvertorCardText.footerText}
      </StyledHeaderTypography>
      <StyledConvertedBox>
        {response && (
          <div>
            <p>
              {inputAmount} {fromCode?.toUpperCase()} {' = '}
              {inputAmount * response} {toCode?.toUpperCase()}
            </p>
          </div>
        )}
      </StyledConvertedBox>
      <StyledButton onClick={handleButtonClick}>
        <Typography variant="inherit">{ConvertorCardText.button}</Typography>
      </StyledButton>
    </StyledMainBox>
  );
};

export default ConvertorCard;

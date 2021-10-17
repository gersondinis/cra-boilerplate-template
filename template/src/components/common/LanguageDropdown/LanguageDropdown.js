import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {t} from 'ttag';


const LanguageDropdown = ({label, value, onChange, error, variant}) => {

  return (
    <FormControl fullWidth error={error} variant={variant}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        <MenuItem value={'en'}>{t`EN`}</MenuItem>
        <MenuItem value={'pt'}>{t`PT`}</MenuItem>
      </Select>
    </FormControl>
  );
};

LanguageDropdown.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  required: PropTypes.bool,
  variant: PropTypes.string,
};

LanguageDropdown.defaultProps = {
  error: false,
  label: 'Language',
  value: null,
  onChange: () => console.warn('function not injected'),
  required: false,
  variant: 'standard',
};

export default LanguageDropdown;

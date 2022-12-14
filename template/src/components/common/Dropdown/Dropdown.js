import {FormControl, FormHelperText, InputLabel, Select} from '@mui/material';
import PropTypes from 'prop-types';

const Dropdown = ({label, name, onChange, value, error, required, helperText, color, variant, placeholder, fullWidth, disabled, InputLabelProps, FormHelperTextProps, SelectProps, children}) => {

  return (
    <FormControl variant={variant} error={error} required={required} color={color} fullWidth={fullWidth}>
      <InputLabel color={color} required={required} {...InputLabelProps}>{label}</InputLabel>
      <Select
        disabled={disabled}
        label={label}
        variant={variant}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth={fullWidth}
        required={required}
      >
        {children}
      </Select>
      {helperText && <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  FormHelperTextProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  InputLabelProps: PropTypes.object,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  SelectProps: PropTypes.object,
  value: PropTypes.any,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
};

Dropdown.defaultProps = {
  label: 'Dropdown',
  name: '',
  onChange: () => null,
  value: '',
  error: false,
  required: false,
  helperText: '',
  color: 'primary',
  variant: 'outlined',
  placeholder: '',
  fullWidth: false,
  children: null,
  InputLabelProps: {},
  FormHelperTextProps: {},
  SelectProps: {},
};

export default Dropdown;

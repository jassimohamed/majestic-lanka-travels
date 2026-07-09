export const isRequired = (value) =>
  value && value.toString().trim() !== "";

export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isPhone = (value) =>
  /^[0-9]{9,12}$/.test(value);

export const isPassword = (value) =>
  value && value.length >= 6;

export const onlyNumbers = (value) =>
  value.replace(/\D/g, "");
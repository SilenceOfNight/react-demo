export const getThemeValue = (name, defaultValue) => ({ theme }) =>
  theme[name] || defaultValue

export const formatNumber = (
  value: number,
  options = { minimumFractionDigits: 0 },
  locale = "ru-RU"
) => {
  const formatter = new Intl.NumberFormat(locale, options);
  return formatter.format(value);
};

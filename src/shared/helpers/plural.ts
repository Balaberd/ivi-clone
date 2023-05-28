interface IVariants {
  one: string;
  few: string;
  many: string;
}

export const plural = (
  value: number,
  variants: IVariants | {} = {},
  locale: string = "ru-RU"
): string => {
  const key = new Intl.PluralRules(locale).select(value);
  return variants[key] || "";
};

import en from './en.json';
import fr from './fr.json';

type LanguageType = keyof typeof en;

const Localization = <T extends LanguageType>(
  key: T,
  prop: keyof typeof fr[T],
): string => {
  return `${key}.${prop as string}`;
};
export {en, fr, Localization};

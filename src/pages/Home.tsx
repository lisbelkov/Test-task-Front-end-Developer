import { Localization } from '../i18n/lan/index';
import {useTranslation} from 'react-i18next';



export const Home = () => {
  const {t, i18n, ready} = useTranslation();

  return <h1>{t(Localization('form', 'password'))}</h1>
}

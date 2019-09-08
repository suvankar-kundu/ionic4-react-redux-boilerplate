import { UPDATE_LOCALE } from '../constants';

export default function changeLocale(locale) {
  return {
    type: UPDATE_LOCALE,
    data: locale
  };
}

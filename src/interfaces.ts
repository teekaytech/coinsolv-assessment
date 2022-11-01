interface ILanguage {
  [key: string]: string[];
}

export interface ICountry {
  capital?: string;
  continent: string;
  currency: string;
  emoji: string;
  emojiU: string;
  languages: ILanguage;
  name: string;
  native: string;
  phone: string;
}

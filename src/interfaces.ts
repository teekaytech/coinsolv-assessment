interface LanguageInterface {
  [key: string]: string[];
}

export interface CountryInterface {
  [key: string]: {
    capital: string;
    continent: string;
    currency: string;
    emoji: string;
    emojiU: string;
    languages: LanguageInterface;
    name: string;
    native: string;
    phone: string;
  };
}

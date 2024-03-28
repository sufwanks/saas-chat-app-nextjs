import { ILanguageState, LanguageSupported, SubscriptionState } from "@/types";
import { Subscription } from "@/types/Subscription";
import { create } from "zustand";

const LANGUAGES_IN_FREE = 1;

export const LanguageSupportedMap: Record<LanguageSupported, string> = {
  en: "English",
  hi: "Hindi",
  ml: "Malayalam",
  tl: "Tamil",
  ka: "Kannada",
  de: "German",
  es: "Spanish",
  fr: "French",
  zh: "Mandarin",
  ar: "Arabic",
};

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));

export const useLangugageStore = create<ILanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguageSupported) => {
    set({ language });
  },
  getLanguages: (isPro: boolean) => {
    //If the User is Pro, return all supported languages
    if (isPro) return Object.keys(LanguageSupportedMap) as LanguageSupported[];

    //if not pro, return only the first two languages
    return Object.keys(LanguageSupportedMap).slice(
      0,
      LANGUAGES_IN_FREE
    ) as LanguageSupported[];
  },
  getNonSupportedLangugages: (isPro: boolean) => {
    //If the User is Pro, return null
    if (isPro) return [];

    //if not pro, return only the first two languages
    return Object.keys(LanguageSupportedMap).slice(
      LANGUAGES_IN_FREE
    ) as LanguageSupported[];
  },
}));

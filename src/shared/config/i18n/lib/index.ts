export const getUserLanguage = (): string => {
  const language = window.navigator.language || "en";
  const shortLang = language.split("-")[0];

  switch (shortLang) {
    case "en":
      return "en";
    case "ru":
      return "ru";
    case "hi":
      return "hi";
    case "ar":
      return "ar";
    default:
      return "en";
  }
};

const localStorageKey = "darkTheme";

export const saveThemeInLocalStorage = (theme) =>
  localStorage.setItem(localStorageKey, JSON.stringify(theme));

export const getThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;

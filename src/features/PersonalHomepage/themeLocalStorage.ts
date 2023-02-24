const localStorageKey = "darkTheme";

export const saveThemeInLocalStorage = (theme: boolean) =>
  localStorage.setItem(localStorageKey, JSON.stringify(theme));

export const getThemeFromLocalStorage = (): boolean => {
  const theme = localStorage.getItem(localStorageKey);
  return theme ? Boolean(JSON.parse(theme)) : false;
};

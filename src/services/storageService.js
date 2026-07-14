export const getStorage = (key) => {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : null;
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorage = (key) => {
  localStorage.removeItem(key);
};
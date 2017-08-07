export const LocalStorage = {
  set: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  get: key => JSON.parse(window.localStorage.getItem(key)),
  remove: (key) => window.localStorage.removeItem(key),
};

export default {
  LocalStorage,
};

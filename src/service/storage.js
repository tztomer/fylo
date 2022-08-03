export const storage = {
  save,
  load,
};

function save(key, data) {
  return localStorage.setItem(key, data);
}

function load(key) {
  return localStorage.getItem(key);
}

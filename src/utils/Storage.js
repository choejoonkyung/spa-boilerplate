class Storage {
  _storage;

  constructor() {
    this._storage = window.localStorage;
  }

  set(key, value) {
    this._storage.setItem(key, value);
  }

  get(key) {
    return this._storage.getItem(key);
  }

  remove(key) {
    this._storage.removeItem(key);
  }

  clear() {
    this._storage.clear();
  }
}

export default Storage;

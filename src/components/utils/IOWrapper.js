class IOWrapper {
  _observer;
  _options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  constructor({ $target, cb }) {
    this._observer = new IntersectionObserver(cb, this._options);
    this._observer.observe($target);
  }
}

export default IOWrapper;

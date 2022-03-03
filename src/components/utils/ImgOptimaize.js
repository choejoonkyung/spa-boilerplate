import IOWrapper from "./IOWrapper";

class ImgOptimaize {
  constructor({ $target }) {
    new IOWrapper({
      $target,
      cb: (entries, observer) => {
        entries.forEach(({ isIntersecting, intersectionRatio, target }) => {
          if (isIntersecting && intersectionRatio > 0) {
            target.src = target.dataset.src;
            observer.unobserve(target);
          }
        });
      },
    });
  }
}

export default ImgOptimaize;

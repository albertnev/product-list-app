export default ({ isMobile, x, y } = {}) => {
  if (isMobile === undefined) {
    window.innerWidth = x;
    window.innerHeight = y;
  } else if (isMobile) {
    window.innerWidth = 500;
    window.innerHeight = 1080;
  } else if (!isMobile) {
    window.innerWidth = 1920;
    window.innerHeight = 1080;
  }

  window.dispatchEvent(new Event('resize'));
};

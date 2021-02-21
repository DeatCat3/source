import initMagnific from './vendor/magnificpopup';
import initVeu from './vendor/vue';
import initValidate from './vendor/validate';
import cart from './parts/cart';
import initPopups from './parts/popups';
import initSliders from './parts/sliders';
import initLazy from './parts/lazy';
import checkout from './parts/checkout';
import item from './parts/item';

cart();
 $(document).ready(() => {
  initMagnific();
  initVeu();
  initValidate();
  initPopups();
  initSliders();
  initLazy();
  checkout();
  item();
});
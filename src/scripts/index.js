import initMagnific from './vendor/magnificpopup';
import initVeu from './vendor/vue';
import initValidate from './vendor/validate';
import card from './parts/card';
import initPopups from './parts/popups';
import initSliders from './parts/sliders';
import initLazy from './parts/lazy';
import header from './parts/header';
import checkout from './parts/checkout';
import item from './parts/item';

card();
 $(document).ready(() => {
  initMagnific();
  initVeu();
  initValidate();
  initPopups();
  initSliders();
  initLazy();
  header();
  checkout();
  item();
});



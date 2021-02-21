export default function cart() {
    let elem = document.getElementsByClassName('item__buy-primary')
  for (let buy of elem){
    buy.addEventListener('click', onClick)
  }
  let elems = document.getElementsByClassName('inputs__bottom-price')
  for (let buys of elems){
    buys.addEventListener('click', onReset)
  }
var goods = localStorage.getItem('goods') || 0;
document.addEventListener("DOMContentLoaded", function()
{ document.getElementById("goods").innerHTML = localStorage.getItem('goods') || 0; });
function onClick() {
  goods = +goods + 1;
  document.getElementById("goods").innerHTML = goods;
  location.reload();
  updateStorage(goods);
};
function onReset() {
    goods = 0;
    document.getElementById("goods").innerHTML = goods;
    updateStorage(goods);
}
function updateStorage(goods) {
  localStorage.setItem('goods', goods);
}
if(goods==0 && $(window).width()>1200){
  $('.header__menu-linkCart a').css('color', '#ABABAB');
}
if(goods==0){
  $(".ellipse").css('visibility', 'hidden');
}
}
export default function item() {
    $('.item__buy-sizeColor button').click(function () {
        $(this).css({'backgroundColor' : '#666', 'color':'#f2f2f2', 'border' : '1px solid #66666'});
        $('.item__buy-sizeColor button').not(this).css({'backgroundColor' : '#FBFBFB', 'color':'#666'});
      }); 
      $('.item__buy-sizeButtons button').click(function () {
        $(this).css({'backgroundColor' : '#666', 'color':'#f2f2f2'});
        $('.item__buy-sizeButtons button').not(this).css({'backgroundColor' : '#FBFBFB', 'color':'#666'});
      }); 
}
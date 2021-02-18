export default function checkout() {
$('.error').hide();
//Success
function sendForm() {
  location.href='checkout-complete.html';
}
// Validate email
function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}
function validatePhone(tel) {
  var reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return reg.test(String(tel).toLowerCase());
}
// validate email and send form after success validation
$(".inputs__bottom-price").on("click", validate);
function validate() {
  var tel = $("#phone").val();
  var email = $("#email").val();
  var $error = $(".error");

  if (validateEmail(email) && validatePhone(tel)) {
    $error.fadeOut();
    sendForm();
  } else {
    $error.fadeIn();
    $error.show();
    $('#email').css({'backgroundColor' : '#FED6D6', 'color':'#D44544'});
    $('#phone').css({'backgroundColor' : '#FED6D6', 'color':'#D44544'})
  }
  return false;
}
}
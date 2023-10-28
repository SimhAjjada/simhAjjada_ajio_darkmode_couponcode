function onloadPage(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementsByClassName('ajioShopping').style.opacity = '0.7'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementsByClassName('ajioShopping').style.opacity = '1'
}
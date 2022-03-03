$(window).ready(function(){
    $('#checkout_shipping_address_zip').keyup(function(e){
        var zip = $(this).val();
        console.log(zip)
        console.log(zip.slice(0,1))
        if(zip.slice(0,1) == 'm') {
            $('.shipping_msg').removeClass('active');
        }else{
            $('.shipping_msg').addClass('active');
        }
    })
    $('#section-delivery-title').after('<p class="shipping_msg"><span>Warning!</span> Only shipping to area codes starting with a M. Please visit '+' '+'<a href="https://popeyesonlineorders.com/">popeyesonlineorders.com</a> if outside our catchment area. Sorry for any inconvenience.</p>')
})
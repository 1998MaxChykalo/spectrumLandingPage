$(function() {
    var errorMessages = {
        'required': 'This input field is required',
        'email': 'Please enter valid E-mail'
    }
    $(window).on('unload',function(){
        $('form').trigger('reset');
    });

    $('input').on('keyup',_.debounce(checkInput,500));

    function checkInput(event) {
        if(!event.target.checkValidity()) {
            $(this).parent().siblings('hr').removeClass('valid').addClass('invalid');
            $(this).siblings('.errorMessage').show();
        } else {
            $(this).parent().siblings('hr').removeClass('invalid').addClass('valid');
            $(this).siblings('.errorMessage').hide();
        }
    }
})
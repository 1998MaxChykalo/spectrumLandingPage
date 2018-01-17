$(function() {
    // $('.contact_us_container form').on('submit',function(event) {
    //     event.preventDefault();
    //     return false;
    // });
    var errorMessages = {
        'required': 'This input field is required',
        'email': 'Please enter valid E-mail'
    }

    $('input').on('keyup',_.debounce(function(event) {
        if(!event.target.checkValidity()) {
            $(this).parent().siblings('hr').removeClass('valid').addClass('invalid');
            $(this).siblings('.errorMessage').show();
        } else {
            $(this).parent().siblings('hr').removeClass('invalid').addClass('valid');
            $(this).siblings('.errorMessage').hide();
        }
    },300));
})
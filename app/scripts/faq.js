$(function () {
    $('.question_info').on('click',function(){
        $('.question_info')
                .not($(this))
                .find('.stage')
                .removeClass('fa-minus')
                .addClass('fa-plus')
                .parent()
                .siblings($('.question_description'))
                .slideUp(300);
        $(this)
            .find('.stage')
            .toggleClass('fa-minus')
            .toggleClass('fa-plus')
            .parent()
            .siblings($('.question_description'))
            .slideToggle(300); 
    })
})
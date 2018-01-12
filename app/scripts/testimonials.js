
$(function(){
    var slider = {
        //div which contain slides
        holder : $('.slider_visible_part'),
        //current slide number
        counter : 1,
        // count of clides
        slides : $('.slider_visible_part').children().length,
        // Animation time(in miliseconds)
        animationTime : 1000,
    
        slide : function(ev) {
            slider.holder.on('click', function(ev) {
                slider.next();
            });
        },
        // try move to next slide. If reached last, then moves to the first image 
        next : function() {
            if(slider.counter < slider.slides) {
                slider.counter++;
                slider.holder.animate({'margin-left' : "-=100%"}, slider.animationTime);
            } else {
                slider.holder.animate({'margin-left' : '0'}, slider.animationTime);
                slider.counter = 1;
            }
        },
        // try move to previous slide. If reached first, then moves to the last image
        prev : function() {
            if(slider.counter > 1) {
                slider.counter--;
                slider.holder.animate({'margin-left' : '+=100%'}, slider.animationTime);
            } else {
                slider.counter = 3;
                slider.holder.animate({'margin-left' : '-='+(slider.slides - 1)*100+'%'}, slider.animationTime);
            }
        }
        
    };
    // add event handlers on arrows to help to move slides

    $('.prev').on('click',slider.prev);
    $('.next').on('click',slider.next);
    slider.slide();

});
$(document).ready(function () {
    $('.slide-nav').on('click', function (e) {
        e.preventDefault();
        // get current slide
        var current = $('.flex--active').data('slide'),
            // get button data-slide
            next = $(this).data('slide');

        $('.slide-nav').removeClass('active');
        $(this).addClass('active');

        var slideValue = $(this).attr('data-slide');
        console.log(slideValue);
        
        $('.flex__item').removeClass('flex__item--oversize');
        if (slideValue == 2 || slideValue == 3) {
            $('.flex__container[data-slide="' + slideValue + '"] .flex__item').addClass('flex__item--oversize');
        }

        if (current === next) {
            return false;
        } else {
            $(window).scrollTop(0);
            $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
            $('.flex--active').addClass('animate--end');
            setTimeout(function () {
                $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
            }, 600);
        }
    });
});
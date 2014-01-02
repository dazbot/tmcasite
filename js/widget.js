$(document).ready(function() {
    //window.alert($(window).width() + ' x ' + $(window).height());
    $('.ticker').easyTicker({
        controls: {
            up: '.up',
            down: '.down'
        }
    });
    $('.ticker').height($(window).height() - $('.header').height() - $('.up').height() - $('.down').height() - $('.tickerContainer').css('border-top-width').replace('px', '') - $('.tickerContainer').css('border-bottom-width').replace('px', '') - $('.searchContainer').height() - $('.tickerContainer').css('padding-top').replace('px', '') - $('.tickerContainer').css('padding-bottom').replace('px', ''));
});

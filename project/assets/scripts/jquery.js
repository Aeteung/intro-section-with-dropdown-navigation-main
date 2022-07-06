$(document).ready(function(){
    $('.nav-bar_desktop').find('.nav-item').hover(function (){
        $(this).find('.dropdown-button_desktop').children().toggleClass('none');
    }, function(){
        $(this).find('.dropdown-button_desktop').children().toggleClass('none');
    });
});
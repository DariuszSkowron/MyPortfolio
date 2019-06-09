
$(function () {
    $("#button1").on('click', function () {
        $('#nav').toggleClass('goRight');
    });
});

$("#button1").click(function(){
    $('.rotate').toggleClass("down")  ;
})
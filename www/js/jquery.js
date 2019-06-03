
$(function () {
    $("#button1").on('click', function () {
        $('#nav').toggleClass('goLeft');
    });
});

$("#button1").click(function(){
    $('.rotate').toggleClass("down")  ;
})
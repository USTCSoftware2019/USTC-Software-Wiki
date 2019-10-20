$(document).ready(function(){
    let ps = $('.psgImg > p');
    ps.each(function (index) {
        let str = $(this).html();
        $(this).html('Figure ' + (index + 1) + ': ' + str);
    });
});
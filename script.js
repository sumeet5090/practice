
$(document).ready(function(){
    $("#bars").click(function () {
        if ($('#bars').hasClass("is_clicked")) {
            $("nav ul").css({
                'right':'-50%',
            });
            $('#bars').removeClass('is_clicked');
        }
        else {
            $("nav ul").css({
                'right':'0%',
            });
            $('#bars').addClass('is_clicked');
        }    
    });
});
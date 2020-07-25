$(".questions").click(function() {
    $(this).next().slideToggle("slow");
    $(this).children().toggleClass("collapse");
})

$(document).ready(function() {
    $(".left").click(function() {
        $(".gsus").animate({ left: '-=200px' }, "slow");
    })
    $(".right").click(function() {
        $(".gsus").animate({ left: '+=200px' }, "slow");
    })
})
import $ from "jquery";

$(document).ready(function ()
{
    if ($(window).width() < 568)
    {
        // $(".lists").css("display", "none");
        $('#one1').click(function ()
        {
            $('#one').children().toggle(400);
        });

        $('#two2').click(function ()
        {
            $('#two').children().slideToggle(400);
        });

        $('#three3').click(function ()
        {
            $('#three').children().slideToggle(400);
        });

        $('#four4').click(function ()
        {
            $('#four').children().slideToggle(400);
        });

        $('#fife5').click(function ()
        {
            $('#fife').children().slideToggle(400);
        });

        $('#six6').click(function ()
        {
            $('#six').children().slideToggle(400);
        });

        $('#seven7').click(function ()
        {
            $('#seven').children().slideToggle(400);
        });

        $('#eight8').click(function ()
        {
            $('#eight').children().slideToggle(400);
        });

        $('#nine9').click(function ()
        {
            $('#nine').children().slideToggle(400);
        });

        $('#ten10').click(function ()
        {
            $('#ten').children().slideToggle(400);
        });
    }
});
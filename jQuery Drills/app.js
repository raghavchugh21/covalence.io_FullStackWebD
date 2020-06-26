$("document").ready(function () {

    $("<div></div>").appendTo("body");
    $("<ul></ul>").appendTo("body");
    //$("<h2></h2>").appendTo("div");

    $('input[type=submit]').prop('disabled', true);
    $('input[type=text]').keyup(function () {
        if ($(this).val() != '') {
            $('input[type=submit]').prop('disabled', false);
        }
        if ($(this).val() == '') {
            $('input[type=submit]').prop('disabled', true);
        }
    });

    let arrayOfColors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    //Function to return a random element from arrayOfColors array
    function getRandomColor() {
        let randomColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
        return randomColor;
    }

    $("#btnSubmit").click(function () {
        var input = $('input[type=text]').val();
        $("<li>" + input + "</li>").appendTo("ul");

        $("li").click(function () {
            $(this).css('color', getRandomColor());
        });

        $('li').dblclick(function () {
            $(this).remove();
        });

        return false;

        //$(document.createTextNode(input)).appendTo("h2");
    });


    /*$("h2").hover(function(){
        $("h2").css({
            'backgroundColor' : "lightblue",
            'border-radius' : '10em'
        });
    });*/
});
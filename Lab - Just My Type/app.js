$(document).ready(function () {
    $("#keyboard-upper-container").css("display", "none");

    let i = 0;
    let j = 0;
    let wrong = 0;
    let wpm = 0;

    var t1, t2;
    let scentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    $(document.createTextNode(scentences[0])).appendTo("#sentence");
    $(document.createTextNode(scentences[0][0])).appendTo("#target-letter");
    $(document).on("keydown", function () {
        if (i == 0) {
            var d = new Date();
            t1 = d.getSeconds();
            console.log("start");
        }
        if (event.keyCode == 16) {
            $("#keyboard-upper-container").toggle();
            $("#keyboard-lower-container").toggle();
        }
        else {
            $("#" + event.keyCode).css("backgroundColor", "darkgrey");
            $("#" + (event.keyCode + 32).toString()).css("backgroundColor", "darkgrey");
        }
    });
    $(document).on("keyup", function (event) {
        if (event.keyCode == 16) {
            $("#keyboard-upper-container").toggle();
            $("#keyboard-lower-container").toggle();
        }
        else {
            if (((event.keyCode + 32) == scentences[j][i].charCodeAt(0)) || ((event.keyCode) == scentences[j][i].charCodeAt(0))) {
                $("#feedback").append("<span style = 'color:green'>✓</span>");
            }
            else {
                $("#feedback").append("<span style = 'color:red'>X</span>");
                wrong++;
            }
            $("#" + event.keyCode).css("backgroundColor", "");
            $("#" + (event.keyCode + 32).toString()).css("backgroundColor", "");
            $("#yellow-block").css("left", (20 + 17.5 * (i + 1)).toString() + "px");
            $("#target-letter").empty();
            if ((i + 1) == scentences[j].length) {
                var d = new Date();
                t2 = d.getSeconds();
                console.log("end");
                wpm = (11 * 60) / (t2 - t1) - 2 * wrong;
                wrong = 0;
                $("#feedback").empty();
                $("#feedback").append("<span>WPM : " + wpm + "</span>");
                setTimeout(function () {
                    $("#feedback").empty();
                }, 1500);
                i = -1;
                j++;
                $("#sentence").empty();
                $("#yellow-block").css("left", "10px");
                $(document.createTextNode(scentences[j])).appendTo("#sentence");
            }
            $(document.createTextNode(scentences[j][i + 1])).appendTo("#target-letter");
            i++;
        }
    });



})
$(document).ready(() => {
    $("#submit").click(() => {
        data = { user: $("input[name=user]").val(), message: $("input[name=message]").val() }

        $.ajax({
            url: 'http://localhost:3000/api/chirps',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data)
        });

        $.getJSON("http://localhost:3000/api/chirps", function (result) {
            let n = 0;
            $()
        });
    })
})
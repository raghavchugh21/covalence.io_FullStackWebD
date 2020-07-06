$(document).ready(() => {
    $("#submit").click(() => {
        data = { user: $("input[name=user]").val(), message: $("input[name=message]").val() }
        console.log(JSON.stringify(data));
        let n = 0;
        $.ajax({
            url: 'http://localhost:3000/api/chirps',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
        function removeitem(){
            console.log(this);
        }
        $("#chirps").empty();
                $.getJSON("http://localhost:3000/api/chirps", function (result) {
                    n = 0;
                    $.each(result, function (i, field) {
                        $.each(field, function (i, field) {
                            $("#chirps").append(`<h6 class = 'H${n}'>${i} : ${field}\n`);
                        });
                        $("#chirps").append(`<button id="${n}" class="btn btn-primary">X</button>`);
                        n++;
                        $("#0").click(()=>{
                            console.log($("#0"));
                        })
                    });
                });
    })
})
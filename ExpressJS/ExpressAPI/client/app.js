$(document).ready(() => {
    $("#submit").click(() => {

        data = { user: $("input[name=user]").val(), message: $("input[name=message]").val() }

        function postData() {
            $.ajax({
                url: 'http://localhost:3000/api/chirps',
                type: 'post',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: getData()
            });
        }

        function getData() {
            $("#chirps").append(`<div><h4 class = "message">User : ${data.user} Message : ${data.message}<h4>
            <button type="button" class="remove btn btn-primary">x</button></div>`);

            $('.remove').click((e) => {
                $(e.target).closest('div').remove();
            })
        }

        function putData() {
            $.ajax({
                url: 'http://localhost:3000/api/chirps',
                type: 'PUT',
                success: function (response) {
                }
            });
        }

        $('.message').click((e) => {
            $(e.target).closest('div').remove();
            var person = prompt("Enter New Name", "Harry Potter");
            if (person != null) {
                document.getElementById("demo").innerHTML ="Hello " + person + "! How are you today?";
            }
        })

        postData();

    })
})
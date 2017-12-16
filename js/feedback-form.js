$(document).ready(function () {
    $("#ajaxform").submit(function () {
        var form = $(this);
        var error = false;
        form.find("input, textarea").each(function () {
            if ($(this).val() == "") {
                alert('Заповніть пoлe "' + $(this).attr("placeholder") + '"!');
                error = true;
            }
        });
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: "POST",
                url: "https://formspree.io/oleh.petryk@gmail.com",
                dataType: "json",
                data: data,
                success: () => {
                alert("Форма відправлена успішно!");
        },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
                alert("Помилка!")
            }
        ,
        })
            ;
        }
        return false;
    });
});

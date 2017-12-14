$(function() {
  $("#contact-form input[type=submit]").click(sendForm);
});

function sendForm(ev) {
  const form = document.getElementsByTagName("form")[0];
  if (form.checkValidity()) {
    ev.preventDefault();
    $.ajax({
      
      url: "mail.php",
      method:"POST",
      data: $(form).serialize()
    })
      .done(() => alert("Усішно відправлено!"))
      .fail(() => alert("Сталася помилка!") );
  }
}


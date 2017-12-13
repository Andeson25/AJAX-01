$(function() {
  $("#contact-form input[type=submit]").click(sendForm);
});

function sendForm(ev) {
  ev.preventDefault();
  $.ajax({
    url: "https://formspree.io/oleh.petryk@gmail.com",
    method: "POST",
    data: {
      name: $("#name").val(),
      email: $("#email").val(),
      feedback: $("#feedback").val()
    },
    dataType: "json"
  })
  .done(() => $("#thank-dialog").attr("open", "open"));
}

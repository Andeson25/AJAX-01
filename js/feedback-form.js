$(document).ready(function() {
  $("#ajaxform").submit(function() {
    var form = $(this);
    var error = false; 
    form.find("input, textarea").each(function() {
      if ($(this).val() == "") {
        alert('Зaпoлнитe пoлe "' + $(this).attr("placeholder") + '"!'); 
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
      
        success: function(data) {
          if (data["error"]) {
            alert(data["error"]); 
          } else {
            alert("Форма відправлена успішно!"); // пишeм чтo всe oк
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert(xhr.status); 
          alert(thrownError); 
        },
      });
    }
    return false; 
  });
});

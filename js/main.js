$(document).ready(function(){
  $("#form").validate({
    rules: {
      username: {
        minlength: 3,
        maxlength: 20,
        required: true
      },
      email: {
        email: true,
        required: true
      },
      password: {
        minlength: 5,
        required: true
      },
      payment: {
        required: true
      }
    },
    highlight: function(element) {
      $(element).closest(".form-group").removeClass("has-success").addClass("has-error").parents('form.animate-form').addClass("animated shake");
    },
    unhighlight: function(element) {
      $(element).closest(".form-group").removeClass("has-error").addClass("has-success");
    }
  });

  $('.submit input').click(function() {
    $('#form.animated').removeClass('animated shake');
    if ($("#form").valid()) {
      $("#form").addClass("success");
    } else {
      $("#form").removeClass("success").addClass("invalid");
      $(this).addClass("disabled");
    }

    $("#form.invalid input").on("keyup blur", function() {
      if ($("#form").valid()) {
        $(".submit input").removeClass("disabled");
        $("#form").removeClass("invalid");
      } else {
        $(".submit input").addClass("disabled");
      }
    });
  });
});
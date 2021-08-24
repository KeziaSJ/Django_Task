$(function () {

  $(".js-create-player").click(function () {
    $.ajax({
      url: '/list/create/',
      type: 'get',
      dataType: 'json',
      beforeSend: function () {
        $("#modal-player").modal("show");
      },
      success: function (data) {
        $("#modal-player .modal-content").html(data.html_form);
      }
    });
  });

});




// ------------Add player---------------------
function addPlayers() {

  $("#formAddplayer").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      rank: {
        required: true,
       
      },
      code: {
        required: true,
      },
      cost: {
        required: true,
      },
    },
    submitHandler: (formAddplayer, e) => {
      e.preventDefault();
      $.ajax({
        url: "/addplayer/",
        data: $("#formAddplayer").serialize(),
        method: "post",

        success: function (response) {

          if (response == "success") {
         
            $('#formAddplayer')[0].reset();

            $("#addPlayer").modal("hide");
            $("#tablediv").load(" #tablediv");
          }
        },
      });
    },
  });
}


// -----------Delete player------------
function deletePlayer(id) {
    var pk = id
  $.ajax({
    url: "/deleteplayer/"+pk+"/",
    method: "get",

    success: function (response) {

      if (response == "success") {
        console.log("delete success");
        $("#tablediv").load(" #tablediv");
      }
    },
  });
}

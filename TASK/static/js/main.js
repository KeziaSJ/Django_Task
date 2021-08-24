// $(document).on('submit', '#form',function(e){
	
// 	console.log("Name:" +$('#name').val());
//     $.ajax({
//         type:'POST',
//         url:'{% url "list_view" %}',
//         data:{
//             rank:$('#rank').val(),
//             name:$('#name').val(),
//             code:$('#code').val(),
//             cost:$('#cost').val(),
//             csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
//             action: 'post'
//         },
//         success:function(json){
//             document.getElementById("form").reset();
//            $("#table_id").prepend(
//                     `<tr>
//                     <td>${fields["rank"]||""}</td>
//                     <td>${fields["name"]||""}</td>
//                     <td>${fields["code"]||""}</td>
//                     <td>${fields["cost"]||""}</td>
//                     </tr>`
//                 )
//         },
//         error : function(xhr,errmsg,err) {
//         console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
//     }
//     });
// });


function addPlayers() {

  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      }
    },
    messages: {
      name: {
        required: "Please enter player name",
     }
    },
    submitHandler: (form, e) => {
      e.preventDefault();
      $.ajax({
        url: "/list_view/",
        data: $("#form").serialize(),
        method: "post",

        success: function (response) {

          if (response == "success") {
         
            $('#form')[0].reset();

            $("#myModal").modal("hide");
            $("#tablediv").load(" #tablediv");
          }
        },
      });
    },
  });
}


// $('#form').on('submit', function(event){
//     event.preventDefault();
//     alert("form submitted!")  // sanity check
    
// });
    // $("#form").submit(function (e) {
    //     // preventing from page reload and default actions
    //     e.preventDefault();
    //     // serialize the data for sending the form data.
    //     var serializedData = $(this).serialize();
    //     // make POST ajax call
    //     $.ajax({
    //         type: 'POST',
    //         url: "{% url 'create' %}",
    //         data: serializedData,
    //         success: function (response) {
    //             // on successfull creating object
    //             // 1. clear the form.
    //             $("#form").trigger('reset');
    //             // 2. focus to nickname input 
    //             $("#table_id").focus();

    //             // display the newly friend to table.
    //             var instance = JSON.parse(response["instance"]);
    //             var fields = instance[0]["fields"];
    //             $("#table_id").prepend(
    //                 `<tr>
    //                 <td>${fields["rank"]||""}</td>
    //                 <td>${fields["name"]||""}</td>
    //                 <td>${fields["code"]||""}</td>
    //                 <td>${fields["cost"]||""}</td>
    //                 </tr>`
    //             )
    //         },
    //         error: function (response) {
    //             // alert the error if any error occured
    //             alert(response["responseJSON"]["error"]);
    //         }
    //     })
    // })


// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })


// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })


// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// $(function () {
//  $(".identifyingClass").click(function () {
//      $('.main-modal').show();
//      var my_id_value = $(this).data('id');
//      $(".modal-body #hiddenValue").val(my_id_value);
//  })
// });

// $(function () {
//  $("#close-modal").click(function () {
//      $('.main-modal').hide();
     
//  })
// });


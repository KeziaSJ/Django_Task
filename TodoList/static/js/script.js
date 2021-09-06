function checkDate()
 {
   var selectedText = document.getElementById('datepicker').value;
   var selectedDate = new Date(selectedText);
   var now = new Date();
   if (selectedDate < now) {
    alert("Date must be in the future");
    var empty = " ";
   document.getElementById('datepicker').value =  empty ;
   }
 }
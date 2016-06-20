function mailer() {
   var nome = document.getElementById('form_name').value;
   var email = document.getElementById('form_email').value;
   var message = document.getElementById('form_message').value;
   var http;
   if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
      http = new XMLHttpRequest();
   } else { // code for IE6, IE5
      http = new ActiveXObject("Microsoft.XMLHTTP");
   }
   var url = "mailer.php";
   var params = "name=" + nome + "&email=" + email + "&message=" + message;
   http.open("POST", url, true);
   //Send the proper header information along with the request
   http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
         $('#contact-me').empty();
         if (http.responseText == "true"){
            $('#contact-me').html("<h3>I'll read your message asap!</h3>")
         }else{
            $('#contact-me').html('<h3>Unable to send your message due to technical problem. <br>Sorry!</h3>')
         }
      }
   };
   http.send(params);
}

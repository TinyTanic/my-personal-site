function mailer(){
	var nome = document.getElementById('nome').value;	
	var email = document.getElementById('email').value;	
	var message = document.getElementById('message').value;
	var http;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        http = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var url = "mailer.php";
    var params = "name=" + nome+"&email="+email+"&message="+message;
    http.open("POST", url, true);
//Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");
    http.onreadystatechange = function () {
        	alert("risposta: "+http.responseText);
        if (http.readyState === 4 && http.status === 200) {
        	alert("risposta: "+http.responseText);
        }
	alert("non invio");
    };
    http.send(params);
}

//GETS LOGIN DETAILS AND VALIDATES IT
function getLoginDetails(){
	
	var userName=document.getElementById("username_value").value;
    var at_position = userName.indexOf("@");
    var dot_position = userName.lastIndexOf(".");
    if (at_position<1 || dot_position<at_position+2 || dot_position+2>=userName.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	

	var password=document.getElementById("password_value").value;
	var xhttpObject=new XMLHttpRequest();
	xhttpObject.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			var response=this.responseText;
			response=JSON.parse(response);
			console.log(response);
			if(response.status==200){
				window.location="home.html";
			}
			else{
				alert("Invalid credentials!!");
			}
		}
		
	}
	xhttpObject.open("POST","https://exptest.herokuapp.com/api/login",true);
	xhttpObject.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttpObject.send("userName="+userName+"&password="+password);



	return false;
}
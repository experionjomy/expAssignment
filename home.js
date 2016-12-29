//LOGOUT FUNCTION

function logout() {
	if(confirm("Are you sure?"))
	{
	window.location="index.html";
	}
	else{
		return false;
	}
}


//LOADS IMAGE AND CAPTION IN IMAGE DIV WHICH HAS IMG TAG AND A DIV TO ADD CAPTION
function image_load(){
var image_data;
	var xhttpObject1=new XMLHttpRequest();
	xhttpObject1.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			 image_data=this.responseText;
			 image_data=JSON.parse(image_data);
			 console.log(this.responseText);
		
		for(i=0;i<image_data.data.length;i++){
		var url=image_data.data[i].imageUrl;
		var caption=image_data.data[i].caption;
		var outer_div=document.createElement("div");
		outer_div.setAttribute("class","image");
		var element=document.createElement("img");
		var element_caption=document.createElement("div");
		element.setAttribute("src",url);
		element.setAttribute("height","200px");
		element.setAttribute("width","254px");
		element.setAttribute("alt","IMAGE");
		// var id="c"+i;
		element_caption.innerHTML=caption;
		outer_div.appendChild(element);
		outer_div.appendChild(element_caption);
		document.getElementById("gallery").appendChild(outer_div);
		}
		}
	};




	xhttpObject1.open("GET","https://exptest.herokuapp.com/api/imageGallery",true);
	//xhttpObject.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttpObject1.send();
}
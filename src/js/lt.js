function lt()
{
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttps=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttps=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttps.onreadystatechange=function()
{
if (xmlhttps.readyState==4 && xmlhttps.status==200)
{
if(document.getElementById("lt").innerHTML != xmlhttps.responseText){
document.getElementById("lt").innerHTML = xmlhttps.responseText;
}
}
}
xmlhttps.open("GET","./write/show.php",true);
xmlhttps.send();
}


function send(value)
{
if(value == "")
{
alert("输入内容不能为空");
return;
}
document.getElementById("text").value = "";
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttpw=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttpw=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttpw.onreadystatechange=function()
{
if (xmlhttpw.readyState==4 && xmlhttpw.status==200)
{
lt();
}
}
xmlhttpw.open("GET","./write/write.php?text="+value,true);
xmlhttpw.send();
}

var timeout = setInterval(function () {
  	 	lt();
	},2000);
	
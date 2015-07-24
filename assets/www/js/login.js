localStorage['serviceURL'] = "http://10.0.2.2/phonegap/services/";
var serviceURL = localStorage['serviceURL'];

var scroll = new iScroll('wrapper', { vScrollbar: false, hScrollbar:false, hScroll: false });

var login;

$(window).load(function(){
	$("#btnsubmit").click(function(){
		login();
	});
});
$(document).ajaxError(function(event,request,settings){
	alert("Error accessing Server");
});
function login(){
	var uname = $('#txtuname').val();
	var pass = $('#txtupass').val();
	$.getJSON(serviceURL+'login.php?uname='+uname+"&upass="+pass,function(data){
		login = jQuery.parseJSON(data);
		alert(login);
	});
}
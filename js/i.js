window.onload = function(){	
document.getElementById('shadow').style.visibility = 'hidden';
document.getElementById('picture_img_wrapper').style.visibility = 'hidden';
document.getElementById('top_btn').addEventListener('click', show_request_modal, false);
document.getElementById('enroll_header_btn').addEventListener('click', show_request_modal, false);
document.getElementById('whant_tatu').addEventListener('click', show_request_modal, false);
document.getElementById('bottom_btn').addEventListener('click', show_request_modal, false);
document.getElementById('offers').addEventListener('click', show_more);
document.getElementById('close_pic_modal').addEventListener('click', close_modals);
document.getElementById('shadow').addEventListener('click', close_modals);
document.getElementById('close_request_modal').addEventListener('click', close_modals);
document.getElementById('modal_btn').addEventListener('click', send_mail, false);	
}
function createAjax(){if(typeof(XMLHttpRequest) == 'undefined')return new ActiveXObject('Microsoft.XMLHTTP')
else return new XMLHttpRequest()}

function send_mail(){var shadow = document.getElementById("shadow");
var modal = document.getElementById("request_modal_wrapper"); 
var doneModal = document.getElementById("doneModal");
var name = document.getElementById("name");
var phone = document.getElementById("phone");
name.style.background = "#FFF";
phone.style.background = "#FFF";
if(name.value != ""){
if(phone.value != ""){
var HTTP=createAjax();
HTTP.open("POST",'/scripts/addPhone.php/?newPhone='+phone.value.trim()+"&owner="+name.value.trim(),true);
HTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
HTTP.send();
TTP.onreadystatechange = function(){
if(HTTP.readyState == 4){
console.log(HTTP.responseText);
if(HTTP.responseText.trim() === "ok"){
name.value = "";
phone.value = "";
modal.style.visibility = "hidden";
doneModal.style.visibility = "visible"; doneModal.style.opacity = "1";
setTimeout("close_the_modal()", 3000);
}}}}else{phone.style.background = "#EBB8AB";}
}else{name.style.background = "#EBB8AB";}
}
function close_the_modal(){
var modal = document.getElementById('request_modal_wrapper');
var doneModal = document.getElementById('doneModal');
var shadow = document.getElementById('shadow');
modal.style.visibility = 'hidden';
doneModal.style.visibility = 'hidden';
shadow.style.visibility = 'hidden';
}
function show_more(event){
var e = event || window.event;
var modal = document.getElementById('picture_img_wrapper');
var shadow = document.getElementById('shadow');
var img = document.getElementById('big_img');
if(e.target.className == 'cover_img'){
if(shadow.style.visibility == 'hidden'){
img.src = '/img/big_pic/' + e.target.id + '.jpg';
setTimeout(function(){
shadow.style.visibility = 'visible';		
modal.style.visibility = 'visible';
},500);				
}}}
function close_modals(event){
var e = event || window.event;
var modal_img = document.getElementById('picture_img_wrapper');
var shadow = document.getElementById('shadow');
var modal = document.getElementById('request_modal_wrapper');
modal_img.style.visibility = 'hidden';
modal.style.visibility = 'hidden';
shadow.style.visibility = 'hidden';	
}
function show_request_modal(){
var modal = document.getElementById('request_modal_wrapper');
var shadow = document.getElementById('shadow');
if(shadow.style.visibility == 'hidden'){
shadow.style.visibility = 'visible';
modal.style.visibility = 'visible';
}
}
$(document).ready(function(){
	
//Initiate vars
document.getElementById('shadow').style.visibility = 'hidden';
document.getElementById("circle_wrapper").style.display = 'none';
	
//Раскрываем остальной контент
document.getElementById('read_more_btn').addEventListener('click', show_more_content, false);
	

//Плавный скролинг на jquery	
$('a[href^="#"]').click(function(){ 
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	if($.browser.safari){
		$('body').animate( { scrollTop: destination }, 1100 );
	}else{
		$('html').animate( { scrollTop: destination }, 1100 );
	}
	return false;
});

//Разворачиваем и сворачиваем меню
document.getElementById('menu_btn').addEventListener('click', switch_menu, false);	

//Close main modal
document.getElementById('close_request_modal').addEventListener('click', close_main_modal, false);

//Close all modals
document.getElementById('shadow').addEventListener('click', close_modals, false);

document.getElementById('modal_btn').addEventListener('click', function(){
	send_mail(document.getElementById('name'), document.getElementById('phone'));
}, false);
  


//Footer action event
document.getElementById('footer').addEventListener('mousemove', eagle_move, false);
setInterval(flashbang, Math.random() * (3000 - 2000) + 2000);  
   
});



function createAjax(){//AJAX ОБЪЕКТ...
	if(typeof(XMLHttpRequest) == 'undefined')return new ActiveXObject('Microsoft.XMLHTTP')
	else return new XMLHttpRequest()
}



//Eagle move
function eagle_move(event){
	var eagle = document.getElementById('eagle');
	var rock =  document.getElementById('footer');
	
	//Initiate clouds
	var cloud1 = document.getElementById('cloud1');
	var cloud2 = document.getElementById('cloud2');
	var cloud3 = document.getElementById('cloud3');

	eagle.style.opacity = '1';
	eagle.style.left = (event.pageX / 20) + 'px';
	eagle.style.top = (parseInt(event.clientY) / 20) + 'px';
	
	//Двигаем облака
	cloud1.style.marginLeft =  (-parseInt(event.clientX) / 40) + 'px';
	cloud2.style.marginLeft =  (parseInt(event.clientX) / 130) + 'px';	
	cloud3.style.marginRight =  (-parseInt(event.clientX) / 130) + 'px';


	//console.log('PAGE-Y' + event.clientY);
	//console.log('Это положение на странице - ' + eagle.offsetWidth);
	
}
function flashbang(){
	
//Initiate vars
	var flash_switch = [true, false];
	
	var current_litning = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		document.getElementById('cloud' + current_litning).children[1].style.opacity = '1';
		document.getElementById('lightning').style.opacity = '0.8';
		
	setTimeout(function(){
		document.getElementById('lightning').style.opacity = '0';
		document.getElementById('cloud' + current_litning).children[1].style.opacity = '0';
	},500);
	
}

//Show request modal
function show_modal(){

//Initiate vars
var modal = document.getElementById('request_modal_wrapper');
var shadow = document.getElementById('shadow');

	
if(shadow.style.visibility == 'hidden'){
	shadow.style.visibility = 'visible';
	modal.style.visibility = 'visible';
}	
}


//Close main modal
function close_main_modal(){

//Initiate vars
var modal = document.getElementById('request_modal_wrapper');
var shadow = document.getElementById('shadow');

	shadow.style.visibility = 'hidden';
	modal.style.visibility = 'hidden';
	
}

//Зактываем все модальные окна
function close_modals(event){
	var e = event || window.event;

//Initiate vars
var shadow = document.getElementById('shadow');
var modal = document.getElementById('request_modal_wrapper');
	
	modal.style.visibility = 'hidden';
	shadow.style.visibility = 'hidden';

//Закрываем модаль, которая учавсвтут после завершения сообщения
close_the_modal();

}

//Switch main menu
function switch_menu(){

//Initiate vars
var menu = document.getElementById('menu');

if(menu.style.height != '220px')
	menu.style.height = '220px';
else menu.style.height = '35px';
	
}


//send data on server
function send_mail(name, phone){
var shadow = document.getElementById("shadow");
var modal = document.getElementById("request_modal_wrapper");
//var new_modal = document.getElementById('new_modal_wrapper');
var doneModal = document.getElementById("circle_wrapper");

	name.style.background = "#FFF";
	phone.style.background = "#FFF";	

	if(name.value != ""){
		if(phone.value != ""){
			
	var HTTP=createAjax();
		HTTP.open("POST",'/addrequest/?phone='+phone.value.trim()+"&owner="+name.value.trim() + "&type=" + document.request, true);
		HTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		HTTP.send();
	HTTP.onreadystatechange = function(){
		if(HTTP.readyState == 4){
			console.log(HTTP.responseText);
			if(HTTP.responseText.trim() === "ok"){
				name.value = "";
				phone.value = "";
				
				modal.style.visibility = "hidden";
				//new_modal.style.display = "none";
				shadow.style.visibility = "visible";
				
				doneModal.style.display = "block"; //doneModal.style.opacity = "1";
				
				setTimeout(close_the_modal, 10000);
				
			}
			}
		}
		}else{phone.style.background = "#DB5D59";}
	}else{name.style.background = "#DB5D59";}
}

//Прячем модальное окно
function close_the_modal(){
var modal = document.getElementById('request_modal_wrapper');
//var modal_two = document.getElementById('gallery_block');
var doneModal = document.getElementById('circle_wrapper');
var shadow = document.getElementById('shadow');

	//modal_two.style.visibility = 'hidden';
	modal.style.visibility = 'hidden';
	doneModal.style.display = 'none';
	shadow.style.visibility = 'hidden';	
}


//Закрываем модальное после отправки письма
function close_done_modal(){
var modal = document.getElementById('circle_wrapper');
var shadow = document.getElementById('shadow');

	shadow.style.visibility = 'hidden';
	modal.style.display = 'none';	
	
}

//Show more text
function show_more_content(){
	
var content = document.getElementById('tatoo_content_more');
var btn = document.getElementById('read_more_btn');

content.style.height = content.children[0].clientHeight + 'px';
btn.style.display = 'none';	
	
}





function type_slide(elem, str){
	
//Initiate vars
var sList = document.getElementById('sliders_man');//Список слайдеров мужских татуировок
var sNavigate = document.getElementById('man_slider_navigate');//Список навигационных кнопок

//Прячем все типы мужских слайдер.татуировок	
for(var i = 0; i < sList.children.length; i++)sList.children[i].className = 'disact';	

//Делаем активным текущий мужской список тату
document.getElementById(str).className = 'act';	

//Делаем неактивным нажатую кнопку
for(var i = 0; i < sNavigate.children.length; i++)sNavigate.children[i].className = '';
	
//Делаем активной нажатую кнопку
elem.parentNode.className = 'active';	
	
}

function type_slide_woman(elem, str){
	
//Initiate vars
var sList = document.getElementById('sliders_woman');//Список слайдеров мужских татуировок
var sNavigate = document.getElementById('woman_slider_navigate');//Список навигационных кнопок

//Прячем все типы мужских слайдер.татуировок	
for(var i = 0; i < sList.children.length; i++)sList.children[i].className = 'disact';	

//Делаем активным текущий мужской список тату
document.getElementById(str).className = 'act';	

//Делаем неактивным нажатую кнопку
for(var i = 0; i < sNavigate.children.length; i++)sNavigate.children[i].className = '';
	
//Делаем активной нажатую кнопку
elem.parentNode.className = 'active';	
	
}


































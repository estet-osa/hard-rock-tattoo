$(document).ready(function(){
	
//Initiate vars
document.getElementById('shadow').style.visibility = 'hidden';
document.getElementById("circle_wrapper").style.display = 'none';


//Default request string
document.request = 'Заказ обратного звонка!';
	
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

	
document.getElementById('menu_btn').addEventListener('click', switch_menu, false);	


//Close all modals
document.getElementById('shadow').addEventListener('click', close_modals, false);

document.getElementById('modal_btn').addEventListener('click', function(){
	send_mail(document.getElementById('name'), document.getElementById('phone'));
}, false);


//Footer action event
document.getElementById('footer').addEventListener('mousemove', eagle_move, false);
setInterval(flashbang, Math.random() * (3000 - 2000) + 2000);
	
});


$(document).ready(function() {  
	if(navigator.userAgent.match(/(iPhone|iPad|iPod|Macintosh)/i)) {
		setTimeout(function() {
		location.href = '/mobile';
	}, 4000);
	};
});




function createAjax(){//AJAX ОБЪЕКТ...
	if(typeof(XMLHttpRequest) == 'undefined')return new ActiveXObject('Microsoft.XMLHTTP')
	else return new XMLHttpRequest()
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


//Показываем татуировки на девушке
function show_girl(event){
	var e = event || window.event;

//Инициируем окружность
	var circle = document.getElementById('second_woman');
	
if(e.target.className == 'point'){
	circle.style.opacity = '0';
}else circle.style.opacity = '1';
	
	var bg = document.getElementById('woman');
	var circle = document.getElementById('second_woman');

	var middleCircleWidth = circle.offsetWidth / 2;
	var middleCircleHeight = circle.offsetHeight / 2;

	var left = event.pageX - bg.offsetLeft - middleCircleWidth;
	var top = event.pageY - bg.offsetTop - middleCircleHeight;


	if(left < -middleCircleWidth)
		left = -middleCircleWidth;
	else if(left > bg.offsetWidth - middleCircleWidth)
		left = bg.offsetWidth - middleCircleWidth;
	
	if(top < -middleCircleHeight)
		top = -middleCircleHeight;
	else if(top > bg.offsetHeight - middleCircleHeight)
		top = bg.offsetHeight - middleCircleHeight;

	circle.style.left = left + 'px';
	circle.style.top = top + 'px';
	circle.style.backgroundPosition = (-left) + 'px ' + (-top) + 'px';

}

//Показываем татуировки на мужчине
function show_man(event){
	
var e = event || window.event;

//Инициируем окружность
	var circle = document.getElementById('second_man');
	
if(e.target.className == 'point'){
	circle.style.opacity = '0';
}else circle.style.opacity = '1';
	
	var bg = document.getElementById('man');
	var circle = document.getElementById('second_man');

	var middleCircleWidth = circle.offsetWidth / 2;
	var middleCircleHeight = circle.offsetHeight / 2;

	var left = event.pageX - bg.offsetLeft - middleCircleWidth;
	var top = event.pageY - bg.offsetTop - middleCircleHeight;


	if(left < -middleCircleWidth)
		left = -middleCircleWidth;
	else if(left > bg.offsetWidth - middleCircleWidth)
		left = bg.offsetWidth - middleCircleWidth;
	
	if(top < -middleCircleHeight)
		top = -middleCircleHeight;
	else if(top > bg.offsetHeight - middleCircleHeight)
		top = bg.offsetHeight - middleCircleHeight;

	circle.style.left = left + 'px';
	circle.style.top = top + 'px';
	circle.style.backgroundPosition = (-left) + 'px ' + (-top) + 'px';

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



//Switch main menu
function switch_menu(){

//Initiate vars
var menu = document.getElementById('menu');

if(menu.style.height != '220px')
	menu.style.height = '220px';
else menu.style.height = '35px';
	
}


//Показываем блок при наведении
function pointer_man_popup(elem){

//Initiate vars
	var cirlcle = document.getElementById('second_man');
		cirlcle.style.opacity = '0';
		    
    elem.style.WebkitTransform = 'rotate(90deg) scale(1.3, 1.3)';
	elem.style.MozTransform = 'rotate(90deg) scale(1.3, 1.3)';
    elem.style.OTransform = 'rotate(90deg) scale(1.3, 1.3)';
    elem.style.MsTransform = 'rotate(90deg) scale(1.3, 1.3)';
    elem.style.transform = 'rotate(90deg) scale(1.3, 1.3)';
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

//Close main modal
function close_main_modal(){

//Initiate vars
var modal = document.getElementById('request_modal_wrapper');
var shadow = document.getElementById('shadow');

	shadow.style.visibility = 'hidden';
	modal.style.visibility = 'hidden';
	
}

//Закрываем модальное после отправки письма
function close_done_modal(){
var modal = document.getElementById('circle_wrapper');
var shadow = document.getElementById('shadow');

	shadow.style.visibility = 'hidden';
	modal.style.display = 'none';	
	
}

//Зактываем все модальные окна
function close_modals(event){

//Закрываем основное модальное окно
close_main_modal();

//Закрываем модаль, которая учавсвтут после завершения сообщения
	close_the_modal();

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







//Прячем модальное окно
function close_the_modal(){
var modal = document.getElementById('request_modal_wrapper');
var doneModal = document.getElementById('circle_wrapper');
var shadow = document.getElementById('shadow');

	modal.style.visibility = 'hidden';
	doneModal.style.display = 'none';
	shadow.style.visibility = 'hidden';	
}





























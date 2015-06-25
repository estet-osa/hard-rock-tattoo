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

document.getElementById('woman').addEventListener('mousemove', show_girl, false);
//Показываем лупу
document.getElementById('woman').addEventListener('mouseover', function(){
	document.getElementById('second_woman').style.opacity = '1';
}, false);
//Прячем лупу
document.getElementById('woman').addEventListener('mouseout', function(){
	document.getElementById('second_woman').style.opacity = '0';
}, false);

document.getElementById('man').addEventListener('mousemove', show_man, false);
//Прячем лупу
document.getElementById('man').addEventListener('mouseout', function(){
	document.getElementById('second_man').style.opacity = '0';
}, false);
//Показываем лупу
document.getElementById('man').addEventListener('mouseover', function(){
	document.getElementById('second_man').style.opacity = '1';
}, false);

//Close all modals
document.getElementById('shadow').addEventListener('click', close_modals, false);

document.getElementById('modal_btn').addEventListener('click', function(){
	send_mail(document.getElementById('name'), document.getElementById('phone'));
}, false);


//Footer action event
document.getElementById('footer').addEventListener('mousemove', eagle_move, false);
setInterval(flashbang, Math.random() * (3000 - 2000) + 2000);
	
});


function onwheel(event){
	var e = event || window.event;
	
// wheelDelta не дает возможность узнать количество пикселей
	var delta = e.deltaY || e.detail || e.wheelDelta;

	var list = document.getElementById('wizard_local_list');
	var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
		
//Элемент с другим списком
	var well = document.getElementById('wizard_local_list');

	if((parseInt(well.offsetTop) - 800) < scrollTop){
		if(parseInt(document.body.clientWidth) > 1000){			
			setTimeout(function(){well.children[0].style.margin = '30px 0 55px';well.children[0].style.opacity = '1';}, 0);
			setTimeout(function(){well.children[1].style.margin = '30px 0 55px';well.children[1].style.opacity = '1';}, 500);
			setTimeout(function(){well.children[2].style.margin = '30px 0 55px';well.children[2].style.opacity = '1';}, 1100);
		}else{
			setTimeout(function(){well.children[0].style.margin = '30px auto 55px';well.children[0].style.opacity = '1';}, 0);
			setTimeout(function(){well.children[1].style.margin = '30px auto 55px';well.children[1].style.opacity = '1';}, 500);
			setTimeout(function(){well.children[2].style.margin = '30px auto 55px';well.children[2].style.opacity = '1';}, 1100);
		}
	}
	
	
	
	
	
	//well.innerHTML = delta + "<br>" + scrollTop + "<br> Положение блока - " + document.getElementById('wizard_scroll').offsetTop;
	
}


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


//Показываем видео блок
function show_video(btn){

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
//Инициируем переменные
var video = document.getElementById('video');

	btn.style.display = 'none';
	video.style.display = 'block';
	
	var player;
		player = new YT.Player('v', {
		  videoId: 'KAWmbuOF3PU',
		  width: '100%',
		  events: {
			'onReady':onPlayerReady,
			'onStateChange':onPlayerStateChange
		  }
		});
		
	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		event.target.playVideo();
	}
	 var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 12000);
          done = true;
        }
      }
      function stopVideo() {
       // player.stopVideo();
      }
	
      
}

//Читаем больше текста в блоке ПРИЧИНЫ
function read_reason(){

//Initiate vars
var txt = document.getElementById('reason_more_txt');
var btn = document.getElementById('reason_btn');

//Через промежуток времени показываем дополнительный текст
setTimeout(function(){
	txt.style.height = txt.children[0].clientHeight + 'px';
	btn.style.display = 'block';
}, 1200);
	
}



function show_video_wizard(wiz){
	
//Initiate vars
var list = document.getElementById('video_list');
var modal = document.getElementById('video_modal');
var shadow = document.getElementById('shadow');

	shadow.style.visibility = 'visible';
	modal.style.display = 'block';

for(var i = 0; i < list.children.length; i++){
	if(list.children[i].id == wiz){
		list.children[i].style.display = 'block';
	}else list.children[i].style.display = 'none';
}

	
}

//закрываем модальное окно с видео 
function close_video_modal(){
var modal = document.getElementById('video_modal');
var shadow = document.getElementById('shadow');

	shadow.style.visibility = 'hidden';
	modal.style.display = 'none';
	
}



//Функция вызывается при клике на КРЕСТИК
function show_popup_pointer(elem){
	
//Initiate vars
	var popup = elem.parentNode.nextElementSibling;
	//var pList = document.getElementById('woman_pointer_list');
	var pList = elem.parentNode.parentNode.parentNode;
	
//Current elem
	var curr = elem.id;
		console.log(curr);
	
//Свернем все лишние модальные окна
	for(var i=0; i < pList.children.length; i++){
		pList.children[i].children[1].style.height = '0px';
		
			return_false(pList.children[i].children[0].children[0]);
		
	}	
	
	if(popup.clientHeight > 0){
		popup.style.height = '0px';
		elem.style.OTransform = 'rotate(-45deg) scale(1, 1)';
		elem.style.MozTransform = 'rotate(-45deg) scale(1, 1)';
		elem.style.MsTransform = 'rotate(-45deg) scale(1, 1)';
		elem.style.transform = 'rotate(-45deg) scale(1, 1)';
	}else{
		popup.style.height = popup.children[0].clientHeight + 'px';
		
		elem.style.WebkitTransform = 'rotate(90deg) scale(1.3, 1.3)';
		elem.style.MozTransform = 'rotate(90deg) scale(1.3, 1.3)';
		elem.style.OTransform = 'rotate(90deg) scale(1.3, 1.3)';
		elem.style.MsTransform = 'rotate(90deg) scale(1.3, 1.3)';
		elem.style.transform = 'rotate(90deg) scale(1.3, 1.3)';
	}
	
}

//Функция возвращает точки на исходную позицию
function return_false(elem){
	elem.style.OTransform = 'rotate(-45deg) scale(1, 1)';
	elem.style.MozTransform = 'rotate(-45deg) scale(1, 1)';
	elem.style.MsTransform = 'rotate(-45deg) scale(1, 1)';
	elem.style.transform = 'rotate(-45deg) scale(1, 1)';
}


//Прячем блок при наведении
function close_pointer_popup(elem){

//Получаем модальное окно точки
var popup = elem.parentNode.nextElementSibling;

//Initiate vars
	var cirlcle = document.getElementById('second_woman');
		cirlcle.style.opacity = '1';
		
//Если текущее модальное окно не свернуто, то при убирании курсора
//не сворачиваем pointer

if(popup.clientHeight == 0){    
	elem.style.OTransform = 'rotate(-45deg) scale(1, 1)';
	elem.style.MozTransform = 'rotate(-45deg) scale(1, 1)';
    elem.style.MsTransform = 'rotate(-45deg) scale(1, 1)';
    elem.style.transform = 'rotate(-45deg) scale(1, 1)';	
}	

}

//Прячем блок при наведении
function close_man_pointer_popup(elem){

//Получаем модальное окно точки
var popup = elem.parentNode.nextElementSibling;

//Initiate vars
	var cirlcle = document.getElementById('second_woman');
		cirlcle.style.opacity = '1';
		
//Если текущее модальное окно не свернуто, то при убирании курсора
//не сворачиваем pointer

if(popup.clientHeight == 0){
    
	elem.style.OTransform = 'rotate(-45deg) scale(1, 1)';
	elem.style.MozTransform = 'rotate(-45deg) scale(1, 1)';
    elem.style.MsTransform = 'rotate(-45deg) scale(1, 1)';
    elem.style.transform = 'rotate(-45deg) scale(1, 1)';
	
}
	
}

//Показываем блок при наведении
function pointer_popup(elem){

//Initiate vars
	var cirlcle = document.getElementById('second_woman');
		cirlcle.style.opacity = '0';
		    
    elem.style.WebkitTransform = 'rotate(90deg) scale(1.3, 1.3)';
	elem.style.MozTransform = 'rotate(90deg) scale(1.3, 1.3)';
    elem.style.OTransform = 'rotate(90deg) scale(1.3, 1.3)';
    elem.style.MsTransform = 'rotate(90deg) scale(1.3, 1.3)';
    elem.style.transform = 'rotate(90deg) scale(1.3, 1.3)';
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

//Закрываем модальное окно с видео
close_video_modal();

//Закрываем модаль, которая учавсвтут после завершения сообщения
	//close_the_modal();

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







/*

//Прячем модальное окно
function close_the_modal(){
var modal = document.getElementById('request_modal_wrapper');
var modal_two = document.getElementById('gallery_block');
var doneModal = document.getElementById('doneModal');
var shadow = document.getElementById('shadow');

	modal_two.style.visibility = 'hidden';
	modal.style.visibility = 'hidden';
	doneModal.style.visibility = 'hidden';
	shadow.style.visibility = 'hidden';	
}
*/




























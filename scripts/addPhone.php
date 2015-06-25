<?php


class phone{

function __CONSTRUCT($phone, $owner){
	$mail = 'info@hard-rock-tattoo.ru';
	//ОТПРАВЛЯЕМ НОВЫЙ ТЕЛЕФОН НА e-mail
	$send = mail($mail, "Новая заявка на телефонный звонок", "Владелец письма - ".$owner."\r\n  Номер телефона - ".$phone);
			
if($send){echo "ok";}

}

}




if(isset($_GET['newPhone']) && !empty($_GET['newPhone'])){

//ФИЛЬТРУЕМ ДАННЫЕ И СОЗДАЕМ ЭКЗЕМПЛЯР КЛАССА, В КОТОРЫЙ ПЕРЕДАЕМ ДВА ПАРАМЕТРА GET
	$setPhone = new phone(trim(strip_tags($_GET['newPhone'])), trim(strip_tags($_GET['owner'])), trim(strip_tags($_GET['mail'])));
	
	
}

?>
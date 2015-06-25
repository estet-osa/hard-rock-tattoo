<?php
class AddrequestController{
	
	public $_action;
	const HOME = 'application/models/';

function __construct(){
	
	$phone = trim(strip_tags($_GET['phone']));
	$owner = trim(strip_tags($_GET['owner']));
	$type = trim(strip_tags($_GET['type']));

$mail = 'info@hard-rock-tattoo.ru';
	//ОТПРАВЛЯЕМ НОВЫЙ ТЕЛЕФОН НА e-mail
	$send = mail($mail, $type, "Владелец письма - ".$owner."\r\n  Номер телефона - ".$phone."\r\n Тип заявки - {$type}");
			
if($send){echo "ok";}


/*
	//accept data
	$request = explode('/', trim($_SERVER['REQUEST_URI'], '/'));

	//Проверяем пришел ли к нам запрос на страницу conference or conference333
	if(!isset($request[1]) && empty($request[1])){	
		$this->_action = 'contactsAction'; //the harmony show
	}

//if this isset action Class
if(class_exists($this->_action)){
	$act = new $this->_action; //Create model class
	$act->render(); //Give content
}else{
	$act = new NotpageController(); //If this class not found, set first page
	$act->render(); //Give content
}*/

}

//Render page
public function render(){	
	include self::HOME.$this->_action;
}
	
}
?>
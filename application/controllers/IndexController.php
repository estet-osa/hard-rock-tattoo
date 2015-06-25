<?php
class IndexController{
	private $db;	
	const HOME = 'application/models/';
	const PAGE = 'main.php';

function __construct(){

//Initiate action var
if($_SERVER['REQUEST_URI'] == '/'){	
	$this->_action = 'indexAction';
}else
	$this->_action = 'status404Action';
	
	
//if this isset action Class
if(class_exists($this->_action)){
	$act = new $this->_action; //Create model class
	$act->render(); //Give content
}else{	
	$act = new NotfoundController(); //If this class not found, set first page
	$act->render(); //Give content
}

}



//Render page
public function render(){	
	include self::HOME.$this->_action;
}

}
?>
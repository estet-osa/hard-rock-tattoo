<?php
class FrontController{
	protected $_controller, $_action, $_params, $_body;
	static $_instance;
	
public static function getInstance(){
	if(!(self::$_instance instanceOf self)){
		self::$_instance = new self();
	return self::$_instance;
	}
}

private function __CONSTRUCT(){//Constuctor of class

	$request = preg_replace("/[0-9\*\|;:\'\"]/", "", $_SERVER['REQUEST_URI']);
	$splits = explode('/', trim($request, '/'));

//Controllers Path
	$controllerPath="application/controllers/";

//Select controller
if(file_exists($controllerPath.ucfirst($splits[0]).'Controller.php'))
	$this->_controller = ucfirst($splits[0]).'Controller';
else
	$this->_controller = 'IndexController';	
}

public function route(){
	return new $this->_controller;
}

public function getController(){
	return $this->_controller;
}



}
?>
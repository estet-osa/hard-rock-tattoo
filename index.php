<?php
/*
if($_SERVER['REMOTE_ADDR'] != '46.173.3.84'){
	header("Location: http://tatuirovki.hard-rock-tattoo.ru/");
}*/


set_include_path(get_include_path().PATH_SEPARATOR.'application/controllers'
		.PATH_SEPARATOR.'application/models'
		.PATH_SEPARATOR.'application/views');
		
function __autoload($class){
	require_once $class.'.php';
}

$front = FrontController::getInstance();
$front->route();
//echo $front->getBody();
?>
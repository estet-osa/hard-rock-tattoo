<?php
class indexAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'main.php';
	
}


//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
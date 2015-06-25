<?php
class mobileAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'main_mobile.php';
	
}


//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
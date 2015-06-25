<?php
class tattooAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'tattoo.php';
	
}


//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
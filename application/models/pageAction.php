<?php
class pageAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'pages.php';
}

//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
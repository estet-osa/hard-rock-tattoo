<?php
class status404Action{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'stat404.php';
}

//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
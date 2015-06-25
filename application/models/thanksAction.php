<?php
class thanksAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'thanks.php';
}

//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
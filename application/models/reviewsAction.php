<?php
class reviewsAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'reviews.php';
	
}

//Render page
public function render(){	
	include 'application/views/'.$this->page;
}

}
?>
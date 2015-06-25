<?php
class contactsAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'contacts.php';
	
}


//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
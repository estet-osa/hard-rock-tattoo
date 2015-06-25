<?php
class wizardAction{
	public $page;
	
public function __construct(){

//echo 'article page';
	$this->page = 'wizard.php';
}

//Render page
public function render(){	
	include 'application/views/'.$this->page;	
}

}
?>
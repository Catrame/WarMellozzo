<?php
   session_start();
   
   $logged_in = false;
	if(isset($_SESSION['logged_in']) ){
		if($_SESSION['logged_in'] == true ){
			$logged_in = true;
		} else{
			$logged_in = false;
		}
	} else{
		$logged_in = false;
	}

   if( $logged_in == false ){
      header("location:login.html");
	  die("Access Denied");
   }
?>


<?php
	//include('check_session.php');

	session_start();
	$uname = $_SESSION['login_user_name'];
	
	echo $uname;
?>
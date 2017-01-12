<?php
include('check_session.php');
include("config_db.php");

	$iduser = $_SESSION['login_user_id'];
	
	//prendere il json e salvare il dato
	$stringone_json_raw = file_get_contents('php://input');
	$stringone_json = mysqli_real_escape_string($dbconn, $stringone_json_raw );
	
	$sql = "UPDATE {$DB_NAME}.users SET charachter_json = '{$stringone_json}' WHERE id={$iduser}";
	$result = $dbconn->query( $sql );
	
	$dbconn->close();
?>
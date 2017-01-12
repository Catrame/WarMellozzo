<?php
	include("config_db.php");
	session_start();
	
	function login_user($uname, $iduser, $dbconn) 
	{
		$_SESSION['logged_in'] = true;
		$_SESSION['login_user_name'] = $uname;
		$_SESSION['login_user_id'] = $iduser;
		
		error_log("[login.php] - logged in user {$uname} - id " . $iduser );
	}
	
	$found = false;
	$error="";

	if( ($_SERVER["REQUEST_METHOD"] == "POST") && isset($_POST['username']) && isset($_POST['password']) ) 
	{
		$myusername = mysqli_real_escape_string($dbconn, $_POST['username'] );
		$mypassword = mysqli_real_escape_string($dbconn, $_POST['password'] ); 
		$sql = "SELECT id FROM {$DB_NAME}.users WHERE username = '{$myusername}' AND password = '{$mypassword}' ";
		
		//error_log("[login.php] - executing query: " . $sql );		
		$result = $dbconn->query( $sql );
		$count = $result->num_rows;		

		// If result matched $myusername and $mypassword, table row must be 1 row
		if( $count == 1) 
		{
			$row = $result->fetch_assoc();
			$udserId = $row["id"];		
			
			$sql_update = "UPDATE {$DB_NAME}.users SET data_ultimo_accesso = NOW() WHERE id={$udserId}";
			$dbconn->query( $sql_update );
			
			login_user( $myusername , $udserId, $dbconn );
			$found = true;
			header("Location:page2.php");
		}else {
			$error = "Your Login Name or Password is invalid. Error == " . $dbconn->error;
		} 
		
		$result->free();
	} else{
		$found = false;
		$error = "Your Login Name or Password is invalid.";
	}
	
	$dbconn->close();

	if( !$found){
		error_log("[login.php] - error: " . $error);
		header("Location:login.html");
	}
	
?>

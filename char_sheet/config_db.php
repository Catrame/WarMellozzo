<?php
	$DB_HOST = "";
	$DB_USERNAME = "";
	$DB_PASSWORD = "";
	$DB_NAME = "";
	
	// create connection to MySql Server
	$dbconn = new mysqli($DB_HOST, $DB_USERNAME, $DB_PASSWORD, $DB_DATABASE);
	
	// Check connection
	if ($dbconn->connect_errno) {
		error_log("[config_db.php] - Connection failed: {$dbconn->connect_errno}");
		error_log("[config_db.php] - Connection failed: {$dbconn->connect_error}");
		exit();
	}

/*
		$sql = "SELECT * FROM {$DB_NAME}.users WHERE username = '{$myusername}' AND password = '{$mypassword}' ";
		$result = $dbconn->query( $sql );

		if ($result->num_rows > 0) {
			// output data of each row
			while($row = $result->fetch_assoc()) {
				echo "id: " . $row["id"]. " - Name: " . $row["username"]. " " . $row["email"]. "<br>";
			}
		} else {
			echo "0 results";
		}
*/
?>


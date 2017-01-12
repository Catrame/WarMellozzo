<?php
	include('check_session.php');
	include("config_db.php");

/*
echo"{\"name\":\"mino\",\"race\":\"pino\",\"exp_total\":\"\",\"exp_current\":\"\",\"gender\":\"\",\"age\":\"\",\"xx\":\"\",\"eyes\":\"\",\"hair\":\"\",\"birthplace\":\"\",\"distinguishing_marks\":\"\",\"skill_WS_0\":\"0\",\"skill_BS_0\":\"0\",\"skill_S_0\":\"0\",\"skill_T_0\":\"0\",\"skill_Ag_0\":\"0\",\"skill_Int_0\":\"0\",\"skill_WP_0\":\"0\",\"skill_Fel_0\":\"0\",\"skill_WS_1\":\"0\",\"skill_BS_1\":\"0\",\"skill_S_1\":\"0\",\"skill_T_1\":\"0\",\"skill_Ag_1\":\"0\",\"skill_Int_1\":\"0\",\"skill_WP_1\":\"0\",\"skill_Fel_1\":\"0\",\"skill_WS_2\":\"0\",\"skill_BS_2\":\"0\",\"skill_S_2\":\"0\",\"skill_T_2\":\"0\",\"skill_Ag_2\":\"0\",\"skill_Int_2\":\"0\",\"skill_WP_2\":\"0\",\"skill_Fel_2\":\"0\",\"skill_A_0\":\"0\",\"skill_W_0\":\"0\",\"skill_SB_0\":\"0\",\"skill_TB_0\":\"0\",\"skill_M_0\":\"0\",\"skill_Mag_0\":\"0\",\"skill_IP_0\":\"0\",\"skill_FP_0\":\"0\",\"skill_A_1\":\"0\",\"skill_W_1\":\"0\",\"skill_SB_1\":\"0\",\"skill_TB_1\":\"0\",\"skill_M_1\":\"0\",\"skill_Mag_1\":\"0\",\"skill_IP_1\":\"0\",\"skill_FP_1\":\"0\",\"skill_A_2\":\"0\",\"skill_W_2\":\"0\",\"skill_SB_2\":\"0\",\"skill_TB_2\":\"0\",\"skill_M_2\":\"0\",\"skill_Mag_2\":\"0\",\"skill_IP_2\":\"0\",\"skill_FP_2\":\"0\",\"career_current\":\"\",\"career_exits\":\"\",\"career_previous\":\"\",\"armour_0\":\"0\",\"armour_1\":\"0\",\"armour_2\":\"0\",\"armour_3\":\"0\",\"armour_4\":\"0\",\"armour_5\":\"0\",\"talent_0_0\":\"talent 1\",\"talent_0_1\":\"description 1\",\"talent_1_0\":\"\",\"talent_1_1\":\"\",\"talent_2_0\":\"\",\"talent_2_1\":\"\",\"talent_3_0\":\"\",\"talent_3_1\":\"\",\"talent_4_0\":\"\",\"talent_4_1\":\"\",\"talent_5_0\":\"\",\"talent_5_1\":\"\",\"talent_6_0\":\"\",\"talent_6_1\":\"\",\"talent_7_0\":\"\",\"talent_7_1\":\"\",\"talent_8_0\":\"\",\"talent_8_1\":\"\",\"talent_9_0\":\"\",\"talent_9_1\":\"\",\"weapon_name_0\":\"\",\"weapon_type_0\":\"\",\"weapon_damage_0\":\"\",\"weapon_notes_0\":\"\",\"weapon_name_1\":\"\",\"weapon_type_1\":\"\",\"weapon_damage_1\":\"\",\"weapon_notes_1\":\"\",\"weapon_name_2\":\"\",\"weapon_type_2\":\"\",\"weapon_damage_2\":\"\",\"weapon_notes_2\":\"\",\"weapon_name_3\":\"\",\"weapon_type_3\":\"\",\"weapon_damage_3\":\"\",\"weapon_notes_3\":\"\",\"weapon_name_4\":\"\",\"weapon_type_4\":\"\",\"weapon_damage_4\":\"\",\"weapon_notes_4\":\"\",\"trapping_0_0\":\"\",\"trapping_0_1\":\"\",\"trapping_1_0\":\"\",\"trapping_1_1\":\"\",\"trapping_2_0\":\"\",\"trapping_2_1\":\"\",\"trapping_3_0\":\"\",\"trapping_3_1\":\"\",\"trapping_4_0\":\"\",\"trapping_4_1\":\"\",\"trapping_5_0\":\"\",\"trapping_5_1\":\"\",\"trapping_6_0\":\"\",\"trapping_6_1\":\"\",\"trapping_7_0\":\"\",\"trapping_7_1\":\"\",\"trapping_8_0\":\"\",\"trapping_8_1\":\"\",\"trapping_9_0\":\"\",\"trapping_9_1\":\"\",\"trapping_10_0\":\"\",\"trapping_10_1\":\"\",\"trapping_11_0\":\"\",\"trapping_11_1\":\"\",\"trapping_12_0\":\"\",\"trapping_12_1\":\"\",\"trapping_13_0\":\"\",\"trapping_13_1\":\"\",\"trapping_14_0\":\"\",\"trapping_14_1\":\"\",\"money_0\":\"0\",\"money_1\":\"0\",\"money_2\":\"0\",\"skill_taken_0\":false,\"skill_10_0\":false,\"skill_20_0\":false,\"skill_taken_1\":false,\"skill_10_1\":false,\"skill_20_1\":false,\"skill_taken_2\":false,\"skill_10_2\":false,\"skill_20_2\":false,\"skill_taken_3\":false,\"skill_10_3\":false,\"skill_20_3\":false,\"skill_taken_4\":false,\"skill_10_4\":false,\"skill_20_4\":false,\"skill_taken_5\":false,\"skill_10_5\":false,\"skill_20_5\":false,\"skill_taken_6\":false,\"skill_10_6\":false,\"skill_20_6\":false,\"skill_taken_7\":false,\"skill_10_7\":false,\"skill_20_7\":false,\"skill_taken_8\":false,\"skill_10_8\":false,\"skill_20_8\":false}";
*/

	$outputJSON = "";
	$uname = $_SESSION['login_user_name'];
	$iduser = $_SESSION['login_user_id'];
	
	$sql = "SELECT charachter_json FROM {$DB_NAME}.users WHERE id = {$iduser} ";
	$result = $dbconn->query( $sql );
	
	if ($result->num_rows > 0) 
	{
		$row = $result->fetch_assoc();
		$outputJSON = $row["charachter_json"];
		$result->free();
		error_log("[load_char.php] - loaded character for user " . $iduser . " - " . $uname );	
		
	} else{
		error_log("[load_char.php] - cannot load character for user " . $iduser . " - " . $uname );	
	}
	
	$dbconn->close();
	
	echo $outputJSON;	
?>
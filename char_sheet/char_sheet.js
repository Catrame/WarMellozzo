
/** ************************ */
/** global static variables */
/** ************************ */

var CHAR_SHEET_AJAX_URL_SAVE = "save_char.php"; 
var CHAR_SHEET_AJAX_URL_LOAD = "load_char.php"; 
var CHAR_SHEET_AJAX_URL_UNAME = "ask_uname.php"; 

var skills_mk1 = ["WS","BS","S","T","Ag","Int","WP","Fel"];
var skills_mk2 = ["A","W","SB","TB","M","Mag","IP","FP"];

function getNumTalents()
{
	return 9;
}

function getNumSkills()
{
	return 9;
}

function getNumTrappings()
{
	return 15;
}

function getNumWeapons()
{
	return 5;
}

/** ************************ */
/** 	get data EMPTY		*/
/** ************************ */

function get_mk1_values()
{
	var skills = [[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0]
				];
	return skills;
}

function get_mk2_values()
{
	var skills = [[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0,0]
				];
	return skills;
}

var INDX_ARMOUR_HEAD = 0;
var INDX_ARMOUR_ARM_LEFT = 1;
var INDX_ARMOUR_BODY = 2;
var INDX_ARMOUR_ARM_RIGHT = 3;
var INDX_ARMOUR_LEG_LEFT = 4;
var INDX_ARMOUR_LEG_RIGHT = 5;
var ARMOUR_NUMBER_COLUMNS = 6;

function get_armour_values()
{
	var armours=[0,0,0,0,0,0];
	return armours;
}

function get_talents_values()
{
	var num_talents = getNumTalents();
	var talents = [];
	talents.push( ["talent 1","description 1"] );
	for(var i=0; i < num_talents; i++){
		talents.push( ["",""] );
	}
	return talents;
}

var INDX_SKILL_TAKEN = 0;
var INDX_SKILL_NAME = 1;
var INDX_SKILL_PROFILE = 2;		//refers to skills_mk1
var INDX_SKILL_10 = 3;
var INDX_SKILL_20 = 4;
var INDX_SKILL_TALENT = 5;
var SKILLS_NUMBER_COLUMNS = 6;

function get_skills_values()
{
	var num_skills = getNumSkills();
	var skills = [];
	for(var i=0; i < num_skills; i++){
		skills.push( [false,"",2,false,false,""] );
	}
	return skills;
}

function get_money_value()
{
	var gold = 0;
	var silver = 0;
	var copper = 0;

	var moneys = [gold, silver, copper];
	return moneys;
}

var INDX_ITEMS_NAME = 0;
var INDX_ITEMS_AMOUNT = 1;

function get_items_values()
{
	var num_items = getNumTrappings();
	var items = [];
	for(var i=0; i < num_items; i++){
		items.push( ["", ""] );
	}
	return items;
}

var INDX_WEAPON_NAME = 0;
var INDX_WEAPON_TYPE  = 1;
var INDX_WEAPON_DMG  = 2;
var INDX_WEAPON_NOTES  = 3;
var WEAPONS_NUMBER_COLUMNS = 4;

function get_weapons_values()
{
	var num_weapons = getNumWeapons();
	var weapons = [];
	for(var i=0; i < num_weapons; i++){
		weapons.push( ["","","",""] );
	}
	return weapons;
}

/** ************************ */
/** fill page with data 	*/
/** ************************ */

function print_table_profile_1()
{
	var rows_descr = ["STARTING", "ADVANCE" , "CURRENT"];
	var num_rows = rows_descr.length;
	var num_col = skills_mk1.length;
	var string_table = "";
	var c=0;

	// header
	var tr = "<tr><th></th>";
	for(c=0; c < num_col; c++)
	{
		tr += "<th>"+skills_mk1[c]+"</th>";
	}
	tr += "</tr>";
	string_table += tr;

	//content
	var skills_mk1_values = get_mk1_values();
	for(var r=0; r < num_rows; r++)
	{
		tr = "<tr>";
		tr += "<td>"+rows_descr[r]+"</td>";
		for(c=0; c < num_col; c++)
		{
			var input_name ="skill_"+skills_mk1[c]+"_"+r;
			tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+skills_mk1_values[r][c]+"\" ></td>";
		}
		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_profile_1").innerHTML = string_table;
}

function print_table_profile_2()
{
	var rows_descr = ["STARTING", "ADVANCE" , "CURRENT"];
	var num_rows = rows_descr.length;
	var num_col = skills_mk2.length;
	var string_table = "";
	var c=0;

	// header
	var tr = "<tr><th></th>";
	for(c=0; c < num_col; c++)
	{
		tr += "<th>"+skills_mk2[c]+"</th>";
	}
	tr += "</tr>";
	string_table += tr;

	//content
	var skills_mk2_values = get_mk2_values();
	for(var r=0; r < num_rows; r++)
	{
		tr = "<tr>";
		tr += "<td>"+rows_descr[r]+"</td>";
		for(c=0; c < num_col; c++)
		{
			var input_name ="skill_"+skills_mk2[c]+"_"+r;
			tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+skills_mk2_values[r][c]+"\" ></td>";
		}
		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_profile_2").innerHTML = string_table;
}

function print_table_talents()
{
	var talents_values = get_talents_values();
	var num_rows = talents_values.length;
	var num_col = 2;
	var string_table = "";

	//content
	for(var r=0; r < num_rows; r++)
	{
		var tr = "<tr>";
		for(var c=0; c < num_col; c++)
		{
			var input_name ="talent_"+r+"_"+c;
			tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+talents_values[r][c]+"\" ></td>";
		}
		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_talents").innerHTML = string_table;
}

function print_table_skills()
{
	var skills_values = get_skills_values();
	var num_rows = skills_values.length;
	var num_col = SKILLS_NUMBER_COLUMNS ;

	var string_table = "";

	//HEADER
	var tr = "<tr>";
	tr +="<th>Taken</th><th>Skill</th><th>Char</th><th>10%</th><th>20%</th><th>Talent</th>";
	tr += "</tr>";
	string_table += tr;

	//content
	for(var r=0; r < num_rows; r++)
	{
		tr = "<tr>";
		var id_name ="skill_taken_"+r;
		tr += "<td> <input type=\"checkbox\" id=\""+id_name+"\" name=\""+id_name+"\" ></td>";

		id_name ="skill_name_"+r;
		tr += "<td id=\""+id_name+"\" >"+skills_values[r][INDX_SKILL_NAME ]+"</td>";

		var refers_to = skills_mk1[ skills_values[r][INDX_SKILL_PROFILE ]  ];
		id_name ="skill_refers_to_"+r;
		tr += "<td id=\""+id_name+"\">("+refers_to+")</td>";

		id_name ="skill_10_"+r;
		tr += "<td> <input type=\"checkbox\" id=\""+id_name+"\" name=\""+id_name+"\" ></td>";

		id_name ="skill_20_"+r;
		tr += "<td> <input type=\"checkbox\" id=\""+id_name+"\" name=\""+id_name+"\" ></td>";

		id_name ="skill_talent_"+r;
		tr += "<td id=\""+id_name+"\">"+skills_values[r][INDX_SKILL_TALENT ]+"</td>";

		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_skills").innerHTML = string_table;
}

function print_table_armours()
{
	var armour_values = get_armour_values();
	var num_rows = ARMOUR_NUMBER_COLUMNS;
	var descriptions = ["Head","Left Arm","Body","Right Arm","Left Leg","Right Leg"];
	var string_table = "";

	//content
	for(var r=0; r < num_rows; r++)
	{
		var tr = "<tr>";
		tr += "<td>"+descriptions[r]+"</td>";

		var input_name ="armour_"+r;
		tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+armour_values[r]+"\" ></td>";

		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_armour").innerHTML = string_table;
}

function print_table_weapons()
{
	var weapons_values = get_weapons_values();
	var num_rows = weapons_values.length;
	var num_col = WEAPONS_NUMBER_COLUMNS ;

	var string_table = "";

	//HEADER
	var tr = "<tr>";
	tr +="<th>Name</th><th>Type</th><th>Damage</th><th>Notes</th>";
	tr += "</tr>";
	string_table += tr;

	//content
	for(var r=0; r < num_rows; r++)
	{
		tr = "<tr>";
		var input_name ="weapon_name_"+r;
		tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+weapons_values[r][INDX_WEAPON_NAME ]+"\" ></td>";

		input_name ="weapon_type_"+r;
		tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+weapons_values[r][INDX_WEAPON_TYPE ]+"\" ></td>";

		input_name ="weapon_damage_"+r;
		tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+weapons_values[r][INDX_WEAPON_DMG ]+"\" ></td>";

		input_name ="weapon_notes_"+r;
		tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+weapons_values[r][INDX_WEAPON_NOTES ]+"\" ></td>";

		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_weapons").innerHTML = string_table;
}

function print_table_money()
{
	var moneys = get_money_value();
	var lables=["gold","silver","copper"];
	var string_table = "";

	for(var r=0; r < 3; r++)
	{
		var tr = "<tr>";
		tr += "<td>"+lables[r]+"</td>";
		var input_name ="money_"+r;
		tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+moneys[r]+"\" ></td>";

		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_money").innerHTML = string_table;
}

function print_table_trappings()
{
	var items_values = get_items_values();
	var num_rows = items_values.length;
	var num_col = 2;
	var string_table = "";

	//HEADER
	var tr = "<tr>";
	tr +="<th>Item</th><th>Amount</th>";
	tr += "</tr>";
	string_table += tr;

	//content
	for(var r=0; r < num_rows; r++)
	{
		tr = "<tr>";
		for(var c=0; c < num_col; c++)
		{
			var input_name ="trapping_"+r+"_"+c;
			tr += "<td> <input type=\"text\" id=\""+input_name+"\" name=\""+input_name+"\" value=\""+items_values[r][c]+"\" ></td>";
		}
		tr += "</tr>";
		string_table += tr;
	}

	document.getElementById("table_trappings").innerHTML = string_table;
}

/** ************************ */
/** 	on events	 		*/
/** ************************ */

$( document ).ready(function()
{
    console.log( "ready!" );
	print_table_profile_1();
	print_table_profile_2();
	print_table_armours();
	print_table_weapons();
	print_table_talents();
	print_table_skills();
	print_table_trappings();
	print_table_money();
	
	askUserName();
	console.log("page printed.");
	
	onLoadButton();
});

function formToJSON()
{
	// *** fields from form
	var unindexed_array = $( "#character_form" ).serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
	
	// *** override checkbox
	$("#character_form input:checkbox").each(function() {
		var ischecked = false;
		if ( $(this).is(":checked") ) { ischecked = true; }
		
		var id_name =this.id;
		indexed_array[id_name] = ischecked;
	});

	// *** add non-input fields
	var num_skills = getNumSkills();
	for(var r=0; r < num_skills; r++)
	{
		var id_name ="skill_name_"+r;
		indexed_array[id_name] = $("#"+id_name).innerHTML;

		id_name ="skill_refers_to_"+r;
		indexed_array[id_name] = $("#"+id_name).innerHTML;

		id_name ="skill_talent_"+r;
		indexed_array[id_name] = $("#"+id_name).innerHTML;
	}

	return JSON.stringify( indexed_array );
}

function onSaveButton()
{
	console.log("saving data ...");
//	if (typeof(Storage) !== "undefined") {
//		saveDataToLocalStorage();
//	} else {
//		window.alert("Sorry! No Web Storage support..");
//	}

	sendData();
	var formToJson = formToJSON();
	console.log( formToJson );
}

function onLoadButton()
{
//	if (typeof(Storage) !== "undefined") 
//	{
//		var jsonStr = localStorage.character_form_json;
//		loaddataFromJSON_string(jsonStr );
//	} else {
//		window.alert("Sorry! No Web Storage support..");
//	}
	
	loadRemote();
	$("#div_messages").append( "<p>["+(new Date().toLocaleString())+"] Character Loaded<p>" );
}

function askUserName()
{
	var requestStr = "";
	
	$.ajax({
        url: CHAR_SHEET_AJAX_URL_UNAME,
		async: true,
        type: "POST",
		contentType: "text/plain",
		dataType: "text",
        data: requestStr,
        success: function(result) 
		{
		  $("#box_user").html( "<p> Hello "+ result +".<p>" );
		  if( result == '' )
		  {
			$("#box_user").html( "<p> Not Logged In. <p>" );
			$("#divlogout").hide();
			$("#btnTopContainer").hide();	

			$("#divlogin").show();			
		  } else{
			  $("#divlogin").hide();
			  
			  $("#divlogout").show();
			  $("#btnTopContainer").show();	
		  }
		},
		error: function(data){
			$("#box_user").html( "<p> Not Logged In. <p>" );
		}
    });
}

function loadRemote()
{
	var requestStr = "{}";
	
	$.ajax({
        url: CHAR_SHEET_AJAX_URL_LOAD,
		async: true,
        type: "POST",
		contentType: "application/json",
		dataType: "json",
        data: requestStr,
        success: function(result) {
		  loaddataFromJSON_obj( result );
		  $("#div_messages").append( "<p>["+(new Date().toLocaleString())+"] Character Loaded<p>" );
		 }
    });
}

function sendData()
{
	var formToJson = formToJSON();

	$.ajax({
        url: CHAR_SHEET_AJAX_URL_SAVE,
		async: true,
        type: "POST",
		contentType: "application/json",
		dataType: "json",
        data: formToJson,
        success: function(result) {
                  // ... do something with the data ?
				  $("#div_messages").append( "<p>["+(new Date().toLocaleString())+"] Character Saved<p>" );
                 },
		complete: function(result, status){
			console.log("ajax call to "+CHAR_SHEET_AJAX_URL_SAVE + "completed. "  );
			console.log("status of ajax call ==" + status )
		}
    });
}

/**
	// Store
	localStorage.setItem("lastname", "Smith");
	localStorage.lastname = "Smith";
	// Retrieve
	document.getElementById("result").innerHTML = localStorage.getItem("lastname");
*/
function saveDataToLocalStorage()
{
	localStorage.character_form_json = formToJSON();
}

function loaddataFromJSON_string( jsonString )
{
	var jsonObj = JSON.parse( jsonString );
	loaddataFromJSON_obj( jsonObj );
}

function loaddataFromJSON_obj( jsonObj )
{
	fillGeneralInfo_fromJSON( jsonObj );
	fillGeneralInfo_fromJSON( jsonObj );
	fill_mk1_values_fromJSON( jsonObj );
	fill_mk2_values_fromJSON( jsonObj );
	fill_armour_values_fromJSON( jsonObj );
	fill_talents_values_fromJSON( jsonObj );
	fill_skills_values_fromJSON( jsonObj );
	fill_money_value_fromJSON( jsonObj );
	fill_trappings_values_fromJSON( jsonObj );
	fill_weapons_values_fromJSON( jsonObj );
}

/** ************************ */
/** 	get data from JSON	*/
/** ************************ */

function fillGeneralInfo_fromJSON( jsonObj )
{
	// *** general info
	$("#name").val( jsonObj["name"] );
	$("#race").val( jsonObj.race );
	$("#exp_total").val( jsonObj.exp_total );
	$("#exp_current").val( jsonObj.exp_current );

	// *** personal details
	$("#gender").val( jsonObj.gender );
	$("#age").val( jsonObj.age );
	$("#height").val( jsonObj.height );
	$("#weight").val( jsonObj.weight );
	$("#eyes").val( jsonObj.eyes );
	$("#hair").val( jsonObj.hair );
	$("#birthplace").val( jsonObj.birthplace );
	$("#distinguishing_marks").val( jsonObj.distinguishing_marks );

	// *** career
	$("#career_current").val( jsonObj.career_current );
	$("#career_exits").val( jsonObj.career_exits );
	$("#career_previous").val( jsonObj.career_previous );
}

function fill_mk1_values_fromJSON( jsonObj )
{
	var num_rows = 3;
	var num_col = skills_mk1.length;
	for(var r=0; r < num_rows; r++)
	{
		for(c=0; c < num_col; c++)
		{
			var input_name ="skill_"+skills_mk1[c]+"_"+r;
			$("#"+input_name).val( jsonObj[input_name] );
		}
	}
}

function fill_mk2_values_fromJSON( jsonObj )
{
	var num_rows = 3;
	var num_col = skills_mk2.length;
	for(var r=0; r < num_rows; r++)
	{
		for(c=0; c < num_col; c++)
		{
			var input_name ="skill_"+skills_mk2[c]+"_"+r;
			$("#"+input_name).val( jsonObj[input_name] );
		}
	}
}

function fill_armour_values_fromJSON( jsonObj )
{
	var num_rows = ARMOUR_NUMBER_COLUMNS;
	for(var r=0; r < num_rows; r++)
	{
		var input_name ="armour_"+r;
		$("#"+input_name).val( jsonObj[input_name] );
	}
}

function fill_talents_values_fromJSON( jsonObj )
{
	var num_rows = getNumTalents();
	var num_col = 2;

	for(var r=0; r < num_rows; r++)
	{
		for(var c=0; c < num_col; c++)
		{
			var input_name ="talent_"+r+"_"+c;
			$("#"+input_name).val( jsonObj[input_name] );
		}
	}
}

function fill_skills_values_fromJSON( jsonObj )
{
	var num_rows = getNumSkills();

	for(var r=0; r < num_rows; r++)
	{
		var id_name ="skill_taken_"+r;
		$("#"+id_name).prop('checked', jsonObj[id_name] );

		id_name ="skill_10_"+r;
		$("#"+id_name).prop('checked', jsonObj[id_name] );

		id_name ="skill_20_"+r;
		$("#"+id_name).prop('checked', jsonObj[id_name] );

		id_name ="skill_name_"+r;
		$("#"+id_name).innerHTML = jsonObj[id_name];

		id_name ="skill_refers_to_"+r;
		$("#"+id_name).innerHTML = jsonObj[id_name];

		id_name ="skill_talent_"+r;
		$("#"+id_name).innerHTML = jsonObj[id_name];
	}
}

function fill_money_value_fromJSON( jsonObj )
{
	for(var r=0; r < 3; r++)
	{
		var input_name ="money_"+r;
		$("#"+input_name).val( jsonObj[input_name] );
	}
}

function fill_trappings_values_fromJSON( jsonObj )
{
	var num_rows = getNumTrappings();
	var num_col = 2;

	for(var r=0; r < num_rows; r++)
	{
		for(var c=0; c < num_col; c++)
		{
			var input_name ="trapping_"+r+"_"+c;
			$("#"+input_name).val( jsonObj[input_name] );
		}
	}
}

function fill_weapons_values_fromJSON( jsonObj )
{
	var num_rows = getNumWeapons();

	for(var r=0; r < num_rows; r++)
	{
		var input_name ="weapon_name_"+r;
		$("#"+input_name).val( jsonObj[input_name] );

		input_name ="weapon_type_"+r;
		$("#"+input_name).val( jsonObj[input_name] );

		input_name ="weapon_damage_"+r;
		$("#"+input_name).val( jsonObj[input_name] );

		input_name ="weapon_notes_"+r;
		$("#"+input_name).val( jsonObj[input_name] );
	}
}



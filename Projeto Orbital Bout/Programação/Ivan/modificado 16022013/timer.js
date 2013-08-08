#pragma strict
var randomskin : GUISkin;
var StartTime: int;
var text : String;
var pode : boolean;
var yinicial : int;

function Awake() {
    StartTime = 90;
	pode = true;
	yinicial = 200;
}

function Update(){
	tempo();}   

function tempo(){
	if(pode){
	pode = false;
	yield WaitForSeconds(1.0);
	StartTime--;
	pode = true;}
	}
	
function OnGUI () {
GUI.skin = randomskin;
text = StartTime.ToString();
GUI.Label (Rect (Screen.width/2, yinicial, 100, 30), text);
}

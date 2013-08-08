#pragma strict
var nave : Nave;
//var tironave1: Nave;
var position : Vector3;
var offset : Vector3 = Vector3(10,10,0);

function Start () {
//tironave1=GameObject.FindGameObjectWithTag("Nave").GetComponent("tironave1");
nave=GameObject.FindGameObjectWithTag("Nave").GetComponent("Nave");
}

function Update () {
	posicao();
}

function posicao(){
	//position = nave.transform.position - offset;
}
//function OnGUI () {
	//GUI.DrawTexture(Rect(position.x, position.y, 20*tironave1.tempoForca, 5),textura);
	//}
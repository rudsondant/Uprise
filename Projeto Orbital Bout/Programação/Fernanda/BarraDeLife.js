/*------------------------------------------------------------------------------------------------------
Programador: Fernanda Monteiro
Data de Criação: 05/01/2013; Ultima Alteração: 05/01/2013
--------------------------------------------------------------------------------------------------------
Script criado para o projeto Orbital Bout da Equipe UpRise
Este script cria a barra de vida das naves.

-------------------------------------------------------------------------------------------------------*/
#pragma strict

var eixoX : float;
var eixoY : float;
var tam1 : float;
var tam2 : float;
var nave1 : GameObject;
var nave2 : GameObject;
var naveScript1 : Nave;
var naveScript2 : Nave;

var texturaBarra : Texture2D;


function Start () {
	
	naveScript1 = nave1.gameObject.GetComponent("Nave");
	naveScript2 = nave2.gameObject.GetComponent("Nave");
	

}

function Update () {


eixoX = Screen.width;
eixoY = Screen.height;

tam1 = eixoX/4 * (naveScript1.vida/naveScript1.vidaTotal);
tam2 = eixoX/4 * (naveScript2.vida/naveScript1.vidaTotal);



}


function OnGUI () {


     GUI.Box(Rect(0.03*eixoX, 0.05*eixoY, tam1, eixoY/15),texturaBarra);
     
     GUI.Box(Rect(eixoX - 0.03*eixoX - tam2, 0.05*eixoY, tam2, eixoY/15), texturaBarra);
     
}

#pragma strict

var nome:String="default name";
var id:int=0; //O ID do objeto
var preco:int=100; //custo
var textura:Texture2D; //textura (asset)
var alunos:int; //Quantidade de alunos adicionados
var largura:int; //x
var altura:int; //z
var plano:GameObject;
var position:Vector2;

public function Iniciar(){
	plano.renderer.material.mainTexture=textura;
	plano.transform.localScale= Vector3(largura,1,altura);
	var aF:float = altura;
	//Reposicionando
	plano.transform.parent.transform.position.y=aF/2;

}


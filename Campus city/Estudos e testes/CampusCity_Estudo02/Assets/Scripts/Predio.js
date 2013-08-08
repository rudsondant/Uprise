#pragma strict

var nome:String="default name";
var id:int=0; //O ID do objeto
var preco:int=100; //custo
var textura:Texture2D; //textura (asset)
var alunosG:int; //Quantidade de alunos adicionados
var professoresG:int; //Quantidade de professores adicionados
var funcionariosG:int; //Quantidade de funcionarios adicionados
var alunosP:int; //Quantidade de alunos alocados (perdidos)
var professoresP:int; //Quantidade de professores alocados (perdidos)
var funcionariosP:int; //Quantidade de funcionarios alocados (perdidos)
var ensino:int; //Pontuação de ensino adicionada
var pesquisa:int; //Pontuação de pesquisa adicionada
var extensao:int; //Pontuação de extensão adicionada
var ambientacao:int; //Pontuação de ambientacao
var largura:int; //x
var altura:int; //z
var plano:GameObject;
var position:Vector2;
var permitido:boolean;
var unico:boolean;

//var preRequisito:
//var jogador:Jogador;

public function Iniciar(){
	plano.renderer.material.mainTexture=textura;
	plano.transform.localScale= Vector3(largura,1,altura);
	var aF:float = altura;
	//Reposicionando
	plano.transform.parent.transform.position.y=aF/2;
	//jogador.prestigio -= preco;
}


#pragma strict

var nome:String="default name";
var id:int=0; //O ID do objeto
var preco:int=100; //custo
var textura:Texture2D; //textura (asset)
var alunosG:int; //Quantidade de alunos adicionados pelo prédio
var professoresG:int; //Quantidade de professores adicionados pelo prédio
var funcionariosG:int; //Quantidade de funcionarios adicionados pelo prédio
var alunosP:int; //Quantidade de alunos alocados (perdidos) para o prédio
var professoresP:int; //Quantidade de professores alocados (perdidos) para o prédio
var funcionariosP:int; //Quantidade de funcionarios alocados (perdidos) para o prédio
var ensino:int; //Pontuação de ensino adicionada pelo prédio
var pesquisa:int; //Pontuação de pesquisa adicionada pelo prédio
var extensao:int; //Pontuação de extensão adicionada pelo prédio
var ambientacao:int; //Pontuação de ambientacao adicionado pelo prédio
var largura:int; //x
var altura:int; //z
var plano:GameObject;//Gameobject do plano de construção
var position:Vector2;
var permitido:boolean;//Indica se o prédio pode ser construído no momento atual do jogo
var unico:boolean;//Indica se o prédio pode ser construído uma única vez
var life:int;//Indica o estado de preservação do prédio
var construido:boolean;
//var preRequisito:
//var jogador:Jogador;

public function Iniciar(){
	plano.renderer.material.mainTexture=textura;
	plano.transform.localScale= Vector3(largura,1,altura);
	var aF:float = altura;
	//Reposicionando
	plano.transform.parent.transform.position.y=aF/2;
	construido = true;
}


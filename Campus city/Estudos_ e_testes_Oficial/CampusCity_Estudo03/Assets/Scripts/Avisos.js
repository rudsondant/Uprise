#pragma strict
/*----------------------------------------------------------------------------------#
Programador: Pedro Klisley
Data de criação:  
Ultima Alteração: 15/09/2013
# Implementa os avisos que serão mostrados aos jogador
Os avisos poderão ser aleatórios ou determinísticos

===============SCRIPT NÃO TESTADO=============================

-------------------------------------------------------------------------------------*/
var ativo:boolean = false;// Indica se o script está ativo
var preReqConstrucao : GameObject[];// Quais prédios precisam ser construídos p/ ativar o aviso
var turnoAtivacao : int = 2;//Turno em que o aviso poderá ser ativado 
var contPermitido : int = 0;//Conta quantos prédios pré-requisitos foram construídos
var jogador : Jogador;
var ehAleatorio : boolean;//Indica se o aviso é aleatório ou não

function Start () {
	jogador = Camera.mainCamera.GetComponent(Jogador);//Inicializa jogador
}

function Update () {
	
	AtivarAviso();//Ativa aviso
	
	//print(contPermitido);
}


function AtivarAviso(){
	if(turnoAtivacao >= jogador.turnoAtual){
		/*for (permitido in preReqConstrucao){
			contPermitido++;//Contagem de predios permitidos
		}*/
	}
	//if(contPermitido==preReqConstrucao.Length)
	if(jogador.prestigio == 20000)
		ativo = true;//Se contador igual numero de prédios pre-requisitos construídos ativar aviso
	contPermitido = 0;//Zera contador
}

function MostrarMensagem(){
	
}

function LerXMl():String{
	return "Parabéns! Vc chegou a 20000 de Prestígio e ganhou uma condecoração!!!";
}
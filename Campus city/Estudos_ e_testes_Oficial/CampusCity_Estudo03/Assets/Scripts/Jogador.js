#pragma strict
public var nome:String = "Dona Maria";//Nome do Jogador
public var prestigio:int = 20000;//Pontuação do jogador
public var equilibrio:int;//Índice que mede o equilíbrio da gestão do campus entre ensino, pesquisa, extensão e infraestrutura
public var ensino:int = 0;//Pontuação de ensino
public var pesquisa:int = 0;//Pontuação de pesquisa
public var extensao:int = 0;//Pontuação de extensão
public var ambientacao:int = 0;//Pontuação de ambientação
public var numProfissionais:int[];//Vetor de número de profissionais
public var alunos:int = 0; //num de alunos
public var professores:int = 0; //num de professores
public var funcionarios:int = 0; //num de funcionarios
public var turnoAtual:int = 0;//Turno atual
public var turnoMax:int = 16;//Número de Turnos do jogo (Provavelmente nao haverá um número de turnos máximo)
public var qtdConstrucoes:int = 0;//Quantidade de predios construídos - Será utilizado no score

function Update () {
	var media : float = (ensino + pesquisa + extensao)/3;//Média dos pilares
	//Cálculo provisório do equilíbrio
	equilibrio = media*(1-0.01*Mathf.Sqrt((Mathf.Pow((ensino-media),2) + Mathf.Pow((pesquisa-media),2) + Mathf.Pow((extensao-media),2))/2));
}

function OnGUI(){

	//GUIs Temporária
	GUI.Box(Rect(Screen.width/2+Screen.width*0.2f,Screen.height*0.11f,Screen.width*0.13f,Screen.width*0.03f),"Equilíbrio: " + equilibrio);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.2f,Screen.height*0.17f,Screen.width*0.13f,Screen.width*0.03f),"Ensino: " + ensino);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.2f,Screen.height*0.23f,Screen.width*0.13f,Screen.width*0.03f),"Pesquisa: " + pesquisa);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.2f,Screen.height*0.29f,Screen.width*0.13f,Screen.width*0.03f),"Extensão: " + extensao);
	
	GUI.Box(Rect(Screen.width/2+Screen.width*0.33f,Screen.height*0.11f,Screen.width*0.13f,Screen.width*0.03f),"Ambientação: " + ambientacao);
	if(GUI.Button(Rect(Screen.width/2+Screen.width*0.33f,Screen.height*0.23f,Screen.width*0.14f,Screen.width*0.03f),"Finalizar Turno")){
		AvancarTurno();
	}
}

public function AvancarTurno(){
	if(turnoAtual==turnoMax){
		GameOver();
	}else{
		turnoAtual++;
		prestigio += 100*equilibrio + 5*ambientacao;
	}
}

public function GameOver(){
}
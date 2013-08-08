#pragma strict
public var nome:String;
//public var dinheiro:int;
public var prestigio:int = 20000;
public var equilibrio:int;
public var ensino:int = 0;
public var pesquisa:int = 0;
public var extensao:int = 0;
public var alunos:int = 0; //num de alunos
public var professores:int = 0; //num de professores
public var funcionarios:int = 0; //num de funcionarios
public var ambientacao:int = 0;
public var turnoAtual:int = 1;
public var turnoMax:int = 16;
public var qtdConstrucoes:int = 0;

function Start () {
	//Acessar
	
}

function Update () {
	var media : float = (ensino + pesquisa + extensao)/3;
	equilibrio = media*(1-0.01*Mathf.Sqrt((Mathf.Pow((ensino-media),2) + Mathf.Pow((pesquisa-media),2) + Mathf.Pow((extensao-media),2))/2));
}

function OnGUI(){//GUI Temporária
	GUI.Box(Rect(Screen.width/2+Screen.width*0.005f,Screen.height*0.05f,Screen.width*0.1f,Screen.width*0.03f),"Prestígio: " + prestigio);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.005f,Screen.height*0.11f,Screen.width*0.1f,Screen.width*0.03f),"Professores: " + professores);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.005f,Screen.height*0.17f,Screen.width*0.1f,Screen.width*0.03f),"Alunos: " + alunos);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.005f,Screen.height*0.23f,Screen.width*0.1f,Screen.width*0.03f),"Funcionarios: " + funcionarios);
	
	GUI.Box(Rect(Screen.width/2+Screen.width*0.135f,Screen.height*0.05f,Screen.width*0.1f,Screen.width*0.03f),"Equilíbrio: " + equilibrio);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.135f,Screen.height*0.11f,Screen.width*0.1f,Screen.width*0.03f),"Ensino: " + ensino);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.135f,Screen.height*0.17f,Screen.width*0.1f,Screen.width*0.03f),"Pesquisa: " + pesquisa);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.135f,Screen.height*0.23f,Screen.width*0.1f,Screen.width*0.03f),"Extensão: " + extensao);
	
	GUI.Box(Rect(Screen.width/2+Screen.width*0.265f,Screen.height*0.05f,Screen.width*0.1f,Screen.width*0.03f),"Turno Atual: " + turnoAtual);
	GUI.Box(Rect(Screen.width/2+Screen.width*0.265f,Screen.height*0.11f,Screen.width*0.1f,Screen.width*0.03f),"Ambientação: " + ambientacao);
	if(GUI.Button(Rect(Screen.width/2+Screen.width*0.265f,Screen.height*0.23f,Screen.width*0.15f,Screen.width*0.03f),"Finalizar Turno")){
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
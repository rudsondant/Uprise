#pragma strict
var skin:GUISkin[];
var construtor:Construtor;
var jogador:Jogador;

private var ferramenta:int=-1;//Índice da opção escolhida na barra de ferramentas (menu inferior)
var ferramentas:Texture2D[];//Ícones usados na barra de ferramentas (menu inferior)
var backgrounds:Texture2D[];//Backgrounds dos menus superior e inferior
var janelaTextura:Texture2D[];//Textura das janelas
var icones:Texture2D[];//Ícones usados na GUI
var textReitor:Texture2D;//Foto do Reitor
var movimentar:boolean;//Indica se é possível transladar tabuleiro
var indexProfissao : int;//Índica da profissão (aluno, professor ou funcionario)

function ProfissoesGUI(){//Janela que contém quantos profissionais não alocados o campus possui
	//Clica-se no ícone do profissional no menu superior para abrí-la
	var a : GUIContent = new GUIContent("");
	GUI.DrawTexture(Rect(Screen.width*0.00,Screen.height*0.00,Screen.width,Screen.width),backgrounds[1]);//Desenha Background menu Superior
	for(var i:int=0;i<3;i++){
		if(GUI.Button(Rect(Screen.width*0.01,Screen.height*(0.025+0.07*i),Screen.width*0.03,Screen.width*0.03),icones[i])){
			//Indica qual profissional será mostrado no menu superior e desativa própria janela
			indexProfissao = i;
			janelaProfAtivo = false;
			print(indexProfissao);
		}
		//GUI.Label(Rect(Screen.width*0.04,Screen.height*(0.045+0.07*i),Screen.width*0.09,Screen.width*0.03),jogador.alunos);
	}
	GUI.Label(Rect(Screen.width*0.04,Screen.height*0.025,Screen.width*0.09,Screen.width*0.03),"Alunos");
	GUI.Label(Rect(Screen.width*0.04,Screen.height*0.095,Screen.width*0.09,Screen.width*0.03),"Professores");
	GUI.Label(Rect(Screen.width*0.04,Screen.height*0.165,Screen.width*0.09,Screen.width*0.03),"Funcionários");
	GUI.skin=skin[3];//SkinIconeNomeAzul
	GUI.Label(Rect(Screen.width*0.04,Screen.height*0.045,Screen.width*0.09,Screen.width*0.03),jogador.alunos.ToString());//qtdAlunos
	GUI.Label(Rect(Screen.width*0.04,Screen.height*0.115,Screen.width*0.09,Screen.width*0.03),jogador.professores.ToString());//qtdProfessores
	GUI.Label(Rect(Screen.width*0.04,Screen.height*0.185,Screen.width*0.09,Screen.width*0.03),jogador.funcionarios.ToString());//qtdFuncionarios
}

var janelaProfAtivo : boolean;//Indica se a janela de profissões está ativa
function OnGUI(){
    
	var jogador:Jogador = transform.GetComponent(Jogador);
	GUI.DrawTexture(Rect(Screen.width*0,Screen.height*0,Screen.width,Screen.width*177/960/1.5),backgrounds[1]);//BarraSuperior
	//var indexProfissao : int = 2;
	var nomeProfissao : String;
	var qtdProfissao : int;
	switch(indexProfissao){
	case 0: 
		qtdProfissao = jogador.alunos;
		nomeProfissao = "Alunos";	
		break;
	case 1: 
		qtdProfissao = jogador.professores;
		nomeProfissao = "Professores";	
		break;
	case 2: 
		qtdProfissao = jogador.funcionarios;
		nomeProfissao = "Funcionários";	
		break;
	}
	//GUI do menu superior
	GUI.DrawTexture(Rect(Screen.width*0.01,Screen.height*0.025,Screen.width*0.03,Screen.width*0.03),icones[indexProfissao]);//IconeProfissao
	GUI.skin=skin[1];//SkinIcone
	if(GUI.Button(Rect(Screen.width*0.01,Screen.height*0.005,Screen.width*0.1,Screen.width*0.05),"")){//AlunosIcone		
		janelaProfAtivo = true;
	}
	if(janelaProfAtivo){
		var janelaProfissao: Rect = Rect(Screen.width*0.01,Screen.height*0.105,Screen.width*0.125,Screen.width*0.145);
		janelaProfissao = GUI.Window (0, janelaProfissao, ProfissoesGUI, "");
	}
	GUI.Label(Rect(Screen.width*0.045,Screen.height*0.015,Screen.width*0.09,Screen.width*0.02),nomeProfissao);
	GUI.Label(Rect(Screen.width*0.185,Screen.height*0.015,Screen.width*0.12,Screen.width*0.02),"Dias Restantes");
	GUI.Label(Rect(Screen.width*0.75,Screen.height*0.005,Screen.width*0.07,Screen.width*0.02),"Reitor(a)");
	GUI.DrawTexture(Rect(Screen.width*0.7,Screen.height*0.001,Screen.width*0.0364,Screen.width*0.045),textReitor);//FotoReitor
	
	GUI.skin=skin[2];//SkinNumero
	GUI.Label(Rect(Screen.width*0.045,Screen.height*0.032,Screen.width*0.07,Screen.width*0.03),qtdProfissao.ToString());
	GUI.DrawTexture(Rect(Screen.width*0.15,Screen.height*0.025,Screen.width*0.03,Screen.width*0.03),icones[3]);//Ampulheta
	GUI.Label(Rect(Screen.width*0.185,Screen.height*0.032,Screen.width*0.07,Screen.width*0.03),(jogador.turnoMax-jogador.turnoAtual).ToString());	
	GUI.Label(Rect(Screen.width*0.475,Screen.height*0.115,Screen.width*0.07,Screen.width*0.03),jogador.prestigio.ToString());
	
	GUI.skin=skin[3];//SkinIconeNomeAzul
	GUI.Label(Rect(Screen.width*0.477,Screen.height*0.155,Screen.width*0.07,Screen.width*0.02),"Prestígio");
	
	GUI.skin=skin[4];//SkinReitor
	var nomeReitor : String = "Maria da Silva";
	GUI.Label(Rect(Screen.width*0.75,Screen.height*0.025,Screen.width*0.2,Screen.width*0.1),jogador.nome);
	
	GUI.skin=skin[0];//SkinTransparente
	GUI.DrawTexture(Rect(Screen.width/2-180,Screen.height-50,360,50),backgrounds[0]);//BackGroundFerramentas
	ferramenta=GUI.Toolbar(Rect(Screen.width/2-160,Screen.height-70,320,100),ferramenta,ferramentas);
	//Fim da GUI do menu Superior
	
	
	if(ferramenta==0){//Abre janela de construção
		var janelaConstrucao: Rect = Rect(Screen.width*0.325f, Screen.height*0.525f,Screen.width*0.16f,Screen.width*0.23f);
		janelaConstrucao = GUI.Window (0, janelaConstrucao, Construcao, "Construções");
		construtor.ativo=false;
		movimentar = false;
	}
	else{
		construtor.ativo=true;
		movimentar = true;
	}
	
	switch(itemSelectedJan){//Verifica tipo de predio selecionado e abre respectiva janela
	case 0: 
		//var janelaDepartamento: Rect = Rect(Screen.width*0.02f, 60,200,Screen.width*(0.042f+0.019f*construtor.departamentos.length));
		var janelaDepartamento: Rect = Rect(Screen.width*0.005f, Screen.width*0.06,Screen.width*0.99,Screen.width*0.5f);
		janelaDepartamento = GUI.Window (0, janelaDepartamento, Unidades, "Departamentos");
		break;
	case 1:
		var janelaArvore: Rect = Rect(Screen.width*0.005f, Screen.width*0.06,Screen.width*0.99,Screen.width*0.5f);
		janelaArvore = GUI.Window (0, janelaArvore, Arvores, "Árvores");
		break;
	case 2:
		var janelaEstrada: Rect = Rect(Screen.width*0.005f, Screen.width*0.06,Screen.width*0.99,Screen.width*0.5f);
		janelaEstrada = GUI.Window (0, janelaEstrada, Estradas, "Estradas");
		break;
	case 3:
		var janelaEquipamento: Rect = Rect(Screen.width*0.005f, Screen.width*0.06,Screen.width*0.99,Screen.width*0.5f);
		janelaEquipamento = GUI.Window (0, janelaEquipamento, Equipamentos, "Equipamentos");
		break;
	}
	
}
var tipoPredio : int = 0;
var itemSelectedJan : int = -1;

function Construcao(){//Janela de escolha do tipo de prédio a ser construído
	
	for(var i:int=0;i<4;i++){
		GUI.DrawTexture(Rect(Screen.width*0.005,Screen.height*(0.005+0.09*i),Screen.width*0.035,Screen.width*0.04),icones[i+5]);//AlunosIcone	
		if(GUI.Button(Rect(Screen.width*0.005,Screen.height*(0.005+0.09*i),Screen.width*0.95,Screen.width*0.05),"fdjkahfkjh")){//AlunosIcone	
			tipoPredio = i;
			itemSelectedJan = i;
			print(tipoPredio);
			ferramenta=-1;
		}		
		//GUI.Label(Rect(Screen.width*0.04,Screen.height*(0.045+0.07*i),Screen.width*0.09,Screen.width*0.03),jogador.alunos);
	}
	
	GUI.Label(Rect(Screen.width*0.05,Screen.height*0.04,Screen.width*0.1,Screen.width*0.02),"Departamentos");
	GUI.Label(Rect(Screen.width*0.05,Screen.height*0.13,Screen.width*0.1,Screen.width*0.02),"Arborização");
	GUI.Label(Rect(Screen.width*0.05,Screen.height*0.22,Screen.width*0.1,Screen.width*0.02),"Estradas");
	GUI.Label(Rect(Screen.width*0.05,Screen.height*0.31,Screen.width*0.1,Screen.width*0.02),"Equipamentos");
}

function Unidades(){//Janela de escolha de departamento a ser construído
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height),janelaTextura[1]);
	GUI.DrawTexture(Rect(0,Screen.height*0.0f,Screen.width,Screen.height*0.05f),janelaTextura[0]);
	GUI.DrawTexture(Rect(0,Screen.height*0.71f,Screen.width,Screen.height*0.1f),janelaTextura[2]);
	var departamentos = construtor.departamentos;
	for(var i=1; i<departamentos.length;i++){
		var nome:String = departamentos[i].GetComponent(Predio).nome;
			GUI.color = Color.black;
			var espLargura : int = 97; 
			var espAltura : int = 60;
			var predioTextura:Texture2D = departamentos[i].GetComponent(Predio).textura;
			GUI.color = Color.white;
			GUI.DrawTexture(Rect(Screen.width*0.03f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.06f),predioTextura);
			var skinAux : GUISkin = GUI.skin;
			GUI.skin=skin[5];//SkinSelecao
			if(!departamentos[i].GetComponent(Predio).permitido)
				GUI.color = Color.white;
			else
				GUI.color = Color.black;
			GUI.Label(Rect(Screen.width*0.028f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*(1 + (i-1)/10),Screen.width*0.06f,Screen.width*0.03f),nome);
			GUI.skin=skinAux;//SkinSelecao
			if(GUI.Button(Rect(Screen.width*0.01f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.09f)," ")){
				construtor.predioAtual[tipoPredio]=i;
				construtor.ativo=true;
				movimentar = true;
				itemSelectedJan = -1;
			}
			//print(Screen.width*0.06f);
	}

}


function Arvores(){//Janela de escolha de árvore a ser construída
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height),janelaTextura[1]);
	GUI.DrawTexture(Rect(0,Screen.height*0.0f,Screen.width,Screen.height*0.05f),janelaTextura[0]);
	GUI.DrawTexture(Rect(0,Screen.height*0.71f,Screen.width,Screen.height*0.1f),janelaTextura[2]);
	var arvores = construtor.arvores;
	for(var i=1; i<arvores.length;i++){
		var nome:String = arvores[i].GetComponent(Predio).nome;
			var espLargura : int = 97; 
			var espAltura : int = 60;
			var predioTextura:Texture2D = arvores[i].GetComponent(Predio).textura;
			GUI.color = Color.white;
			GUI.DrawTexture(Rect(Screen.width*0.03f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.06f),predioTextura);
			var skinAux : GUISkin = GUI.skin;
			GUI.skin=skin[5];//SkinSelecao
			if(!arvores[i].GetComponent(Predio).permitido)
				GUI.color = Color.white;
			else
				GUI.color = Color.black;
			GUI.Label(Rect(Screen.width*0.028f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*(1 + (i-1)/10),Screen.width*0.06f,Screen.width*0.03f),nome);
			GUI.skin=skinAux;//SkinSelecao
			if(GUI.Button(Rect(Screen.width*0.01f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.09f)," ")){
				construtor.predioAtual[tipoPredio]=i;
				construtor.ativo=true;
				movimentar = true;
				itemSelectedJan = -1;
			}
	}
}

function Estradas(){//Janela de escolha de estrada a ser construída
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height),janelaTextura[1]);
	GUI.DrawTexture(Rect(0,Screen.height*0.0f,Screen.width,Screen.height*0.05f),janelaTextura[0]);
	GUI.DrawTexture(Rect(0,Screen.height*0.71f,Screen.width,Screen.height*0.1f),janelaTextura[2]);
	var estradas = construtor.estradas;
	for(var i=1; i<estradas.length;i++){
		var nome:String = estradas[i].GetComponent(Predio).nome;
			var espLargura : int = 97; 
			var espAltura : int = 60;
			var predioTextura:Texture2D = estradas[i].GetComponent(Predio).textura;
			GUI.color = Color.white;
			GUI.DrawTexture(Rect(Screen.width*0.03f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.06f),predioTextura);
			var skinAux : GUISkin = GUI.skin;
			GUI.skin=skin[5];//SkinSelecao
			if(!estradas[i].GetComponent(Predio).permitido)
				GUI.color = Color.white;
			else
				GUI.color = Color.black;
			GUI.Label(Rect(Screen.width*0.028f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*(1 + (i-1)/10),Screen.width*0.06f,Screen.width*0.03f),nome);
			GUI.skin=skinAux;//SkinSelecao
			if(GUI.Button(Rect(Screen.width*0.01f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.09f)," ")){
				construtor.predioAtual[tipoPredio]=i;
				construtor.ativo=true;
				movimentar = true;
				itemSelectedJan = -1;
			}
	}
}

function Equipamentos(){//Janela de escolha de equiamento a ser construído
	var equipamentos = construtor.equipamentos;
	for(var i=1; i<equipamentos.length;i++){
		var nome:String = equipamentos[i].GetComponent(Predio).nome;
			var espLargura : int = 100; 
			var espAltura : int = 60;
			var predioTextura:Texture2D = equipamentos[i].GetComponent(Predio).textura;
			GUI.DrawTexture(Rect(Screen.width*0.01f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.06f),predioTextura);
			var skinAux : GUISkin = GUI.skin;
			GUI.skin=skin[5];//SkinSelecao
			if(!equipamentos[i].GetComponent(Predio).permitido)
				GUI.color = Color.black;
			else
				GUI.color = Color.white;
			GUI.Label(Rect(Screen.width*0.01f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*(1 + (i-1)/10),Screen.width*0.06f,Screen.width*0.03f),nome);
			GUI.skin=skinAux;//SkinSelecao
			if(GUI.Button(Rect(Screen.width*0.01f+espLargura*((i-1)%10),Screen.height*0.0f+espAltura*((i-1)/10),Screen.width*0.06f,Screen.width*0.09f)," ")){
				construtor.predioAtual[tipoPredio]=i;
				construtor.ativo=true;
				movimentar = true;
				itemSelectedJan = -1;
			}
	}
}

var zoom:float=5;
var grid:GameObject;

function Update () {
    ZoomMapa();
	TransladarMapa();
}

function TransladarMapa(){
	if(movimentar && Input.GetMouseButtonDown(2)){
		var screenPoint : Vector3;
		var offset : Vector3;
 		screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
 		offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
		var curScreenPoint : Vector3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
 		var curPosition : Vector3 = Camera.main.ScreenToWorldPoint(curScreenPoint);
		transform.position = curPosition;
 	}
}

function ZoomMapa(){//ZOOM
	if (Input.GetAxis("Mouse ScrollWheel") < 0 && zoom<80) // back
        {
             zoom+= 0.2;
        }
      if (Input.GetAxis("Mouse ScrollWheel") > 0 && zoom>2) // forward
        {
           zoom-=0.2;
        }
	Camera.main.orthographicSize=zoom;
	//grid = GameObject.Find("Grid");
	//print(grid.name);
	//print(Camera.main.ScreenToWorldPoint(Input.mousePosition));
}
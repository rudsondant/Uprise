#pragma strict
//Terreno Inicial
static var grid:int[,]; //IDS
static var gridObj:GameObject[,]; //Objetos de jogo;

var tamGrid:int=100; //Tamanho da grid
var planoBase:GameObject;
private var myGrid:GameObject;

//Construção
var predios:GameObject[];
var predioAtual:int=0; //O ID do prédio a ser construido


//Se a construção está ativa
public var ativo:boolean=false;


function Start(){
	grid=new int[tamGrid,tamGrid];
	gridObj= new GameObject[tamGrid,tamGrid];
	print("#C#-Criando uma grid com: "+grid.Length+" quadrados de ID:"+0);
	myGrid= new GameObject("Grid");
	myGrid.transform.position=Vector3(0,0,0);
	var quadrados:GameObject[];

	for(var i=0; i<tamGrid; i++){
		for(var j=0; j<tamGrid;j++){
			var newPlane = Instantiate(planoBase.transform, Vector3(i-tamGrid/2,0,j-tamGrid/2),planoBase.transform.rotation);
			
			//Nomeando baseados na posição da matriz
			newPlane.name="Ponto "+i+","+j;
			
			//Indicando o ponto que ele pertence na grid
			var indicador:IndicadorSeLivre = newPlane.GetComponent(IndicadorSeLivre);
			indicador.posM=Vector2(i,j);
			
			//Inserindo na Grid
			grid[i,j]=0;
			gridObj[i,j]=newPlane.gameObject;

			//Rotacionando o ponto
			//newPlane.transform.RotateAround(myGrid.transform.position, Vector3.up, 45);
			
			newPlane.transform.parent = myGrid.transform;
		}
	}
	
	//myGrid.transform.localRotation
	myGrid.transform.RotateAround(Vector3.zero, Vector3.up, 45);
	//Camera.mainCamera.transform.position.x-=Mathf.Sin(45)+tamGrid/2;
	//Preenchendo a grid com grama;
	for (var quadrado : Transform in myGrid.transform) {
		Construir(0,quadrado.transform);
	}
	
	IniciarPermissao();
}


function Update () {
	if(ativo){
		if(Input.GetMouseButtonDown(0)){ //se clicar com o botão esquerdo do mouse
			var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition); //criando um raio
			var hit: RaycastHit; //o objeto colidido
			var PA : GameObject = predios[predioAtual];
			var predio1 : Predio = PA.GetComponent(Predio);
			var jogador:Jogador = transform.GetComponent(Jogador);
			var permite:boolean = false;
			if((jogador.prestigio-predio1.preco >= 0) && (jogador.alunos-predio1.alunosP >= 0) && (jogador.professores-predio1.professoresP >= 0) && (jogador.funcionarios-predio1.funcionariosP >= 0))
				permite = true;
			if (Physics.Raycast (ray,hit, Mathf.Infinity) && hit.transform.tag== "livre" && predio1.permitido && permite){
				print("clicou em alguma coisa");
				Construir(predioAtual,hit.transform);
				hit.transform.tag="usado";
				if(predioAtual==0) //Se for grama
					hit.transform.tag="livre"; 
			}
		}
		
		if(Input.GetMouseButtonDown(1)){ //se clicar com o botão esquerdo do mouse
			var ray2 : Ray = Camera.main.ScreenPointToRay(Input.mousePosition); //criando um raio
			var hit2: RaycastHit; //o objeto colidido
			if (Physics.Raycast (ray2,hit2, Mathf.Infinity) && hit2.transform.tag== "usado"){
				print("clicou em alguma coisa");
				//Construir(predioAtual,hit.transform);
				Limpar(hit2.transform);
				hit2.transform.tag="livre";
			}
		}
	
	}
}


public function Construir(pID:int,h:Transform){
	var p:Transform = predios[pID].transform;
	var np = Instantiate(p.transform, Vector3(h.position.x,0,h.position.z),p.transform.rotation);
	var predio:Predio = np.GetComponent(Predio);
	var jogador:Jogador = transform.GetComponent(Jogador);
	//Limpando os filhos do quadrado;
	for (var child : Transform in h) {
		Destroy(child.gameObject);
	}

	//transform.childCount
	np.transform.parent=h;
	predio.Iniciar();
	print("construiu");
	
	LiberarPredio(pID);
	
	//Mudanças nos scores do jogador devido à construção
	jogador.prestigio -= predio.preco;
	jogador.ensino += predio.ensino;
	jogador.pesquisa += predio.pesquisa;
	jogador.extensao += predio.extensao;
	jogador.ambientacao += predio.ambientacao;
	jogador.alunos += predio.alunosG;
	jogador.professores += predio.professoresG;
	jogador.funcionarios += predio.funcionariosG;
	jogador.alunos -= predio.alunosP;
	jogador.professores -= predio.professoresP;
	jogador.funcionarios -= predio.funcionariosP;
	//jogador.AvancarTurno();
	
	//Limpando as demais áreas se a construcao for maior que um quadrado
	var tamP:int=predio.altura;
	var indicador:IndicadorSeLivre = h.GetComponent(IndicadorSeLivre);
	var pos:Vector2=indicador.posM; //Posição na matriz;
	if(tamP==3){
			Apagar(gridObj[pos.x+1,pos.y+1].transform);
			Apagar(gridObj[pos.x,pos.y+1].transform);
			Apagar(gridObj[pos.x-1,pos.y+1].transform);
			Apagar(gridObj[pos.x+1,pos.y].transform);
			Apagar(gridObj[pos.x-1,pos.y].transform);
			Apagar(gridObj[pos.x+1,pos.y-1].transform);
			Apagar(gridObj[pos.x,pos.y-1].transform);
			Apagar(gridObj[pos.x-1,pos.y-1].transform);
			//Inserindo-os como "usados"
			
			gridObj[pos.x+1,pos.y+1].transform.tag="usado";
			gridObj[pos.x,pos.y+1].transform.tag="usado";
			gridObj[pos.x-1,pos.y+1].transform.tag="usado";
			gridObj[pos.x+1,pos.y].transform.tag="usado";
			gridObj[pos.x-1,pos.y].transform.tag="usado";
			gridObj[pos.x+1,pos.y-1].transform.tag="usado";
			gridObj[pos.x,pos.y-1].transform.tag="usado";
			gridObj[pos.x-1,pos.y-1].transform.tag="usado";
	}
	//if(predio.unico)
		//predio.permitido = false;
}

public function Limpar(h:Transform):boolean{
	//Limpando os filhos do quadrado;
	Apagar(h);
	Construir(0,h);
	h.transform.tag="livre";
	return true;
}

public function Apagar(h:Transform):boolean{
	//Limpando os filhos do quadrado;
	for (var child : Transform in h) {
		Destroy(child.gameObject);
	}
	
}

public function IniciarPermissao(){
	for(var i:int = 2;i<=predios.length-2;i++){
		var pLiberado : GameObject = predios[i];
		var predioLiberado : Predio = pLiberado.GetComponent(Predio);
		predioLiberado.permitido = false;
	}
}
public function LiberarPredio(predioConstruido:int){
	if(predioConstruido==1){
		for(var i : int = 2;i<=7;i++){
			var pLiberado : GameObject = predios[i];
			var predioLiberado : Predio = pLiberado.GetComponent(Predio);
			predioLiberado.permitido = true;
		}
	}
	else if(predioConstruido==2){
		for(i=8;i<=14;i++){
			pLiberado = predios[i];
			predioLiberado = pLiberado.GetComponent(Predio);
			predioLiberado.permitido = true;
		}
	}
	else if(predioConstruido==4){
		//for(i=6;i<=6;i++){
			pLiberado = predios[15];
			predioLiberado = pLiberado.GetComponent(Predio);
			predioLiberado.permitido = true;
		//}
	}
	else if(predioConstruido==8){
		for(i=16;i<=24;i++){
			pLiberado = predios[i];
			predioLiberado = pLiberado.GetComponent(Predio);
			predioLiberado.permitido = true;
		}
	}
	else if(predioConstruido==21){
		//pLiberado = predios[3];
		//predioLiberado = pLiberado.GetComponent(Predio);
		//if(predioLiberado.permitido){
			pLiberado = predios[25];
			predioLiberado = pLiberado.GetComponent(Predio);
			predioLiberado.permitido = true;
		//}
	}
	else if(predioConstruido==17){
		//pLiberado = predios[3];
		//predioLiberado = pLiberado.GetComponent(Predio);
		//if(predioLiberado.permitido){
			pLiberado = predios[26];
			predioLiberado = pLiberado.GetComponent(Predio);
			predioLiberado.permitido = true;
		//}
	}
	pLiberado = predios[predioConstruido];
	predioLiberado = pLiberado.GetComponent(Predio);
	if(predioLiberado.unico){
		predioLiberado.permitido = true;
	}
}
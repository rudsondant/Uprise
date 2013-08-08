//Colocar no Eixo do canhao
#pragma strict

var texturaMira:Texture;
var boxArest:float=10;
var altura:float=1;
//var centro:Transform; //eixo central dos canhoes
var pontos:GameObject[];
var Canhao:GameObject;
var angInicial:float;
var naArea:boolean=false;
var deltaAng:float;

function Start(){
	angInicial=Canhao.transform.eulerAngles.z;
	criarLimites();
	deltaAng=transform.eulerAngles.z;
	
}

function criarLimites(){
	pontos=new GameObject[2];
	
	for(var i:int=0; i<pontos.Length;i++){
		pontos[i]= new GameObject("ponto");
		pontos[i].transform.parent=gameObject.transform;
	}
	var base = new GameObject("Base");
	base.transform.parent=gameObject.transform;
	base.transform.transform.position=transform.position;
	//A
	pontos[0].name="A";
	pontos[0].transform.localPosition = Vector3(-boxArest, 0, 0);
	pontos[0].transform.position.y=transform.position.y+altura;
	pontos[0].transform.position.x=transform.position.x-boxArest;
	pontos[0].transform.parent=base.transform;
	//B
	pontos[1].name="B";
	pontos[1].transform.localPosition = Vector3(boxArest, 0, 0);
	pontos[1].transform.position.y=transform.position.y+altura;
	pontos[1].transform.position.x=transform.position.x+boxArest;
	pontos[1].transform.parent=base.transform;
	
	base.transform.eulerAngles=transform.eulerAngles;
}


function Update () {
	//Screen.showCursor = false;
	var posMouse:Vector2 = Input.mousePosition;
	//var posCanScreen:Vector2
	DetectarArea();
	DetectarAngulo();
}

function OnGUI(){
	GUI.DrawTexture(Rect(Input.mousePosition.x-10,Screen.height-Input.mousePosition.y-10,20,20),texturaMira);
}

function DetectarAngulo(){
	var mw=Camera.main.ScreenToWorldPoint (Input.mousePosition); //Posicao do mouse no World
	//var angulo=Vector3.Angle(transform.position,posMW);
	//var angulo = Mathf.Atan2(posMW.y, relative.z) * Mathf.Rad2Deg;
	//Debug.DrawLine (transform.position,mw, Color.white);
	
	var relative : Vector3  = transform.InverseTransformPoint(mw);
    var angle : float = Mathf.Atan2(relative.x, relative.y) * Mathf.Rad2Deg;
   
    if(naArea){
    	
    	Canhao.transform.eulerAngles.z = angInicial-angle; 	 	
    }

}

function DetectarArea(){
	
	var mW=Camera.main.ScreenToWorldPoint(Input.mousePosition); //Posicao do mouse no World
	var mWL= transform.InverseTransformPoint(mW);
	var A = transform.InverseTransformPoint(pontos[0].transform.position);
	var B = transform.InverseTransformPoint(pontos[1].transform.position);
	
	Debug.DrawLine (pontos[0].transform.position, pontos[1].transform.position, Color.blue);
	
	if(mWL.x>A.x && mWL.x<B.x && mWL.y>A.y){
		naArea=true;
	}
	else{
		naArea=false;
	}
	
	
	
}
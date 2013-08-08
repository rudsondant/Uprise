#pragma strict
var skin:GUISkin;
var construtor:Construtor;
var jogador:Jogador;

private var ferramenta:int=-1;
var ferramentas:Texture2D[];
var backFerramentas:Texture2D;

//Unidades

function OnGUI(){
	GUI.skin=skin;
	GUI.DrawTexture(Rect(Screen.width/2-180,Screen.height-50,360,50),backFerramentas);
	ferramenta=GUI.Toolbar(Rect(Screen.width/2-160,Screen.height-70,320,100),ferramenta,ferramentas);
	var aux: boolean = false;
	var vSbarValue : float;
    //vSbarValue = GUI.VerticalScrollbar(Rect (625, 25, 100, 300), vSbarValue, 1.0, 10.0, 0.0);
	//GUI.TextArea(Rect (625, 25, 100, 300),"aaaaaaaaa",5);
	//vSbarValue = GUI.VerticalSlider(Rect (625, 25, 100, 300), vSbarValue, 10.0, 0.0);
	
	
	if(ferramenta==0){
		//aux = !aux;
		Unidades(aux);
	}
	else{
		//construtor.ativo=false;
		construtor.ativo=false;
	}
	
}

function Unidades(aux:boolean){
	var predios = construtor.predios;
	construtor.ativo=true;
	//if(aux){
		//for(var i=1; i<predios.length;i++){
		for(var i=1; i<predios.length;i++){
			var nome:String = predios[i].GetComponent(Predio).nome;
			if(!predios[i].GetComponent(Predio).permitido)
				GUI.color = Color.black;
			else
				GUI.color = Color.white;
			//if(!construtor.ativo){
				GUI.Label(Rect(Screen.width/2-160,Screen.height-70-20*predios.length+20*i,200,20),nome);
				if(GUI.Button(Rect(Screen.width/2-160,Screen.height-70-20*predios.length+20*i,200,20)," ")){
					construtor.predioAtual=i;
					construtor.ativo=true;	
				}
				/*if(i<19){
					GUI.Label(Rect(Screen.width/2-160,Screen.height-70-20*18+20*i,140,20),nome);
					if(GUI.Button(Rect(Screen.width/2-160,Screen.height-70-20*18+20*i,140,20)," ")){
						construtor.predioAtual=i;
						construtor.ativo=true;	
					}
				}*/
				/*else{
					GUI.Label(Rect(Screen.width/2-160,Screen.height-70-20*(predios.length-19)+20*i,140,20),nome);
					if(GUI.Button(Rect(Screen.width/2-160,Screen.height-70-20*(predios.length-19)+20*i,140,20)," ")){
						construtor.predioAtual=i;
						construtor.ativo=true;	
					}
				}*/
			/*var scrollPosition : Vector2;
			scrollPosition = GUI.BeginScrollView (Rect (900,300,200,200),scrollPosition, Rect (0, 0, 220, 200),false,true);	
				GUI.Label(Rect(0,20*predios.length+20*i,200,20),nome);
				if(GUI.Button(Rect(0,20*predios.length+20*i,200,20)," ")){
					construtor.predioAtual=i;
					//construtor.ativo=true;	
				}
			GUI.EndScrollView();*/
			//}
		}
		/*for(i=19; i<predios.length;i++){
			nome = predios[i].GetComponent(Predio).nome;
			if(!predios[i].GetComponent(Predio).permitido)
				GUI.color = Color.black;
			else
				GUI.color = Color.white;
			GUI.Label(Rect(Screen.width/2-160,Screen.height-70-20*(predios.length-19)+20*i,200,20),nome);
			if(GUI.Button(Rect(Screen.width/2-160,Screen.height-70-20*(predios.length-19)+20*i,200,20)," ")){
				construtor.predioAtual=i;
				construtor.ativo=true;	
			}
		}*/
	
}

var zoom:float=5;
//ZOOM
function Update () {
	
    //if (Input.GetAxis("Mouse ScrollWheel") < 0 && zoom<8) // back
    if (Input.GetAxis("Mouse ScrollWheel") < 0 && zoom<80) // back
        {
             zoom+= 0.2;
 
        }
      //  if (Input.GetAxis("Mouse ScrollWheel") > 0 && zoom>2) // forward
      if (Input.GetAxis("Mouse ScrollWheel") > 0 && zoom>2) // forward
        {
           zoom-=0.2;
        }
	Camera.main.orthographicSize=zoom;

}
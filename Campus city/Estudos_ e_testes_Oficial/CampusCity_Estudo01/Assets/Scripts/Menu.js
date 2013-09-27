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
	
	if(ferramenta==0){
		Unidades();
	}
	else{
		construtor.ativo=false;
	}
	
}

function Unidades(){
	var predios = construtor.predios;
	construtor.ativo=true;
	for(var i=0; i<predios.length;i++){
		var nome:String = predios[i].GetComponent(Predio).nome;
		GUI.Label(Rect(Screen.width/2-160,Screen.height-70-20*predios.length+20*i,100,20),nome);
		if(GUI.Button(Rect(Screen.width/2-160,Screen.height-70-20*predios.length+20*i,100,20)," ")){
			construtor.predioAtual=i;
		
		}
	}


}

var zoom:float=5;
//ZOOM
function Update () {
	
    if (Input.GetAxis("Mouse ScrollWheel") < 0 && zoom>2) // back
        {
             zoom-= 0.2;
 
        }
        if (Input.GetAxis("Mouse ScrollWheel") > 0 && zoom<8) // forward
        {
           zoom+=0.2;
        }
	Camera.main.orthographicSize=zoom;

}
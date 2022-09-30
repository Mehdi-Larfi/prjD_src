var size = 0;
const participants = [];
const nombre = [];
let x = 0;
let r = 0;

function returnValue(){
	var y = document.getElementById("taille").value;
	if(y>30){
		document.getElementById("nbparticipant").innerHTML ="!!! Erreur : Nombre trop élevé !!!";
	}else{
		size = y - 1;
		document.getElementById("nbparticipant").innerHTML ="Participants : " + (size + 1);
		document.getElementById("taille").value = "";
	}
}


function returnParticipants(){
	if(size>0){
		participants[x] = document.getElementById("nom").value;
		nombre[x] = document.getElementById("nombre").value;
		alert("Enregistré " + participants[x] + ", " + nombre[x] + " !");
		if(x<size){
			x = x + 1;
		}else if(x>=size){
			r = Math.floor(Math.random() * (size));
			var nom = participants[r];
			var numero = nombre[r];
			document.getElementById("resultat").innerHTML = "Bravo !! " + nom + " gagne avec le nombre : " + numero + " !";
			size = 0;
			x = 0;
	}
	}
	
	document.getElementById("nom").value = "";
	    document.getElementById("nombre").value = "";
}


function recommencer(){
	document.getElementById("tirageausort").reset();  
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("nbparticipant").innerHTML = "";
}

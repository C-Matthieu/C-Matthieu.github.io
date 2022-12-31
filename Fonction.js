// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
// création des constantes, variables et listes
document.body.style.background = 'grey';
document.getElementById('entree').focus();
let motEtud;
const a = location.search;  // récupére les élement dans le lien
let virgule = false;
let langue = "";
let liste = "";
for (let i = 1; i<a.length; i++){
	if (a[i] != ',' && virgule == false){
		langue += a[i];
	}
	else if (virgule == true){
		liste += a[i];
	}
	else {
		virgule = true;
	}

}
let fautes = 0;
let ciudadano = [["ciudadanía", "citoyenneté"] , ["los derechos", "les droits"],
                                 ["un ciudadano", "un citoyen"], ["ejercer", "exercer"], ["comprometerse", "s'engager"],
                                 ["las redes sociales", "les réseaux sociaux"], ["favorecer", "favoriser"],
                                 ["peligrar", "mettre en danger"],
                                 ["los bulos/las falsas noticias", "les fausses informations"],
                                 ["educación a los medios de communicación", "l'éducation au média"],
                                 ["los pagos virtuales", "les paiements virtuels"],
                                 ["los datos personales", "les données personnelles"],
                                 ["la inteligencia artificial", "l'intelligence artificielle"],
                                 ["el ciberacoso", "le cyber-harcèlement"],
                                 ["la usurpación de identidad", "l'usurpation d'identité"],
                                 ["el robo de identidad", "l'usurpation d'identité"],
                                 ["los foros", "les forums"], ["un denunciante", "un lanceur d'alerte"],
                                 ["soler", "avoir l'habitude"], ["el móvil", "le téléphone portable"],
                                 ["hacer llamadas", "passer des appels"], ["cualquier", "n'importe"],
                                 ["estar acostumbrado a", "être habitué à"], ["ligar", "draguer"],
                                 ["intercambiar", "échanger"], ["buscar informaciones", "chercher des informations"],
                                 ["riesgos/peligros", "danger"], ["bajar", "télécharger"], ["subir", "mettre en ligne"],
                                 ["una herramienta", "un outil"]];
let todo = [["llegar", "arriver"], ["una solicitud de amistad", "un demande d'amis"],
                         ["molestar", "déranger"], ["comprobar", "vérifier"], ["una sospecha", "un soupçon/suspicion"],
                         ["hacerse pasar por", "se faire passer pour"], ["la intimidad", "l intimité"],
                         ["el cuarto", "la chambre"], ["la pantalla del ordenador", "l écran de l ordinateur"],
                         ["hacer daño", "faire du mal"], ["doñar", "nuire"], ["eliminar", "éliminer"],
                         ["ralentizar", "ralentir"], ["crackear", "craquer"], ["chatear", "chater"],
                         ["un rato", "un moment"],
                         ["bajar", "télécharger"], ["subir", "mettre en ligne"], ["una página", "une page"],
                         ["un enlace", "un lien"], ["un ataque", "une attaque"],
                         ["los piratas informáticos", "les pirates informatiques"],
                         ["wasapear", "envoyer un message par Wasap"], ["despreocupado", "insouciant"],
                         ["webcam", "caméra"],
                         ["el portátil", "le portable (ordinateur)"], ["la mesa", "la table"], ["la cama", "le lit"],
                         ["control remoto", "control à distance"], ["creepware", "cheval de Troie"],
                         ["el micrófono", "le microphone"], ["grabar", "enregistrer"], ["desnudar", "déshabiller"],
                         ["pillar", "attraper"], ["ordenador", "ordinateur"], ["aceptar", "accepter"],
                         ["actualizar", "actualiser"], ["una plataforma", "une plateforme"], ["un sitio", "un site"],
                         ["un perfil falso", "un faux profil"], ["jaquear", "hacker"],
                         ["un programa malicioso", "un programme malveillant"], ["desconocido", "inconnu"],
                         ["aprovecharse", "profiter de"], ["mandar", "envoyer"],
                         ["los datos personales", "les données personnelles"],
                         ["la rapidez/la velocidad", "la rapidité"],
                         ["pagar", "payer"], ["los objectos conectados", "les objets connectés"],
                         ["concienciar", "faire prendre conscience"], ["proteger", "protéger"],
                         ["tomar precauciones", "prendre des précautions"], ["desfase", "décalage"],
                         ["dejar", "laisser"], ["ni siquiera", "même pas"], ["fuera", "en dehors"],
                         ["frente", "devant"], ["definitivamente", "en définitive"], ["el barrio", "le quartier"],
                         ["alguien", "quelqu'un"], ["a través", "à travers"], ["vale dinero", "valoir de l'argent"],
                         ["tener acceso a", "avoir accer à"], ["el funcionamiento", "le fonctionnement"],
                         ["la ingenuidad", "la naïveté"], ["una tonterÍa", "une broutille"], ["comentar", "commenter"],
                         ["una ocurrencia", "une idée soudaine"], ["una contraseña", "mot de passe"],
                         ["tener cuidado", "faire attention"], ["hacer clic", "faire un clic"], ["rechazar", "refuser"]];

let laPintura = [["una novela", "une nouvelle"], ["la conversación", "la conversation"], ["el papel", "le rôle"],
             ["según", "selon"], ["decorativo", "décoratif"], ["cambiar", "changer"],
             ["un artista comprometido", "un artiste engagé"], ["aislado", "isolé"], ["despertar", "éveiller"],
             ["concienciar", "faire prendre conscience"], ["el estado del mundo", "l'état du monde"],
             ["la condición humana", "la condition humaine"], ["sacudir", "secouer"], ["creer", "croire"],
             ["burlarse", "se moquer"], ["tachar", "rayer"], ["semejante", "semblable"], ["rodear", "entourer"],
             ["un alma", "una âme"], ["suscitar", "susciter"], ["transmitir", "transmettre"], ["la angustia", "l'angoisse"],
             ["la confusión", "la confusion"], ["dar miedo", "faire peur"], ["asustar", "effrayer"],
             ["desprender", "dégager"], ["el desorden", "le désordre"], ["la técnica", "la technique"],
             ["óleo sobre lienzo", "huile sur toile"], ["los colores", "les couleurs"],
             ["en blanco y negro", "en noir et blanc"], ["grises", "gris"], ["la forma", "la façon/la manière"],
             ["el tamaño", "la taille"], ["un rectángulo", "un rectangle"], ["horizontal", "horizontal"],
             ["vertical", "vertical"], ["medir", "mesurer"], ["mide", "mesure"], ["por", "par"],
             ["el bombardeo", "le bombardement"], ["un elemento clave", "un élément clé"],
             ["la composición", "la composition"], ["la estructura", "la structure"],
             ["a primera vista", "à première vue"], ["la perspectiva", "la perspective"],
             ["un respeto", "un respect"], ["la profundidad", "la profondeur"], ["el volumen", "le volume"],
             ["la luz", "la lumière"], ["las luces", "les lumières"], ["una lámpara", "une lampe"],
             ["un quinqué", "une lampe à huile"], ["el movimiento", "le mouvement"],
             ["las lineas curvas", "les courbes"], ["las lineas rectas", "les lignes droites"], ["vacío", "vide"],
             ["lleno", "plein"], ["dirigirse", "se diriger"], ["hacia", "vers"], ["la izquierda", "la gauche"],
             ["la derecha", "la droite"], ["con respecto a", "par rapport à"], ["el ejército", "l'armée"],
             ["ornamental", "ornemental"], ["las paredes", "les murs"], ["los pintores", "les peintres"],
             ["es decir", "c'est à dire"], ["artístico", "artistique"], ["irónico", "ironique"],
             ["a lo mejor", "peut-être"], ["o sea", "c'est à dire(2eme façon)"], ["el sufrimiento", "la souffrance"],
             ["el dolor", "la douleur"], ["una bombilla", "une ampoule"], ["conseguir", "réussir"],
             ["enemigo", "ennemi"]];

let toutes = // ciudadanio_y_mundos_virtuales
    [["ciudadanía", "citoyenneté"], ["los derechos", "les droits"],
                                 ["un ciudadano", "un citoyen"], ["ejercer", "exercer"], ["comprometerse", "s'engager"],
                                 ["las redes sociales", "les réseaux sociaux"], ["favorecer", "favoriser"],
                                 ["peligrar", "mettre en danger"],
                                 ["los bulos/las falsas noticias", "les fausses informations"],
                                 ["educación a los medios de communicación", "l'éducation au média"],
                                 ["los pagos virtuales", "les paiements virtuels"],
                                 ["los datos personales", "les données personnelles"],
                                 ["la inteligencia artificial", "l'intelligence artificielle"],
                                 ["el ciberacoso", "le cyber-harcèlement"],
                                 ["la usurpación de identidad", "l'usurpation d'identité"],
                                 ["el robo de identidad", "l'usurpation d'identité"],
                                 ["los foros", "les forums"], ["un denunciante", "un lanceur d'alerte"],
                                 ["soler", "avoir l'habitude"], ["el móvil", "le téléphone portable"],
                                 ["hacer llamadas", "passer des appels"], ["cualquier", "n'importe"],
                                 ["estar acostumbrado a", "être habitué à"], ["ligar", "draguer"],
                                 ["intercambiar", "échanger"], ["buscar informaciones", "chercher des informations"],
                                 ["riesgos/peligros", "danger"], ["bajar", "télécharger"], ["subir", "mettre en ligne"],
                                 ["una herramienta", "un outil"],
    // todo_vale_dinero_en_la_red
["llegar", "arriver"], ["una solicitud de amistad", "un demande d'amis"],
                         ["molestar", "déranger"], ["comprobar", "vérifier"], ["una sospecha", "un soupçon/suspicion"],
                         ["hacerse pasar por", "se faire passer pour"], ["la intimidad", "l intimité"],
                         ["el cuarto", "la chambre"], ["la pantalla del ordenador", "l écran de l ordinateur"],
                         ["hacer daño", "faire du mal"], ["doñar", "nuire"], ["eliminar", "éliminer"],
                         ["ralentizar", "ralentir"], ["crackear", "craquer"], ["chatear", "chater"],
                         ["un rato", "un moment"],
                         ["bajar", "télécharger"], ["subir", "mettre en ligne"], ["una página", "une page"],
                         ["un enlace", "un lien"], ["un ataque", "une attaque"],
                         ["los piratas informáticos", "les pirates informatiques"],
                         ["wasapear", "envoyer un message par Wasap"], ["despreocupado", "insouciant"],
                         ["webcam", "caméra"],
                         ["el portátil", "le portable (ordinateur)"], ["la mesa", "la table"], ["la cama", "le lit"],
                         ["control remoto", "control à distance"], ["creepware", "cheval de Troie"],
                         ["el micrófono", "le microphone"], ["grabar", "enregistrer"], ["desnudar", "déshabiller"],
                         ["pillar", "attraper"], ["ordenador", "ordinateur"], ["aceptar", "accepter"],
                         ["actualizar", "actualiser"], ["una plataforma", "une plateforme"], ["un sitio", "un site"],
                         ["un perfil falso", "un faux profil"], ["jaquear", "hacker"],
                         ["un programa malicioso", "un programme malveillant"], ["desconocido", "inconnu"],
                         ["aprovecharse", "profiter de"], ["mandar", "envoyer"],
                         ["los datos personales", "les données personnelles"],
                         ["la rapidez/la velocidad", "la rapidité"],
                         ["pagar", "payer"], ["los objectos conectados", "les objets connectés"],
                         ["concienciar", "faire prendre conscience"], ["proteger", "protéger"],
                         ["tomar precauciones", "prendre des précautions"], ["desfase", "décalage"],
                         ["dejar", "laisser"], ["ni siquiera", "même pas"], ["fuera", "en dehors"],
                         ["frente", "devant"], ["definitivamente", "en définitive"], ["el barrio", "le quartier"],
                         ["alguien", "quelqu'un"], ["a través", "à travers"], ["vale dinero", "valoir de l'argent"],
                         ["tener acceso a", "avoir accer à"], ["el funcionamiento", "le fonctionnement"],
                         ["la ingenuidad", "la naïveté"], ["una tonterÍa", "une broutille"], ["comentar", "commenter"],
                         ["una ocurrencia", "une idée soudaine"], ["una contraseña", "mot de passe"],
                         ["tener cuidado", "faire attention"], ["hacer clic", "faire un clic"], ["rechazar", "refuser"],
    //la_pintura
["una novela", "une nouvelle"], ["la conversación", "la conversation"], ["el papel", "le rôle"],
             ["según", "selon"], ["decorativo", "décoratif"], ["cambiar", "changer"],
             ["un artista comprometido", "un artiste engagé"], ["aislado", "isolé"], ["despertar", "éveiller"],
             ["concienciar", "faire prendre conscience"], ["el estado del mundo", "l'état du monde"],
             ["la condición humana", "la condition humaine"], ["sacudir", "secouer"], ["creer", "croire"],
             ["burlarse", "se moquer"], ["tachar", "rayer"], ["semejante", "semblable"], ["rodear", "entourer"],
             ["un alma", "una âme"], ["suscitar", "susciter"], ["transmitir", "transmettre"], ["la angustia", "l'angoisse"],
             ["la confusión", "la confusion"], ["dar miedo", "faire peur"], ["asustar", "effrayer"],
             ["desprender", "dégager"], ["el desorden", "le désordre"], ["la técnica", "la technique"],
             ["óleo sobre lienzo", "huile sur toile"], ["los colores", "les couleurs"],
             ["en blanco y negro", "en noir et blanc"], ["grises", "gris"], ["la forma", "la façon/la manière"],
             ["el tamaño", "la taille"], ["un rectángulo", "un rectangle"], ["horizontal", "horizontal"],
             ["vertical", "vertical"], ["medir", "mesurer"], ["mide", "mesure"], ["por", "par"],
             ["el bombardeo", "le bombardement"], ["un elemento clave", "un élément clé"],
             ["la composición", "la composition"], ["la estructura", "la structure"],
             ["a primera vista", "à première vue"], ["la perspectiva", "la perspective"],
             ["un respeto", "un respect"], ["la profundidad", "la profondeur"], ["el volumen", "le volume"],
             ["la luz", "la lumière"], ["las luces", "les lumières"], ["una lámpara", "une lampe"],
             ["un quinqué", "une lampe à huile"], ["el movimiento", "le mouvement"],
             ["las lineas curvas", "les courbes"], ["las lineas rectas", "les lignes droites"], ["vacío", "vide"],
             ["lleno", "plein"], ["dirigirse", "se diriger"], ["hacia", "vers"], ["la izquierda", "la gauche"],
             ["la derecha", "la droite"], ["con respecto a", "par rapport à"], ["el ejército", "l'armée"],
             ["ornamental", "ornemental"], ["las paredes", "les murs"], ["los pintores", "les peintres"],
             ["es decir", "c'est à dire"], ["artístico", "artistique"], ["irónico", "ironique"],
             ["a lo mejor", "peut-être"], ["o sea", "c'est à dire(2eme façon)"], ["el sufrimiento", "la souffrance"],
             ["el dolor", "la douleur"], ["una bombilla", "une ampoule"], ["conseguir", "réussir"],
             ["enemigo", "ennemi"]];

// affiche le mot + la langue
let motVocab = String(eval(liste)[aleatoire()][1]);
document.getElementById('mot').innerHTML = motVocab;
document.getElementById('langueEtud').innerHTML = langue;

// permet de valider avec la touche entrer
document.addEventListener('keydown', function(event) {
  if (event.code == "Enter") {
    getValue();
  }
});



// permet de prendre un élement aléatoirement dans la liste
function aleatoire()
{
  let a = Math.floor(Math.random() * eval(liste).length);
  if (a == motEtud){
    aleatoire()
  }
  else {
    motEtud = a;
    return motEtud;
  }
}
// permet de recuperer la valeur et d'agir en conséquence
function getValue()
{
  IncrementationChrono();
	let reponse = document.getElementById("entree").value;
	document.getElementById('entree').value = "";
  if (reponse.length == 0){
    document.getElementById("faux").innerHTML = "";
    document.getElementById("juste").innerHTML = "";
    document.getElementById("null").innerHTML = "Veuillez entrez une valeur s'il vous plaît";
  }
  else if (reponse == eval(liste)[motEtud][0]){
    document.body.style.background = 'green';
    document.getElementById("faux").innerHTML = "";
    document.getElementById("null").innerHTML = "";
    document.getElementById("juste").innerHTML = `Bravo vous avez trouvé la bonne reponse, il vous reste plus que ${eval(liste).length - 1} mots à apprendre`;
    eval(liste).splice(motEtud, 1);
    if (eval(liste).length == 0){
      document.getElementById("faux").innerHTML = "";
      document.getElementById("null").innerHTML = "";
      document.getElementById("mot").innerHTML = "Fin";
      document.getElementById("juste").innerHTML = `Bravo vous avez finis la liste de vocabulaire avec un total de ${fautes} erreurs en ${fin}`;
    }
    else{
      setTimeout(afficher, 1000);
    }
  }
	else {
    document.body.style.background = '#DC143C';
    document.getElementById("juste").innerHTML = "";
    document.getElementById("null").innerHTML = "";
    document.getElementById("faux").innerHTML = `Dommage vous n'avez pas trouvé la bonne reponse, qui était ${eval(liste)[motEtud][0]}, il vous reste plus que ${ciudadano.length} mots à apprendre`;
    // eval(liste).push(eval(liste)[motEtud]);
    // eval(liste).shift();
    fautes += 1; 
    setTimeout(afficher, 1000);     
    }
}

 // gère l'affichage des mots
function afficher()
{
  aleatoire()
  let motVocab = String(eval(liste)[motEtud][1]);
  document.getElementById('mot').innerHTML = motVocab;
  document.getElementById('entree').focus();
  document.body.style.background = 'grey';

}

// gère les accents
function á(){
	let reponse = document.getElementById("entree").value;
	document.getElementById('entree').value = reponse + "á";
	document.getElementById('entree').focus();
}

function ú(){
	let reponse = document.getElementById("entree").value;
	document.getElementById('entree').value = reponse + "ú";
	document.getElementById('entree').focus();
}
		
function í(){
	let reponse = document.getElementById("entree").value;
	document.getElementById('entree').value = reponse + "í";
	document.getElementById('entree').focus();
}

function ñ(){
	let reponse = document.getElementById("entree").value;
	document.getElementById('entree').value = reponse + "ñ";
	document.getElementById('entree').focus();
}

function ó(){
	let reponse = document.getElementById("entree").value;
	document.getElementById('entree').value = reponse + "ó";
	document.getElementById('entree').focus();
}


const debut = new Date();
const heuresDebut = debut.getHours();
const minutesDebut = debut.getMinutes();
const secondesDebut = debut.getSeconds();

let fin;


function IncrementationChrono() {
  const intermediaire = new Date();
  const heures = intermediaire.getHours();
  const minutes = intermediaire.getMinutes();
  const secondes = intermediaire.getSeconds();

  if (eval(liste).length > 0){ 
    if (heuresDebut == heures){
      if (minutes >= minutesDebut && secondes>= secondesDebut) {
        if (secondes - secondesDebut < 10){
          document.getElementById("chronometre").innerHTML = `${minutes - minutesDebut}: 0${secondes - secondesDebut}`;
        }
        else {
          document.getElementById("chronometre").innerHTML = `${minutes - minutesDebut}:${secondes - secondesDebut}`;
        }
        /* console.log(`minutes : ${minutes}`)
        console.log(`minutesDebut : ${minutesDebut}`)
        console.log(`secondes : ${secondes}`)
        console.log(`secondes : ${secondesDebut}`)
        console.log(`1 : ${minutes - minutesDebut}`)
        console.log(`1 : ${secondes - secondesDebut}`)*/

      }
      else if (minutes >= minutesDebut && secondes <= secondesDebut) {
        if (secondes - secondesDebut < 10){
          document.getElementById("chronometre").innerHTML = `${(minutes - minutesDebut) - 1}:0${(secondes - secondesDebut) + 60}`;
        }
        else {
         document.getElementById("chronometre").innerHTML = `${(minutes - minutesDebut) - 1}:${(secondes - secondesDebut) + 60}`;
      }
        /* console.log(`minutes : ${minutes}`)
        console.log(`minutesDebut : ${minutesDebut}`)
        console.log(`secondes : ${secondes}`)
        console.log(`secondes : ${secondesDebut}`)
        console.log(`2 : ${minutes - minutesDebut}`)
        console.log(`2 : ${secondes - secondesDebut}`)*/
      }
      else {
        if (secondes - secondesDebut < 10){
          document.getElementById("chronometre").innerHTML = `${(minutes - minutesDebut) + 60}:0${(secondes - secondesDebut) + 60}`;
        }
        else {
         document.getElementById("chronometre").innerHTML = `${(minutes - minutesDebut) + 60}:${(secondes - secondesDebut) + 60}`;
      }
       /*  console.log(`minutes : ${minutes}`)
        console.log(`minutesDebut : ${minutesDebut}`)
        console.log(`secondes : ${secondes}`)
        console.log(`secondes : ${secondesDebut}`)
        console.log(`3 : ${minutes - minutesDebut}`)
        console.log(`3 : ${secondes - secondesDebut}`)*/
      }
      
      
    }
  }
  else if(fin==undefined){
    fin = `${minutes - minutesDebut}:${secondes - secondesDebut}`;
    document.getElementById("chronometre").innerHTML = fin;
  }
  else {
    return fin;
  }
}
/*
function IncrementationChrono() {
  const intermediaire = new Date();
  const heures = intermediaire.getHours();
  const minutes = intermediaire.getMinutes();
  const secondes = intermediaire.getSeconds();

  if (eval(liste).length > 0){ 
    if (heuresDebut == heures){
      if (secondes > secondesDebut) {
        document.getElementById("chronometre").innerHTML = `${(minutes - minutesDebut)-1}:${60 - secondes}`;

      }
      else {
        document.getElementById("chronometre").innerHTML = `${minutes - minutesDebut}:${secondes - secondesDebut}`;
      }
      
      
    }
  }
  else if(fin==undefined){
    fin = `${minutes - minutesDebut}:${secondes - secondesDebut}`;
    document.getElementById("chronometre").innerHTML = fin;
  }
  else {
    return fin;
  }
} */

/* let chrono = document.getElementById("chronometre");

let minutes = 0;
let secondes = 0;

const defilerTemps = ()=> {
  secondes = parseInt(secondes);
  minutes = parseInt(minutes);

  secondes += secondes;

  if (secondes == 60){
    minutes++;
    secondes = 0;
  }

  if (secondes < 10){
    secondes = "0" + secondes;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }

  document.getElementById("chronometre").innerHTML = `${minutes}:${secondes}`;

  setTimeout(defilerTemps(), 1000);
}; */
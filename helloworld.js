/* alert('This it the first line of js'); */

/*select element id onclick which is the button */
let element = document.getElementById('onclick');
/*define the element that changes onclick, the div */
let divElement = document.getElementById('div1');

/*change quote function */
function changeQuote (){

  /*divElement.innerHTML = "<p id = 'quote'> parse some random text </p>";**/
  divElement.innerHTML=randomChoice(arr);
}

/*quote function changer */

/*single quotes */
let quote1='Applica il creative writing alla vita. La vita è un continuo di ostacoli. Circumnavigali. ';
let quote2='permettiti di desiderare';
let quote3='non cercare di vedere cio che vuoi già vedere. Ma credi che ci sia. Come l’ago nel pagliaio. Feel the way ti a solution (and avoid the ego traps)';
let quote4='you need magico to see the invisible. Look for the negative space (il silenzio, l’assenza, il cio che non c’è). Il pericolo nasconde l’opportunità. Antifragile. Vedi il pieno nel vuoto. Allenati. (Allenati sempre). Il futuro è mal distribuito: portalo laddove manca ancora. Applica i trend al presente per vedere come sarà il futuro.';
let quote5='quale è il problema? Frame it.';
let quote6='use constraints to frame the problem tightly. C’è una relazione intrinseca per cui se rendi il tubo più stretto l’acqua schizza più forte e definita. Formula: 1, write the problem statement, e di cosa succede se non lo si addressa, 2, list the constraints, 3, list the affordances (creative possibilities within the problem), 4, describe success,';
let quote7='yes/no is a feeling of control; open ended is unease. Per capire la relazione tra le parti, usa il system thinking. A whole rather than of fragments (e perché è cosi difficile farlo con le emozioni?).';
let quote8='la tensione è connaturata alla novità e al cambiamento. L’assenza di tensione è il solito. Sopportare la tensione è il costo da pagare per viaggiare attraverso il gap della novità. Solo che a volte manca il solito. Serve un equilibrio dei due. Nel solito l’attraversare la novità? In questo contesto, l’assenza di una struttura forte è il mio garante alla possibilità della novità. Se mi mancano le skills, è perché vanno messe in pratica. ';
let quote9='aim for surprise. Surprise yourself. Use tricks like 1 think in metaphores, 2 in pictures, 3 start from different places, 4 start from a different place, 5 steal from other domains, 6 use combinatory play, 7 reverse polarity, 8 ask simple questions, 9 watch for accidents (long for what confounds you), 10 write things down (keep a list of ideas)';
let quote10='become sensitive to the jolt. Test originality: 1 unsettiling, disorienting, 2 kills ten birds with a stone, 3 better if it needs to be tested, 4 it should force change (it’s not polite), 5 creates affirdances, alias opportunities, 6 it is summarizable. Same applies to the personality. ';
let quote11='beauty is a yardstick. It is made if 3 interactive elements: surprise, rightness, elegance. Surprise is a blast of serotonine. Rightness is an inherent structure, Elegance is the rejection of the unnecessary. The least the best. ';
let quote12='from the right idea to the idea right. Knowing - making - doing -> to make è il passaggio sssenziale tra sapere e risolvere. You can design the way forward, not decide. New ideas need to be nurtured.';
let quote13='simple process for linear needs. ';

var arr = [quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9,quote10,quote11,quote12,quote13];
/*quote generator https://docs.google.com/spreadsheets/d/1XvKdT9bZkdV0PD1u3_W22HxAjFf1-Pliyj9eX3nCYwI/edit#gid=0 */

function randomChoice(arr) {
    /* NOTA si puo' inserire una immagine*/
    return '<h2 class=caption>' + arr[(Math.random() * arr.length) | 0];
};


element.onclick = changeQuote;

/* scrivere una funzione che prenda l'intera lunghezza di una lista
peschi a caso uno di quei valori
renda la frase associata a quel valore
inoltre serve sotto un 'share' link
e serve qualcosa che identifichi il numero di click rimasti (con conto alla rovescia)
e una volta finiti, 'get more'
e che il browswer riconosca quel numero di click
per far questo probabilmente ci si deve registrare */

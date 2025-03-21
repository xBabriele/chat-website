
// Dichiarazione e inizializzazione delle variabili che andranno a riferirsi ai nodi del HTML
const invio = document.getElementsByClassName("button")[0];   // Immagine che diventerà il bottone per inviare i vari messaggi
const chat = document.getElementsByClassName("chat")[0];      // Div della chat in cui si conterranno i messaggi dell'array qui sotto
const barra = document.getElementsByClassName("barra")[0];    // Div della barra sopra per aggiungere l'ora e la data

// Oggetto Date che servirà per ottenere l'ora e la data di oggi
let data = new Date();

let ora = new Intl.DateTimeFormat('it-IT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false       // false per avere l'ora in formato 24
}).format(data);
let giorno = new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',     // 'long' se lo vuoi a parole
    month: 'numeric',
    year: 'numeric'
}).format(data);


barra.innerHTML += `<p style="text-align: center;">
        ${ora}
    </p>
    <p style="text-align: right;">${giorno}</p>`
;

// Array che contiene i messaggi da inviare in ordine, msgD per i destinatare e msgM per i messaggi del mittente;
// format:
// `<div class="msgD/msgM"><h4 style="color: COLORE-NomePersona;">NomePersona</h4><p>MESSAGGIO</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`
let array = [
    `<div class="msgD"><h4 style="color: green;">Voltaire</h4><p>Amici, sono davvero perplesso! Possiamo chattare con chiunque, persino con un uomo che ha viaggiato in mondi lontani! Gulliver, sei con noi? Raccontaci delle tue avventure nei regni lontani, che ci dici della tua esperienza in Lilliput?</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgM"><p>Ciao a tutti! È strano parlare con voi attraverso questa… macchina. Comunque, per quanto riguarda Lilliput, beh, la cosa che mi colpì di più fu come i piccoli poteri della società si concentrassero su dispute insignificanti. Le guerre, la politica, e la burocrazia erano tutte questioni che non avevano senso per me, visto che il mio corpo era così enorme rispetto a loro. Come avete osservato, è una satira della vanità umana.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: red;">Locke</h4><p>Lilliput, quindi, è una critica alla politica, alla centralizzazione del potere e alla guerra. Ma ciò che mi interessa è come la ragione umana viene manipolata da piccole rivalità e interessi. Non credi, Gulliver, che questo parli anche della condizione umana in generale, della nostra tendenza a concentrarci su futilità invece che sul bene comune?</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgM"><p>Hai ragione, Locke. A Lilliput, le dispute per un posto di potere erano ridicole. Mi faceva riflettere su come, nella nostra società, le guerre e i conflitti spesso siano guidati da motivi molto meno nobili della difesa della libertà o della giustizia. Eppure, nel mio piccolo, mi sentivo impotente a cambiare qualcosa, come una mosca in un mondo gigante.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: #d36d00;">Rousseau</h4><p>Ecco, vedo la mia teoria della corruzione qui. I Lillipuziani sono esseri razionali, ma sono altrettanto corrotti dalle loro istituzioni. Come puoi, Gulliver, sperare che una società come quella, che è così lontana dalla natura dell’uomo, possa evolvere verso il bene comune? La civiltà, con le sue convenzioni, sembra solo allontanare l’uomo dal suo stato naturale di bontà.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: cyan;">Beccaria</h4><p>Interessante, Rousseau. La giustizia tra i Lillipuziani, poi, è un altro aspetto che mi ha colpito. Il loro sistema di punizioni è arbitrario e punitivo, proprio come alcuni dei sistemi legali del nostro tempo. Questo è un chiaro monito contro la crudeltà e l’inutilità delle punizioni esagerate!</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: pink;">Montesquieu</h4><p>Gulliver, raccontaci di Brobdingnag. Hai vissuto lì da gigante! Come vedi la politica di quel paese, rispetto a Lilliput?</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgM"><p>Brobdingnag, ah! Che differenza! Lì mi sentivo come un pesce fuor d’acqua. La cosa che mi colpì fu la morale della società, molto più alta rispetto ai Lillipuziani. Il re di Brobdingnag, pur essendo un gigante, aveva una visione piuttosto “piccola” delle questioni politiche: rifiutava la corruzione, ma riteneva che la nostra Europa fosse un luogo barbaro, dove la guerra e l’ambizione erano un incubo quotidiano. Eppure, mi sono reso conto che nessuna società è priva di difetti.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: lime;">Kant</h4><p>Molto interessante, Gulliver. Brobdingnag è un esempio di come la ragione e la virtù possano essere riconosciute, ma anche di come l’individuo rimanga sempre parziale nella sua comprensione della giustizia universale. I re di Brobdingnag sembrano accogliere una visione della legge come strumento di moralità, ma non vedono mai la necessità di un cambiamento fondamentale del sistema che li governa.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: green;">Voltaire</h4><p>E che dire di Laputa, Gulliver? La follia di quei filosofi disconnessi dalla realtà è davvero un quadro allarmante. Ci fa riflettere su quanto la scienza possa perdere di vista i bisogni umani quando si concentra troppo sulle astrattezze.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgM"><p>Ah, Laputa! Quelli erano scienziati e filosofi che passavano il tempo a discutere di questioni inutili mentre il loro regno cadeva a pezzi. Se le idee non sono collegate alla realtà, diventano pericolose. È una critica a tutti quelli che credono che la conoscenza, senza essere applicata, possa migliorare la vita delle persone. Laputa è l’esempio perfetto di come la ricerca della verità possa diventare sterile senza uno scopo pratico.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: goldenrod;">Diderot</h4><p>Questo mi fa pensare alla Accademia di Laputa, dove si fanno esperimenti privi di senso pratico, proprio come nelle nostre università quando si perdono di vista i veri bisogni sociali. Non è forse una parodia delle istituzioni intellettuali che troppo spesso diventano autoreferenziali?</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: red;">Locke</h4><p>Giustissimo, Diderot. La ricerca scientifica deve essere utile e collegata alla vita reale. Altrimenti, è solo un gioco di speculazioni vuote. La conoscenza è potere, ma deve anche essere pratica per servire la società.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: #d36d00;">Rousseau</h4><p>Mi sembra che Swift ci stia dicendo che la società stessa è la causa dei mali dell’uomo, eppure quando Gulliver arriva tra gli Houyhnhnms, le cose sembrano cambiare. Ma anche qui c'è una riflessione interessante: gli Houyhnhnms vivono secondo ragione, ma non hanno passione. È un mondo che ci appare come perfetto, ma non possiamo ignorare che la passione, l’emozione, fanno parte della nostra umanità.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: cyan;">Beccaria</h4><p>Gli Houyhnhnms sono un esempio di giustizia perfetta, ma non c'è spazio per la misericordia. Non c'è un vero concetto di riabilitazione o di comprensione della condizione umana. La giustizia deve essere umana, non solo razionale.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgM"><p>Esatto, amici. Dopo aver vissuto con gli Houyhnhnms, mi sono reso conto che la perfezione che loro cercavano era un’illusione. Gli esseri umani non sono soltanto razionali. La razionalità deve essere temperata dalla compassione e dalla comprensione delle debolezze umane. E i Yahoos, ah, che mostri di egoismo! Li ho visti come il riflesso di ciò che possiamo diventare se non facciamo attenzione alla nostra natura più animale.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: green;">Voltaire</h4><p>Interessante. Quindi, alla fine, Gulliver, il tuo viaggio ti ha mostrato che nessun mondo è perfetto, ma che la chiave per il miglioramento risiede nell’equilibrio tra ragione, passione e giustizia umana. La ricerca della verità e della giustizia deve restare ancorata alla realtà del nostro essere umano.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: lime;">Kant</h4><p>Mi sembra che il viaggio di Gulliver sia una riflessione sulle difficoltà dell’uomo di raggiungere una vera armonia, dato che la razionalità, pur fondamentale, da sola non basta. L’individuo deve essere anche parte di una comunità.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: goldenrod;">Diderot</h4><p>Vero. E mi sembra che l’idea di Swift, alla fine, sia che ogni società ha i suoi vizi e difetti, ma la vera sfida è guardare con occhi critici il nostro stesso mondo.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgM"><p>Voi illuministi avete ragione! Il mio viaggio è stato lungo e difficile, ma mi ha insegnato molto. La vera saggezza sta nel trovare l'equilibrio tra la razionalità, la passione e la comprensione della condizione umana.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: green;">Voltaire</h4><p>Un'ultima domanda, Gulliver: credevi di trovare una società perfetta?</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgM"><p>Mai. Ogni società ha le sue ombre. Ma forse, la perfezione sta proprio nella continua ricerca del miglioramento, anziché nel raggiungimento di un ideale impossibile.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`,
    `<div class="msgD"><h4 style="color: red;">Locke</h4><p>Alla fine, credo che il viaggio di Gulliver ci insegni che la vera libertà non risiede in una società perfetta, ma nella capacità di ogni individuo di perseguire la propria felicità e il proprio benessere attraverso la ragione. Ogni società ha i suoi difetti, ma il nostro compito è migliorare noi stessi e le istituzioni che ci governano, sempre guidati dalla ragione e dal rispetto per la libertà di ciascuno.</p><p style="text-align: right; color: #BBB;">${ora.substring(0, 5)}</p></div>`
];
let index=0;
let inviato = new Audio('sounds/inviato.mp3');
// Handler dell'evento
function invioM(event) {
    // Se si supera il numero di messaggi non andrà a inviarne più, senza inviare 'undefined'
    if (index < array.length) {
        chat.innerHTML += array[index];
        chat.lastChild.previousSibling.id = "";
        chat.lastChild.id = "lastChild";
        index++;
        chat.scrollTop = chat.scrollHeight;
        inviato.play();
    }
}

invio.addEventListener("click", invioM);
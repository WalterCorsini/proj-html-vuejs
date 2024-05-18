# SVOLGIMENTO

riproduzione di una parte del sito assegnato (Header,Footer,Contatti,About ed HomePage).
abbiamo diviso l'esercizio come richiesto in 3 paeri header ed about(1), footer e contatti(2), Homepage(3).
abbiamo condiviso componenti colori e classi.

## ANALISI
controllo di variabili funzioni colori e dipendenze necessarie
divisione dei compiti
riutilizzo di dati e componenti in comune.



## HOMEPAGE
1) COMPONENTE: "HeroHomePage"
    - un array di foto e testo che scorreva mediante un carosello gestito a tempo o al click su dei bottoni agli estremi.
    - al centro un bottone(AppButton) che gestisce colore e testo tramite prop
2) COMPONENTE: "HomePageTutor"
    - un array di icone e testo gestite da una component "AppCardIcon" a cui viene passato l'elemento corrente e il colore dello sfondo tramite prop
3) COMPONENTE: "HomePageTutoAtHome"
    - una sezione divisa in due colonne dove nella prima abbiamo un titolo ed un sottotitolo,nella seconda un immagine allineata in basso
4) COMPONENTE: "HomePageChildren"
    - una sezione che ha sempre due colonne dove nella prima abbiamo una foto allineata in basso e nella seconda un titolo ed un sottotitolo.
    - piu in basso richiamiamo 2 volte la componente "AppCount" a cui passiamo testo e colore e numero massimo.
        - questa funzione incrementa partendo da 0,controllando che non superi il numero massimo e all'interno della condizione viene lanciato un setTimeout che richiama la funzione ogni 100 millisecondi. questo viene fatto in modo da riuscire a scandire precisamente il set timeout senza richiamare cicli infiniti.
5) COMPONENTE: "HomePageStudent"
    - una sezione che ha uno sfondo che si muove durante lo scroll della pagina, delle card che scorrono al centro gestite da un setInterval e da dei button agli estremi.
    - inizialmente pensata per la HomePage, ma avendo la stessa identica impostazione sia HomePage che About abbiamo pensavo di riutilizzare sia "HomePageStudent" che "AppCardStudent" gestendo gli array dallo store globale e non piu dalla component a cui gli vengono passati tramite prop.
6) COMPONENTE: "HomePageWhatWeDo"
    - gestisce con i dati in un array due contenitori della pagina, il primo contenitore ha una lista di nomi ed al click di uno di questi viene visualizzato il contenuto nel secondo contenitore.
7) COMPONENTE: "HomePagePopularOnlineCourses"
    - questa sezione gestisce 3 pagine ognuna con 3 card,visualizzandone una alla volta gestite da un setInterval o con un click sulla barra disposta in basso
    - la card al suo interno viene gestita con la component "AppCardOnline" a cui viene passato un elemento corrente per volta dell'array attivo.
    - in questo caso ogni volta che la funzione "changeActive" cambia la variabile active a sua volta invoca la funzione "getString" che fa la copia di uno degi array e la cicla per visualizzare le card della pagina successiva.
8) COMPONENTE: "HomePageBestTutor"
    - una sezione con un titolo ed un sottotitolo e sotto richiama un ciclo per ciclare un array passato in una component "AppCardBestTutor" a cui passo l'elemento corrente
9) COMPONENTE: "HomePagePricing"
    - una tabella che visualizza le 3 soluzioni offerte dall'azienda con i vari servizi e costi
10) COMPONENTE: "HomePageLogoSlider"
    - una sezione in cui vengono visualizzati i logi delle scuole che utilizzano questi servizi



## HEADER   ( visibile in tutte le pagine )
11) COMPONENTE "AppHeader"   
    - logo del sito e una navbar con i link per visualizzare le pagine richieste.

## ABOUT
12) COMPONENTE "AboutPage"
    13) condivide con la component "About" il component "AppJumbotron" a cui gli viene passato un ogetto
    14) successivamente divide la prima sezione in due parti:
        - la prima quella sinistra con un titolo,un sottotitolo e dopo richiama la component "AppCount" che ha in comune con "HomePageChildren" per generare questo numero che parte da 0 e lo incrementa fino ad arrivare al numero massimo
        - la seconda quella destra utilizza un tag iframe per visualizzare il link di un filmato
    15) la sezione successiva presenta un titolo ed un sottotitolo
        - poi cicla un array e passa l'elemento corrente al component "AboutPageTutorCard"
    16) in questa sezione utilizza la component "HomePageStudent" passandogli l'array preso dallo store tramite prop,e a sua volta in HomePageStudent viene richiamata la component "AppCardStudent" a cui viene passato l'elemento corrente tramite prop che genera le card in pagina.
    17) in questa sezione viene richiamata la component "AboutPageFaq"
        - all'interno troviamo 2 colonne 
            - nella prima un immagine
            -nella seconda una serie di domande dove al click viene data una risposta a comparsa.



## CONTACTS
18) COMPONENTE "AppJumbotron"
    - usata come testa di pagina che è in comune con la pagina contatti tranne per il testo all'interno gestito tramite prop
19) COMPONENTE "ContactOfficeAndForm"
    - richiama nella prima sezione la component "AppCardOffice" che gestisce un titolo un sottotitolo e una serie di contatti
    - richiama nella seconda sezione AppFomr che gestisce un form da poter inviare per ricevere delle informazioni
20) COMPONENTE "ContactMap"
    - utilizza il tag "iframe" per importare la mappa di "googlemaps"
21) COMPONENTE "ContactSocialAndNews"
    - con una serie di modi per mettersi in contatto con l'azienda

## FOOTER    (visibile in tutte le pagine)
22) COMPONENT "AppFooter"
    -   pie di pagina con una serie di liste e informazioni e contatti riguardanti la pagina

## AppTopButton and SideButtons ( visibili in tutte le pagine)
questi 2 componenti sono stati inseriti sul lato detro delle pagine per implementare un carrello a comparsa in una sidebar( non implementato a parte il button)
e il pulsante Top che gestisce lo scroll della pagina ed ad un certo punto della pagina fa apparire il pulsante che cliccato ti permette di ritornare all'inizio

    

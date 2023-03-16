## SITO CON SINGOLA PAGINA

Questo progetto è molto semplice. E' semplicemente lo scheletro di un semplice sito composto da una
singola pagina. In cima c' è una barra di navigazione con un menù responsivo (su mobile hamburger menù).
Quando si schiaccia su una delle voci di menù viene fatto lo scrolling fino all' altezza di quella sezione della pagina.
E' presente anche una sezione contatti che è in grado di mandare una mail ad un indirizzo che verrà messo nel file python che si occupa dell' invio.
Tutto è implementato con html, css e vanilla js. Lato server è stato usato il python.
Per utilizzare il progetto è necessario avere installato python ed eseguire, dalla directory del progetto, il seguente comando, da una shell:
```bash
python -m http.server 8000 --cgi
```
L' invio della mail non funzionerà se non si mettono i valori del proprio server smtp nel file cgi-bin/mail.py

**N.B.** Non è un codice pensato per andare in produzione. E' solo un punto di partenza
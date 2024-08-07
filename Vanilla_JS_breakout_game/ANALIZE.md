# Izlaušanās! Spēle
<h4 style="color:red;">Breakout! </h4>
<img src="izlausanasspele.jpg">

## Projekta specifikācijas

- Zīmēt elementus uz audekla
- Izmantot audekla ceļus, lai zīmētu formas
- Pievienot animāciju ar requestAnimationFrame(cb)
- Pārvietot lāpstiņu, izmantojot bultiņu taustiņus
- Pievienot sadursmju noteikšanu
- Saglabāt punktus
- Pievienot noteikumu pogu ar slīdni

# JS koda "audits"

## Mainīgie
### DOM elementi:
- rulesBtn, closeBtn, rules, canvas, ctx: Šie mainīgie glabā atsauces uz HTML elementiem, kas ļauj interaktēt ar DOM un veikt grafiskās operācijas uz <canvas> elementa.
<img src="html analize.jpg">

### Spēles stāvokļa mainīgie:
- score: Glabā spēlētāja punktu skaitu.
brickRowCount, brickColumnCount, delay: Glabā ķieģeļu izvietojuma un spēles restartēšanas laika iestatījumus.
<img src="js_2.jpg">

### Objekti:
- ball: Glabā bumbas īpašības, piemēram, pozīciju, izmēru, ātrumu un redzamību.
- paddle: Glabā lāpstiņas īpašības, piemēram, pozīciju, izmēru, ātrumu un redzamību.
<img src="JS_1.jpg">
- brickInfo: Glabā ķieģeļu īpašības, piemēram, izmēru, nobīdi un redzamību.
- bricks: Masīvs, kas satur ķieģeļu objektus, kuri tiek ģenerēti sākotnēji un tiek atjaunināti spēles laikā.
<img src="js_2.jpg">

## Nosacījuma operatori
Nosacījuma operatori tiek plaši izmantoti, lai kontrolētu spēles loģiku:

### Klaviatūras notikumu apstrāde:
- if (e.key === 'Right' || e.key === 'ArrowRight'): Pārbauda, vai ir nospiesta labā bultiņa, lai pārvietotu lāpstiņu pa labi.
- if (e.key === 'Left' || e.key === 'ArrowLeft'): Pārbauda, vai ir nospiesta kreisā bultiņa, lai pārvietotu lāpstiņu pa kreisi.
- if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'Left' || e.key === 'ArrowLeft'): Pārbauda, vai ir atlaižot bultiņu taustiņi.
<img src="js_8.jpg">

### Sadursmes detektēšana:
- if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0): Pārbauda, vai bumba atsitas pret sānu sienām.
- if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0): Pārbauda, vai bumba atsitas pret augšējo vai apakšējo sienu.
- if (ball.x - ball.size > paddle.x && ball.x + ball.size < paddle.x + paddle.w && ball.y + ball.size > paddle.y): Pārbauda, vai bumba atsitas pret lāpstiņu.
- if (brick.visible): Pārbauda, vai ķieģelis ir redzams un vai tam ir notikusi sadursme ar bumbu.
- if (score % (brickRowCount * brickColumnCount) === 0): Pārbauda, vai visi ķieģeļi ir iznīcināti.
<img src="js_5.jpg">
<img src="js_6.jpg">

### Spēles beigas:
- if (ball.y + ball.size > canvas.height): Pārbauda, vai bumba sasniedz apakšējo robežu, kas norāda uz zaudējumu.
<img src="js_6.jpg">
<img src="js_7.jpg">

## Cikla operatori
Cikla operatori tiek izmantoti, lai iterētu caur ķieģeļiem un veiktu zīmēšanas vai sadursmes pārbaudes:

### Ķieģeļu ģenerēšana:
- for (let i = 0; i < brickRowCount; i++) { ... }
- for (let j = 0; j < brickColumnCount; j++) { ... }
<img src="js_2.jpg">

### Sadursmes un zīmēšanas funkcijas:
- bricks.forEach(column => { column.forEach(brick => { ... }) })
<img src="js_3.jpg">

## Funkcijas
### Zīmēšanas funkcijas:
- drawBall(): Zīmē bumbu.
- drawPaddle(): Zīmē lāpstiņu.
- drawScore(): Zīmē punktus.
- drawBricks(): Zīmē ķieģeļus.
<img src="js_2.jpg">
<img src="js_3.jpg">
<img src="js_7.jpg">

### Kustības funkcijas:
- movePaddle(): Pārvieto lāpstiņu atkarībā no klaviatūras ievades.
- moveBall(): Pārvieto bumbu un pārbauda sadursmes ar sienām, lāpstiņu un ķieģeļiem.
<img src="js_4.jpg">

### Spēles loģika:
- increaseScore(): Palielina punktus un pārbauda, vai visi ķieģeļi ir iznīcināti, lai restartētu spēli.
- showAllBricks(): Parāda visus ķieģeļus.
- draw(): Galvenā funkcija, kas zīmē un atjauno spēles stāvokli.
- update(): Atjauno spēles animāciju.
<img src="js_6.jpg">
<img src="js_7.jpg">

### Notikumu klausītāji:
- keyDown(e): Apstrādā bultiņu taustiņu nospiešanu.
- keyUp(e): Apstrādā bultiņu taustiņu atlaišanu.
- document.addEventListener('keydown', keyDown): Pievieno klausītāju klaviatūras taustiņu nospiešanai.
- document.addEventListener('keyup', keyUp): Pievieno klausītāju klaviatūras taustiņu atlaišanai.
- rulesBtn.addEventListener('click', () => rules.classList.add('show')): Pievieno klausītāju noteikumu pogai.
- closeBtn.addEventListener('click', () => rules.classList.remove('show')): Pievieno klausītāju aizvēršanas pogai.
<img src="js_8.jpg">

## Darbību secība (algoritms, biznesa loģika)
### Inicializācija:
- Inicializē mainīgos un iestata sākotnējos spēles parametrus (bumbas, lāpstiņas pozīcijas, ķieģeļi).
<h4>DOM elementu iegūšanas un sākotnējās spēles stāvokļa konfigurēšanas. Šeit ir kods, kas attiecas uz inicializācijas procesu:</h4>
<h4>Bumbas īpašības</h4>
<h4>Lāpstiņas īpašības</h4>
<img src="JS_1.jpg">
<h4>Ķieģeļu īpašības</h4>
<h4>Ķieģeļu ģenerēšana</h4>
<img src="js_2.jpg">

### Notikumu klausītāji:
- Pievieno klausītājus bultiņu taustiņu nospiešanai un atlaišanai.
- Pievieno klausītājus noteikumu pogai, lai parādītu vai paslēptu spēles noteikumus.
<img src="js_8.jpg">

### Zīmēšanas funkcijas:
- Definē funkcijas bumbas, lāpstiņas, ķieģeļu un punktu zīmēšanai.
<img src="js_2.jpg">
<img src="js_3.jpg">

### Sadursmes detektēšana:
- moveBall() funkcija pārbauda sadursmes starp bumbu un ķieģeļiem vai lāpstiņu.
<img src="js_4.jpg">
<img src="js_5.jpg">

### Galvenā zīmēšanas un spēles loģikas funkcija:
- draw() funkcija zīmē visus spēles elementus un atjauno bumbas un lāpstiņas pozīcijas.
<img src="js_4.jpg">

### Animācija:
- requestAnimationFrame(update) nodrošina nepārtrauktu spēles animāciju, izsaucot update() funkciju katrā kadru.
<img src="JS_1.jpg">
<img src="js_2.jpg">
<img src="js_3.jpg">
<img src="js_4.jpg">

## Kopējā struktūra
Kods ir labi strukturēts, ar skaidri definētām funkcijām, kas atbild par konkrētiem uzdevumiem. Tas ļauj viegli saprast un uzturēt spēles loģiku. Funkcijas ir sadalītas tā, lai katra atbildētu par noteiktu uzdevumu, piemēram, zīmēšanu, kustību vai sadursmju noteikšanu, kas padara kodu modulāru un atkārtoti lietojamu.
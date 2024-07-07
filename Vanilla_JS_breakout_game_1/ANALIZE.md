# JS koda "audits"
## Mainīgie
- canvas: DOM elements. Norāda uz <canvas> elementu.
- ctx: CanvasRenderingContext2D objekts. Nodrošina metodes un īpašības, lai zīmētu 2D kontekstā.
- paddleHeight, paddleWidth, paddleX: Mainīgie lāpstiņas izmēra un pozīcijas glabāšanai.
- x, y, ballRadius, dx, dy: Mainīgie bumbas koordinātu un kustības vektoru glabāšanai.
- brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft: Mainīgie ķieģeļu izmēra, novietojuma un skaita glabāšanai.
- bricks: Masīvs, kas satur ķieģeļu objektus.
- score: Mainīgais punktu skaita glabāšanai.
- rightPressed, leftPressed: Mainīgie, kas seko, vai bultiņu taustiņi ir nospiesti.
## Nosacījuma operatori
if (e.key === 'Right' || e.key === 'ArrowRight'): Pārbauda, vai nospiesta labā bultiņa.
if (e.key === 'Left' || e.key === 'ArrowLeft'): Pārbauda, vai nospiesta kreisā bultiņa.
if (e.key === 'Right' || e.key === 'ArrowRight'): Pārbauda, vai atlaižot labā bultiņa.
if (e.key === 'Left' || e.key === 'ArrowLeft'): Pārbauda, vai atlaižot kreisā bultiņa.
if (b.status === 1): Pārbauda, vai ķieģelis nav iznīcināts.
if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight): Pārbauda, vai bumba saduras ar ķieģeli.
if (score === brickRowCount * brickColumnCount): Pārbauda, vai visi ķieģeļi ir iznīcināti.
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius): Pārbauda, vai bumba atsitas pret sānu sienām.
if (y + dy < ballRadius): Pārbauda, vai bumba atsitas pret augšējo sienu.
if (y + dy > canvas.height - ballRadius): Pārbauda, vai bumba sasniedz apakšējo robežu.
if (x > paddleX && x < paddleX + paddleWidth): Pārbauda, vai bumba atsitas pret lāpstiņu.
if (rightPressed && paddleX < canvas.width - paddleWidth): Pārbauda, vai bultiņu taustiņš ir nospiests un lāpstiņa var pārvietoties pa labi.
if (leftPressed && paddleX > 0): Pārbauda, vai bultiņu taustiņš ir nospiests un lāpstiņa var pārvietoties pa kreisi.
## Cikla operatori
for (let c = 0; c < brickColumnCount; c++): Ģenerē ķieģeļu kolonnas.
for (let r = 0; r < brickRowCount; r++): Ģenerē ķieģeļu rindas.
for (let c = 0; c < brickColumnCount; c++): Pārbauda kolonnās ķieģeļus sadursmju noteikšanai.
for (let r = 0; r < brickRowCount; r++): Pārbauda rindās ķieģeļus sadursmju noteikšanai.
## Funkcijas
keyDownHandler(e): Apstrādā bultiņu taustiņu nospiešanu.
keyUpHandler(e): Apstrādā bultiņu taustiņu atlaišanu.
drawBall(): Zīmē bumbu.
drawPaddle(): Zīmē lāpstiņu.
drawBricks(): Zīmē ķieģeļus.
drawScore(): Zīmē punktus.
collisionDetection(): Noteik sadursmes starp bumbu un ķieģeļiem.
draw(): Galvenā funkcija, kas zīmē un atjauno spēles stāvokli katrā kadru.
## Objekti
bricks: Masīvs, kas satur ķieģeļu objektus ar īpašībām x, y, status.
## Klases
Šajā kodā nav definētu klases.

## Darbību secība (algoritms, biznesa loģika)
- Inicializācija: Tiek inicializēti mainīgie un iestatīti sākotnējie spēles parametri (bumbas pozīcija, lāpstiņas pozīcija, ķieģeļi).
- Notikumu klausītāji: Pievieno notikumu klausītājus bultiņu taustiņu nospiešanai un atlaišanai.
- Noteikumu poga: Pievieno klikšķa klausītāju noteikumu pogai, lai parādītu vai paslēptu spēles noteikumus.
- Zīmēšanas funkcijas: Definē funkcijas bumbas, lāpstiņas, ķieģeļu un punktu zīmēšanai.
- Sadursmju noteikšana: Definē funkciju sadursmju noteikšanai starp bumbu un ķieģeļiem.
- Galvenā zīmēšanas un spēles loģikas funkcija: draw() funkcija, kas zīmē visus spēles elementus, atjauno bumbas un lāpstiņas pozīcijas, pārbauda sadursmes un nosaka spēles beigas.
- Animācija: requestAnimationFrame(draw) nodrošina nepārtrauktu spēles animāciju, izsaucot draw() funkciju katrā kadru.
# Koda analīze
Šī Breakout spēle ir labi strukturēta ar skaidri definētiem mainīgajiem un funkcijām. Funkcijas ir sadalītas loģiskās vienībās, kas atbild par konkrētiem uzdevumiem, piemēram, zīmēšanu un sadursmju noteikšanu. Darbību secība nodrošina, ka spēle tiek atjaunota un zīmēta nepārtraukti, radot plūstošu spēles pieredzi.
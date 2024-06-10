/*------ar mainīgo izmantošanu---*/ 
JavaScript mainīgais, gluži tāpat kā matemātikā, ir simbolisks apzīmējums kādam mainīgam lielumam – skaitliskai, kā arī teksta veida informācijai. JavaScript valodā mainīgo apzīmē pēc sekojošas formulas: var +  mainīgā nosaukums  =  mainīgā vērtība ;. Mainīgo piemēri: var x = 5; var y = "vārds "; // Mainīgais „x” ar vērtību 5. // Mainīgais „y” ar vērtību „vārds”.
/*--------ar masīvu izmantošanu----*/
JavaScript masīvos var saglabāt sarakstus ar vienībām. Šīm vienībām masīvā var piekļūt un veikt ar tiem dažādas darbības. Masīvi ir balstīti uz indeksiem un tie sākas ar 0. indeksu [0].  Masīvā ievietotās vērtības atdala ar komatu un raksta kvadrātiekavās [ ].

Masīvs:

const nosaukums = [‘vienība1’, ‘vienība2’, ‘vienība3’,];

vienība1 ir ar 0 indeksu, vienība 2 ir ar 1 indeksu un vienība 3 ir ar otro indeksu.

Masīvos var ievietot skaitļus, string, objektus, funkcijas.

const friends = [ ‘Jānis’, ‘Sandra’, ‘Maija’, ‘Anna’, 45, undefined];

Piemēram, mums vajadzētu izveidot sarakstu ar draugiem. Tā kā mēs jau esam apguvuši mainīgos, mēs varētu darīt šādi:

const friend1 = ‘Anna’;
const friend2 = ‘Jānis’;
const friend3 = ‘Sandra’;
const friend4 = ‘Maija’;

Bet iedomājamies, ja mums būtu simtiem draugu, kas šadi jāsaraksta, tas būtu diezgan laikietilpīgi un sanāktu ļoti garš kods.Tā vietā, lai rakstītu šos visus mainīgos, varam izveidot masīvu:
const friends = [ ‘Jānis’, ‘Sandra’, ‘Maija’, ‘Anna’];
console.log(friends);
https://dgwebfactory.com/wp-content/uploads/2021/12/javascript-masi%CC%84vi.png


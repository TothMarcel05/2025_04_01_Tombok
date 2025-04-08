/*1. Szimulálj 100 dobást hat oldalú dobókockával! 
Készíts statisztikát a dobásokról! 
Végül írd ki, hogy hány átlag feletti dobás volt!*/
let szamok = [];
for (var i = 0; i < 100; i++) {
    var szam = Math.floor(Math.random() * 6 + 1);
    szamok.push(szam);
}
let sum = 0;
for (let i = 0; i < szamok.length; i++ ) {
  sum += szamok[i];
}
let atlag = sum / szamok.length;
let atlagfeletti = 0;
for (let i = 0; i < szamok.length; i++ ) {
    if (szamok[i] > atlag)  atlagfeletti++;
}
console.log(atlagfeletti);

//2. Tölts fel egy 100 elemű tömböt -50 és 50 közötti véletlenszámokkal!
let szamok1 = [];
for (let i = 0; i < 100; i++) {
    szamok1[i] = Math.floor(Math.random() * 101) - 50;
}

//a. Írasd ki a tömb legnagyobb értékű elemét és annak indexét!
let max = 0;
let maxindex = 0;

for (let i = 0; i < szamok1.length; i++) {
    if (szamok1[i] > max) {
        max = szamok1[i];
        maxindex = i;
    }
}
console.log(max, maxindex);

//b. Írasd ki a tömb elemeinek összegét!
let sumb = 0;
for (let i = 0; i < szamok1.length; i++ ) {
    sumb += szamok1[i];
}
console.log(sumb);

//c. Írasd ki a páros és a páratlan elemek darabszámát!
let paros = 0;
let paratlan = 0;
for (let i = 0; i < szamok1.length; i++ ) {
    if (szamok1[i] % 2 == 0) paros++;
    else paratlan++;
}
console.log(paros, paratlan);

//d. Van-e a tömbben 7-tel osztható elem?
let hetteloszthato = false;
for (let i = 0; i < szamok1.length; i++ ) {
    if (szamok1[i] % 7 == 0) hetteloszthato = true;
}
console.log(hetteloszthato);

//e. Van-e a tömbben olyan elem, amelynek mindkét szomszédja negatív?
let negativ = false;
for (let i = 0; i < szamok1.length; i++ ) {
    if (szamok1[i-1] % 2 != 0 && szamok1[i+1] % 2 != 0) {
        negativ = true;
        console.log(negativ);
        break;
    }
}


//f. Van-e a tömben olyan elem, amely nagyobb, mint két szomszédjának összege?
let ketszomszod = false;
for (let i = 0; i < szamok1.length; i++ ) {
    if (szamok1[i] > szamok1[i-2] + szamok1[i-1]) {
        ketszomszod = true;
        console.log(ketszomszod);
        break;
    }
}


//g. Írasd ki a tömb utolsó 3-mal osztható, de 5-tel nem osztható elemének indexét!
for (let i = szamok1.length; i >= 0; i--) {
    if (szamok1[i] % 3 == 0 && szamok1[i] % 5 != 0) {
        console.log(i);
        break;
    }
}

//h. Van-e a tömbben 3 egyforma szám?
let egyforma = false;
for (let i = 0; i < szamok1.length; i++) {
    for (let j = 1; j < szamok1.length; j++) {
        for (let k = 2; k < szamok1.length; k++) {
            if (szamok1[i] == szamok1[j] && szamok1[i] == szamok1[k]) {
                egyforma = true;
                console.log(egyforma);
                break;
            }
        }
    }
}

//i. Van-e a tömbben egymás melletti azonos érték?
let azonos = false;
for (let i = 0; i < szamok1.length; i++ ) {
    if (szamok1[i-1] == szamok1[i] || szamok1[i+1] == szamok1[i]) {
        azonos = true;
        console.log(azonos);
        break;
    }
}

//j. Írd ki azon számok indexeit, amelyek 10 többszörösei!
for (let i = 0; i < szamok1.length; i++ ) {
    if (szamok1[i] % 10 == 0) console.log(i);
}

//k. Hány átlag alatti szám van a tömbben?
let sum2 = 0;
for (let i = 0; i < szamok1.length; i++ ) {
  sum2 += szamok1[i];
}
let atlag2 = sum / szamok1.length;
let atlagalatti = 0;
for (let i = 0; i < szamok1.length; i++ ) {
    if (szamok1[i] < atlag2)  atlagalatti++;
}
console.log(atlagalatti);

//autós feladat
let autok = ["Mercedes", "BMW", "Audi", "Volvo", "Renault"];

console.log("\nAutók: fordított")
autok.reverse()
for (i = 0; i < autok.length; i++) {
    console.log(autok[i]);
}

console.log("\nAutók: rendezett")
autok.sort()
for (i = 0; i < autok.length; i++) {
    console.log(autok[i]);
}





var app = document.getElementById('app');
var joursDeLaSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
var hobbies = ['chant', 'rando', 'yoga', 'meditation', 'piano', 'velo'];
var occupations = [{
  chant: true, rando: true, yoga: false, meditation: false, piano: true, velo: false,
}, {
  chant: true, rando: false, yoga: true, meditation: true, piano: false, velo: false,
}, {
  chant: true, rando: false, yoga: true, meditation: false, piano: false, velo: false,
}, {
  chant: true, rando: false, yoga: true, meditation: false, piano: true, velo: false,
}, {
  chant: true, rando: false, yoga: true, meditation: false, piano: false, velo: false,
}, {
  chant: true, rando: false, yoga: true, meditation: false, piano: true, velo: true,
}, {
  chant: true, rando: false, yoga: true, meditation: true, piano: true, velo: false,
}];
var appHTML = '<table><tr class="titres"><th></th>';

for (var jour of joursDeLaSemaine) {
  appHTML += `<th>${jour}</th>`;
}

for (var hobby of hobbies) {
  appHTML += `<tr class = "${hobby}"><td class="hobby">${hobby}</td>`;
  for (var i = 0; i < 7; i++) {
    appHTML += `<td id = "${hobby}-${i}">${occupations[i][hobby]}</td>`;
  }
  appHTML += '</tr>';
}

appHTML += '</table>';
app.innerHTML = appHTML;

var tds = document.querySelectorAll('td');

for (var td of tds) {
  if (td.innerText === 'true') {
    td.innerHTML = '<span class="boulette">&bull;</span>';
  } else if (td.innerText === 'false') {
    td.innerHTML = '<span class="vide"> </span> ';
  }
}

var boulettes = document.getElementsByClassName('boulette');

for (var boulette of boulettes) {
  boulette.addEventListener('click', (e) => {
    // console.log("on m'a cliqué dessus!");
    // console.log(e.target.parentNode.id);
    var position = e.target.parentNode.id;
    position = position.split('-');
    console.log(position);
    occupations[position[1]][position[0]] = false;
    console.log(occupations);
  });
}
var tds1 = document.querySelectorAll('td');
for (var td1 of tds1) {
  if (td1.innerText === 'true') {
    td1.innerHTML = '<span class="boulette">&bull;</span>';
  } else if (td1.innerText === 'false') {
    td1.innerHTML = '<span class="vide"> </span> ';
  }
}

var vides = document.getElementsByClassName('vide');
for (var vide of vides) {
  vide.addEventListener('click', () => {
    console.log("on m'a cliqué!");
  });
}

/*
vide.addEventListener('click', function(e) {
    console.log(e.target);
    });

data = nb = "3"
get attribute... on peut rechercher le 3
.id pour savoir où il est;

[].forEach(function(el, idx ){
    console.log(idx);
});

*/
/*
//MAP
var balises = ["div","p","h1"];
var balisesHTML = [];
for (var balise of balises){
    var balisesHTML = "<" + balise + ">" + "</" + balise + ">";
    var balisesHTML2 = `<${balise}></${balise}>`;
    identique à la précédente
    balisesHTML.push(balisesHTML);
}
console.log(balises);
console.log(balisesHTML);

OU
var balisesMappees = balises.map(function(balise){
    return "<" + balise + ">" + "</" + balise + ">";
});

//FOREACH
for (var balise of balisesHTML){
    document.body.innerHTML += balise;
};
OU
balisesHTML.forEach(function(balise)){
    document.body.innerHTML += balise;
};

var mettreDansLeHTML = function (el) {
    console.log(el);
    document.body.innerHTML += el;
}

var toto =balisesHTML.forEach(mettreDansLeHTML);

mettreDansLeHTML("<div>youpi</div>");
["<li>toto</li>", "<li>yo</li>"].forEach(mettreDans Le HTML);

//FILTER
var salaires = [1000,"1500,"2000","4500,"5000"];
var petitsSalaires = [];
for (var salaire of salaires){
    if (salaire<2000){
        petitSalaires.push(salaire);
    }
}
OU
var gosSalaires = salaires.filter(function(){
    if (salaire>=2000){
    return true}
    OU
    return salaire>=2000;
});

<div>
<!--table row-->
<tr>
 <!--table header:bold and centered-->
 <th></th>
</tr>
<tr>
 <!--table data:regular and left-aligned-->
 <td></td>
 <!--table data:regular and left-aligned-->
</tr>
</table>
</div>

var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerText = "list item n°1";
ul.appendChild(li);
app.appendChild(ul);

toto.addEventListener("click", function () {console.log("toto")});
*/

// Fonction qui inverse une chaîne de caractères
function inverse_Chaine(chaine) {
  let resultat = "";
  // On parcourt la chaîne à l'envers
  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat += chaine[i]; // On ajoute chaque caractère à la fin
  }
  return resultat;
}
console.log(inverse_Chaine("Sénégal")); // lágèneS
//////////////////////////////////////////////////////////////////////////////

// Fonction pour compter le nombre de caractères d'une chaîne
var compte_Caracteres= function(texte) {
  return `Il y a ${texte.length} caractères dans "${texte}".`; // Utilisation de template literal
};
console.log(compte_Caracteres("Bonjour")); // Il y a 7 caractères dans "Bonjour".
////////////////////////////////////////////////////////////////////////////////

// Fonction qui met en majuscule la première lettre de chaque mot
function Majuscules(phrase) {
  const mots = phrase.split(" "); // On divise la phrase en mots
  const motsMajuscules = mots.map(function(mot) {
    // Première lettre en majuscule + reste en minuscule
    return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
  });
  return motsMajuscules.join(" "); // On reforme la phrase
}
console.log(Majuscules("la vie est belle")); // La vie est belle
////////////////////////////////////////////////////////////////////////////////

// Fonction qui retourne la plus grande valeur d’un tableau
function trouves_Max(tab) {
  return Math.max(...tab); // Opérateur spread
}
console.log(trouves_Max([10, 45, 3, 99])); // 99
///////////////////////////////////////////////////////////////////////////////

// Fonction qui retourne la plus petite valeur d’un tableau
function trouves_Min(tab) {
  return Math.min(...tab);
}
console.log(trouves_Min([10, 45, 3, 99])); // 3
/////////////////////////////////////////////////////////////////////////////

// Fonction qui calcule la somme des éléments d’un tableau
function somme_Tab(tab) {
  let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme;
}
console.log(somme_Tab([5, 10, 15])); // 30
///////////////////////////////////////////////////////////////////////
 
 // Fonction qui filtre les nombres pairs d’un tableau
var filtre_Pairs = function(tab) {
  return tab.filter(function(element) {
    return element % 2 === 0; // Garde uniquement les nombres pairs
  });
};
console.log(filtre_Pairs([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
////////////////////////////////////////////////////////////////////

// Fonction qui calcule la factorielle d’un nombre
function fact(n) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1); // Appel récursif
}
console.log(fact(5)); // 120
////////////////////////////////////////////////////////////////////

// Fonction qui vérifie si un nombre est premier
function nb_Premier(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(nb_Premier(7)); // true
console.log(nb_Premier(10)); // false
///////////////////////////////////////////////////////////////////

// Fonction qui génère la suite de Fibonacci jusqu'à n termes
function fibonacci(n) {
  let suite = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      suite.push(0);
    } else if (i === 1) {
      suite.push(1);
    } else {
      suite.push(suite[i - 1] + suite[i - 2]);
    }
  }
  return suite;
}
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]









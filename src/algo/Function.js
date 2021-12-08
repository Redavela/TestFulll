
// Dans cette exercice le plus simple pour boucler sur chaque élément du tableau c'était de retourner le tableau et de commencer par la fin en n'oubliant pas d'incrémenter la 1ere valeur d'entrée (ex 999 pour passer à 1000)

const increment = (numbers) => {
  numbers.reverse();
  numbers[0] += 1;
  //Une fois vérifier on peut vérifier les conditions une par une sans riquer d'avoir un chiffre manquant à la fin quand on retournera le tableau à l'initiale
  if (numbers[0] === 10) {
    numbers.forEach((number, index) => {
      if (number === 10) {
        numbers[index] = 0;
        if (numbers[index + 1]) {
          numbers[index + 1] += 1;
        } else {
          numbers[index + 1] = 1;
        }
      }
    });
  }
  //Une fois tout vérifier on retourne le tableau sans oublier de le mettre dans le bon ordre
  return numbers.reverse();
};
//ON PEUT TESTER ..
console.log(increment([9, 9, 0]));

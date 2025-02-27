const heroes = ["batman", "superman", "flash", "aquaman"];
// const heroesCopy = ["batman", "superman", "flash", "aquaman"];

// const heroesCopy = heroes.toSorted();
// heroes.sort()
// heroes.reverse();

// const reversedHeroes = heroes.toReversed();


const hero = heroes.toSpliced(0, 2, 'Green');


console.table(heroes);
console.table(hero);

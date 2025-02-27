const superHeroes = [
    {
        id:1,
        name: 'batman'
    },
    {
        id:2,
        name: 'superman'
    },
    {
        id:3,
        name: 'flash'
    },
    {
        id:4,
        name: 'aquaman'
    }

]

const superHerpesCopy = structuredClone(superHeroes);

superHerpesCopy[0].name = "Green"

console.table(superHeroes);
console.table(superHerpesCopy);
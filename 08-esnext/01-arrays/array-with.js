const state = [
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


const index = 1;
const newName = 'Grenn';

// state[0].name = "HOla"

// const newState = state.map ((hero, i) =>{
//     if (i === index){
//         hero.name = newName
//     }

//     return hero;
// })

const newState = state.with(index,{
    ...state.at(index),
    name: newName,
})


console.table(newState);
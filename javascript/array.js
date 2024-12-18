


//slice
//console.log(movies.slice(4));

const arr = ['abc', 789, true, undefined]

console.log(arr);

console.log(typeof arr);

console.log(Array.isArray(arr));

const movies = ['Pushpa 2', 'Deadpool 3', 'Venom 3', 'Spiderman 4', 'Dr.Doom'];

console.log(movies.length);

//indexing
console.log(movies[-2]);
console.log(movies[movies.length-1]);
console.log(movies.indexOf('Venom 3'));
console.log(movies.at(-1));

movies[4] = 'Harry Potter' //update/replacement
console.log(movies);

//slicing/extracting
console.log(movies.slice(1, 4));
console.log(movies.slice(1, 30));
console.log(movies.slice(-3));

//push/pop/addind/removing
movies.push('Thor'); //add at end
movies.unshift('Wall-E'); //add at start
console.log(movies);

movies.pop(); //remove from end
movies.shift(); //remove from start
console.log(movies);

//splice
// movies.splice(2, 2)// to remove from index 2, 2 elements
// movies.splice(2, 2, 'Superman', 'Batman')// to remove from index 2, 2 elements and add 2 elements
movies.splice(2, 0, 'Superman', 'Batman')// to add at index 2
console.log(movies);



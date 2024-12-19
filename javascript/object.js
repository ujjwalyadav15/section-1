// const user = {
//     name:'ujjwal',
//     email:'hcdsvfv@gmail.com',
//     password:'jcjh'
// };
// console.log(user);

// console.log(user.name);

// console.log('---------------');

// console.log(user['email'])

// console.log('---------------');

// user.address = 'Lucknow';

// console.log(user);

// console.log('---------------');

// user.password = 'uuuu';
// console.log(user);
// console.log('---------------');

// delete user.password;
// console.log(user);

// console.log('---------------');

// console.log(Object.keys(user));
// console.log(Object.values(user));

// console.log('---------------');

// const smartphone = {
//     brand: 'Apple',
//     model: 'iPhone 12',
//     price: 79999,
//     color: ['Red', 'Blue', 'Black'],
// }

// console.log(smartphone);
// console.log(smartphone.price);

// smartphone.price = 89999;
// console.log(smartphone);

// console.log(smartphone.color[2]);

// smartphone.color.push('White');
// console.log(smartphone);

// console.log('---------------------');

// smartphone.color[2] = 'Green';
// console.log(smartphone);

console.log('-------------------')

const smartphoneArray = [
    {
        brand: 'Apple',
        model: 'iPhone 12',
        price: 79999,
        color: ['Red', 'Blue', 'Black'],
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S21',
        price: 99999,
        color: ['White', 'Black', 'Silver'],
    },
    {
        brand: 'OnePlus',
        model: '9 Pro',
        price: 69999,
        color: ['Green', 'Black', 'Silver'],
    },
    {
        brand: 'Xiaomi',
        model: 'Mi 11',
        price: 49999,
        color: ['Red', 'Blue', 'Black'],
    },
    {
        brand: 'Realme',
        model: 'X7 Pro',
        price: 29999,
        color: ['Yellow', 'Blue', 'Black'],
    }
];


console.log('----------------------')

console.log(smartphoneArray[2])

console.log('----------------------')

console.log(smartphoneArray[2].model)

console.log('----------------------')

console.log(smartphoneArray[3].color[2])

console.log('----------------------')

console.log(smartphoneArray[4].color.push('golden'))


console.log('----------------------')

smartphoneArray[2].color[0] = 'neon';
smartphoneArray[2].color[1] = 'brown';

console.log(smartphoneArray)

console.log('----------------------')


console.log(smartphoneArray[2].color.splice(2, 0, 'purple', 'blue'))

console.log(smartphoneArray)


console.log('----------------------')
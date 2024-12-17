const user = {
    name:'ujjwal',
    email:'hcdsvfv@gmail.com',
    password:'jcjh'
};
console.log(user);

console.log(user.name);

console.log('---------------');

console.log(user['email'])

console.log('---------------');

user.address = 'Lucknow';

console.log(user);

console.log('---------------');

user.password = 'uuuu';
console.log(user);
console.log('---------------');

delete user.password;
console.log(user);

console.log('---------------');

console.log(Object.keys(user));
console.log(Object.values(user));

console.log('---------------');

const smartphone = {
    brand: 'Apple',
    model: 'iPhone 12',
    price: 79999,
    color: ['Red', 'Blue', 'Black'],
}

console.log(smartphone);
console.log(smartphone.price);

smartphone.price = 89999;
console.log(smartphone);

console.log(smartphone.color[2]);

smartphone.color.push('White');
console.log(smartphone);

console.log('---------------------');

smartphone.color[2] = 'Green';
console.log(smartphone);

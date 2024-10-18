function addNums(a,b){
    c=a+b;
    console.log(c);
    
}
addNums(3220,255);
addNums(216,5523);
addNums(3333,646);

const getAvg = function (m1 , m2 , m3){
    const avg = (m2+ m2+ m3) / 3;
    //console.log(avg);

    return avg;

}

//getAvg(65,26,52);
const result = getAvg(66,23,56);
console.log(result); 

const factorial = (n) => {
    let f= 1;
    for(let i=1; i<=n; i++){
        f=f*i;
    }
    return f;
}
const ans = factorial(5); 
console.log(ans);


// Create a function to check if a number is even or odd

const checkEven = (n) => {
    if(n%2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

const res = checkEven(7);
console.log(res);


// create a function to take time of the day greet according
'morning'
'moon'
'afternoon'
'evening'
'night'

const greet= (Time) => {
    if (time=== 'morning'){
        return 'good morning';
    } else if (time=== 'noon'){
        return 'good noon';
    } else if (time=== 'afternoon'){
        return 'good afternoon';
    } else if (time==='evening'){
        return 'good evening';
    } else if (time=== 'night'){
        return 'good night';
    }
}

// create a function to check if a number is prime or not  

// Function to check prime number

function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(5);

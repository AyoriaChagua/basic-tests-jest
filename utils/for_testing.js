const palindrome = (string) => {

   if(typeof string == 'undefined') return

   return string
     .split('')
     .reverse()
     .join('')
}

const average = (array) => {
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

const validateEmail = (email) => {
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        return false
    }
    return true
}

const isPair = (num) => {
    if(parseInt(num) % 2 === 0){
        return true 
    }
    return false
}


module.exports = {
    palindrome,
    average,
    isPair,
    validateEmail
}
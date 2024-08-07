//8.1
console.log('---8.1---');

function upperCase(str) {
    if (!str) {
        console.log("String is empty");
        return;
    }

    let regEx = /^[A-Z]/;
    if (regEx.test(str)) {
        console.log(str, "String's starts with uppercase character");
    } else {
        console.log(str, "String's not starts with uppercase character");
    }
}

upperCase('regexp'); 
upperCase('RegExp');

//8.2
console.log('---8.2---');

function checkEmail(email) {
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegEx.test(email);
}

console.log(checkEmail("Qmail2@gmail.com")); 
console.log(checkEmail("invalid-email@domain")); 
console.log(checkEmail("another.email@domain.com"));
console.log(checkEmail("123@domain.org")); 

//8.3
$(document).ready(function() {
    $("h2.head").css("background-color", "green");
    
    $("h2.head .inner").css("font-size", "35px");
});

//8.4
$(document).ready(function() {
    $('input[type="checkbox"]').on('change', function() {
        if ($('input[type="checkbox"]:checked').length >= 3) {
            $('input[type="checkbox"]').prop('disabled', true);
        }
    });
});

//8.5
console.log('---8.5---');

function swapSubstrings(text) {
    const regExp = /(\w+)\s+(\w+)/;
    const result = text.replace(regExp, '$2, $1');

    return result;
}

console.log(swapSubstrings("Java Script")); 
console.log(swapSubstrings("Hello World")); 
console.log(swapSubstrings("Regullar expressions")); 

//8.6
console.log('---8.6---');

function checkEmails(emails) {
    const emailPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emails) && !/--/.test(emails)) {
        console.log(emails, "Email is correct!");
    } else {
        console.log(emails, "Email is not correct!");
    }
}

checkEmails('my_mail@gmail.com');  // +
checkEmails('#my_mail@gmail.com');  // -
checkEmails('my_mail@-example.com');  // -
checkEmails('my--mail@example.com');  // -
checkEmails('my_mail@example-.com');  // +

//8.7
console.log('---8.7---');

function findNumbers(text) {
    const numberPattern = /\d+(\.\d+)?/g;
    const numbers = text.match(numberPattern) || [];
    return numbers.join(', ');
}

function checkLogin(login) {
    const loginPattern = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/;

    const isLoginValid = loginPattern.test(login);
    console.log(isLoginValid ? login + " - true" : login + " - false");

    const numbers = findNumbers(login);
    console.log(numbers);
}

checkLogin('ee1.1ret3'); // +
checkLogin('ee1*1ret3'); // -
checkLogin('1e2');       // -
checkLogin('e2');        // +
checkLogin('e2.34');     // +

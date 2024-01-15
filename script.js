const passwordBx=document.getElementById('input');

const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='~!@#$%^&*(_=+?';

const lengthh=13;

let allChars=upperCase+lowerCase+numbers+symbols;

function generatePassword(){
    let password='';

    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(lengthh>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBx.value=password;
}
document.getElementById('generate-button').addEventListener('click',generatePassword);

let copy=document.getElementById('copyImg').addEventListener('click',copyPassword);

function copyPassword(){
    passwordBx.select();
    document.execCommand('copy');
}

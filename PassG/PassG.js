



const characAmountRange = document.getElementById('characAmountRange');
const characAmountNumber = document.getElementById('characAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumberElement = document.getElementById('includeNumber');
const includeSymbolsElement = document.getElementById('includesymbols');
const subBtn = document.getElementById('subBtn');
const dForm = document.getElementById('PasswordGen');
const showPass = document.getElementById('showPass')


const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
arrayFromLowToHigh(58,64)
).concat(arrayFromLowToHigh(91,96)
).concat(arrayFromLowToHigh(123,126));


characAmountRange.addEventListener('input', asynCharacAmount);
characAmountNumber.addEventListener('input', asynCharacAmount);

dForm.addEventListener('submit', e =>{
e.preventDefault();
const characAmount = characAmountNumber.value;
const includeUppercase = includeUppercaseElement.checked;
const includeNumber = includeNumberElement.checked
const includeSymbols = includeSymbolsElement.checked;
const Password = generatePass(characAmount, includeUppercase, includeNumber, includeSymbols);
showPass.innerHTML = Password;
})

function generatePass(characAmount, includeUppercase, includeNumber, includeSymbols){
    let chharcode = LOWERCASE_CHAR_CODES;
    if(includeUppercase) chharcode = chharcode.concat(UPPERCASE_CHAR_CODES);
    if(includeNumber) chharcode = chharcode.concat(NUMBER_CHAR_CODES);
    if(includeSymbols) chharcode = chharcode.concat(SYMBOLS_CHAR_CODES);

    const passCharac = []
    for(let i = 0; i<characAmount; i++){
        const character =chharcode[Math.floor(Math.random() * chharcode.length)];
        passCharac.push(String.fromCharCode(character));
    }
    return passCharac.join('');

}

function arrayFromLowToHigh(low,high){
    const array = [];
for(let i=low; i<=high; i++){
    array.push(i);
}
return array;
}
 function asynCharacAmount(e){
     const value = e.target.value;
    characAmountRange.value = value;
    characAmountNumber.value = value;
 }

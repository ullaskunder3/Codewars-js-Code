// Q.1 Count the Vowels in the strings
function countVowels(str) {
    console.log("The given parameter:", str);
    const vowels = "aeiou";
    let counter = 0;
    
    for(let elm of str){
        if(vowels.includes(elm)){
            counter++
        }
    }
    
    return counter;
}
console.log("Question 1, Count the Vowel",countVowels('dog'));
console.log("***********************************");

// Q. 2 Print the its even or odd
function isEven(num) {
    console.log("The given parameter: ", num);
    if(isNaN(num)){
        return 'Its a String';
    }else{
        if(num % 2 === 0){
            return "Yess Its Even Number";
        }else return "Its Odd Number";
    }
}

console.log("Question 2, isEven: ",isEven(2));
console.log("***********************************");


// Q. 3 Print the opposite of the given number
function oppositeNum(num) {
    console.log("The given parameter: ", num);
    if(isNaN(num)){
        return 'Its a string';
    }
    return -num;
}
console.log("Question 3, find the negation of", oppositeNum(-3));
console.log("***********************************");

// Q. 4 getTheMiddle character
function getMiddleTwoChar(str) {
    if(isNaN(str)){
        if(str.length % 2 === 0){
            console.log("Word is: ",str);
            console.log("Middle position: ",str.length/2);
            console.log("Start from: ", (str.length/2)-1, " at", str[(str.length/2)-1]);
            console.log("till : ", (str.length/2)+1, " at", str[(str.length/2)+1]);
            
            // return `The middle character: ${str.slice((str.length/2)-1, (str.length/2)+1)}`;
            //OR
            return `The middle character: ${str[(str.length/2)-1] + str[str.length/2]}`;
        }
        console.log("Word is: ",str);
        console.log('The length of the string is odd: To get the middle char');
        console.log("This will produce decimal value: ", str.length/2);
        
        return `By using Math.floor the middle char is: "${str[Math.floor(str.length/2)]}"`;
    }
    return "Its a number"
}
console.log("Question 4 get the middle char: ",getMiddleTwoChar('ullas'));

console.log("********************************************");

// Q. 5 Jaden caseing
function capitalizer(word) {
    // return (word[0].toUpperCase() + word.slice(1, word.length));
    return (word[0].toUpperCase() + word.slice(1).toLowerCase());
}

function tojadenCase(str) {
    console.log("The given parameter: ", str);
    const words = str.split(" ");
    let finalResult = [];
    for (const word of words) {
        finalResult.push(capitalizer(word))
    }
    return finalResult.join(' ');
}
console.log("Question 5: Jaden Case: ",tojadenCase("each word initial should be capital"));

console.log("********************************************");

// Q. 5 Mumblings...
function MumbleCapitalizer(char, repet) {
    let result = "";
    for(let i = 0; i<repet; i++){
        result += i === 0 ? char.toUpperCase() : char.toLowerCase();
    }
    return result;
}

function mumbler(str) {
    console.log("The given String is: ", str);
    let result = [];
    const characters = str.split("")
    let counter = 1;
    console.log("converting it into an array, The character is: ", characters);
    for(let letter of characters){
        result.push(MumbleCapitalizer(letter, counter));
        counter++;
    }
    return result.join("-");
}

console.log("Question 6 Mumbling: ",mumbler('abcd'));

console.log("********************************************");

function findMax(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]){
            
        }
    }
    return max;
}
console.log("Question 7 findMax: ", findMax([2,3,4,6,3,6,12]));
console.log("********************************************");

function squareDigits(num) {
    let numString = num.toString().split("");
    console.log(num,"num converted to string then split \"\"",numString);
    
    let squaredNums =  "";
    for(let eachNum of numString){
        squaredNums +=  Math.pow(Number(eachNum), 2)
    }
    return Number(squaredNums)
}

console.log(squareDigits(20));
console.log("********************************************");

console.log('ooxx => should return true' );
console.log('xooxx => should return false' );
console.log('ooxXm => should return true' );
console.log('asdbasd => should return true' );
console.log('zzoo => should return false' );

function ExesAndOhs(str) {
    let XCount = 0;
    let OCount = 0;
    for(let char of str.toLowerCase()){
        // console.log(char);
        if(char === 'x'){
            XCount++;
        }
        if(char === 'o'){
            OCount++;
        }
        // console.log('XCount:', XCount, 'OCount:', OCount);
    }
    if(XCount === 0 && OCount === 0){
        return true;
    }else if(XCount === OCount){
        return true
    }else{
        return false
    }
}

console.log('ooxx', ExesAndOhs('ooxx'));
console.log('xooxx', ExesAndOhs('xooxx'));
console.log('ooxXm', ExesAndOhs('ooxXm'));
console.log('asdbasd', ExesAndOhs('asdbasd'));
console.log('zzoo', ExesAndOhs('zzoo'));

console.log("********************************************");

console.log('likes([])\n=> no one like it');
console.log('likes(["fPerson"])\n=> fPerson like it');
console.log('likes(["fPerson", "sPerson"])\n=> fPerson & sPerson like it');
console.log('likes(["fPerson", "sPerson", tPerson])\n=> fPerson, sPerson & tPersonlike it');
console.log('likes(["fPerson", "sPerson", tPerson, fiPerson])\n=> fPerson, sPerson & 2 other like it');

function likeSys(str) {
    let item = str.length
    switch (item) {
        case 0:
            return "Aww no one likes it yet";
        case 1:
            return `${str} likes it`;
        case 2:
            return `${str[0]} & ${str[1]} likes it`;
        case 3: 
            return `${str[0]}, ${str[1]}, ${str[2]} likes it`; 
        default:
            return `${str[0]}, ${str[1]} & ${item - 2} others like it`
    }
}
console.log(likeSys([]));
console.log(likeSys(["ullas"]));
console.log(likeSys(["ullas", "villas"]));
console.log(likeSys(["ullas", "villas", "kartik"]));
console.log(likeSys(["ullas", "villas", "kunder", "kumer"]));
console.log(likeSys(["ullas", "vil", "las", "kunder", "Awesome", "kumer"]));
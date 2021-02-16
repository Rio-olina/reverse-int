function reverseString(str){
  str1 = Math.abs(str);
 str1 = String(str1)
       let a = str1.split('').reverse().join('');
        

let num = Number(a);
return num }

console.log(reverseString(123))
console.log(reverseString(-123))
console.log(reverseString(120))

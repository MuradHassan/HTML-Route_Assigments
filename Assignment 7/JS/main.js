// var numInput= window.prompt("");
// function myNum(num){
//   document.getElementById('number').innerHTML= num
// }

// myNum(numInput)



//Q1:

// var num=(window.prompt("Enter Your Number"))
// window.alert(num)

///////////////////////////////////////

//Q2:

// var num=(window.prompt("Enter Your Number"));
// if(num % 3 == 0 && num % 4==0){
//     window.alert("Yes")
// }else{
//     window.alert("No")
// }

///////////////////////////////////////

//Q3:

// var numOne=(window.prompt("Enter First Num"));
// var numTwo=(window.prompt("Enter Second Num"));
// if(numOne>numTwo){
//     windwo.alert(numOne)
// }
// else if(numOne<numTwo)
// {
//     window.alert(numTwo)
// }

///////////////////////////////////////

//Q4:

// var num=Number(window.prompt("Enter Your Number"));
// if(num > 0){
//     window.alert("Positive")

// }
// else if(num===0){
//     window.alert(0)
// }
// else{
//     window.alert("Negative")
// }
///////////////////////////////////////

//Q5:
// var nums=(window.prompt("Enter three number without space"));
// var max= 0;

// for(var i=0 ; i < nums.length;i++){
//     if(nums[i] > max){
//         max= nums[i]
//     }else{
//         continue
//     }
// }
// window.alert(max)

///////////////////////////////////////

//Q6:

// var num=(window.prompt("Enter Your Number"));
// if(num % 2 == 0){
//     window.alert("even")
// }else{
//     window.alert("odd")
// }

///////////////////////////////////////

//Q7: is missing

///////////////////////////////////////

//Q8:

// var char=(window.prompt("Enter Your character"));


// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
//     window.alert("vowel")
// }else{
//     window.alert("constonent")
// }

///////////////////////////////////////

//Q9:

// var num=(window.prompt("Enter Your Number"));
// var res = ""

// for(var i =1 ; i <= num ; i++){
//     res+= i + ","
// }
// window.alert(res)

///////////////////////////////////////

//Q10:

// var num=(window.prompt("Enter Your Number"));
// var next = num;
// var res = ""
// for(var i = 1 ; i <= 12 ; i++){
//     next = num * i
//     res+=  next + ","
// }
// window.alert(res)

///////////////////////////////////////

//Q11:

// var num=(window.prompt("Enter Your Number"));
// var res = ""

// for(var i =1 ; i <= num ; i++){
//     if(i%2==0)
//     {
//         res+= i + ","
//     }
// }
// window.alert(res)

///////////////////////////////////////

//Q12:

// var num=Number(window.prompt("Enter Your Number"));
// var power=(window.prompt("Enter Your Power"));
// window.alert(Math.pow(num,power))

///////////////////////////////////////

//Q12++:

// var bio=Number(window.prompt("Enter Your marks in bio using Numberout of 500"));
// var chem=Number(window.prompt("Enter Your marks in chem using Number out of 500"));
// var phy=Number(window.prompt("Enter Your marks in physics using Numberout of 500"));
// var math=Number(window.prompt("Enter Your marks in math using Numberout of 500"));
// var com=Number(window.prompt("Enter Your marks in computer using Numberout of 500"));

// var total = bio + chem + phy + math + com;
// var percentage = (total * 100 ) / 500 ;
// var average = total / 5

// window.alert("total: " + total + " and your percentage is: " + percentage + "%" + " and the average is: " + average )



///////////////////////////////////////

//Q13:

// var month=Number(window.prompt("Enter Your Month"));
// switch (month) {
//     case 1 :
//         window.alert(31)
//         break;
//     case 2 :
//         window.alert(28)
//         break;
//     case 3 :
//         window.alert(31)
//         break;
//     case 4:
//         window.alert(30)
//         break;
//     case 5 :
//         window.alert(31)
//         break;
//     case 6 :
//         window.alert(30)
//         break;
//     case 7 :
//         window.alert(31)
//         break;
//     case 8 :
//         window.alert(31)
//         break;
//     case 9 :
//         window.alert(30)
//         break;
//     case 10 :
//         window.alert(31)
//         break;
//     case 11 :
//         window.alert(30)
//         break;
//     case 12 :
//         window.alert(31)
//         break;

//     default:
//         break;
// }

///////////////////////////////////////

//Q14:

// var bio=Number(window.prompt("Enter Your marks in bio using Numberout of 10"));
// var chem=Number(window.prompt("Enter Your marks in chem using Number out of 10"));
// var phy=Number(window.prompt("Enter Your marks in physics using Numberout of 10"));
// var math=Number(window.prompt("Enter Your marks in math using Numberout of 10"));
// var com=Number(window.prompt("Enter Your marks in computer using Numberout of 10"));


// var total = bio + chem + phy + math + com;
// var percentage = total * 100 / 50 ;

// if(percentage >= 90){
//     window.alert("your percentage is 90% and your grade is : A")
// }else if(percentage >= 80){
//     window.alert("your percentage is 80% and your grade is : B")
// }
// else if(percentage >= 70){
//     window.alert("your percentage is 70% and your grade is : c")}
// else if(percentage >= 60){
//     window.alert("your percentage is 60% and your grade is : d")}
// else if(percentage >= 50){
//     window.alert("your percentage is 50% and your grade is : F")}


///////////////////////////////////////

//Q15:

// var month=Number(window.prompt("Enter Your Month"));
// switch (month) {
//     case 1 :
//         window.alert(31)
//         break;
//     case 2 :
//         window.alert(28)
//         break;
//     case 3 :
//         window.alert(31)
//         break;
//     case 4:
//         window.alert(30)
//         break;
//     case 5 :
//         window.alert(31)
//         break;
//     case 6 :
//         window.alert(30)
//         break;
//     case 7 :
//         window.alert(31)
//         break;
//     case 8 :
//         window.alert(31)
//         break;
//     case 9 :
//         window.alert(30)
//         break;
//     case 10 :
//         window.alert(31)
//         break;
//     case 11 :
//         window.alert(30)
//         break;
//     case 12 :
//         window.alert(31)
//         break;

//     default:
//         break;
// }

///////////////////////////////////////

//Q16:

// var char=(window.prompt("Enter Your character"));

// switch (char) {
//     case  'a':
//         window.alert("vowel")
//         break;
//     case  'e':
//         window.alert("vowel")
//         break;
//     case  'i':
//         window.alert("vowel")
//         break;
//     case  'o':
//         window.alert("vowel")
//         break;
//     case  'u':
//         window.alert("vowel")
//         break;

//     default:
//         window.alert("constonent")
//         break;
// }

///////////////////////////////////////

//Q17:

// var numOne=(window.prompt("Enter Your Number One"));
// var numTwo=(window.prompt("Enter Your Number Two"));

// switch (numOne>numTwo) {
//     case  true:
//         window.alert(numOne)
//         break;
//     case false:
//         window.alert(numTwo)
//         break;
//     default:
//         window.alert("Nan")
//         break;
// }

///////////////////////////////////////

//Q18:

// var num=(window.prompt("Enter Your Number "));

// switch (num%2===0) {
//     case  true:
//         window.alert("even")
//         break;
//     case false:
//         window.alert("odd")
//         break;
//     default:
//         window.alert("Nan")
//         break;
// }

///////////////////////////////////////

//Q19:

// var num=(window.prompt("Enter Your Number "));

// switch (num > 0)  {
//     case  true:
//         window.alert("positive")
//         break;
//         case 0:
//             window.alert("zero")
//             break;
//     case false:
//         window.alert("negative")
//         break;
//     default:
//         window.alert("nan")
//         break;
// }


///////////////////////////////////////

//Q20:

// var result;

//     var operator = prompt('Enter operator +, -, * or / : ');


//     var number1 = Number(prompt('Enter first number: '));
//     var number2 = Number(prompt('Enter second number: '));

//     switch(operator) {
//       case '+':
//       result = number1 + number2;
//       window.alert(result);
//       break;

//       case '-':
//       result = number1 - number2;
//       window.alert(result);
//       break;

//       case '*':
//       result = number1 * number2;
//       window.alert(result);
//       break;

//       case '/':
//       result = number1 / number2;
//       window.alert(result);
//       break;

//       default:
//       window.alert('wrong operationr');
//       break;
//     }
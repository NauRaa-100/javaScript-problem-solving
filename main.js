document.getElementById('h').style.color='blue' ;
document.getElementById('h').style.fontSize= '80px' ;
document.getElementById('h').style.fontWeight= 'bold' ;
document.getElementById('h').style.textAlign='center';
document.getElementById('h').style.fontFamily='arial';

console.log('%cELZero %cWeb %cSchool' , 'color:red','color:blue ; font-weight:bold' ,'color:white ; background:blue');




// Tasks for variables js

let numbrOne = "10" ;

let numberTwo = "20" ;

let concatNums = numbrOne + numberTwo ;

console.log( concatNums); 

console.log(typeof(+concatNums));

console.log(`${numbrOne}${numberTwo}`);

console.log(`${typeof(concatNums)}`);

console.log(numberTwo + "\n" + numbrOne);

console.log(`${numberTwo}\n ${numbrOne}`);

let a = 21;
let b = 20;

console.log(`${'_'}${a}${'_'}${a}${b}${'_'}${a}${b}${'_'}${b}${'_'}  `); // _21_2021_2021_2021_20_


/*Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/
let myName = 'NauRaa' ;
let childrenNumber = 6 ;
let partnerName = 'null' ;
let geographicLocation = 'Austria' ;
let jobTitle = 'Enj' ;

// Answer No 1
console.log(`${'You will be'} ${myName} ${','} ${jobTitle} ${'live in'} ${geographicLocation}
${', and married to'} ${partnerName} ${'with'} ${childrenNumber} ${'kids'}`) ;
 
// Answer No 2
var future = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' +
   partnerName + ' ' + ' with ' + childrenNumber + ' kids.';
console.log(future);

// Task

/*
The Age Calculator
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
*/

let thisYear = 2026 ;
let birthYear = 1994 ;
let myAge = 2026 - 1994 ;
let mySecage = myAge -1 ;
let outPut = "I will be either" + ' ' + myAge+ ' ' + 'or' + ' ' + mySecage + ' ' + 'in 2026' ;
console.log(outPut);


// Task 

 /*Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".

*/
let r = 2 ;
let bY = 3.14 ;
let areaCircle = bY*r**2 ;

console.log(areaCircle);

// Task Replace ? With Arithmetic Operators


console.log(10**2 + (20*15) / 3 +(190 + 10)- 400); // 0


// Task 2
/*let num = 3;

// Solution One
console.log("Write Your Code Here"); // 6

// Solution Two
console.log("Write Your Code Here"); // 6

// Soultion Three
console.log("Write Your Code Here"); // 6

// Soultion Four
console.log("Write Your Code Here"); // 6

// Solution Five
console.log("Write Your Code Here"); // 6

// Solution Six
console.log("Write Your Code Here"); // 6 
*/
var numOp = 3;

console.log(numOp+numOp) ;
console.log(numOp**2 -numOp);
console.log(numOp**3 / numOp -numOp) ;
console.log(--numOp + numOp + numOp) ;
console.log(numOp--**3 - numOp - true) ;
console.log(++numOp +numOp+ true + true) ;


/*let num = "10";

// Solution One
console.log("Write Your Code Here"); // 20

// Solution Two
console.log("Write Your Code Here"); // 20

// Solution Three
console.log("Write Your Code Here"); // 20

// Solution Four
console.log("Write Your Code Here"); // 20

*/



let numT ='10' ;

console.log(+numT + +numT) ;
 
console.log(Number(numT)* (true+true)) ;

console.log(+(numT**2) / (+numT /(true + true) ) ) ;

console.log(--numT + true +numT + true);


let points = 10;

// Write Your Code Here

console.log(points++ + true +true + true); // 13

// Write Your Code Here

console.log(points-- -true -true -true); // 8;

let numr = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Frodo";
let lastName = "Baggins";

/*
What is the value of: num + str?
What is the value of: num + str2?
What is the value of: num + isPresent?
What is the value of: firstName + num?
What is the value of: isPresent + str?
What is the value of: firstName + lastName?
*/

console.log(numr + str) ; // if its string
console.log(numr + +str) ; // if its number 
console.log(numr + isPresent);

console.log(numr + str2) ; // if its string
console.log(numr + +str2) ; // if its number

console.log(firstName + numr);
console.log(firstName +' ' + lastName);

//************** */

let val = 5;
let str3 = "5";
let str4 = "five";
let isAwake = false;

/*What is the value of: val == str3?
What is the value of: val === str3?
What is the value of: !isAwake?
What is the value of: ("eleven" == str4 && val >= str3)?
What is the value of: (!isAwake || isAwake)?
What is the value of: 0 == false?
What is the value of: 0 === false?
What is the value of: 0 != false?
What is the value of 0 !== false?
*/

// Task 

/*// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
*/

console.log(10e5);
console.log(10**6);
console.log(2*(500e3));
console.log(Math.pow(10,6));
console.log(Math.max(10,10**6));
console.log(10**3 * 10**3);
console.log(parseInt(1000000,0));
console.log(1_000e3);
console.log(20e4 *5);
console.log(10**7 / 10**1);
console.log(5*2*(10**5));
console.log(1e6 - 0);
console.log(100**3);
console.log(100e5 / 10**1);

// console.log(); // 9007199254740991

console.log(-(Number.MIN_SAFE_INTEGER ));

//console.log(); // 16
//solution 1
console.log(Number.MAX_SAFE_INTEGER / 562949953421311.94);
//solution 2
console.log(Number.MAX_SAFE_INTEGER.toString().slice(7,9)- 3**2);

/*let myVar = "100.56789 Views";

console.log(); // 100
console.log(); // 100.57
*/

let myVari = "100.56789 Views";

console.log(parseInt(myVari)); // 100
console.log(+((+(myVari.slice(0,7))).toFixed(2))); // 100.57
console.log(typeof(+((+(myVari.slice(0,7))).toFixed(2))));

let numD = 10;

console.log(Number.isInteger(numD)+ true); // 2
console.log(+(Number.MAX_SAFE_INTEGER.toString().charAt(7)));

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+(flt.toFixed(0))); // 10

//*********************************************************** */

let userName = "Elzero";

console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.split('',1).toString().toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes('z')); // True
console.log(word.startsWith('E')); // True
console.log(word.endsWith('o')); // True

// if conditions && switch if 

/*
console.log(100 ? "100"); // true
console.log(100 ? 1000); // true
console.log(110 ? 100 ? 10 ? 20); // true
console.log(-10 ? "-10"); // true
console.log(? -50 ? ? +"-40"); // true
console.log(? 10 ? ? -"-40"); // true
console.log(? "10" ? ? 10); // true
console.log(? 20 ? false); // true
*/

console.log(100 == "100"); // true

console.log(100 !== 1000); // true

console.log(110 !== 100 !== 10 !== 20); // true

console.log(-10 == "-10"); // true

console.log(+ -50 !== +"-40"); // true

console.log(- 10 < -"-40"); // true

console.log(+ "10" === 10); // true

console.log(- 20 !== false); // true

let num11 = 10;
let num22 = 20;

console.log(num11< num22); // true
console.log(num11 !== num22); // true
console.log(num22-num11 === num11); // true
console.log(num22 / num11 > true); // true
console.log(num11 / num22 > false); // true
console.log(typeof(num11) === typeof(num22)); // true



let aN = 20;
let bN = 30;
let cN = 10;

console.log(aN !== bN && aN !== cN || aN !== bN); // true

console.log(aN < bN && aN > cN); // true
console.log(!(aN > bN) && !(aN > bN) && !(aN < cN) && !(aN < cN)); // true

/*
// Test Case 1
let numI = 9; // "009"

// Test Case 2
let numI = 20; // "020"

// Test Case 3
let numI = 110; // "110"

*/
// Test Case 1
let numI = 9; // "009"

if(numI < 10){

   console.log('00' + numI);


}




// Test Case 2
let numM = 20; // "020"

if(numM > 10 && numM < 100){

   console.log('0' + numM);

}

// Test Case 3
let numZ = 110; // "110"
 if(numZ >= 100){
   console.log(numZ.toString());
 }


 
 let num1V = 9;
 let strV = "9";
 let str2V = "20";
 
 // Output
 "{num1} Is The Same Value As {str}"
 "{num1} Is The Same Value As {str} But Not The Same Type"
 "{num1} Is Not The Same Value Or The Same Type As {str2}"
 "{str} Is The Same Type As {str2} But Not The Same Value"

/*السطر الأول إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني
السطر الثاني إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني ولكن النوع مختلف
السطر الثالث إذا كانت قيمة المتغير الأول ليست نفس قيمة المتغير الثالث وليست ايضا نفس النوع
السطر الرابع إذا كانت قيمة المتغير الثاني لا تساوي المتغير الثالث ولكنهم نفس النوع
يجب فحص نوع البيانات والقيمة بنفسك لأن البيانات يمكن ان يتغير نوعها وقيمتها
*/

if(num1V == strV){
   console.log(`${num1V} Is The Same Value As ${strV}`);
};

if(num1V !== strV){
console.log(`${num1V} Is The Same Value As ${strV} But Not The Same Type
`)
}

if(num1V !== str2V){

   console.log(`${num1V} Is Not The Same Value Or The Same Type As ${str2V}"
`)

}

if(strV != str2V && typeof(strV) == typeof(str2V)){
   console.log(`${strV} Is The Same Type As ${str2V} But Not The Same Value"
`)
}

/*يجب عمل جميع الحلول ب If Condition واحدة
السطر الأول تأكد أن المتغير الثالث أكبر من الأول ولا يساوي الثاني في النوع
السطر الثاني تأكد أن المتغير الثالث أكبر من الأول ومساوي للثاني في القيمة ولا يساوي الثاني في النوع
السطر الثالث تأكد أن قيمة المتغير الثالث لا تساوي الأول من ناحية القيمة والنوع ولا تساوي الثاني من ناحية النوع
يجب فحص نوع البيانات والقيمة بنفسك لأن البيانات يمكن ان يتغير نوعها وقيمتها

let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

*/

let num1 = 10;
let num2 = 30;
let num3 = "30";

if(num3 > num1 && typeof(num3) !== typeof(num2)){
   console.log(`${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`)

if(num3 > num1 && num3 == num2 && typeof(num3) !== typeof(num2)){

   console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}

if(num3 !== num1 && typeof(num3) !== typeof(num2)){
   console.log(`"${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}"`)
}
}

/*لديك متغير يحتوي على اليوم الخاص بالموعد وبواسطة ال Switch قم بإظهار رسالة للشخص على حسب اليوم المختار مع عمل الشروط التالية
يجب التأكد أن إسم اليوم لا توجد قبله مسافات ولا بعده ويكون أول حرف Capital حتى لو تم كتابة الإسم بحروف صغيرة
إذا كانت قيمة المتغير هي يوم الجمعة أو السبت أو الأحد تظهر له أنه لا توجد مواعيد متاحة في هذه الأيام
إذا كانت قيمة المتغير هي يوم الإثنين أو الخميس يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى الخامسة مساء
إذا كانت قيمة المتغير هي يوم الثلاثاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السادسة مساء
إذا كانت قيمة المتغير هي يوم الأربعاء يكون المواعيد المتاحة من الساعة العاشرة صباحا وحتى السابعة مساء
إذا كانت قيمة المتغير هي يوم خاطيء تظهر له رسالة أن اليوم فيه خطأ
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"
*/


let daY = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
/*
let daY = "Friday";
let daY = "Saturday";
let daY = "Sunday";
// Output => "No Appointments Available"

let daY = "Monday";
let daY = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let daY = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let daY = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let daY = "World";
// Output => "Its Not A Valid Day"
*/
switch(daY){
   case 0:
      daY = "Friday"
      case 1 :
         daY = 'Saturday'
         case 2 :
            daY = 'Sunday'
         console.log("No Appointments Available") 
         break ;

         case 3 :
            daY = 'Monday'
            case 4 :
               daY = 'Thursday'
               console.log("From 10:00 AM To 5:00 PM")
               break;
               case "Wednesday":
               console.log( "From 10:00 AM To 7:00 PM");
               break;
              default:
                  console.log("It's Not A Valid Day");


}
console.log(daY);


























/*// تمارين على switch - حلها بنفسك بالجافا سكريبت

// تمرين 1: بناءً على اسم الفاكهة المدخل، اطبع سعرها.
let fruit = "Apple"; // جرب تغييرها إلى Orange أو Banana أو غيرها
// استخدم switch لتحديد السعر

// تمرين 2: بناءً على رمز العملة، اطبع اسم العملة الكامل.
let currencyCode = "USD"; // جرب تغييرها إلى EUR أو JPY أو غيرها
// استخدم switch لتحديد اسم العملة

// تمرين 3: بناءً على رقم الشهر، اطبع اسم الشهر.
let monthNumber = 3; // جرب تغييرها إلى أي رقم من 1 إلى 12
// استخدم switch لطباعة اسم الشهر

// تمرين 4: بناءً على درجة الحرارة، اطبع الحالة الجوية المناسبة.
let temperature = 25; // جرب تغييرها إلى قيم أخرى
// استخدم switch لتحديد الحالة الجوية

// تمرين 5: بناءً على نوع السيارة، اطبع تصنيفها (رياضية، عائلية، كهربائية...)
let carType = "SUV"; // جرب تغييرها إلى Sedan أو Electric أو غيرها
// استخدم switch لتحديد التصنيف

// قم بحل التمارين بنفسك باستخدام switch في كل حالة!
*/

/*// تمرين 2: بناءً على رمز العملة، اطبع اسم العملة الكامل.
let currencyCode = "USD"; // جرب تغييرها إلى EUR أو JPY أو غيرها
// استخدم switch لتحديد اسم العملة

*/

let currencyCode = "EG" ;

switch(currencyCode){
case 'USD' :
console.log(`The Currency Is United State Dollar`)
break;
case 'EG' :
console.log(` The Currency Is Egyptian Pound `)
break;
case 'Yen' :
console.log(` The Currency Is Jappanese Yen`)
break;
default :
console.log(`Unknown`);
}

// تمرين 3: بناءً على رقم الشهر، اطبع اسم الشهر.
let monthNumber = 4 ; // جرب تغييرها إلى أي رقم من 1 إلى 12
// استخدم switch لطباعة اسم الشهر

switch(monthNumber){
   case 1 :
      message = `Current Month Is January`
      break;
      case 2 :
         message = `Current Month Is February`
         break;
   case 3:
      messsage = `Current Month Is March`
      break ;
      case 4 :
        message= `Current Month Is April`
         break ;
         default :
        console.log( `أمشى اطلع برا`)
         
}

console.log(message) ;


// same task with if condition

if(monthNumber == 1 ){
   console.log(`Current Month Is January`);
   if(monthNumber == 2 ){
      console.log(`Current Month Is F`);
   }
  
}
else (console.log( `أمشى اطلع برا`));



// تمرين 4: بناءً على درجة الحرارة، اطبع الحالة الجوية المناسبة.
let temperature = ' '; // جرب تغييرها إلى قيم أخرى
// استخدم switch لتحديد الحالة الجوية

switch(temperature){
   case 25 :
      message = `Cute `
      break;
      case 10 :
         message =` Cold Tc tc tc`
         break;
         case -2 :
            message = `Freeeeeeeing `
            break;
            case -50 :
            message = ` احا ببتاعها`
            default :
            message =`wi wi wi `
}


console.log(message);

// تمرين 5: بناءً على نوع السيارة، اطبع تصنيفها (رياضية، عائلية، كهربائية...)
let carType = " "; // جرب تغييرها إلى Sedan أو Electric أو غيرها
// استخدم switch لتحديد التصنيف

switch(carType){
case 'BMW' :
console.log(`فخامة يباشا`)
break;
case 'SUV' :
console.log(`معرفهاش يبشة`)
break ;
case 'Merceidece' :
console.log(`حلم أراة قريبا`)
break ;
case 'AUDi' :
   console.log(`MSM`)
break ;
default : 
console.log(`اى حاجة يبشة دودج جيب اى حاجة روضا`)
}
/*
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب عمل الحل والمطلوب بطريقتين مختلفتين
يمكنك كتابة ما تريد خارج ال Console لتنفيذ المطلوب
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];
*/

let myFriendz = ["Ahmed", "Elham", "Osama", "Gamal"];
let nUm = 3;

console.log(myFriendz.slice(0,3).join(' ')); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();

// إزالة العنصر الأخير
friends.pop();

console.log(friends); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrTwo.pop() , arrOne.sort().reverse() , arrTwo.sort().reverse());


console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
/*
المطلوب:
عندك المصفوفات التالية:

javascript
Copy
Edit
let numsOne = ["1", "2", "3"];
let numsTwo = ["4", "5", "6"];
let finalNums = [];
اكتبي سطر كود واحد فقط بحيث تطبع finalNums بهذا الترتيب:

javascript
Copy
Edit
console.log(finalNums); // ["6", "3", "2", "1", "5", "4"]
*/

let numsOne = ["1", "2", "3"];
let numsTwo = ["4", "5", "6"];
let finalNums = [];

finalNums= finalNums.concat(numsTwo.pop(), numsOne.reverse() , numsTwo.reverse());

console.log(finalNums); // ["6", "3", "2", "1", "5", "4"]
/*
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام الرقم 0 فقط
يجب كتابة سطر Code واحد فقط لتخرج القيمة المطلوبة
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log("Your Code Here"); // ZERO

*/

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// answer 1
console.log(words[2][0].slice(2,6).toUpperCase()); // ZERO

// answer 2

words = words.pop()[0]

if(words.includes('El') === true){
   console.log('ZERO');
}
/*
كل ما عليك هو التأكد أن قيمة متغير needle
 موجود داخل ال Array المسماه haystack
يجب عمل الحل بثلاث طرق مختلفة
قم بطباعة كلمة Found في ال Console إذا كانت الكلمة موجودة
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solution

*/

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solution

//Answer 1

if(haystack.includes(needle)=== true){
console.log('Found');

}
// Answer 2


if(haystack.indexOf(needle)!== false){
   console.log('Found');

}

//Answer 3

if(haystack.slice(1,length-1).join( ) === needle){

   console.log('true');
}

/*
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام وإستثناء الرقم 40 كما في المثال
يجب إستخدام ال Loop For لعمل المطلوب
let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100
*/

let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100
// Answer 1
for(let i = start ; i<= end ; i+=10){
   if(i== exclude){
   continue ;
   }
   console.log(i)
}

// Answer2 Advanced

let i = start ;

for ( ; ; ){
 if(i > end) break;

 if(i == exclude ){
   i+=10
   continue;
 }
 console.log(i)
 i+=10;
 
}

/*
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام كما في المثال والتوقف عند الرقم 3
إذا كان الرقم اصغر من 10 قم بطباعة صفر قبله
يجب إستخدام ال Loop For لعمل المطلوب
let start = 10;
let end = 0;
let stop = 3;

// Output
10
09
08
07
06
05
04
03

*/

let stAart = 10;
let eNd = 0;
let stop = 3;

/* Output
10
09
08
07
06
05
04
03
*/

for( let i = stAart ; i>= stop ; i--){
   if(i<stAart){
      
      console.log(eNd.toFixed() + i);
      
   }
   else {
      console.log(i.toString(i)); // طباعة الرقم العادي
    }
   
}

/*ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام كما في المثال
يجب إستخدام ال Loop For لعمل المطلوب
let start = 1;
let end = 6;
let breaker = 2;

// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4 
*/ 


let stAArt = 1;
let eNNd = 6;
let brEaker = 2;
let lonk = 4;
let fiN = '--' ;
/*
for(let i = stAArt ; i <= eNNd ; i++){

console.log(i);

for(let l = brEaker ; l<= lonk ; l+=2)
console.log(fiN+l)

}
*/
// Answer with Advanced loop
let z = stAArt ;
for( ; ;){

if(z > eNNd)break;
console.log(z);
z++ ;

let l = brEaker ; //  << يجب اضافة المتغير داااااخل اللوب مش برا اللوب الرئيسي 

for( ; ; ){

if(l>lonk )break;
console.log(fiN+l) ;
l+=2

}

}
 /*
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام كما في المثال
قم بكتابة ال Code الخاص بك داخل ال Loop فقط ولا تقم بالتعديل على أي شيء آخر
let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
}

// Output
10
8
6
4
*/

let index = 10;
let jump = 2;
let fiNi = 4 ;
let n = index ;
for (;;) {

if(n < fiNi ) break;
console.log(n);
n-=jump ;
}

/*ممنوع إستخدام الأرقام نهائيا ولا الحروف ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأسماء كما في المثال مع وضع رقم قبل كل قيمة بطريقة ديناميكية
قم بإسثتناء الأسماء التي تبدأ بحرف A
يجب إستخدام ال Loop For لعمل المطلوب
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

*/
let frieNds = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = 1 ;
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

for(let i = 0 ; i < frieNds.length ; i++){

if( frieNds[i].toLocaleLowerCase().startsWith(letter))
    continue ;
console.log(`"${count} => ${frieNds[i]}"`);
}
/*
ممنوع إستخدام الأرقام أو الحروف نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
المطلوب بإستخدام ال Loop تحويل الحروف الكبير لصغيرة والعكس. شاهد المثال
يجب إستخدام ال Loop For لعمل المطلوب
let start = 0;
let swappedName = "elZerO";

// Output
"ELzERo"

*/

let sStart = 0;
let swappedName = "elZerO";
let result = '' ;

// Output
"ELzERo"

/*
for (let i = sStart; i < swappedName.length; i++) {
   if (swappedName[i] === swappedName[i].toUpperCase()) {
       result += swappedName[i].toLowerCase();
   } else {
       result += swappedName[i].toUpperCase();
   }
}


console.log(result)
*/
// Answer with advanced loop

let j = sStart;

for( ; ; ) {

if(j >= swappedName.length) break ;

if (swappedName[j] === swappedName[j].toUpperCase()) {
   result += swappedName[j].toLowerCase();

} else {
   result += swappedName[j].toUpperCase();
}
j++

}
console.log(result);

/*
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
المطلوب طباعة الأرقام فقط من أول الرقم إثنين للنهاية
فكر قليلا بالمنطق كيف ستجعل ال Loop يتجاهل الرقم 1
يجب إستخدام ال Loop For لعمل المطلوب
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2
3
4
*/

let staRt = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2
3
4

/*
for(let i = staRt**staRt ; i < mix.length ; i++){

if(typeof(mix[i]) === "string") continue ;
else{
console.log(mix[i]);
}

}
*/

// Answer for Advanced loop


let l = staRt**staRt ;

for( ; ; ){
if(l >= mix.length) break;

if(typeof(mix[l]) === "string") {
l++
continue ;
}
console.log(mix[l])
l++
}

// repeating tasks

/*ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام وإستثناء الرقم 40 كما في المثال
يجب إستخدام ال Loop For لعمل المطلوب
let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100
*/
let stArt = 10;
let ed = 100;
let excludee = 40;

// Output
10
20
30
50
60
70
80
90
100
/*
for(let i = stAart ; i <ed ; i+=10){
if(i === excludee ) continue ;
console.log(i)
}
*/
// for Advanced

let e = stAart ;
for(;;){
if(e>ed)break;

if(e === excludee ){
e+=10
continue ;
}
console.log(e)
e+=10
}
/*
ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
يجب طباعة الأرقام كما في المثال والتوقف عند الرقم 3
إذا كان الرقم اصغر من 10 قم بطباعة صفر قبله
يجب إستخدام ال Loop For لعمل المطلوب
let start = 10;
let end = 0;
let stop = 3;

// Output
10
09
08
07
06
05
04
03
*/
let strt = 10;
let eed = 0;
let stOp = 3;

/* Output
10
09
08
07
06
05
04
03
*/
/*
for(let i = strt ; i>= stOp  ; i--){
if(i !== strt){
   console.log(`${eed}${i}`)
}
else{
   console.log(i);
}
}
*/
// Answer with advanced 

let o =strt ;
for(;;){
if(o < stOp) break;

if(o !== strt && o<strt){
   console.log(`${eed}${o}`);
   o--
}
else{
   console.log(o);
   o--;

}


}

/*
// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/
let st = 1;
let eD = 6;
let breaker = 2;
let indo = '-- '

for(let i = st ; i<=eD; i++){
console.log(i);
for(let t =breaker ; t <= eD -breaker ; t+=2){
   console.log(`${indo}${t}`)
}
}

// Advanced loop
let q = st ;
for(;;){
if(q>eD) break;

let w = breaker;
for(;;){
if(w> eD -breaker) break;

console.log(`${indo}${w}`)
w+=2
}

console.log(q);
q++
}

let iNdex = 10;
let jUmp = 2;
let enNnd =4 ;

let p =iNdex ;
for (;;) {
  // Write Your Code Here
if(p< enNnd)break;

console.log(p);
p-=jUmp ;

}

// Output
10
8
6
4

let frIends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let leTter = "a";
let cont = 1
/*
// العادية
for(let i =0; i< frieNds.length ; i++){
if(frieNds[i].startsWith(leTter.toUpperCase()))continue ;
else{
   console.log(`"${cont++} => ${frIends[i]}"`)}}
// advanced
*/
let y = 0;
for(;;){
   if(y >= frieNds.length)break;

   if(frieNds[y].startsWith(leTter.toUpperCase()) === true){
      y++
      continue ;
   }
   else{
      console.log(`"${cont++} => ${frieNds[y]}"`)
   y++
}}

let stat = 0;
let swappEdName = "elZerO";

// Output
"ELzERo"

for(let i = stat ; i< swappEdName.length ; i++ ){

if(swappEdName[i]=== swappEdName[i].toUpperCase()){

   console.log(swappEdName[i].toLowerCase());
}
else{
   console.log(swappEdName[i].toUpperCase())
}

}


// chatGpt practice for loop
/*
أولًا: مسائل على loop (الحلقات)
طباعة الأعداد الزوجية:
اكتب كودًا يستخدم for loop لطباعة جميع الأعداد الزوجية من 1 إلى 20.

*/

for(let i =2; i<=20; i++){if(i % 2 == 0)console.log(i);}

// Advanced 

let oo = 2 ;
for( ; ;){

if(oo > 20)break;
console.log(oo); // طبعنا وزودنا قبل ال continue عشان مبيتفذش حاجة بعدها 
oo++
if(oo % 2 !== 0) oo++ ; continue ;
}

/*
مجموع الأعداد:
استخدم while loop لحساب مجموع الأعداد من 1 إلى 100.
*/

for(let i=1 ; i<= 100 ; i++){console.log(i+i)}
// باستخدام ال advanced

let mm = 1 ;
for(;;){if(mm >100)break;console.log(mm + mm);mm++}

// باستخدام ال while 

let sum = 0;
let num = 1;

while(num <= 100){sum += num; num++;} console.log("مجموع الأعداد من 1 إلى 100 هو:", sum);

// لوعاوزين التكرار يكون فسطر واحد او نص لازم يتخزن جوة متغير والا هيتكرر بشكل طولى !

/*عكس النص:
خذ نصًا من المستخدم واطبعه بالعكس باستخدام for loop.
مثال: "hello" → "olleh"
*/


let inpUt = 'Nau Raa';
let rezult = '';

for (let i = inpUt.length - 1; i >= 0; i--) { 
rezult += inpUt[i]; // نضيف الحروف بالعكس
}console.log(rezult); // هيطبع العكس

// another answer
let reverseed = inpUt.split( '').reverse().join('') ; console.log(reverseed)
/*
🔹 المسألة:
📌 عندك مصفوفة فيها شوية أرقام، والمطلوب تعكسي ترتيب الأرقام فيها باستخدام for loop.
🔹 مثال:

let numbers = [10, 20, 30, 40, 50];
✅ النتيجة المطلوبة:

[50, 40, 30, 20, 10]
*/

let numbers = [10, 20, 30, 40, 50];
let resolt = [];


// اذا استخدمنا اللوب هيكون 
/*
for(let i = numbers.length-1 ; i>= 0 ; i--){
   resolt+=numbers[i] ; // مينفعش عشان دى مصفوفة 
   console.log(resolt);
}
*/

for (let i = numbers.length - 1; i >= 0; i--) { 
    resolt.push(numbers[i]); // بنضيف الرقم للمصفوفة الجديدة
}console.log(resolt); // [50, 40, 30, 20, 10]
/*
إيجاد أكبر رقم:
لديك مصفوفة [12, 45, 78, 23, 56, 89, 14]،
 استخدم for loop للعثور على أكبر عدد فيها.

*/

let aRR = [12, 45, 78, 23, 56, 89, 14] ;
// console.log(Math.max(+(aRR.join(' ')))) 
// console.log(Math.max(aRR.join( )))
let rezzult = [] ;
for(let i= aRR.length-1 ; i>=0 ;i--){

rezzult.push(aRR[i])
}console.log(...rezzult);

// لايجاد اكبر رقم 
console.log(Math.max(...aRR));
/*
طباعة مثلث:
استخدم nested loops لطباعة مثلث من النجوم بهذا الشكل:
*/

let rOw = 5 ;
for(let i = rOw ; i>= 1 ; i--){
   let startsz = '';
   for(let j=1 ; j <= i ; j++){startsz+=j+' ' ;}
   console.log(startsz);
}
 

// ************************************************

// #function basics

/*
قم بإنشاء Function تظهر رسالة ترحيب لكل شخص بأي إسم تريده
ال Function تقبل إثنين Parameters وهما إسم الشخص والنوع سواء ذكر أو انثى
قم بطباعة رسالة ترحيبية للشخص فيها إسمه وقبل الإسم Mr أو Miss بناء على نوع الشخص سواء ذكر أو انثى
لو لم يكتب الشخص نوعه ويفضل عدم ذكره لا تطبع Mr ولا Miss وإطبع الرسالة الترحيبية فقط
function sayHello(theName, theGender) {
  // Your Code Here
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

function sayHello(theName, theGender ) {if( theGender === "Female" ){console.log(`Hello Miss ${theName}`)}else{console.log(`Hello Mr ${theName}`)}}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// task 2
function calculate(firstNum, secondNum, operation = 'add') {
   // Your Code Here
if(secondNum == undefined){
   console.log(`Second Number Not Found`);
   return ; // بيوقف العملية للشرط دا بس
} 

if(operation == 'add'){
   console.log(firstNum + secondNum);
}
if(operation === "subtract"){
   console.log(firstNum - secondNum);
}
if(operation === "multiply"){
   console.log(firstNum * secondNum);
}
 }
 
 // Needed Output
 calculate(20); // Second Number Not Found
 calculate(20, 30); // 50
 calculate(20, 30, 'add'); // 50
 calculate(20, 30, 'subtract'); // -10
 calculate(20, 30, 'multiply'); // 600

 function ageInTime(theAge) {
   // Your Code Here
if(theAge > 100){
   console.log(`Age Out Of Range`);
   
}
else{console.log(theAge*12)}
 }
 
 // Needed Output
 ageInTime(110); // Age Out Of Range
 ageInTime(38); // Months Example => 456 Months

 function checkStatus(a, b, c) {
   let name, age, status;
 
   // تحديد كل متغير بناءً على نوعه
   if (typeof a === "string") {
     name = a;
   } else if (typeof b === "string") {
     name = b;
   } else if (typeof c === "string") {
     name = c;
   }
 
   if (typeof a === "number") {
     age = a;
   } else if (typeof b === "number") {
     age = b;
   } else if (typeof c === "number") {
     age = c;
   }
 
   if (typeof a === "boolean") {
     status = a;
   } else if (typeof b === "boolean") {
     status = b;
   } else if (typeof c === "boolean") {
     status = c;
   }
 
   // طباعة النتيجة حسب الحالة
   if (status) {
     console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
   } else {
     console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
   }
 }
 
 // Needed Output
 checkStatus("Osama", 38, true);    // "Hello Osama, Your Age Is 38, You Are Available For Hire"
 checkStatus(38, "Osama", true);    // "Hello Osama, Your Age Is 38, You Are Available For Hire"
 checkStatus(true, 38, "Osama");    // "Hello Osama, Your Age Is 38, You Are Available For Hire"
 checkStatus(false, "Osama", 38);   // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


 function createSelectBox(startYear, endYear) {
   document.write('<select>');
   for (let i = startYear; i <= endYear; i++) {
     document.write(`<option value="${i}">${i}</option>`);
   }
   document.write('</select>');
 }
 
 createSelectBox(2000, 2021);

//********** */
function multiplyNumbers(...numbeRs){

let resultt = 1 ;

for(let i= 0 ; i<numbeRs.length ; i++){

if(typeof numbeRs[i] === 'string')continue;
let numInt = Number.isInteger(numbeRs[i]) ? numbeRs[i] : (numbeRs[i]); // تحويل الكسور

resultt *= numInt ;



}
console.log(resultt);

}


 multiplyNumbers(10, "A", 3, 4); // الناتج: 120
 multiplyNumbers("B", 5, 6, "C", 2); // الناتج: 60
 multiplyNumbers(100, 0.5, "X", 2); // الناتج: 100
 
 function sumNumbers (NuMers){
   let reZo = 0 ;
   
   for(let i =3 ; i< 1000 ; i++){
    
      if(i % 3 !== 0 && i% 5 !== 0) continue;
      reZo+=i;} console.log(reZo);}
 sumNumbers()


/*
for(let i =3 ; i< 1000 ; i++){
if(i % 3 !== 0 && i% 5 !== 0) continue;

console.log(i)
}


 //For Advanced

let nM =3 ;
for(;;){
   if(nM >= 1000)break;
   console.log(nM);
   nM++
   if(i % 3 !== 0 && i% 5 !== 0) continue;
   nM++
}
*/
function getDetails(zName, zAge, zCountry) {
   function namePattern(zName) {
     let nameParts = zName.split(" "); // تقسيم الاسم لكلمات
     return `${nameParts[0]} ${nameParts[1].charAt(0).toUpperCase()}.`; 
   }
 
   function ageWithMessage(zAge) {
     let age = parseInt(zAge); // استخراج الرقم فقط
     return `Your Age Is ${age}`;
   }
 
   function countryTwoLetters(zCountry) {
     return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
   }
 
   function fullDetails() {
     return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
   }
 
   return fullDetails(); // لا نعدل على هذا الجزء
 }
 
 console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
 // Hello Osama M., Your Age Is 38, You Live In EG
 
 console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
 
 let mIx = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

for(let i=0 ; i<mIx.length ; i++){if(typeof mIx[i] === 'string')continue ;console.log(mIx[i])}

let filteredArray = mIx.map(function (el) {
  return typeof el === "string" ? el : "";
});

let resUlt = filteredArray.reduce(function (acc, cur) {
  return acc + cur;
});

console.log(resUlt); // Elzero



let myString = "EElllzzzzzzzeroo";

let nwArr = myString.split('').filter(function(el ,curr ,myString){

return el !== myString[curr-1] ;

}
)

console.log(nwArr.join(''))

// Elzero

//1

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let myNewArray = myArray[0] + myArray[1] + myArray[2] +myArray[3].join('') + myArray[4]

console.log(myNewArray)


// Elzero

// 2
let nwnw = myArray.reduce( function (el , ind , arr){


return el + ind 

}
)

console.log(nwnw)



let miX = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let newMix = miX.map(function(el ,ind , miX){return typeof el !== 'number' ? el : ''}).reduce(function(acc ,curr ,miX){return acc+curr });console.log(newMix);

let filMix = miX.filter(function(el , ind , miX){return typeof el === 'string' ? el :'' } ).reduce(function(acc , curr , miX){return acc+curr}) ;console.log(filMix);
let toTo = 0;
let tzTz ='' ;
for(;;){
   if(toTo>=miX.length)break;
if( typeof miX[toTo] === 'number') {
   toTo++
   continue;
}


 tzTz += miX[toTo]
 console.log(tzTz);
 toTo++
}



let myStRing = "EElllzzzzzzzeroo";

// Elzero

let myNeWarray =myStRing.split('').filter(function(el,ind,myNeWarray){

   return(myNeWarray[ind] !== myNeWarray[ind+1]);
})

console.log(myNeWarray.join(''))

//***************************** */

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let neWnumsAndStrings = numsAndStrings.map(function(el,ind,neWnumsAndStrings){
   return el * neWnumsAndStrings[ind+1] === NaN ? parseInt(el * neWnumsAndStrings[ind+1]) : -el ;



}).filter(function(el,ind,neWnumsAndStrings){
   return !isNaN(el)
})

console.log(neWnumsAndStrings)
// [-1, -10, 10, 20, -5, -3]

let nums = [2, 12, 11, 5, 10, 1, 99];

let redOnums = nums.reduce(function(acc , curr ,redOnums){
return curr%2 == 0 ? acc * curr : acc+curr;
})
console.log(redOnums)

// 500



// task 1

// if + switch with function tasks

function classifyNumber(nu){

   let poS ='Positive' ;
   let neG = 'Negative';
   let nO = 'Zero';


  //  return nu>0? poS :nu<0 ?neG : nO  // <----- another simple solution 1

if(nu==0){ // answer 2
   return nO ;
}else if(nu>0){return poS} else{return neG}
}
console.log(classifyNumber(10));
console.log(classifyNumber(-5));
console.log(classifyNumber(0));


// same task 1 with switch 

function classiFyNumber(nombs){ 
   let poS ='Positive' ;
   let neG = 'Negative';
   let nO = 'Zero';

switch(true){ //  we've used true because to check a logical operators 
case nombs === 0:
return nO ;
case nombs > 0 :
return poS;

default : return neG}

}
console.log(classiFyNumber(10));
console.log(classiFyNumber(-5));
console.log(classiFyNumber(0));

// task 2 for filter 


const numbErs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let nwnumbErs = numbErs.filter(function getEvenNumbers(el , ind ,numbErs){
return el % 2 == 0? el : el[ind -1]})
console.log(nwnumbErs); // [2, 4, 6, 8, 10]


// task 3 for map

const names = ["nora", "ali", "mona"];

let mapNames = names.map(function capitalizeNames (el , ind ,mapNames){
   return el.toUpperCase() ;
})

console.log(mapNames); // ["NORA", "ALI", "MONA"]

/// task 4 for reduce

const nUUms = [10, 20, 30, 40];
let nwnUUms = nUUms.reduce(function sumNumbers (acc , curr , nwnUUms){
return acc + curr;})
console.log(nwnUUms); // 100

// task 5 for map + filter 

const noMeros = [1, 2, 3, 4, 5, 6];
let nwnoMeros = noMeros.filter(function squareEvenNumbers ( el , ind , nwnoMeros){
return el % 2 == 0 ;}).map(function squareEvenNumbers(el ,ind , nwnoMeros){
   return el**2 ;
})
console.log(nwnoMeros); // [4, 16, 36]

// task 6


const woRRds = ["hello", "world", "JavaScript"];

let reduwoRRds = woRRds.join('').split('').reduce(function (acc , curr , reduwoRRds){
   return reduwoRRds
})
console.log(reduwoRRds); // 19

// task 7

function multiplicationTable(nom){
for(let i= 1 ; i<= 10 ; i++){

  let re = i*nom ;
  console.log(`${nom} x ${i} = ${re}`);
  // return `${nom} x ${i} = ${t}`
}
// return `${nom} x ${i} = ${t}`
};
(multiplicationTable(5))

// const numTrs = [2, 5, 8, 3, 10, 7];
// solution 1 // مين فتعقيدي مش هتلاقي كود يتحل فسطر ونا عاملة جدا يختااااى :'((
/*
let nwnumTrs = numTrs.sort().slice(0,1).join('').split(' ').map(function(el,ind,arr){
   return (el**2) /2
}).join()
*/

/* solution 2

let nwnumTrs = numTrs.sort().filter(function(el,ind,arr){
   return el %2 !== 0 ;
}).reverse().join('').split('').slice(0,2).map(function(el,ind,arr){
   return arr[0]**2
}).reduce(function(acc,curr,arr){
return (acc+curr) 

},2 )

console.log(nwnumTrs -50); //50
*/

//solution ابن ناس 

const numTrs = [2, 5, 8, 3, 10, 7] ;

let nwnumTrs = numTrs.filter(function (el,ind,arr){
   return el > 5
}).map(function (el,ind,arr){
   return el*2
}).reduce(function(acc ,curr,arr){
return acc+curr
})
console.log(nwnumTrs);
/*
function processNumbers(arr) { // معرفتش استخدمهم جوا الfunction كدا
   // كود الحل هنا
arr.filter(function processNumbers(el,ind,arr){
   return el % 2==0;

})}
*/
/// الاصلاح للحل السابق
/*
function processNumbers(arr) {
   return arr
       .filter(function (el) {
           return el % 2 == 0; // استخراج الأرقام الزوجية
       })
       .map(function (el) {
           return el * 2; // مضاعفة الأرقام الزوجية
       })
       .reverse(); // عكس الترتيب
}

let aRr = [1, 2, 3, 4, 5, 6];
console.log(processNumbers(aRr)); // الناتج المتوقع: [12, 8, 4]
*/
let aRr =[1, 2, 3, 4, 5, 6];
let nwaRr =aRr.filter(function processNumbers(el,ind,arr){
   return el %2 ==0 ;
}).map(function (el,ind,arr){
   return el*2
}).reverse();


console.log(nwaRr); // الناتج المتوقع: [4, 8, 12]

// task /// without knowing about find, some, set
function removeDuplicates(arr) {
return arr.filter(function(el,ind,arr){
   return el !== arr[ind-1];
}).reverse()

   // كود الحل هنا
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // الناتج المتوقع: [1, 2, 3, 4, 5]



/// task

function hasEvenNumber(arr) {
   // كود الحل هنا
return arr.filter(function hasEvenNumber(el,ind,arr){
   return el % 2 == 0 ? 'true' : 'false' ;
});
} 

console.log(hasEvenNumber([1, 3, 5, 7])); // الناتج المتوقع: false
console.log(hasEvenNumber([1, 3, 6, 7])); // الناتج المتوقع: true





// task

function hasNegativeNumber(arr) {
   // كود الحل هنا
return arr.filter(function(el,ind,arr){
return el<0

}).map(function (el,ind,arr){
   return el<0  ? true :false;
}).join('') // مش بيكتب false بيطلعها فاضية بس
}


console.log(hasNegativeNumber([3, -1, 7, 8])); // true
console.log(hasNegativeNumber([2, 5, 9, 10])); // false

//task

function findFirstEven(arr) {
   // كود الحل هنا
return arr.filter(function (el,ind,arr){
   return el %2 == 0 
}).reverse().filter(function(el,ind,arr){
   return arr[ind-1]
}).map(function(el,ind,arr){
   return el>0 ? el: 'undefined'
}).join(' ')

} // نفس مشكلة المسألة السابقة النتيجة فاضية 

console.log(findFirstEven([1, 3, 7, 8, 10])); // 8
console.log(findFirstEven([5, 9, 11])); // undefined (لأنه مفيش أرقام زوجية)


// task 

function checkAndFind(arr) {
   // كود الحل هنا
return arr.map(function (el,ind,arr){
   return el<0 ? el :'undefined' ;
}).join(' ').split().filter(function(el,ind,arr){
   return typeof el ==='number'? el : 'لا يوجد عدد سالب'
})

}

console.log(checkAndFind([3, 4, -5, 6])); // -5
console.log(checkAndFind([1, 2, 3, 4])); // "لا يوجد عدد سالب"


//Elzero Assaignments

// Task 1 * create a new object 

let member ={
   name : 'Elzero' ,
   age : 38 ,
   country : 'Egypt' ,
   fullDetails : ()=>{
      return `My Name Is ${this.name} , My Age Is ${this.age} I live in ${this.country}`}}
// Create Your Object Here

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


//Task 2 * create an object with three ways


// Method One
// Create Your Object Here

let objMethodOne = {
   property:'Methode One'
}


console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here

 let objMethodTwo= {}
 objMethodTwo.property = "Method Two" ;

console.log(objMethodTwo['property']); // "Method Two"

// Method Three
// Create Your Object Here

let objMethodThree = new Object()

objMethodThree.property ="Method Three"

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here

let objMethodFour = Object.create(objMethodOne)
objMethodFour.property = 'Method Four'
console.log(objMethodFour.property); // "Method Four"

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Task 4 * using Object.assign() To create an object has all contain !

let aAe = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject = Object.assign({aAe} , threeNums ,twoNums);

console.log(finalObject);

/*
  aAe: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


// Task 4 obj & Nested obj

// The Object To Work With

let myFavGames = {
   "Trinity Universe": {
     publisher: "NIS America",
     price: 40,
   },
   "Titan Quest": {
     publisher: "THQ",
     bestThree: {
       one: "Immortal Throne",
       two: "Ragnarök",
       three: "Atlantis",
     },
     price: 50,
   },
   YS: {
     publisher: "Falcom",
     bestThree: {
       one: "Oath in Felghana",
       two: "Ark Of Napishtim",
       three: "origin",
     },
     price: 40,
   },
 };
// حساب عدد الألعاب داخل myFavGames
let objectLength = Object.keys(myFavGames).length; 

// تحويل أسماء الألعاب إلى Array عشان نستخدمها في التكرار
let gameNames = Object.keys(myFavGames); 

for (let i = 0; i < objectLength; i++) {
  let game = gameNames[i]; // اسم اللعبة الحالي
  let gameData = myFavGames[game]; // البيانات الخاصة باللعبة

  console.log(`The Game Name Is ${game}`);
  console.log(`The Publisher Is ${gameData.publisher}`);
  console.log(`The Price Is ${gameData.price}`);

  // التحقق مما إذا كانت اللعبة تحتوي على bestThree
  if ("bestThree" in gameData) { 
    console.log("- Game Has Releases");
    console.log(`First => ${gameData.bestThree.one}`);
    console.log(`Second => ${gameData.bestThree.two}`);
    console.log(`Third => ${gameData.bestThree.three}`);
  }
  console.log("#".repeat(20));
}



// tasks about object ChatGPT

// task 1
let uSer = {
   name: "Noura",
   age: 24,
   country: "Egypt",
 };
 
function countProperties (uSer){
   let lonGo = Object.keys(uSer);
   return lonGo.length
}console.log(countProperties(uSer)); // الناتج: 3
 
// task 2  المسألة 2: البحث عن خاصية داخل كائن
/*📌 المطلوب:
اكتبي دالة hasProperty(obj, key) تتحقق إذا كان الكائن يحتوي على خاصية معينة أم لا.

*/

let car = {
   brand: "Toyota",
   model: "Corolla",
   year: 2020,

 };
  function hasProperty (car, key){
   let cheCk = Object.keys(car);
   return cheCk.includes(key)
 
 }
 console.log(hasProperty(car, "model")); // true
 console.log(hasProperty(car, "color")); // false
 
// task 3

 let person = {
   name: "Omar",
   age: 30,
   job: "Engineer",
 };
 function objectToArray( ){
   return Object.keys(person);
 }
 
 console.log(objectToArray(person));
 

// task 4 
/*
اكتبي دالة mergeObjects(obj1, obj2) تدمج كائنين في كائن واحد باستخدام
*/
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

function mergeObjects(obj1, obj2){

  return Object.assign({} ,obj1 ,obj2)
}

console.log(mergeObjects(obj1, obj2));

// task 5 كتبي دالة removeProperty(obj, key) تحذف خاصية معينة من الكائن.

let student = {
   name: "Mona",
   grade: "A",
   age: 20,
 };
 function removeProperty(student , key){
 let neWObject=  {...student}
 delete neWObject[key] ;
 return neWObject
 }
 console.log(removeProperty(student, "age"));
 
// { name: "Mona", grade: "A" }


// task 6

let book = {
   title: "Harry Potter",
   author: "J.K. Rowling",
   pages: 500,
 };
 /*title: Harry Potter
author: J.K. Rowling
pages: 500
*/

function againCall (obj ){
   
return obj }console.log(againCall(book))

// task 7  اكتبي دالة invertObject(obj) تحوّل المفاتيح إلى قيم والعكس.

let colors = {
   red: "#FF0000",
   green: "#00FF00",
   blue: "#0000FF",
 };
 /*
 function invertObject(obj){
   let inverTed = {} ;

for(let key in obj){
 inverTed[obj[key]] = key ;
}
return inverTed
 }

 console.log(invertObject(colors));
 */
 
/*
{
  "#FF0000": "red",
  "#00FF00": "green",
  "#0000FF": "blue"
}
*/
// another answer 

function invertObject(obj){

 return Object.fromEntries( Object.entries(obj).map( function ([key , value]){
   return [value , key ]}) )}
console.log(invertObject(colors));

// task 1 

let user = {
   name: "Noura",
   age: 24,
   country: "Egypt",
 };

 function countProperties(obj){
 return  Object.keys(obj).length
 }
 
 console.log(countProperties(user)); // 3
 
// task 2 

let cAAr = {
   brand: "Toyota",
   model: "Corolla",
   year: 2020,
 };
 
 function hasProperty(obj, key){
return key in obj? true : false
 // لية ال hasown طلعت الاتنين false ??
 }

 console.log(hasProperty(cAAr, "model")); // ✅ true
 console.log(hasProperty(cAAr, "color")); // ❌ false
 
// task 3

let oBj1 = { a: 1, b: 2 };
let oBj2 = { c: 3, d: 4 };

function mergeObjects(oBj1, oBj2){

   return Object.assign({},oBj1, oBj2 )
}

console.log(mergeObjects(oBj1, oBj2));
// ✅ الناتج: { a: 1, b: 2, c: 3, d: 4 }

// task 4

let stUdent = {
   name: "Mona",
   grade: "A",
   age: 20,
 };
function removeProperty( obj , key){
   delete obj[key]
   return obj ;
}console.log(removeProperty(stUdent, "age"));
 // ✅ الناتج: { name: "Mona", grade: "A" }
 
// task 5

let coLors = {
   red: "#FF0000",
   green: "#00FF00",
   blue: "#0000FF",
 };

 function invertObject(obj){
   let inVerto = {}
   for(let key in obj){
inVerto[obj[key]] = key
   }
return inVerto
 }
 console.log(invertObject(coLors));
 

// same task with map()

function invertObject(obj){
return Object.fromEntries(
Object.entries(obj).map((([key , value] )=> [value ,key]))
)}console.log(invertObject(coLors));

 // ✅ الناتج: { "#FF0000": "red", "#00FF00": "green", "#0000FF": "blue" }


// Task 6

let bOok = {
   title: "Harry Potter",
   author: "J.K. Rowling",
   year: 1997,
 };
 
function findValue(obj , key){
return key in obj ? obj[key] : 'undefined'
}
console.log(findValue(bOok, "author")); // ✅ "J.K. Rowling"
console.log(findValue(bOok, "price"));  // ❌ undefined
 
// same task  معرفتش احلها بالفلتر

function findValue(obj , key){
return Object.entries(obj).filter(function([key ,value]){
return [obj].includes(key)? [obj[key]] : 'undefined' ;
})
}
console.log(findValue(bOok, "author")); // ✅ "J.K. Rowling"
console.log(findValue(bOok, "price"));  // ❌ undefined

//Task 7

let perSon = {
   name: "Omar",
   age: 30,
   job: "Engineer",
 };
 
function objectToArray(obj){
   return Object.entries(obj)
}console.log(objectToArray(perSon));
 // ✅ الناتج: [["name", "Omar"], ["age", 30], ["job", "Engineer"]]
 

// Task 8
// معرفتهاش
let obJ1 = { a: 1, b: 2 };
let obJ2 = { c: 3, d: 4, e: 5 };
let obJ3 = { f: 6 };

function totalProperties(obJ1, obJ2, obJ3){
let roZe = Object.assign({} ,obJ1, obJ2, obJ3)
return Object.keys(roZe).length-1

}
console.log(totalProperties(obJ1, obJ2, obJ3)); // ✅ 5

// Tasks about objects

// Task 1


let pERson = { name :'NauRaa' ,
age : 30 , city : 'Tanta'

}
// طباعة الكائن الجديد 
console.log(pERson);

// لم يتم اضافتها مباشرة !؟  -   اضافة خاصية جديدة
// Object.prototype.job = 'Software Engineer' ;
pERson.job = 'Software Engineer' // التعديل
// طباعة الخاصية الجديدة
console.log(pERson['job']);

// تعديل ال city الى cairo

Object.prototype.city = 'Cairo' // منطبعتش مباشرة 

console.log(pERson.city) // جابت اللى جوا {} بس

// فشل التعديل  ----

function editProp (obj , key){
for(let key in obj){
key === 'city'? 'cairo': key
}

return obj
} // didn't work !
console.log(editProp(pERson,'city'))

function edit1(obj ,key){
return Object.fromEntries(
Object.entries(obj).map(function([obj , key]){

return key in obj == 'city' ? 'cairo' : ' '

}))
return obj
}
// console.log(edit1(pERson,'city')) // didn't work

// deleting property

function delProp (obj,key){
delete obj[key]
return obj
}

console.log(delProp(pERson , 'age'))

// 3️⃣ الوصول إلى القيم:

console.log(pERson.name) // Number 1 Dot Notation

console.log(pERson['name']) //Number 2 Square practis

function reachValue (obj ,key){
return obj[key]
}
console.log(reachValue(pERson , 'name')) // number 3 with function 

// المستوى الثاني: المتوسط
//4️⃣ كائن داخل كائن:


let carO = {
   brand : 'BMW' ,
   model : 2025 , 
   owner : {
      name : 'NauRaa' ,
      age: 30 ,
   }
};

console.log(carO.owner.name) // 1

console.log(carO.owner['name']) // 2



let stuDent = {
   subject : 'Physics',
   grade : 'Excellent' ,
   name : ' NauRaa' ,
};
//5️⃣ التكرار على الخصائص:

function chEck (obj ,key){
for(let key in obj){
return obj
}}
console.log(chEck(stuDent)) ;

//6️⃣ التحقق من وجود خاصية:

function chEckP (obj ,key){
return key in obj ;
  // هنا غلطة عشان بتقارنى بينها وبين القيمة  return  key in obj == 'emplyee' 
}

console.log(chEckP(stuDent, 'employee')); // false

//المستوى الثالث: المتقدم
// 7️⃣ نسخ كائن بدون تأثير على الأصلي:

let boOk = {title :'Keys of Power' , author : 'NauRaa'}

let bookCopy ={...boOk}

/*
function edit2 (obj,key){
 return key == obj[key] ? 'Power' : ' '
}
console.log(edit2(bookCopy , ['title']))
// معرفتش اعدلها خالص  والنتيجة طلعت فاضية
*/
// الحل الصحيح 
bookCopy.title = "Power"; // تعديل العنوان
console.log(bookCopy); // ✅ مطبوع بعد التعديل
console.log(boOk); // ❌ الأصلي لم يتغير



// 8️⃣ تحويل الكائن إلى مصفوفة:

const usEEr = { name: "Nora", age: 22, country: "Egypt" };

function obToArr (obj , key){
   return Object.entries(obj)
}
console.log(obToArr(usEEr));


/*أنشئي كائنين obj1 و obj2،
 ثم قومي بدمجهما في كائن جديد mergedObj
 */

 let oBj11 = {a:1 , b:2};

 let oBj22 = {c:3 , d:4};

 function merGobj (oBj11 , oBj22){
return {...oBj11 , ...oBj22}
 } ;console.log(merGobj(oBj11 , oBj22)) ;
// جربت اعمل create او انسخ الاتنين معرفتش انسخ غير واحد بس عن طريق {...oBj11}

//🔟 كائن يحتوي على دوال:

let calcuLator = {
   add: function(n1 ,n2){return n1 + n2 } ,
   subtract : function(n1 , n2){return n1 - n2},
   multiply :function(n1 , n2){return n1 * n2},
   divide :function(n1 , n2){return n1 / n2}

}
console.log(calcuLator.add(5,3))
console.log(calcuLator.subtract(5,3))
console.log(calcuLator.multiply(5,3))
console.log(calcuLator.divide(5,3).toFixed())

// Tasks about some basics
// task 1

// أنشئي مصفوفة تحتوي على أسماء 5 دول، ثم اطبعي أول وآخر دولة فيها.

let countries = ['Egypt' , 'America' , 'Sweden' , 'Newsland' , 'Germany']

console.log(countries[0] , countries.pop())

//أ) أضيفي الرقم 60 في نهاية المصفوفة.

let numbEErs = [10, 20, 30, 40, 50];

numbEErs.push(60) ;

console.log(numbEErs);
 
// ب) احذفي أول عنصر منها.

numbEErs.shift()

console.log(numbEErs);

// ج) استخدمي map لمضاعفة كل قيمة في المصفوفة.

let mapNumbers = numbEErs.map(function(el){
   return el*2
});
console.log(mapNumbers);

// البحث في المصفوفة

let fruits = ["apple", "banana", "cherry", "mango", "orange"];

// itsn't working when i put el in []
function searching (el){
return fruits.includes(el)? 'Found' : 'Not Found' ;
};console.log(searching ('cherry'));

/*
أنشئي كائنًا يحتوي على بيانات شخص (name و age و city)، ثم اطبعي اسم الشخص وعمره.
*/

let humanDetails = {
   name: 'NauRaa',
   age: 30 ,
   city : 'Alex'
}

console.log(humanDetails.name , humanDetails['age']) ;

// التعديل على كائن

let cAar = {
   brand: "Toyota",
   model: "Corolla",
   year: 2020
 };
 //أ) أضيفي خاصية color بقيمة "red".
cAar.color= 'red' ;
console.log(cAar)

//ب) غيري year إلى 2022.

cAar.year = 2022
console.log(cAar)

//ج) احذفي model.

function deletKey (obj,key){
   delete obj[key]
   return obj
}
console.log(deletKey(cAar ,'model')) ;

// التعامل مع المصفوفات داخل الكائنات

let stuDnt = {
   name: "Ahmed",
   grades: [85, 90, 78, 92]
 };
 let lE = stuDnt.grades.length 
 
let finResult = stuDnt.grades.reduce(function(curr , ind ,arr){
   return (curr + ind) / lE // مجموع القيم / عدد القيم
})
console.log(finResult.toFixed()) // عشان تكون عدد صحيح


// 4. أسئلة دمج (متقدمة شوية 😈)

let employees = [
   { name: "Ali", salary: 5000 },
   { name: "Mona", salary: 7000 },
   { name: "Sara", salary: 8000 },
 ];
 /*
 // it'snot working ! كنت عاوزة احول المصفوفة كلها لobject
function trAn (employees){
   return Object.fromEntries(employees)
}
console.log(trAn(employees)) 
*/

// حل يضحك بس المهم النتيجة تطلع :))
let fName = employees[0].name ;
let sName = employees[1].name ;
let thName = employees[2].name ;

function conCati (f,s,th){
return (f+', '+s+', '+th).split(' ')
} ; console.log(conCati(fName , sName , thName ))

// another way
let newNames = ''
for(let i =0 ; i<employees.length ; i++){
newNames += employees[i].name + ' ' 

}; 
console.log(newNames.split(' ').slice(0,3))

//by using map

let newEmplyees = employees.map(function(el,ind , arr){
   return arr[ind].name
})
console.log(newEmplyees)

//استخدمي filter لإيجاد الموظفين الذين رواتبهم أكثر من 6000.

let filtEmplyees = employees.filter(function(el,ind , arr){
   return arr[ind].salary >6000 ? arr[ind].name : ''
})
console.log(filtEmplyees);
console.log(typeof(filtEmplyees))
Object.entries(filtEmplyees)
console.log(filtEmplyees)
// معرفتش احطهم فمصفوفة

// استخدمي reduce لحساب إجمالي الرواتب.

let Totalsal = employees.reduce(function(curr,el, arr){
   return curr.salary + el.salary
},0)
console.log(Totalsal); // طلعتلى NaN


 // المسائل السابقة سيعاد حلها مرة تانية

// tasks for filter , reduce

//استخدمي filter لإرجاع الفواكه اللي عدد حروفها أكتر من 5.

let woRds = ["apple", "banana", "cherry", "date", "fig", "grape"];

let filwoRds = woRds.filter(function(curr , ind, arr){

   return arr[ind][5] });console.log(filwoRds) ;

  // استخدمي filter لإيجاد الناس اللي سنهم 18 أو أكتر.
 
   let ages = [12, 17, 22, 30, 15, 40, 50];

let oldAge = ages.filter((el )=>el > 18);console.log(oldAge);


// حاصل ضرب الارقام
let numvers = [3, 5, 7, 9, 11];

let rednumv = numvers.reduce(function(acc , curr ,arr){
return acc * curr
},1)

console.log(rednumv)

//استخدمي reduce لحساب إجمالي المصاريف.

let expenses = [
   { category: "Food", amount: 100 },
   { category: "Transport", amount: 50 },
   { category: "Entertainment", amount: 200 }
];

let fintot = expenses.reduce(function(acc, curr , arr){
   return acc + curr.amount
},0)

console.log(fintot);

let students = [
   { name: "Ali", grade: 85 },
   { name: "Mona", grade: 92 },
   { name: "Sara", grade: 78 },
   { name: "Khaled", grade: 95 }
];

let nwstudents = students.filter(function(el , ind , arr){
   return el.grade >= 85
}).map(function(el,ind ,arr){
return el.grade 
}).reduce(function(acc ,curr ,ind ,arr){
   return (acc + curr) / (arr.length) // معرفتش اجيب مجموع عدد القيم  الل هى 3
})

console.log(nwstudents)


const numbeRs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNumbers = numbeRs.filter(function(el ,ind , arr){
return el %2 != 0 })
console.log(newNumbers)
//------------------
const nuMbers = [10, 25, 33, 60, 45, 80];

let filNum = nuMbers.filter((el)=> el >= 50)

console.log(filNum[0])

//----------------------

const stuDents = ["nora", "ali", "mohamed"];

let maStudent = stuDents.map((el)=> el.toUpperCase())
console.log(maStudent) // كنت عاوزة اخلى اول حرف من كل اسم بس كابيتال بس معرفتش 

// functions 

/*اكتب دالة تستقبل اسم شخص 
وتعيد رسالة ترحيب به مثل "مرحبًا يا [الاسم]!".
*/


function saYhello(name){
return `Hello Ms ${name}`
};
console.log(saYhello('NauRaa'));

/*أنشئ دالة تأخذ رقمًا، 
وترجعه مرفوعًا للقوة الثانية (square).
*/

function squareNumber(num){
return num**2
}
console.log(squareNumber(10));

/*اكتب دالة تتحقق مما إذا كان العدد زوجيًا
 أم فرديًا، وترجع true إذا كان زوجيًا و false إذا كان فرديًا.
*/

function checkNum (num){
   return num %2 == 0 ? 'true' : 'false' ;
};console.log(checkNum(100))

/*✔ مفيش داعي ترجع نص "true" أو "false"، لأن 
true/false هم قيم منطقية في JavaScript.
*/

//--------------------------
//اكتب دالة تأخذ مصفوفة من الأرقام وترجع مجموعها.

let numfunc = [20,4,1994];
let reuArr=numfunc.reduce(function(acc, curr, arr){
   return acc + curr
},0);console.log( reuArr)



// trying to create an array with map by same example

let mAr1 = [10]
let mAr2 = 20
let mAr3 = 30

let ToTalArr = mAr1.map(function(el,ind, arr){
   return el + mAr2 +mAr3
})
console.log(ToTalArr) // معرفتش :()

/*
أنشئ مصفوفة تحتوي على أسماء 5 أصدقاء لك، 
ثم اطبع أول وآخر اسم في المصفوفة.
*/

let faMily = [ 'samar' , 'sara' , 'samah' , 'safaa' , 'NauRaa']


//console.log(faMily.shift(),faMily.pop())

console.log(faMily) // اتمسحوا من الاصلية 

console.log(faMily[0],faMily[4])

/*console.log(faMily[0], faMily[faMily.length - 1]);
 ✅ الحل الصحيح
*/

//-------------------
/*استخدم map لإنشاء مصفوفة جديدة 
تحتوي على أطوال أسماء الأصدقاء.
*/

let mapfaMily = faMily.map((el)=> el.length);console.log(mapfaMily)

/*استخدم filter لاستخراج الأسماء
 التي تحتوي على أكثر من 4 أحرف.
*/

let filfaMily = faMily.filter(function(el, ind, arr){
   return el[ind] > el[4]
}) ;
// الحل الصحيح     return el.length > 4;

//----------------------------
console.log(filfaMily);

/*استخدم reduce لحساب مجموع الأرقام في المصفوفة
 [10, 20, 30, 40].
*/
 let numArr =[10, 20, 30, 40] ;

let redunumArr = numArr.reduce(function(acc , curr , arr){
   return acc+curr 
},0)
console.log(redunumArr);

/*أنشئ كائنًا يمثل طالبًا يحتوي على 
(name, age, grades كمصفوفة أرقام).
 ثم اطبع اسم الطالب وأول درجة له.
*/

let studentz = {
   name : 'NauRaa' ,
   age:30 ,
   grades : [10 , 20 , 30],
} ;
console.log(studentz.name , studentz.grades[0])

//اكتب دالة تأخذ كائن طالب وتعيد متوسط درجاته.

let averageGrades = studentz.grades.reduce(function(acc,curr, arr){
   return (acc +curr ) / arr.length //معرفتش اقسم على اية 
},0) // لما قسمت على arr بس طلع 30 لية ؟؟
/* الحل الصحيح 
let averageGrades = studentz.grades.reduce(function(acc, curr) {
    return acc + curr;
}, 0) / studentz.grades.length; -- القسمة خارج ال reduce
*/
console.log(averageGrades);

//أضف خاصية جديدة للكائن (مثلاً city)، ثم احذفها بعد ذلك.

studentz.city = 'Paradise' ;
console.log(studentz['city'])

function delEtingKey (obj,key){
delete obj[key]
return obj
}
console.log(delEtingKey(studentz , 'city'));

/*استخدم Object.keys و 
Object.values لطباعة مفاتيح وقيم الكائن.
*/

function edA(obj){
   return Object.keys(obj).length;
   
}
console.log(edA(studentz))

// values
function edAz(obj){
   return Object.values(obj);
   
}
console.log(edAz(studentz))

// basics for a real web

let webName = 'Magic Power'
let nmVisitor = 1000
console.log(`Hi This website *${webName}* welcomes ${nmVisitor} visitors everyday`)

//-------------------------------------

function calcAfDis (price, disc){
let rez = price * disc /100
return price -rez
}

console.log(calcAfDis(200,20))

//-------------------------------------





function validateEmail(emAil){
let arr = emAil.split()
let checkSign= '@' ;
 return emAil.includes(checkSign) ? 'بريد إلكتروني صالح' : 'بريد إلكتروني غير صالح'
// معرفتش اسيرش عليها as string عادى
};
console.log(validateEmail("testemail.com"));
console.log(validateEmail("user@example.com"));

//--------------------------------------
function validNumber (phoneNumb){
return phoneNumb.length == 11 ? 'Valid Number ': "Invalid Number " ;
}

console.log(validNumber('01004624476'));
console.log(validNumber('0100462447'));

//---------------------------------------

let products = ["Laptop", "Phone", "Tablet", "Monitor"];

let availablePrducts = products.map(function(el,ind,arr){
   let avaiSign = 'Available'
   return `"${el}": ${avaiSign} .`
} ).join(' '); // عملتها join للمنظر العام فقط
console.log(availablePrducts)

//---------------------------------------

let prices = [500, 1200, 300, 50, 800];

let filterPrices = prices.filter(function(el,ind,arr){
   return el > 500
});
console.log(filterPrices);

//--------------------------------------

let customers = [
   { name: "Ali", purchases: 3 },
   { name: "Mona", purchases: 7 },
   { name: "Kareem", purchases: 2 }
]; 
//{ name: "Mona", purchases: 7 } expected answer

let specialCustomer = customers.filter((el)=>el.purchases >= 7 );
console.log(specialCustomer[0])

//---------------------------------------

let sales = [100, 200, 50, 400, 150];
let totalSales = sales.reduce(function(acc,curr){
   return acc+curr
},0); console.log(totalSales);

//----------------------------------------

let accountUser ={

userName : 'NauRaa',
   email: '',// 'nauraa1009@gmail.com' ,
   password : '123456789',
   isActive: ''
};
let cheCkstatue = accountUser.isActive == 'Active' ? true : false
console.log(`${accountUser.userName }, Statue Is : ${cheCkstatue}`)

//----------------------------------------
/*
function checkinUser (obj ,key){
  // obj[key] in obj == '' ? 'invalid email': obj[key] 
//let checK = obj[key].length == 0  ?  'invalid email' : key
//return `${obj[key] } :${chEck}`

}
console.log(checkinUser(accountUser , 'email'));
*/

function checkinUser(obj, key){
   obj[key] ? obj[key] : 'Invalid email';
   return obj
}
console.log(checkinUser(accountUser, 'email')); 

// التصحيح
function checkinUser(obj, key) {
   let newObj = { ...obj }; // إنشاء نسخة من الكائن الأصلي
   if (!newObj[key]) { // لو قيمتها falsy اكتب كدا علطول
       newObj[key] = 'Invalid email'; // تعديل القيمة فقط لو كانت فاضية
   }
   return newObj;
}

console.log(checkinUser(accountUser, 'email'));

//----------------------------------------------

let comments = [
   "This is a great article!",
   "Buy now, limited offer! spam",
   "Visit my website for free ads",
   "Very helpful, thanks!"
];

let filterComments = comments.filter((el)=>!el.includes('spam') && !el.includes('ads')
)
console.log(filterComments);
 
let cart = [
   { product: "Laptop", price: 1500 },
   { product: "Mouse", price: 100 },
   { product: "Keyboard", price: 200 }
];

let cartArr = cart.map((el)=>el.price).reduce((acc,curr)=>acc + curr,0);
console.log(cartArr);

let visitors = [101, 202, 101, 303, 202, 404, 505, 101, 505];

// المطلوب: طباعة عدد الزوار الفريدين فقط (بدون تكرار)

let filterSumVistors =visitors.filter(function(el, ind ,arr){
return arr.indexOf(el) === ind
})

console.log(filterSumVistors)

//--------------------------------------

// same example with set

let uniqeVisitors = [...new Set(visitors)]

console.log(uniqeVisitors);

// same example with reduce

let reduceVisitors =visitors.reduce(function(acc ,curr){
    if(!acc.includes(curr)){
acc.push(curr);
   } 
   return acc
},[])
console.log(reduceVisitors)

//-----------------------------------------
let users = ["Ali", "Sara", "Ali", "Omar", "Sara", "Mona"];
let uniqueUsers = [... new Set(users)]; console.log(uniqueUsers)
//-----------------------------------------

let nUmbers = [10, 20, 10, 30, 20, 40, 50, 10];
let uniqueNums = [...new Set(nUmbers)] ; console.log(uniqueNums)
//--------same Example with filter-----------
let filterNums = nUmbers.filter(function(el ,ind,arr){
   return arr.indexOf(el) === ind
});console.log(filterNums)
//---------same example with reduce---------
let redunums = nUmbers.reduce(function(acc,curr){
   if(!acc.includes(curr)){
      acc.push(curr)
   };
   return acc
},[]);console.log(redunums);
//-----------------------------------------

function isStrongPassword(password) {
   // كود التحقق هنا
   if(password.length < 8) return `❌ كلمة مرور ضعيفة`
 
let hasNumber = /\d/.test(password)
let hasword =/[A-Z]/.test(password)
let hasCapword =/[a-z]/.test(password)
let hasSpecialChar =/[^A-Za-z0-9]/.test(password)
return hasNumber && hasCapword && hasword && hasSpecialChar ? `✅ كلمة مرور قوية` 
: `❌ كلمة مرور ضعيفة`;

}// مطلعتش بردو
console.log(isStrongPassword("Hello123!")); // ✅ كلمة مرور قوية
console.log(isStrongPassword("hello123"));  // ❌ كلمة مرور ضعيفة

 //----------------------------------------

 let uzers = {
   "nauRaa": "mypassword123",
   "admin": "admin@123",
   "guest": "guest123"
};

function login(uName, passkey) {

return uzers[uName] === passkey ? `✅ تسجيل دخول ناجح` : `❌ خطأ في البيانات`;
}

console.log(login("nauRaa", "mypassword123")); // ✅ تسجيل دخول ناجح
console.log(login("nauRaa", "wrongpass"));    // ❌ خطأ في البيانات
//-----------------------------------------

let proDucts = [
   { name: "Laptop", price: 7000 },
   { name: "Mouse", price: 150 },
   { name: "Keyboard", price: 300 },
   { name: "Monitor", price: 2500 },
   { name: "USB Cable", price: 50 }
];

// المطلوب: طباعة المنتجات اللي سعرها أقل من 500

let cheapProducts = proDucts.filter(function(el,ind,arr){
//return Object.entries(el) // كنت عاوزة احول كل كائن لمصفوفة ومعرفتش
return el.price <500

}).map(el => Object.entries(el));
console.log(cheapProducts);

//----------------------------------------

let usErs = ["Ali", "Mona", "Kareem", "Nour"];

function renderUsers(usErs) {
  
   // كود تحويلهم لعناصر HTML هنا/
   /*
return usErs.map(function(el,ind,arr){
   return `
   <li>${el}</li>`
}).join(' ')*/
// تصحيح الكود
return `<ul>${usErs.map(el => `<li>${el}</li>`).join('')}</ul>`;

}

console.log(renderUsers(usErs)); 
// الناتج المتوقع:
// <ul>
//   <li>Ali</li>
//   <li>Mona</li>
//   <li>Kareem</li>
//   <li>Nour</li>
// </ul>

//--------------------------------------

let orders = [
   { orderID: 1, amount: 200 },
   { orderID: 2, amount: 500 },
   { orderID: 3, amount: 150 },
   { orderID: 4, amount: 1200 }
];

// المطلوب: طباعة إجمالي المبيعات

let reduOrders = orders.reduce(function(acc,curr,arr){
return curr.amount + acc
},0)

console.log(reduOrders);

//--------------------------------------

let comMents = [
   "This is a great post!",
   "You are stupid! badword",
   "Amazing content, thanks!",
   "What a badword comment!"
];
/*
// المطلوب: حذف التعليقات اللي فيها "badword"
// معرفتش احلها بالفلتر
function clean(comm){
   let cleanCom = /badword/.test(comMents)
return comMents

} // معرفتششششش :(((())))

console.log(clean(comMents))
*/
// بردو متعملتش بالفور :(
/*
for(let i =0 ; i<comMents.length ; i++){
   let cleanCom = /badword/.test(comMents)
   if (cleanCom[i] === 'true'){
      continue;
   }
   console.log(comMents[i])
}*/
 // finally بالعافية
let filCom = comMents.filter((el)=> !el.includes('badword'))

console.log(filCom)

//------------------------------------------
let proDUcts = [
   { name: "Laptop", price: 7000 },
   { name: "Mouse", price: 150 },
   { name: "Keyboard", price: 300 },
   { name: "Monitor", price: 2500 }
];

function searchProduct(name) {
  // البحث عن المنتج هنا
  return proDUcts.filter((el) => el.name == name)}

console.log(searchProduct("Mouse")); 
// الناتج المتوقع: { name: "Mouse", price: 150 }
//-----------------------------------------

let producTs = [
   { name: "Laptop", price: 7000 },
   { name: "Mouse", price: 150 },
   { name: "Keyboard", price: 300 },
   { name: "Monitor", price: 2500 }
];
// المطلوب: ترتيب المنتجات من الأرخص للأغلى

// معرفتش اخصص السعر

console.log(producTs.sort())
//----------------------------------------

let cArt = {
   items: [],
   
   addProduct: function (product, price) {
      // إضافة منتج جديد
      this.items.push({product , price}) ;

   },

   removeProduct: function (product) {
      // إزالة منتج
      this.items.shift(product)
   },

   getTotal: function () {
      // حساب الإجمالي
   }
};

// المطلوب: إضافة منتج، حذفه، وطباعة الإجمالي

console.log(cArt.addProduct)
console.log(cArt.removeProduct)
console.log(cArt.getTotal)

// ?? 

let numbDers = [15, 23, 37, 42, 55, 68];

// bu using find
function findDEven(nums){
return nums.find((el)=> el > 40)
}console.log(findDEven(numbDers)); 

// by using filter

function filtEven (nums){
return nums.filter((el)=> el > 40 && el < 55)
} console.log(filtEven(numbDers))

// الناتج المتوقع: 42

let empLOyees = [
   { name: "Omar", role: "Developer" },
   { name: "Sara", role: "Manager" },
   { name: "Hassan", role: "Designer" }
];
function findManager(empl){
   return empl.find((el)=> el.role ==='Manager' )
}

console.log(findManager(empLOyees)); 
// الناتج المتوقع: { name: "Sara", role: "Manager" }
//--------------------------------------
let usrs = [
   { username: "admin", password: "admin123" },
   { username: "guest", password: "guest123" }
];

function finUser (usrs){
   let user = usrs.find((el) => el.username == 'noura');
   return user ? user : "❌ المستخدم غير موجود";}
console.log(finUser(usrs))
//--------------------------------------
let orDers = [
   { orderID: 1, amount: 200 },
   { orderID: 2, amount: 500 },
   { orderID: 3, amount: 150 },
   { orderID: 4, amount: 1200 }
];

function finspechprice (ord){


return Object.entries(ord.find((el)=>el.amount>1000)).join(' --> ')

}

console.log(finspechprice(orDers));

//---------------------------------------------

let proucts = [
   { name: "Laptop", price: 7000 },
   { name: "Mouse", price: 150 },
   { name: "Keyboard", price: 300 }
];

// كود التصفية والعرض هنا
//عرض المنتجات اللي سعرها أقل من 500 جنيه فقط.

function filProduct(sprcialProduct){
return sprcialProduct.filter((el)=> el.price <500 ).map((el)=> Object.values(el)) 
} // مش عارفة اعمل شرط يخلية لو مفيش الشرط يكتبلى مش موجود بدل undefined
console.log(`Available Cheapest Products :
${filProduct(proucts).join(' ')}`);

//--------------------------------------------

let orers = [
   { orderID: 1, amount: 200 },
   { orderID: 2, amount: 500 },
   { orderID: 3, amount: 150 },
   { orderID: 4, amount: 1200 }
];

let redors = orers.reduce(function (acc, curr){
return acc+ curr.amount 
},0);console.log(`اجمالى المبيعات : ${redors} جنيـة`)

// -----------------------------------------

let commets = [
   "This is a great post!",
   "You are stupid! badword",
   "Amazing content, thanks!",
   "What a badword comment!"
];
let filcomz = commets.filter((el)=> !el.includes('badword'));console.log(filcomz)



//---------------Array --------Object--------------------

const numMs = [10, 20, 30, 40, 50];
// اكتب دالة ترجع مجموع عناصر المصفوفة

function totalNums(nu){

 return nu.reduce((acc, curr)=> acc+curr ,0);
 
}
console.log(totalNums(numMs))

//--------------------------------------

const nuErs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// اكتب دالة ترجع مصفوفة تحتوي فقط على الأعداد الزوجية
function funNuers (nu){
   return nu.filter((el)=> el%2==0);};console.log(funNuers(nuErs))

//--------------------------------------
   const nuers = [2, 3, 4, 5];
// اكتب دالة ترجع مصفوفة جديدة تحتوي على مربع كل رقم
function squareNums (nums){
return nums.map((el)=> el**2);
};console.log(squareNums(nuers));
//-------------------------------------
const nBers = [5, 12, 8, 130, 44];
// اكتب كود يرجع أول عدد أكبر من 20 باستخدام الميثود المناسبة
function finelement(nums){
return nums.find((el)=> el>20 )
};console.log(finelement(nBers));
//-------------------------------------
const nuS = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// اكتب كود يرجع مصفوفة جديدة بدون تكرار
function uniquNums(nus){
return  ` unique numers is ${[...new Set(nus)]}` // اتحلت بس حطتلى كلمة set لكن لما حطتها فى  
// لما حطتها `` طلعتلى كدا unique numers is [object Set]
};console.log(uniquNums(nuS));
//------------------------------------

const people = [
   { name: "Ahmed", age: 25 },
   { name: "Nora", age: 22 },
   { name: "Hassan", age: 30 }
];
// اكتب دالة تأخذ اسم الشخص وترجع بياناته

function selectName(ppl , uSn){
return ppl.find((el)=> el.name == uSn ? el.name : 'user not found')
};console.log(selectName(people , 'Ahmed'))
//-----------------------------------

const stents = [
   { name: "Ali", grade: 90 },
   { name: "Sara", grade: 85 }
];
// أضف خاصية جديدة "passed" بقيمة true إذا كان الدرجة أكبر من أو تساوي 50
 
function addProP(students){
   return students.map((el)=>({...el, passed: el.grade >=50 }))

};console.log(addProP(stents))

//------------------------------------
const peOple = [
   { name: "Omar", age: 30 },
   { name: "Laila", age: 25 },
   { name: "Mona", age: 35 }
];
// اكتب دالة تحسب متوسط الأعمار
// متوسط الاعمار بالحساب  مجموع قيم الاعداد / مجموع عددهم

function avergeTotalAge(ppl){
return ppl.map((el)=> el.age).reduce((acc, curr)=> acc+curr ,0)/ ppl.length
};console.log(avergeTotalAge(peOple));

//--------------------------------------
/*
const items = [
   { id: 1, name: "Laptop" },
   { id: 2, name: "Phone" },
   { id: 3, name: "Tablet" }
];
// استخدم reduce لتحويلها إلى أوبجكت حيث يكون الـ id هو المفتاح والقيمة هي الاسم

let newItems =items.map((el)=> Object.entries(el)).reduce((acc,curr)=> acc +curr).split(' ')
let obA = Object.fromEntries(newItems)
console.log(obA)
*/
//-----------------------------------------

const wods = ["apple", "banana", "apple", "orange", "banana", "apple"];
// استخدم reduce لإنشاء أوبجكت يحتوي على عدد مرات تكرار كل كلمة

const wds = ["apple", "banana", "apple", "orange", "banana", "apple"];

const wordCount = wds.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1; //<<-----
    return acc;
}, {});console.log(wordCount);
//-----------------------------------
const entries = [
   ["name", "Nora"],
   ["age", 23],
   ["city", "Cairo"]
 ];console.log(Object.fromEntries(entries))
//-----------------------------------

const ordes = [
   { category: "Electronics", price: 5000 },
   { category: "Clothes", price: 300 },
   { category: "Electronics", price: 7000 },
   { category: "Clothes", price: 450 },
   { category: "Food", price: 200 }
 ];
 let ro =Object.fromEntries(ordes.map((el)=> Object.values(el)))   
;console.log(ro)
 //----------------------------------

 const emplyees = [
   { id: 1, name: "Ahmed", salary: 8000 },
   { id: 2, name: "Nora", salary: 12000 },
   { id: 3, name: "Omar", salary: 9000 },
   { id: 4, name: "Mona", salary: 15000 }
 ];
 //استخدم find() للعثور على الموظف الذي راتبه 12000.
let findEmp =emplyees.find((el)=> el.salary == 12000);console.log(findEmp);

//استخدم filter() للحصول على جميع الموظفين الذين رواتبهم أكبر من 9000.
let filtEmp = emplyees.filter((el)=> el.salary>9000);console.log(filtEmp);

//استخدم map() لإنشاء مصفوفة تحتوي فقط على أسماء الموظفين.
let red = emplyees.map((el)=> el.name); console.log(red);
//-----------------------------------
const prodcts = [
   { name: "Laptop", price: 15000 },
   { name: "Phone", price: 8000 },
   { name: "Tablet", price: 5000 }
 ];
 
//استخدم sort() لترتيب المنتجات تصاعديًا حسب السعر.
console.log(prodcts.sort((el)=> !el.price - el.price ));

//استخدم sort() لترتيب المنتجات تنازليًا حسب السعر.
console.log(prodcts.sort((el)=> el.price - el.price ));

//----------------------------------

const usr = {
   id: 101,
   name: "Nora",
   age: 23,
   country: "Egypt"
 };
 
function obToArray(uz){
// return Object.keys(uz) <---- حوله إلى مصفوفة مفاتيح فقط باستخدام Object.keys().
// return Object.values(uz) <----- حوله إلى مصفوفة قيم فقط باستخدام Object.values().
return Object.entries(uz) // <---- حوله إلى مصفوفة تحتوي على key-value arrays باستخدام Object.entries().
};console.log(obToArray(usr));

//--------------------------------
/*
const keys = ["name", "age", "city"];
const values = ["Nora", 23, "Cairo"];

let conCaTi = keys.reduce((acc, curr ,index)=>{ acc[curr] = values[index]
},{}); console.log(conCaTi);
*/
//---------------------------------

const ticket = {
   passengerName: "Nora",
   flightNumber: "MS202",
   departure: "Cairo",
   destination: "Dubai",
   seat: "12A",
   price: 5000
 };
 //أضيفي خاصية status تعبر عن حالة الرحلة (مثل "Confirmed").
ticket.statue = 'Cnfirmed' ;

//غيري رقم المقعد إلى "14B".
ticket.seat= '148' ;

// احذفي خاصية price لأنها غير ضرورية للعرض.
function delPrp(obj ,key){
   let oO = {...obj};
delete oO[key]
return oO // مش عارفة بيتمسح لية! $$$$$$$$$$$$$$$$$$$$
};console.log(delPrp(ticket , "price"));

//استخدمي Object.keys() لطباعة جميع المفاتيح في الكائن.
console.log(Object.keys(ticket));

//استخدمي Object.values() لطباعة جميع القيم.
console.log(Object.values(ticket));

//-----------------------------------------

const ordrs = [
   { id: 1, item: "Pizza", quantity: 2, price: 150 },
   { id: 2, item: "Burger", quantity: 1, price: 80 },
   { id: 3, item: "Pasta", quantity: 3, price: 120 }
 ];
 
//استخدمي map() لإنشاء مصفوفة تحتوي على أسماء الأطعمة فقط.
let rE = ordrs.map((el)=>el.item);console.log(rE);

//استخدمي filter() للحصول على الطلبات التي تحتوي على أكثر من 2 قطعة.
let kE = ordrs.filter((el)=> el.quantity>2);console.log(kE);

//----------------------------------------

const emples = [
   { id: 101, name: "Ahmed", department: "IT", salary: 12000 },
   { id: 102, name: "Nora", department: "HR", salary: 10000 },
   { id: 103, name: "Omar", department: "IT", salary: 14000 },
   { id: 104, name: "Mona", department: "Marketing", salary: 9000 }
 ];
 
//استخدمي find() للبحث عن الموظف الذي اسمه "Nora".
let eM=emples.find((el)=> el.name=== 'Nora');console.log(eM);

//استخدمي filter() للحصول على جميع الموظفين في قسم "IT".
let oY =emples.filter((el)=> el.department =='IT' );console.log(oY);

//استخدمي sort() لترتيب الموظفين حسب الراتب تصاعديًا.
console.log(emples.sort((el)=> el.salary - el.salary));

//استخدمي some() للتحقق مما إذا كان هناك أي موظف راتبه أعلى من 15000.
let yU =emples.some((el)=> el.salary >15000);console.log(yU);

//---------------------------------------
const inventory = [
   { product: "Laptop", stock: 5, price: 15000 },
   { product: "Phone", stock: 0, price: 8000 },
   { product: "Tablet", stock: 7, price: 5000 },
   { product: "Smartwatch", stock: 2, price: 3000 }
 ];

 //استخدمي filter() لإيجاد المنتجات التي متوفرة في المخزون (stock > 0).
let tR = inventory.filter((el)=> el.stock >0 );console.log(tR);

//استخدمي map() لإنشاء مصفوفة جديدة تحتوي فقط على أسماء المنتجات وأسعارها.
let rP = inventory.map((el)=> el.product +' : '+ el.price);console.log(rP);

//استخدمي reduce() لحساب إجمالي قيمة جميع المنتجات في المخزون.
let yT = inventory.reduce((acc,curr)=> curr.price +acc,0);console.log(yT);

const studnts = {
   "Ahmed": { math: 85, english: 78, science: 92 },
   "Nora": { math: 95, english: 88, science: 90 },
   "Omar": { math: 76, english: 72, science: 80 }
 };
//استخدمي Object.keys() لطباعة أسماء جميع الطلاب.
console.log(Object.keys(studnts));

//استخدمي Object.entries() لطباعة أسماء الطلاب مع درجاتهم في الرياضيات.
console.log(Object.entries(studnts))

//أنشئي دالة getAverage(studentName) تأخذ اسم طالب وتعيد متوسط درجاته في جميع المواد.

function getAverage(obj,studentName){
return Object.values(obj[studentName]).reduce((acc,curr)=> acc+curr ,0)/obj.length
};console.log(getAverage(studnts,'Nora'));

//-------------------------------------------------

const saLes = {
   "2025-03-20": { totalSales: 50000, customers: 120 },
   "2025-03-21": { totalSales: 75000, customers: 150 },
   "2025-03-22": { totalSales: 62000, customers: 135 }
 };
//استخدمي Object.keys() لطباعة جميع التواريخ المتاحة.
console.log(Object.keys(saLes));

//استخدمي Object.values() لحساب إجمالي عدد العملاء في جميع الأيام.
console.log(Object.values(saLes))

//استخدمي reduce() لحساب إجمالي المبيعات في الأيام الثلاثة.
console.log(Object.values(saLes).reduce((acc,curr)=> acc +curr.totalSales ,0));

/*const keys = ["name", "age", "city"];
const values = ["Nora", 23, "Cairo"];

let conCaTi = keys.reduce((acc, curr ,index)=>{ acc[curr] = values[index]
},{}); console.log(conCaTi);
---------------------------------------

 مراجعة كود reduce لحساب تكرار الكلمات
js
Copy code
const wds = ["apple", "banana", "apple", "orange", "banana", "apple"];

const wordCount = wds.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1; //✅ التصحيح هنا
    return acc;
}, {});

console.log(wordCount);
💡 كيف يعمل؟

acc[word] || 0 → إذا كان المفتاح غير موجود، نضع القيمة 0.

+1 → نزيد عدد مرات التكرار.

في النهاية، لدينا كائن يحتوي على عدد مرات تكرار كل كلمة. 🚀

----------------------------------------------------

1️⃣ الفرق بين oO[key] و delete key in oO
✅ الصياغة الصحيحة:
js
Copy code
delete oO[key];
❌ الصياغة الخاطئة:
js
Copy code
delete key in oO;
📌 الفرق:

delete oO[key] 🔥 تحذف المفتاح فعليًا من الكائن oO.

delete key in oO ❌ لا يحذف المفتاح!

key in oO يرجع true/false فقط للتحقق مما إذا كان المفتاح موجودًا.

delete true/false ليس له أي تأثير!

✅ الصحيح:

js
Copy code
function delPrp(obj, key) {
   let oO = { ...obj };
   delete oO[key];  // ✅ حذف المفتاح بطريقة صحيحة
   return oO;
}
2️⃣ مشكلة حساب متوسط درجات الطالب
js
Copy code
function getAverage(obj, studentName) {
    return Object.values(obj[studentName]).reduce((acc, curr) => acc + curr, 0) / obj.length;
}
📌 الخطأ: obj.length ❌

obj هو كائن، والكائنات ليس لها length، لذا هذه الصياغة ستُرجع undefined وستؤدي إلى NaN عند القسمة.
*/
 
// اللى فوق دا محتاج مراجعه وفهم وكتابة الملاحظات

const ordErs = [
   { id: 1, customer: "Nora", items: [{ product: "Laptop", price: 15000 }, { product: "Mouse", price: 500 }] },
   { id: 2, customer: "Omar", items: [{ product: "Phone", price: 10000 }, { product: "Charger", price: 300 }] },
   { id: 3, customer: "Laila", items: [{ product: "Tablet", price: 8000 }] },
 ];
 
 // ✅ احسبي إجمالي قيمة الطلبات لكل عميل.
 
 function totalPerCustomer(orders) {
   // هنا هنستخدم map وreduce لحساب الإجمالي لكل عميل
 }
 
 // ✅ أنشئي كائن يحتوي على إجمالي قيمة الطلبات لكل عميل بالشكل:
  /*
  {
    "Nora": 15500,
    "Omar": 10300,
    "Laila": 8000
  }
  */
 
 // ✅ استخدمي filter() لإيجاد الطلبات التي تحتوي على أكثر من منتج واحد.
 
// array to object
 const entrIes = [
   ["name", "Nora"],
   ["age", 23],
   ["city", "Cairo"]
 ];

console.log(Object.fromEntries(entrIes));

//--------------------------------------------------

const ordeRs = [
   { category: "Electronics", price: 5000 },
   { category: "Clothes", price: 300 },
   { category: "Electronics", price: 7000 },
   { category: "Clothes", price: 450 },
   { category: "Food", price: 200 }
 ];
let reducora = ordeRs.map((el)=> Object.values(el)).map(function(el ,ind,arr){
return arr[ind][0] === arr[ind][0] ? el[1]+ el[1] : el
})

/*
['Electronics', 5000] arr[0][0]
1
: 
(2) ['Clothes', 300] arr[1][0]
2
: 
(2) ['Electronics', 7000] arr[2][0]
3
: 
(2) ['Clothes', 450] arr[3][0]
4
: 
(2) ['Food', 200]arr[4][0]
*/
console.log((reducora))

//-----------------------------------------

const emplOyees = [
   { id: 1, name: "Ahmed", salary: 8000 },
   { id: 2, name: "Nora", salary: 12000 },
   { id: 3, name: "Omar", salary: 9000 },
   { id: 4, name: "Mona", salary: 15000 }
 ];
 //استخدم find() للعثور على الموظف الذي راتبه 12000.

 console.log(emplOyees.find((el)=> el= 12000));

 //استخدم filter() للحصول على جميع الموظفين الذين رواتبهم أكبر من 9000.
 console.log(emplOyees.filter((el)=> el.salary >9000));

// استخدم map() لإنشاء مصفوفة تحتوي فقط على أسماء الموظفين.
console.log(emplOyees.map((el)=> el.name));

//-------------------------------

const procts = [
   { name: "Laptop", price: 15000 },
   { name: "Phone", price: 8000 },
   { name: "Tablet", price: 5000 }
 ];
 

//استخدم sort() لترتيب المنتجات تصاعديًا حسب السعر.
console.log(procts.sort((a,b)=> a.price -b.price));
// تنازليا
console.log(procts.sort((a,b)=> !a.price -b.price));

//------------------------------

const uzzer = {
   id: 101,
   name: "Nora",
   age: 23,
   country: "Egypt"
 };
 console.log(Object.keys(uzzer))

 console.log(Object.values(uzzer))
//-----------------------------------

const ords = [
   { id: 1, customer: "Nora", items: [{ product: "Laptop", price: 15000 }, { product: "Mouse", price: 500 }] },
   { id: 2, customer: "Omar", items: [{ product: "Phone", price: 10000 }, { product: "Charger", price: 300 }] },
   { id: 3, customer: "Laila", items: [{ product: "Tablet", price: 8000 }] },
 ];
 
 // ✅ احسبي إجمالي قيمة الطلبات لكل عميل.
 function totalPerCustomer(orders) {
   // هنا هنستخدم map وreduce لحساب الإجمالي لكل عميل
  // return orders.map((el)=> Object.values(el)).reduce((acc,curr)=>acc+ curr[2],0)

 };console.log(totalPerCustomer(ords))
 let arr1 =ords.map((el)=> Object.values(el));
 console.log(arr1.forEach((el)=> el)) // اية اللى يخلينى اقدر افكك المصفوفات المتداخلة ؟ وهل هنا حل ؟
 // ✅ أنشئي كائن يحتوي على إجمالي قيمة الطلبات لكل عميل بالشكل:
  /*
  {
    "Nora": 15500,
    "Omar": 10300,
    "Laila": 8000
  }
  */
 
 // ✅ استخدمي filter() لإيجاد الطلبات التي تحتوي على أكثر من منتج واحد.
 
 let fil=ords.filter((el)=> el.items['product'] >1 )

//-----------------------------------------

const emplees = [
   { id: 101, name: "Ahmed", department: "IT", salary: 12000, age: 29 },
   { id: 102, name: "Nora", department: "HR", salary: 10000, age: 25 },
   { id: 103, name: "Omar", department: "IT", salary: 14000, age: 32 },
   { id: 104, name: "Mona", department: "Marketing", salary: 9000, age: 27 }
 ];
 
 // ✅ احسبي متوسط رواتب جميع الموظفين باستخدام reduce().
 console.log(emplees.reduce((acc,curr)=> acc + curr.salary ,0)/emplees.length)
 // ✅ استخدمي find() للعثور على الموظف الذي عمره أكبر من 30 سنة.
 console.log(emplees.find((el)=> el.age >30))
 // ✅ استخدمي filter() للحصول على جميع الموظفين في قسم "IT".
 console.log(emplees.filter((el)=> el.department == 'IT'))
 // ✅ استخدمي sort() لترتيب الموظفين حسب العمر تصاعديًا.
 console.log(emplees.sort((a,b)=>a.age - b.age))
 // ✅ استخدمي some() للتحقق مما إذا كان هناك موظف راتبه أكبر من 15000.
 console.log(emplees.some((el)=>el.salary >15000))
 // ✅ استخدمي every() للتحقق مما إذا كان جميع الموظفين رواتبهم أكثر من 8000.
 console.log(emplees.every((el)=> el.salary >8000))

//---------------------------------------------
const salesData = {
   "2025-03-20": { totalSales: 50000, customers: 120 },
   "2025-03-21": { totalSales: 75000, customers: 150 },
   "2025-03-22": { totalSales: 62000, customers: 135 }
 };
 
 // ✅ احسبي إجمالي المبيعات في جميع الأيام باستخدام reduce().
console.log((salesData['2025-03-20'].totalSales)+(salesData['2025-03-21'].totalSales)+(salesData['2025-03-22'].totalSales))
 let re= Object.values(salesData).reduce((acc,curr)=>acc + curr.totalSales,0);
console.log(re)
 
 // ✅ استخدمي Object.keys() لطباعة جميع التواريخ المتاحة.
 console.log(Object.keys(salesData));
 // ✅ احسبي متوسط عدد العملاء يوميًا باستخدام Object.values() و reduce().
 console.log(Object.values(salesData).reduce((acc, curr)=> acc + curr.customers,0)/ salesData.length)
 // لية عملى NaN

 //---------------------------------------------

 
 // ✅ استخدمي reduce() لتحويل المنتجات إلى كائن بحيث يكون الـ id هو المفتاح، والقيمة هي اسم المنتج:
 // { 1: "Laptop", 2: "Phone", 3: "Tablet" }

 //console.log(prodActs.map((el)=> Object.values(el)).reduce((acc,curr)=> acc+curr ).split(' '))
 //-------------------------------------------
 

 // ✅ استخدمي map() لإنشاء مصفوفة جديدة تحتوي على أسماء المنتجات وأسعارها بالشكل: ["Laptop: 15000", "Phone: 8000", ...]
// console.log(inveNtory.map((el)=> Object.values(el.product) +Object.values(el.price)))
 // ✅ استخدمي reduce() لحساب إجمالي قيمة جميع المنتجات المتوفرة في المخزون.
 //console.log(inveNtory.filter((el)=> el.stock >0).reduce((acc,curr)=> acc + curr.price ,0))

 //------------------------
  const reviews = [
  { user: "Ahmed", rating: 5, comment: "Excellent product!" },
  { user: "Nora", rating: 4, comment: "Good quality, but a bit expensive." },
  { user: "Omar", rating: 3, comment: "Average, nothing special." },
  { user: "Mona", rating: 2, comment: "Not as expected." }
];

// ✅ استخدمي reduce() لحساب متوسط التقييمات (rating).
console.log(reviews.reduce((acc, curr)=> acc +curr.rating ,0))
// ✅ استخدمي filter() للحصول على المراجعات التي تقييمها 4 أو أكثر.
console.log(reviews.filter((el)=> el.rating>=4))

// ✅ استخدمي map() لإنشاء مصفوفة جديدة تحتوي على التعليقات فقط.
console.log(reviews.map((el)=> el.comment))
//------------------------

const keys = ["name", "age", "city"];
const values = ["Nora", 23, "Cairo"];

console.log(keys.reduce((acc,curr,ind)=> {
   acc[curr] = values[ind]
   return acc
},{}));
//--------------------------------------




//--------------------------
const prods = [
   { id: 1, name: "Laptop", price: 15000 },
   { id: 2, name: "Phone", price: 8000 },
   { id: 3, name: "Tablet", price: 5000 }
 ];

//-----------------------------------
const ods = [
   { id: 1, customer: "Nora", items: [{ product: "Laptop", price: 15000 }, { product: "Mouse", price: 500 }] },
   { id: 2, customer: "Omar", items: [{ product: "Phone", price: 10000 }, { product: "Charger", price: 300 }] },
   { id: 3, customer: "Laila", items: [{ product: "Tablet", price: 8000 }] }
];console.log(ods.filter((el=> el.items.length >1)))

//----------------------------------
const prodActs = [
   { id: 1, name: "Laptop", price: 15000 },
   { id: 2, name: "Phone", price: 8000 },
   { id: 3, name: "Tablet", price: 5000 }
 ];
 // { 1: "Laptop", 2: "Phone", 3: "Tablet" }

console.log(prodActs.reduce((acc,curr,ind)=> {
   acc[curr.id] = curr.name
   return acc
},{}))

//-----------------------------------------------------
const inveNtory = [
   { product: "Laptop", stock: 5, price: 15000 },
   { product: "Phone", stock: 0, price: 8000 },
   { product: "Tablet", stock: 7, price: 5000 },
   { product: "Smartwatch", stock: 2, price: 3000 }
 ];
 
 // ✅ استخدمي filter() لإيجاد المنتجات التي متوفرة في المخزون فقط (stock > 0).
console.log(inveNtory.filter((el)=>el.stock >1).reduce((acc,curr)=>{
acc[curr.product] = curr.price
return acc
},[]))


//["Laptop: 15000", "Phone: 8000", ...]
 // ✅ استخدمي reduce() لحساب إجمالي قيمة جميع المنتجات المتوفرة في المخزون.

 console.log(inveNtory.filter((el)=>el.stock >1).reduce((acc,curr)=> acc+ curr.price ,0))

 const ordEErs = [
   { category: "Electronics", price: 5000 },
   { category: "Clothes", price: 300 },
   { category: "Electronics", price: 7000 }
 ];

console.log(ordEErs.reduce((acc,curr)=>{

acc[curr.category]= (acc[curr.category] || 0) + curr.price
return acc
},{}))

//-----------Last tasks about basic Object js------------
/*
//🔹 التحدي 1: تحليل بيانات الطلبات 📦

const salesdata = [
   { product: "Laptop", units: 3, pricePerUnit: 15000 },
   { product: "Phone", units: 5, pricePerUnit: 8000 },
   { product: "Tablet", units: 2, pricePerUnit: 5000 },
   { product: "Laptop", units: 1, pricePerUnit: 15000 },
   { product: "Phone", units: 3, pricePerUnit: 8000 }
 ];
 
 //    { Laptop: 60000, Phone: 64000, Tablet: 10000 }
let nereSales = salesdata.reduce((acc,curr)=>{
acc[curr.product] = (acc[curr.product] || 0) + (curr.pricePerUnit * curr.units)
return acc
},{})
console.log(nereSales)
 //    { Laptop: 4, Phone: 8, Tablet: 2 }
let sumSales = salesdata.reduce((acc,curr)=>{
acc[curr.product] =(acc[curr.product] || 0) + (curr.units)
   return acc
},{});console.log(sumSales)

 // 3. الناتج يكون: "Phone"
console.log(Object.values(salesdata.find((el)=> el.product =="Phone")))
console.log(salesdata.map((el)=>el.product == 'Phone' ? el.product : 'Phone')[0])
 // 📌 المطلوب:
 // 1. الناتج يكون بالشكل ده:
 //    { Laptop: 60000, Phone: 64000, Tablet: 10000 }
 
 // 2. الناتج يكون بالشكل ده:
 //    { Laptop: 4, Phone: 8, Tablet: 2 }
 
 // 3. الناتج يكون: "Phone"
 
//----------------------------------------------------
//🔹 التحدي 2: تحليل بيانات الموظفين 👨‍💼
const empLyees = [
   { name: "Ali", department: "IT", salary: 15000 },
   { name: "Sara", department: "HR", salary: 12000 },
   { name: "Ahmed", department: "IT", salary: 18000 },
   { name: "Mona", department: "Marketing", salary: 14000 },
   { name: "Omar", department: "HR", salary: 13000 },
   { name: "Laila", department: "IT", salary: 20000 }
 ];
 
 // 📌 المطلوب:
 // 1. الناتج يكون بالشكل ده:
 //    { IT: 17666.67, HR: 12500, Marketing: 14000 } متوسط الراتب لكل قسم
let avarEge = empLyees.reduce((acc,curr)=> {
   
acc[curr.department] = (acc[curr.department] || 0)+(curr.salary)
return acc
 },{});
 //معرفتش اقسم ازاى او اجيب عدد الطول 
 // ازاى اجيب كم مرة اتكررت حاجة معينة
 console.log(avarEge)


// 2. الناتج يكون: "Laila"
 
 // 3. الناتج يكون بالشكل ده:
 //    { IT: 53000, HR: 25000, Marketing: 14000 }
 // حليت دا عادى 

//------------------------------------------------
//🔹 التحدي 3: تحليل سلة التسوق 🛒
const caRRt = [
   { product: "Laptop", price: 15000, discount: 10, stock: 3 },
   { product: "Phone", price: 8000, discount: 5, stock: 0 },
   { product: "Tablet", price: 5000, discount: 20, stock: 2 },
   { product: "Smartwatch", price: 3000, discount: 15, stock: 5 }
 ];
 
 // 📌 المطلوب:
 // 1. الناتج يكون:  33500 (بعد تطبيق الخصومات)
 let tecV = (caRRt.filter((el)=> el.stock >0).reduce((acc,curr)=>{
   let dItems = (curr.discount)+(curr.price)
   delete acc[dItems]
  acc[curr.product] = curr
  return acc
 },[]))
 console.log(tecV);




 // 2. الناتج يكون:
 //    [
 //       { product: "Laptop", stock: 3 },
 //       { product: "Tablet", stock: 2 },
 //       { product: "Smartwatch", stock: 5 }
 //    ]


 
 // 3. الناتج يكون:
 //    ["Laptop: 13500", "Tablet: 4000", "Smartwatch: 2550"]
 


//احسبي إجمالي تكلفة السلة بعد تطبيق الخصم لكل منتج.

const productZ = [
   { id: 101, name: "Laptop" },
   { id: 102, name: "Phone" },
   { id: 103, name: "Tablet" }
 ];
 
console.log((productZ).reduce((acc,curr)=>{

acc[curr.id] = curr.name;
return acc
},{}))


 // 📌 الناتج المطلوب:
 // { 101: "Laptop", 102: "Phone", 103: "Tablet" }
 
 //-----------------------------------------
//🔹 التحدي 5: تحليل بيانات العملاء 👥
const custOmers = [
   { name: "Nora", orders: [{ amount: 5000 }, { amount: 7000 }] },
   { name: "Omar", orders: [{ amount: 3000 }, { amount: 2000 }] },
   { name: "Laila", orders: [{ amount: 4000 }, { amount: 8000 }] }
 ];
 
 // 📌 المطلوب:
 // 1. الناتج يكون:
 //    { Nora: 12000, Omar: 5000, Laila: 12000 }
 let rez1 = custOmers.reduce((acc,curr)=> {
   let cO= curr.orders.reduce((acc, curr)=> acc.amount + curr.amount)
   acc[curr.name]=  cO
   return acc
},{})
 console.log(rez1)

let rez2 =custOmers.reduce((acc,curr)=> {
   let cO= curr.orders.reduce((acc, curr)=> acc.amount + curr.amount)
   acc[curr.name]=  cO
   return acc
},[])
console.log(rez2)

 // 2. الناتج يكون:
 //    [ "Nora", "Laila" ]
 
 // 3. الناتج يكون:
 //    { Nora: 2, Omar: 2, Laila: 2 }
 */

// -----------------again Object------------------

const saleXData = [
   { product: "Laptop", units: 3, pricePerUnit: 15000 },
   { product: "Phone", units: 5, pricePerUnit: 8000 },
   { product: "Tablet", units: 2, pricePerUnit: 5000 },
   { product: "Laptop", units: 1, pricePerUnit: 15000 },
   { product: "Phone", units: 3, pricePerUnit: 8000 }
 ];
 
 // 📌 المطلوب:
 // 1. الناتج يكون بالشكل ده:
 //    { Laptop: 60000, Phone: 64000, Tablet: 10000 }
 console.log(saleXData.reduce((acc,curr)=>{
 //  let totalUnites =saleXData.reduce((accd,cuur)=> accd+cuur.units,0) لما عملت دى عملى NaN
 acc[curr.product] = (acc[curr.product] || 0) + (curr.units * curr.pricePerUnit)
 return acc
},{}))
// 2. الناتج يكون بالشكل ده:
 //    { Laptop: 4, Phone: 8, Tablet: 2 }
 let ropr = saleXData.reduce((acc,curr)=>{
   acc[curr.product] = (acc[curr.product] || 0) + (curr.units)
   return acc
  },{})
 console.log(ropr)
 // 3. الناتج يكون: "Phone"

 //مش عارفة

 const empLyees = [
   { name: "Ali", department: "IT", salary: 15000 },
   { name: "Sara", department: "HR", salary: 12000 },
   { name: "Ahmed", department: "IT", salary: 18000 },
   { name: "Mona", department: "Marketing", salary: 14000 },
   { name: "Omar", department: "HR", salary: 13000 },
   { name: "Laila", department: "IT", salary: 20000 }
 ];
 
 // 📌 المطلوب:
 // 1. الناتج يكون بالشكل ده:
 //    { IT: 17666.67, HR: 12500, Marketing: 14000 }
 let totalEl = empLyees.reduce((acc,curr)=>{
  return (acc[curr.department] ||0) + curr.department.length
});console.log(totalEl)
 console.log(empLyees.reduce((acc,curr)=>{
acc[curr.department] =( (acc[curr.department] ||0) + curr.salary / totalEl) // / curr.department.length متعملتش
return acc
 },{}))


 // 2. الناتج يكون: "Laila"
 console.log(empLyees.find((el)=> el.salary >= 20000 ).name)
 // 3. الناتج يكون بالشكل ده:
 //    { IT: 53000, HR: 25000, Marketing: 14000 }
 
 console.log(empLyees.reduce((acc,curr)=>{
   acc[curr.department] =( (acc[curr.department] ||0) + curr.salary ) 
   return acc
    },{}))
//-------------------------------------------
const carT = [
   { product: "Laptop", price: 15000, discount: 10, stock: 3 },
   { product: "Phone", price: 8000, discount: 5, stock: 0 },
   { product: "Tablet", price: 5000, discount: 20, stock: 2 },
   { product: "Smartwatch", price: 3000, discount: 15, stock: 5 }
 ];
 
 // 📌 المطلوب:
// احسبي إجمالي تكلفة السلة بعد تطبيق الخصم لكل منتج.
// 1. الناتج يكون:  33500 (بعد تطبيق الخصومات)
 // معرفتش الحسبة نفسها تتم ازاى كنت بضرب السعر فالخصم والباقى اطرحة من السعر واضربو فالكمية ومطلعتش نفس النتيجة

 // 2. الناتج يكون:
 //    [
 //       { product: "Laptop", stock: 3 },
 //       { product: "Tablet", stock: 2 },
 //       { product: "Smartwatch", stock: 5 }
 //    ]
 
 console.log(carT.filter((el)=>el.stock>0).reduce((acc,curr)=>{
 //`${acc[curr.product]=}  ${(curr.stock || 0)} ,stock: ${curr.stock}`
return acc
 },{})) // معرفتش زى ماهى مكتوبة فالناتج ولا بالعادى ولا بال template

 // 3. الناتج يكون:
 //    ["Laptop: 13500", "Tablet: 4000", "Smartwatch: 2550"]
 console.log(carT.reduce((acc,curr)=>{
   let re = carT.reduce((ax,xu)=> ax.price * xu.discount )
acc[curr.product] = curr.price - re
return acc
 },{}))

 //-------------------------------------------

 const prodXcts = [
   { id: 101, name: "Laptop" },
   { id: 102, name: "Phone" },
   { id: 103, name: "Tablet" }
 ];
 
 console.log(prodXcts.reduce((acc,curr)=>{
acc[curr.id]= curr.name
return acc
 },{}))
 // 📌 الناتج المطلوب:
 // { 101: "Laptop", 102: "Phone", 103: "Tablet" }

 //--------------------------------------
 const custXnmers = [
   { name: "Nora", orders: [{ amount: 5000 }, { amount: 7000 }] },
   { name: "Omar", orders: [{ amount: 3000 }, { amount: 2000 }] },
   { name: "Laila", orders: [{ amount: 4000 }, { amount: 8000 }] }
 ];
 
 // 📌 المطلوب:
 // 1. الناتج يكون:
 //    { Nora: 12000, Omar: 5000, Laila: 12000 }
 
//console.log(Object.values(custXnmers)) // مش المفروض يجبلى هنا القيم بس جبلى هنا المصفوفة زى ماهى
 console.log(custXnmers.reduce((acc,curr)=>{
   curr.orders=curr.orders.reduce(function(e,x){
      return e.amount +x.amount
   })
acc[curr.name] = curr.orders 
return acc
 },{}))

console.log(custXnmers.filter((el)=>el.orders >10000 ).reduce((acc,curr)=>{
   acc = ([curr.name]) // طلعتلى ليلى بس
   return acc 
},[]))

// 2. الناتج يكون:
 //    [ "Nora", "Laila" ]
 
 // 3. الناتج يكون:
 //    { Nora: 2, Omar: 2, Laila: 2 }
 console.log(custXnmers.reduce((acc,curr ,arr)=>{
   let ordLen = custXnmers.map((el)=>el.orders).length -1
   curr.orders.length= 
acc[curr.name] = ordLen
return acc
 },{})) // عملتها بالعافية
 
 // Objects
 const visiTors = [
   { country: "Egypt", device: "Mobile", duration: 5 },
   { country: "USA", device: "Desktop", duration: 10 },
   { country: "Egypt", device: "Tablet", duration: 8 },
   { country: "UK", device: "Mobile", duration: 6 },
   { country: "USA", device: "Mobile", duration: 12 },
   { country: "Egypt", device: "Desktop", duration: 7 },
 ];
 console.log()
 let egyptCount =visiTors.filter((el)=>el.country == 'Egypt').length
 let usaCount =visiTors.filter((el)=>el.country == 'USA').length
 let ukCount =visiTors.filter((el)=>el.country == 'UK').length

 console.log(visiTors.reduce((acc,curr)=>{
acc[curr.country] = curr.country ==='Egypt'? egyptCount :0 || curr.country ==='USA' ? usaCount :ukCount
return acc
  } ,{}))

// 🔥 الناتج المطلوب:
 // { Egypt: 3, USA: 2, UK: 1 }
 //------------------------------------

 const visItors = [
   { country: "Egypt", device: "Mobile", duration: 5 },
   { country: "USA", device: "Desktop", duration: 10 },
   { country: "Egypt", device: "Tablet", duration: 8 },
   { country: "UK", device: "Mobile", duration: 6 },
   { country: "USA", device: "Mobile", duration: 12 },
   { country: "Egypt", device: "Desktop", duration: 7 },
 ];
 
 // 🔥 الناتج المطلوب:
 // "Mobile" اى جهاز استخدم عدة مرات
 console.log(Object.values(visItors).filter((el)=>el.device == 'Mobile'))
let mobD =Object.values(visItors).filter((el)=>el.device == 'Mobile').length
let deskD =Object.values(visItors).filter((el)=>el.device == 'Desktop').length
let tabletD =Object.values(visItors).filter((el)=>el.device == 'Tablet').length
let newVisitors= [mobD , deskD, tabletD]
console.log(newVisitors.map((el)=> el > 2 ? el : '' && el==3 ? 'Mobile' : 'Mobile')[0]) // 3 = mobD = device: mobile
//-----
console.log(visItors.reduce((acc,curr,{total,count})=>{
  curr.device.total += curr.device 
   curr.device.count += 1
acc[curr.device] = total || count
return acc
},{})[0])// معرفتش احلها كدا

 //---------------------------------
 const orDrers = [
   { customer: "Nora", product: "Laptop", price: 15000 },
   { customer: "Omar", product: "Phone", price: 8000 },
   { customer: "Nora", product: "Tablet", price: 5000 },
   { customer: "Laila", product: "Laptop", price: 15000 },
   { customer: "Omar", product: "Tablet", price: 5000 },
 ];
 
 // 🔥 الناتج المطلوب:
 // {
 //   Nora: ["Laptop", "Tablet"],
 //   Omar: ["Phone", "Tablet"],
 //   Laila: ["Laptop"]
 // }


let arrProducts =orDrers.map((el)=> el.customer)

console.log(arrProducts)

console.log()

 
 console.log((orDrers).reduce((acc,curr)=>{
   
acc[curr.customer] = curr.product
return acc
// (acc[curr.customer] || acc[curr.product]) 
 },{})) // زهقت اوى ومببقاش عارفة افكر :((




 //-------------------------------

 const saLEes = [
   { product: "Laptop", units: 2, pricePerUnit: 15000 },
   { product: "Phone", units: 5, pricePerUnit: 8000 },
   { product: "Tablet", units: 3, pricePerUnit: 5000 },
   { product: "Laptop", units: 1, pricePerUnit: 15000 },
   { product: "Phone", units: 2, pricePerUnit: 8000 }
 ];
 
 // 🔥 الناتج المطلوب:
 // { Laptop: 45000, Phone: 56000, Tablet: 15000 }
 console.log(saLEes.reduce((acc, curr)=>{
acc[curr.product]= (acc[curr.product] || 0) + (curr.pricePerUnit * curr.units)
return acc
 },{}))





 //---------------------------------
 const reViews = [
   { product: "Laptop", rating: 5 },
   { product: "Phone", rating: 4 },
   { product: "Laptop", rating: 3 },
   { product: "Tablet", rating: 5 },
   { product: "Phone", rating: 2 },
   { product: "Laptop", rating: 4 },
 ];
 
 // 🔥 الناتج المطلوب:
 // { Laptop: 4.00, Phone: 3.00, Tablet: 5.00 }

 console.log(reViews.reduce((acc,curr)=>{
//let lenG = reViews.filter((el ,ind)=>(el.product[ind] || 0)+ 1 )

curr.count += 0
acc[curr.product]=(acc[curr.product] ||0) + curr.rating / curr.count
return acc
 },{})) // تعبببببببببببببببببت مش عارفاااااة اعملها بشكل منطقى 

 
 //-----------------------------------------


 const proDDuctsz = [
   { name: "Laptop", price: 15000, stock: 3 },
   { name: "Phone", price: 8000, stock: 0 },
   { name: "Tablet", price: 5000, stock: 2 },
   { name: "Smartwatch", price: 3000, stock: 5 }
 ];

 console.log(proDDuctsz.map(({name,stock})=> ({name,stock})))
 
 // 🔥 الناتج المطلوب:
 // [
 //   { name: "Laptop", stock: 3 },
 //   { name: "Tablet", stock: 2 },
 //   { name: "Smartwatch", stock: 5 }
 // ]
 /*
console.log(proDDucts.filter((el)=>el.stock >0).reduce((acc,curr)=>{
delete curr.price
acc[curr['name']] = acc[curr.stock] + curr.stock
return acc
},{}))
/*
let gG = proDDucts.filter((el)=>el.stock >0).reduce((acc,curr)=>{
   return curr.price >0 ? `${acc[0]} : ${curr.name} , stock : ${curr.stock} ,` : ''
});console.log(gG)
*/

 //------------------------------------------
 const emploTees = [
   { name: "Ali", department: "IT" },
   { name: "Sara", department: "HR" },
   { name: "Ahmed", department: "IT" },
   { name: "Mona", department: "Marketing" },
   { name: "Omar", department: "HR" },
   { name: "Laila", department: "IT" }
 ];
 
 // 🔥 الناتج المطلوب:
 // "IT"
 console.log(Object.keys(emploTees.reduce((acc,curr)=>{
   acc[curr.department] =((acc[curr.department] || 0) +1)
   return acc
 },[]))[0]) // .find((el)=> `"${el[0]}"`)

  
 //-----------------------------------------

 const produCts = [
   { name: "Laptop", price: 15000 },
   { name: "Phone", price: 8000 },
   { name: "Tablet", price: 5000 },
   { name: "Smartwatch", price: 3000 }
 ];
 
 // 🔥 الناتج المطلوب:
 // [
 //   { name: "Laptop", price: 15000 },
 //   { name: "Phone", price: 8000 },
 //   { name: "Tablet", price: 5000 },
 //   { name: "Smartwatch", price: 3000 }
 //]
 //--------------------------------

 const studEEnts = [
   { name: "Noura", course: "JavaScript" },
   { name: "Omar", course: "Python" },
   { name: "Noura", course: "React" },
   { name: "Omar", course: "Django" },
   { name: "Salma", course: "CSS" },
 ];
 
 /// المطلوب: تحويلها لكائن بهذا الشكل
 /**
 {
   "Noura": ["JavaScript", "React"],
   "Omar": ["Python", "Django"],
   "Salma": ["CSS"]
 }
 */
console.log(studEEnts.reduce((acc,curr)=>{
   acc[curr.name] =(acc[curr.name]||[curr.course])
   return acc
   },{}));
//---------------------------------------
   const data = {
      user: {
        name: "Noura",
        details: {
          age: 25,
          address: {
            city: "Cairo",
            country: "Egypt"
          }
        }
      }
    };
    console.log(data.user.details.address.city)
    /// المطلوب: كتابة دالة searchInObject(obj, value) تبحث داخل أي عمق من الكائن
   function searchInObject(obj,key){

return Object.entries(obj).map((el)=>el[1]).map((el)=>Object.entries(el)[1][1]).map((el)=>Object.entries(el)[1][1]).map((el)=>Object.entries(el)[0]).some((el)=>el[1] == key)

};console.log(searchInObject(data, "Cairo")); // true
 console.log(searchInObject(data, "Alex"));  // false
    
 //----------------------------------

 const purchases = [
   { product: "Laptop", buyer: "Noura" },
   { product: "Phone", buyer: "Omar" },
   { product: "Laptop", buyer: "Salma" },
   { product: "Tablet", buyer: "Omar" },
   { product: "Laptop", buyer: "Omar" },
 ];
 
 /// المطلوب: تحويلها لكائن يجمع عدد كل منتج:
 /**
 {
   "Laptop": 3,
   "Phone": 1,
   "Tablet": 1
 }
 */
console.log(purchases.reduce((acc,curr)=>{
   acc[curr.product]= (acc[curr.product]||0)+1
   return acc
},{})) 

//----------------------------------------
const grades = {
   Noura: 85,
   Omar: 90,
   Salma: 76,
   Ahmed: 95,
 };
 
 /// المطلوب: كتابة دالة updateGrades(obj, percent) تضيف نسبة مئوية للدرجات لكن لا تتجاوز 100
 
 
 function updateGrades(obj,percent){
return Object.entries(obj).reduce((acc,curr)=>{
acc[curr[0]]= (acc[curr[0]] ||0) + ((curr[1] >100 ? curr[1]==100 : curr[1] + (curr[1] *percent /100)))
return acc
},{})
 }
 console.log(updateGrades(grades, 10));
 
 /**
 {
   Noura: 93.5,
   Omar: 99,
   Salma: 83.6,
   Ahmed: 100
 }
 */
 //-------------------------------------------------
 const boZks = [
   { title: "JavaScript Guide", pages: 300, price: 120 },
   { title: "Python Basics", pages: 150, price: 100 },
   { title: "Advanced CSS", pages: 220, price: 130 },
   { title: "React Handbook", pages: 180, price: 140 },
   { title: "Node.js Deep Dive", pages: 400, price: 200 },
 ];
 
 /// المطلوب: كتابة دالة filterBooks(books) ترجع الكتب اللي عدد صفحاتها > 200 
 // وسعرها < 150
 
 console.log(boZks.filter((el)=>el.pages >200 && el.price < 150))

 function filterBooksz(bks){
return 
}
 console.log(filterBooksz(boZks));
 
 /**
 [
   { title: "JavaScript Guide", pages: 300, price: 120 },
   { title: "Advanced CSS", pages: 220, price: 130 }
 ]
 */
 //-----------------------New Object----------------------------

 const uZers = [
   { id: 1, name: "Nora", age: 25, role: "admin" },
   { id: 2, name: "Ahmed", age: 22, role: "user" },
   { id: 3, name: "Mona", age: 30, role: "user" },
   { id: 4, name: "Omar", age: 28, role: "moderator" },
];

 // اكتب دالة getUserNames(users) ترجع مصفوفة تحتوي على أسماء جميع المستخدمين.
/*
function getUserNames(users){
//return [users].map((el)=>Object.values(el)).map((el)=>Object.values(el)).map((el)=>Object.values(el))
// i cant acsess with array mthods inside function
return  accEss = us



}; console.log(getUserNames(uZers))

*/
console.log(Object.values(uZers.reduce((acc,curr)=>{
   acc[curr.id] = curr.name // معرفتش اكتب name : 'noura' .... معرفتش اكتب كلمة name
   return acc
   },{})))

 // اكتب دالة getAdmins(users) ترجع فقط المستخدمين الذين دورهم "admin".
//function getAdmins(users,value){
//return Object.values(users).map((el)=>Object.entries(el)).filter((el)=>el.includes(value))
//};console.log(getAdmins(uZers,"admin"))
console.log(uZers.filter((el)=>el.role == 'admin').map((el)=>{el})) // كنت عاوزة احطها فاوبجكت

 // اكتب دالة getAverageAge(users) تحسب متوسط أعمار المستخدمين.
console.log(uZers.reduce((acc,curr)=>{
   acc[curr.age] = curr.age
   return acc
} ,{}))
//-------------------DOM-----------------------
/*
let begainIdElement = document.getElementById("changeText")
begainIdElement.innerHTML='Text Has Changed!'
/*
let begainClassName = document.getElementsByClassName('colored') 
begainClassName ='red' // متغيرتش
let begainTagName1 = document.getElementsByTagName('p') 
begainTagName1.style.color ='red' // متغيرش بردو ومفيش innerHTML
begainClassName.setAttribute('.colored' , 'red') // بردو متغيرش
//-------------------
//let begainTagName2 = document.getElementsByTagName('div')
document.getElementsByTagName('div').style.background='yellow'

let begainClassName = document.getElementsByClassName("colored")
console.log(begainClassName)

for(let i=0 ; i<begainClassName.length ;i++){
   begainClassName[i].style.color ='red'
} // غير اللون فالصفحة بس ادانى خطأ فالكونسول
// <button id="changeColor">غير اللون</button>

document.getElementById("changeColor").style.color="blue"
//------------------
//المسألة 3: تغيير خلفية جميع العناصر باستخدام getElementsByTagName
let divs = document.querySelector('div')
for(let i=0 ;i<divs.length ; i++){
    divs[i].style.backgroundColor='yellow'
}
//-----------------

let chk = document.querySelector('#text')
if(chk.hasAttribute('id')){
   chk.removeAttribute('id')
}
//-----------------
let img= document.images[0]
if(img.hasAttribute('alt')){
   img.removeAttribute('alt')
}else{
   console.log('العنصر لا يحتوى على alt')
}
//-----------------

let myDd =document.links[0]
myDd.setAttribute('href','https://youtube.com')

//-----------------
document.getElementById('textt').textContent = 'Has Changed'
//----------------
let class2= document.getElementsByClassName('coloredd')
for(let i=0 ;i<class2.length;i++){
   class2[i].style.color='blue'
}
//------------------
*/
// Task 1
//المسألة 1: تغيير النص باستخدام getElementById
document.getElementById('text').textContent ='Has Changed';
document.getElementById('text').style.color='green';
document.getElementById('text').style.fontWeight ='bold';
document.getElementById('text').style.fontSize='20px'
//-----------------
// Task 2
//المسألة 2: تغيير لون جميع العناصر التي تحمل class="colored"
let myClass1 = document.getElementsByClassName('colored');
for(let i=0;i<myClass1.length ; i++){
   myClass1[i].style.color = 'blue'
   myClass1[i].style.fontSize ='18px'
   
};
//-----------------
// Task 3 
//المسألة 3: تغيير خلفية جميع p باستخدام getElementsByTagName
/*
let myTag1 =document.getElementsByTagName('p');
for(let i=0 ;i<myTag1.length ; i++){
   myTag1[i].style.backgroundColor ='yellow'
} // This solution with TagName but to make it special --->
*/
document.querySelectorAll('p')[1].style.backgroundColor='yellow';
document.querySelectorAll('p')[1].style.fontWeight='bold'
document.querySelectorAll('p')[2].style.backgroundColor='yellow' ;
document.querySelectorAll('p')[2].style.fontWeight='bold'
document.querySelectorAll('p')[3].style.backgroundColor='yellow' ;
document.querySelectorAll('p')[3].style.fontWeight='bold'
document.querySelectorAll('p')[4].style.backgroundColor='yellow' ;document.querySelectorAll('p')[3].style.fontWeight='bold'
document.querySelectorAll('p')[4].style.fontWeight='bold'
//------------------

// Task 4
//المسألة 4: تغيير لون عنصر باستخدام querySelector
document.querySelector('#changeColor').style.color='red' ;
document.querySelector('#changeColor').style.fontWeight ='bold';
document.querySelector('#changeColor').style.backgroundColor ='black';
document.querySelector('#changeColor').textContent='Press Here :_))' ;

//-----------------
// Task 5
//المسألة 5: التحقق من وجود alt في الصورة وحذفه إن وجد
let imGf = document.images[0] ;
imGf.hasAttribute('alt') ? imGf.removeAttribute('alt') : console.log(`its n't containing alternative`) ;
//-----------------
// Task 6
//المسألة 6: إضافة رابط جديد لزر باستخدام setAttribute
document.getElementById('goToGoogle').setAttribute('href',"https://google.com") ;
//------------------
//Task 7
//المسألة 7: حذف title من عنصر إن وجد
if(document.querySelectorAll('h1')[1].hasAttribute('title')){
   document.querySelectorAll('h1')[1].removeAttribute('title')
};
//------------------
//Task 8
//المسألة 8: تغيير جميع الروابط إلى يوتيوب
/*
let quer2 =document.querySelectorAll('a')[1] ;
for(let i=0 ;i<quer2.length ; i++){
   quer2[i].setAttribute('href', 'https://youtube.com')
}
*/ // لية مشتغلتش كدا

document.getElementsByTagName('a')[1].setAttribute('href' , 'https://youtube.com');
document.getElementsByTagName('a')[2].setAttribute('href' , 'https://youtube.com');
document.getElementsByTagName('a')[3].setAttribute('href' , 'https://youtube.com');

//-----------------
// Task 9
//المسألة 9: التأكد من وجود id وإزالته إن وجد
document.getElementsByTagName('div')[1].hasAttribute('id') ? document.getElementsByTagName('div')[1].removeAttribute('id') : console.log(`its not inclueded`)
document.getElementById('specialDiv').hasAttribute('id') ? document.getElementById('specialDiv').removeAttribute('id') : console.log(`its not inclueded`)
// لية فالاخيرة اشتغل والاولى مشتغلتش علما بان فى 
// div قبل كدا مكتوبة غير المسألة دى
//------------------
// Task 10
//المسألة 10: تغيير نص عنصر باستخدام innerHTML

document.querySelector('h2').innerHTML= 'Edited !'
//------------------

// --------------elzero assaignments--------------
// Task 1 'From Elzero'
//<div id="elzero" class="element" name="js">JavaScript</div>

//1
console.log(document.getElementById('elzero'))
//2
console.log(document.getElementsByClassName('element')[0])
//3
console.log(document.getElementsByTagName('div')[4]);
//4
console.log(document.querySelector('#elzero'));
//5
console.log(document.querySelector('.element'))
//6
console.log(document.querySelector('[name="js"]'))
//7
console.log(document.querySelector('[class="element"]'))
//8
console.log(document.querySelector('[id="elzero"]'))
//9
console.log(document.querySelectorAll('div')[4])
//10
console.log(document.querySelectorAll('.element')[0])
//11
console.log(document.querySelectorAll('[name="js"]')[0]) 
//12
console.log(document.querySelectorAll('[id="elzero"]')[0])
//13
console.log(document.querySelectorAll('[class="element"]')[0])
//14
console.log(document.querySelectorAll('#elzero')[0]);

//------------------------
// Task 2 'From Elzero'
/*
المطلوب هو تغيير ال Src Attribute لصورة اللوجو التالية “https://elzero.org/wp-content/themes/elzero/imgs/logo.png”
تغيير محتوى ال Alt Attribute ل Elzero Logo
يجب عمل Loop يقوم بالوظيفة مباشرة ولا تقوم بتكرار ال Code
*/

let collecImg =document.querySelectorAll('[decoding="async"]');
collecImg.forEach((e) =>{
   e.setAttribute('src' , 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png')
   e.setAttribute('alt' ,'Elzero Logo')
   console.log(e)
   });

//-----------------------
// Task 3 'From Elzero'
/*
 <form action="">
    <input type="number" name="dollar" placeholder="USD Dollar" />
    <div id="iDD" class="result">{0} USD Dollar = {0} Egyptian Pound</div>
  </form>
 عاوز يخلى اليوزر لما يكتب رقم يبقي مكان الصفر فعملة الامريكى ويظهر قصادو التحويل للعملة المصرية مكان الصفر بردو */

let userValueUs =+ 0
let userValueEg = userValueUs *16
document.getElementById('iDD').textContent = `${userValueUs} USD Dollar = ${userValueEg} Egyptian Pound`
//  معرفتش احلها :(
//----------------------
// Task 4 'From Elzero'
/*

<div id="twoo" class="one" title="two">Two</div>
  <div id="onee" class="two" title="one">One</div>
  عاوز يعد الاتربيوت ويغير المحتوى اللى تحت يكون فوق واللى فوق يبقي تحت 
 document.getElementsByClassName('one')[0].setAttribute('title' ,'one')
 document.getElementsByClassName('two')[0].setAttribute('title' ,'two 2')
 document.getElementById('onee').textContent = 'One'

 let g1=document.getElementById('twoo').textContent= 'Two'
 let g2=document.getElementById('onee').textContent = 'One'
document.body.appendChild(g1)
document.body.appendChild(g2)

// متعملتش بردو :(

*/
let validSubmit =document.getElementById('submit')
validSubmit.onclick= function(e){
let userValid =false ;
let ageValid =false ;
let userInput = document.querySelector("[name='username']")
let ageInput = document.querySelector("[name='age']")

if(userValid === false || ageValid=== false){
   e.preventDefault() ;
}
if(userInput.value !== '' && userInput.value.length >= 10 ){
 userValid =true
   console.log(`Done`)

}
if(ageInput.value !== ''){
    ageValid =true;
   console.log(`Done`);}}

//-----------------------------------------
let currencyInput =document.querySelector('[name="dollar"]')
let usdValue =document.getElementById('iDD')
currencyInput.addEventListener('input',function(){
  if(!isNaN(currencyInput.value)){
   let usd =currencyInput.value
   let convEg= usd *50
   usdValue.textContent = `${usd} USD Dollar = ${convEg} Egyptian Pound`
  }
});
//-----------------------------------------
// For changing Text
 document.getElementById('twoo').textContent = 'One';
 document.getElementById('onee').textContent='Two' ;

// For Changing Atribute

document.getElementById('twoo').setAttribute('title','One')
document.getElementById('onee').setAttribute('title' , 'Two')

//------------------------------------------

let myLoop =document.querySelectorAll('[decoding="async"]')
for(let i=0 ;i< myLoop.length ; i++){
   if(myLoop[i].hasAttribute('alt')){
      myLoop[i].setAttribute('alt' , 'old')
     
    }
    else if(!myLoop[i].hasAttribute('alt')){
      myLoop[i].setAttribute('alt' , 'Elzero')

   }}
   
//-------------------------------------------
/*/
let createButton = document.querySelector('[name="create"]')
createButton.onclick=function(event){

let userInputNumber = document.querySelector('[name="elements"]');
let userInputText = document.querySelector('[name="texts"]');
let rezult = document.querySelector('.results');
let event =false;
   event.preventDefault();


if(!isNaN(userInputNumber.value) && typeof(userInputText.value) == 'string'){

    for(let i=userInputText.value ; i<=userInputNumber.value;i++ ){
      rezult.textContent = userInputText.value
    }}}
      */
     /*
    let form = document.querySelector('form');
    let results = document.querySelector('.results');
  
    form.onsubmit = function (event) {
      event.preventDefault(); // علشان الصفحة متعملش ريفريش
  
      // نجيب القيم من الحقول
      let number = document.querySelector('[name="elements"]').value;
      let text = document.querySelector('[name="texts"]').value;
      let type = document.querySelector('[name="type"]').value;
  
      // نحذف العناصر القديمة
      results.innerHTML = '';
  
      // نبدأ نعمل العناصر
      for (let i = 1; i <= number; i++) {
        let element = document.createElement(type.toLowerCase());
        element.className = 'box';
        element.id = `id-${i}`;
        element.textContent = text;
        results.appendChild(element);
      }
    };
    */
/*
    let form = document.getElementById("createForm");
let results = document.querySelector(".results");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // نمنع الريفريش

  let count = document.querySelector('[name="elements"]').value;
  let text = document.querySelector('[name="texts"]').value;
  let type = document.querySelector('[name="type"]').value.toLowerCase();

  results.innerHTML = ""; // نحذف العناصر القديمة

  for (let i = 1; i <= count; i++) {
    let element = document.createElement(type);
    element.className = "box";
    element.id = `id-${i}`;
    element.textContent = text;
    results.appendChild(element);
  }
}); // لا انا ولا شات جى بى تى عارفين نحلها
*/
//---------------------basics of Dom------------------------
//1
let myButton =document.getElementById('changeRText') ;
let myParagMessage = document.getElementById('messRage');

myButton.onclick=function(){
console.log('ok')

let r= myParagMessage.textContent ='Welcome Baby Girl :*'
r.style.fontWeight='Bold' // مشتغلتش
// لو حبيت اخلى الرسالة اللى هتظهر دى بلون او bold !!
}
//------------------------
//2
let mySquare = document.getElementById("boZx") ;
let mYbtn = document.getElementById('colorZBtn');
mYbtn.onclick= function(){
   mySquare.style.backgroundColor='pink';
   console.log('Done Pink')
}
//-----------------------
//3
let uzerInput = document.getElementById('userVame');
let myWelBtn = document.getElementById('welcomVeBtn');
let myTexParg = document.getElementById('welcomVeMsg');
myWelBtn.onclick= function(){
   myTexParg.textContent= `hi baby ${uzerInput.value}` 
   console.log('hi baby')
}
//-----------------------
//4
let myImgG = document.getElementById('myIVmg');
let myBtnImg = document.getElementById('hideVBtn');

myBtnImg.onclick=function(){
    //delete myImgG // مش عارفة امسحها
    /*
    myImgG.innerHTML='' ; // متمسحتش بردو
    myImgG.textContent=''
    myImgG.setAttribute('src','')
    */
    myImgG.style.display='none'
}

//-----------------------
//5
let myPParg = document.getElementById('textVPara') ;
let myPargButt = document.getElementById('biggerVBtn')
myPargButt.onclick= function(){
   myPParg.style.fontSize='24px'
}

//-----------------------
//6

let counNums = document.getElementById('counCter') ;
let myCountButton =document.getElementById('increaseCBtn')
let coTnt =0 ;

myCountButton.onclick = function(){
   coTnt++
 counNums.textContent = coTnt
   }

//------------------------
//7
let myCoB =document.getElementById('countGBtn');
let myTc = document.getElementById('textInGput');
let myTPa = document.getElementById('charCoGunt');

myCoB.onclick=function(){
   console.log(myTc.value.length)
   myTPa.textContent = `${myTc.value.length}`
}

//-------------------------
//8 // tricks creating li
let userUl = document.getElementById('itemInRput')
let buttonUl= document.getElementById('addIteRmBtn')
let ulShow = document.getElementById('itemRList')
buttonUl.onclick =function(){
ulShow.textContent= `${userUl.value}`
}

//-------------------------
//9
let hiddP =document.getElementById('toggleText');
let hiddbutt =document.getElementById('toggleBtn');
hiddbutt.onclick =function(){
hiddP.style.display=''; // اشتغلت
//if(hiddP.style.hasAttribute('display')){
//this.removeAttribute('display') // دى مشتغلتش
//}
}
//-------------------------
//10
let bntt =document.getElementById('fillBtn');
let texcha =document.getElementById('autoFill')
bntt.onclick=function(){
   texcha.value='im beautiful cz chatGPT with me <3'
}
//-------------------------
//11
let myList =document.querySelectorAll('#myLcist')
let myDeleteBtn =document.querySelectorAll('.delZeteBtn')

 // myDeleteBtn.onclick=function(){
  // myList.forEach((el)=>el.innerHTML="") // مش شغالة خالص حتى لما غيرت ال id وخليتة لل li بس مش ul
  myDeleteBtn.forEach((el)=>
el.onclick=function(){
   el.parentElement.remove();})
//-------------------------
//12
let myChickUl =document.querySelectorAll('#clickCList')
/*
myChickUl.forEach((el)=>
el.onclick=function(){
el.children.textContent= 'تم الضغط'
}

)
//console.log(myChickUl[0])  هنا قالى undifined لية ؟
myChickUl.forEach((el)=>
   el.onclick= function(){
   el.textContent='done'
})
*/
// الحل الصح
let myChickLis = document.querySelectorAll('#clickCList li');

myChickLis.forEach((el) => {
  el.onclick = function () {
    el.textContent = 'تم الضغط';
  };
});
//-----------------------------
//13
let checkInput = document.getElementById('agrFeeChk');
let cheCkingBtn = document.getElementById('continBueBtn');
// answer 1

checkInput.onfocus= function(){
   cheCkingBtn.removeAttribute('disabled')
}

//answer 2
if(checkInput.value ='yes'){
onfocus=function(){
      cheCkingBtn.removeAttribute('disabled')
   }
} // كنت عاوزة لما اليوزر يكتب يس يتفعل ا لزر

//-----------------------------
//14
let showSkillsBtn = document.getElementById('showSkillsBtn');
let labelCheck =document.querySelectorAll('[type="checkbox"]');
let selectedSkills = document.getElementById('selectedSkills')
labelCheck.forEach(function(el){
if(el.value !== ''){
   showSkillsBtn.onclick= function(){
      selectedSkills.append(el.value.textContent) // ادانى undefined سواء علمت عليها او لا
   }

}})
//------------------------------
//15
let myColorCSelector= document.querySelectorAll('#colorCSelector') ;
let mySSquer = document.getElementById('vcolorBox')
myColorCSelector.forEach((el)=>el.onclick= function(){
if (el.value === ''){
   el.preventDefault()
}
if(el.value=== 'red'){
   mySSquer.style.backgroundColor = 'red'
}
if(el.value=== 'blue'){
   mySSquer.style.backgroundColor = 'blue'
}
if(el.value=== 'green'){
   mySSquer.style.backgroundColor = 'green'
}});
//-------------------------------
function sumTom (n){
   if(n===0){
      return 0
   }else{
      return n + sumTom(n-1)
   }
}
let sumResult =sumTom(5)
console.log(sumResult) // Tiktok challenge 
//1
let mytimeGreeting =document.getElementById('timeGreeting');
let mygreetBtn = document.getElementById('greetBtn');
let elmentP = document.createElement('p');
mytimeGreeting.append(elmentP);

mygreetBtn.onclick= function(){
   // مس عارفة الديت 
   elmentP.textContent='Good Morning';

}
//--------------------------------
//2
let myLiVnst =document.querySelectorAll('#myLiVnst li');
let myTTTb = document.getElementById('deleteLastVItemBtn')

myTTTb.onclick=function(){
   myLiVnst[2].remove()
   // جربت اعمل myLiVnst[length-1] مجتش خالص
}
//-------------------------------
//3
let mySpcBody = document.getElementById('myGBody')
let myTogbtn =document.getElementById('toggleColorBtn');
myTogbtn.onclick = function(){
   mySpcBody.style.backgroundColor='blue' 
}
//----------------------------------
//4 دى معرفهاش بس هحاول بكل تانى بس معرفش عداد كل ثانية دا
let countDownNum =document.getElementById('countDownNum');
let btnstartCou = document.getElementById('startCountDownBtn')
let minsCount = 10
btnstartCou.onclick= function(){
   countDownNum.textContent = minsCount-- //  كل مااضغط ينقص واحد
}
//---------------------------
//5
let mywelcomeCUser =document.getElementById('welcomeCUserBtn');
let myuseInput =document.getElementById('userNameInput');
let myRezultP = document.getElementById('welcomeCMessage');
myuseInput.before(myRezultP)
mywelcomeCUser.onclick= function(){
myRezultP.textContent=`Welcome ${myuseInput.value}`
myRezultP.style.fontWeight='bold';
myRezultP.style.color= 'pink'
myRezultP.style.fontSize ='20px'
}
//-----------------------------
//6
let mycopyGBtn = document.getElementById('copyGBtn');
let mycopyGInput =document.getElementById('copyGInput');
let myPresult =document.getElementById('sourceGYText');
mycopyGBtn.onclick= function(){
   mycopyGInput.value = `${myPresult.textContent}يا روحى`
}
//-----------------------------
//7
let myIncreasebtn = document.getElementById('countClickBtn');
let mySpan =document.getElementById('clickCount');
let newSpan = 1 ;
myIncreasebtn.onclick= function(){
   mySpan.textContent =newSpan++
   mySpan.parentElement.style.fontWeight= 'bold'
   mySpan.parentElement.style.color= 'red'
   mySpan.parentElement.style.fontSize='20px'
}
//-----------------------------
//8
let mytogglePassBtn = document.getElementById('togglePasswordBtn');
let mypassworCdInput =document.getElementById('passworCdInput');

mytogglePassBtn.onclick= function(){
//mypassworCdInput.style.display='block'
if(mypassworCdInput.hasAttribute('type')){
   mypassworCdInput.setAttribute('type' ,'username')
}};
//-----------------------------
//9
let textAreaInput = document.getElementById('wordInput')
let areaButton = document.getElementById('countWordsBtn')
let resultCountP =document.getElementById('wordCount')
areaButton.onclick= function(){
resultCountP.textContent=textAreaInput.value.length
}
//------------------------------
//10
let myInpoAge = document.getElementById('ageIznput');
let mybtnA = document.getElementById('checkzAgeBtn');
let checkedParg =document.getElementById('agezResult');
mybtnA.onclick=function(){
   if(myInpoAge.value >18 ){
      checkedParg.textContent="أنت مسموح لك بالدخول"
   }else{
      checkedParg.textContent="غير مسموح لك"
   }
}
//-------------------------------
//11
/*
let userNpt = document.getElementById('reversXeInput');
let reVButt =document.getElementById('reversXeBtn');
let revP =document.getElementById('reversXedResult');
reVButt.onclick=function(){
  // userNpt.value=[].reverse('').join('')
  // revP.textContent=userNpt.value
  //userNpt.value=[].forEach((el)=>revP.textContent=el.trim())
// معرفتش اعملها
};
*/
//--------------------------------
//12
let srchInput= document.getElementById('searchYInput');
let listFruits =document.querySelectorAll('#mySearchYList');

//srchInput.addEventListener('input',function(){
 //  listFruits.forEach((el)=>el.textContent === srchInput.value)
//})

//srchInput.addEventListener('input',function(){
//   listFruits.forEach((el)=>el.textContent)

//})// مش عارفها

//srchInput.oninput=function(){
  // listFruits.forEach((el)=>
//el.textContent === srchInput.value ?el.textContent : console.log('false')
//)
  //for(let i=0 ;i<listFruits.length ;i++) {
 //  if(listFruits[i].textContent === srchInput.value){
 //     return listFruits[i].textContent
//   }
 // }
//}

//srchInput.addEventListener('input',function(){

 //  for(let i=0 ;i<listFruits.length ;i++) {
//     if(listFruits[i].textContent === srchInput.value){
 //       return listFruits[i].textContent
//       }}})


//--------------------------------
//13
let myImacge = document.getElementById('myImacge');
let changecImgBtn = document.getElementById('changecImgBtn')
changecImgBtn.onclick= function(){
   myImacge.setAttribute('src','https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200')
}

//--------------------------------
//14
let addItVemBtn =document.getElementById('addItVemBtn')
let newItVemText =document.getElementById('newItVemText')
let tex = document.getElementById('myItemVsList');
let nElment =document.createElement('li')
addItVemBtn.onclick= function(){
   nElment.textContent=newItVemText.value
   tex.append(nElment)
};
//--------------------------------
//15
let noteInput = document.getElementById('noteInput');
let saveNoteBtn= document.getElementById('saveNoteBtn');
let clearNotesBtn= document.getElementById('clearNotesBtn');
let notesList= document.getElementById('notesList');
let noteElment =document.createElement('li');
// for save
saveNoteBtn.onclick= function(){
   noteElment.textContent =noteInput.value
   notesList.append(noteElment)
};
// for erase
clearNotesBtn.onclick= function(){
   noteInput.value =''
}
//---------------------------------
//16
let colorfSelect = document.querySelectorAll('#colorfSelect')
let coloredfText=document.getElementById('coloredfText');
colorfSelect.forEach // معرتهاش لا هى ولا المسائل 17 و18و19

//--------------------------------
//1 chatGPT
//عند الضغط على الزر، يتغير لون النص الموجود داخل الفقرة إلى لون مختلف.







//-----------------Elzero---------------
//1 المطلوب فتح الرابط الذي يحتوي على Class بإسم “open” والنص داخل الرابط هو “Elzero”

let linkA = document.querySelectorAll('.open');
linkA.forEach((el)=>{
   if(el.classList.contains('open') === true && el.textContent==='Elzero'){
   //el.click()
    
   }
})
console.log(linkA) 
//-----------------------------------
//2
let addInput =document.querySelector('.classes-to-add');
let removInput = document.querySelector('.classes-to-remove');
let resultInput = document.querySelector('.classes-list h5');
let currNt = document.querySelector('.element current')





/*
addInput.onblur=function(){
   resultInput.textContent = addInput.value.toLowerCase().trim().split(' ').join(' ')
   if(addInput.value ==''){
      resultInput.textContent= 'No Classes To Show'
   }
   return addInput.value =''

};

removInput.onblur = function (){

   removInput.value =

}

//addInput.addEventListener('onblur',function(){

if(addInput.value ==''){
   resultInput.textContent= 'No Classes To Show'
} عاوزة اعرف فين الغلط هنا ؟

})
*/
/*
let myDiv = document.createElement('div');
let hDiv = document.createElement('h1');
let pDiv = document.createElement('p');
let bTnn = document.createElement('button')
hDiv.textContent= 'Welcome';
pDiv.textContent='Welcome To Elzero Web School';
bTnn.textContent = 'close'
myDiv.appendChild(hDiv);
myDiv.appendChild(pDiv);
myDiv.appendChild(bTnn);
console.log(myDiv)
let useRa = window.alert(myDiv.textContent)

window.setTimeout(function(){
    window.alert(myDiv.textContent)
   
},5000);

bTnn.onclose =function(){
   bTnn.click()
} ; 
 *///--------------ChatGPT DOM------------------
 
// 3
let texTD = document.getElementById('countYer');
let butt = document.getElementById('incrementYBtn');
let cTTunt =1 ;

butt.onclick= function(){
   texTD.textContent= cTTunt++
}
//---------------------------
//4
let myBotn = document.getElementById('toggleRBtn');
let disP = document.getElementById('togglReText');
/*
myBotn.onclick= function(){
if(disP.style.display = 'none'){
   disP.style.display = 'block'
}else{
   disP.style.display = 'none'
}

}
myBotn.addEventListener('onclick',function(){
   if(disP.style.display = 'none'){
      disP.style.display = 'block'
   }
})

myBotn.addEventListener('onclick',function(){
   if(disP.style.display = 'block'){
      disP.style.display = 'none'
   }
})

myBotn.onclick=function(){
   if(disP.style.getProperty('display: none')== true){
      disP.style.setProperty('display','block')
   }
}

myBotn.onclick= function(){
   if(disP.style.display = 'none'){
      disP.style.display = 'block'
   }


};

   myBotn.onclick= function(){
      if(disP.style.display = 'block'){
         disP.style.display = 'none'
      }}
         */


//----------------------
//5
let butT = document.getElementById('changeTextOBtn');
let buTp = document.getElementById('changePMe');
butT.onclick= function(){
   buTp.textContent='❤️مية مية يا هندسة '
   buTp.style.color='pink'
   buTp.style.fontWeight='bold'

};
//-----------------------
//6
let inPut = document.getElementById('userPInput');
let subButtn = document.getElementById('printBPOtn');
let pCh = document.getElementById('outputPOText');
subButtn.onclick= function(){
   pCh.textContent= inPut.value
   pCh.style.fontWeight='bold';
   pCh.style.color='red'
   pCh.style.fontSize='18px'
   pCh.textContent[0].toUpperCase() // معملش اول حرف كابيتال
};
//-------------------------
//7
let bigP =document.getElementById('bigBText');
let bigB = document.getElementById('increaseFFontBtn');
bigB.onclick= function(){
   bigP.textContent=`${bigP.textContent}(عظمـة يا قمـر)`
   bigP.style.fontSize='20px'


}
//----------Advanced------------
//1
let btInc =document.getElementById('pluJsBtn');
let zerbutn = document.getElementById('reseJtBtn');
let txcS =document.getElementById('countJerText');
let countInc =1;

btInc.onclick= function(){
   txcS.textContent=countInc++

};
zerbutn.onclick= function(){
   // التعديل لازم ترجعى الكونت بواحد اثناء التصفير 
   txcS.textContent=0
};
//--------------------------
//2
let myButN = document.getElementById('coDlorBtn');

myButN.addEventListener('click' ,function(){
mySpcBody.style.backgroundColor='red'
});
myButN.addEventListener('click' ,function(){
   mySpcBody.style.backgroundColor='blue'
   });

   myButN.addEventListener('click' ,function(){
      mySpcBody.style.backgroundColor='pink'
      });
      myButN.addEventListener('click' ,function(){
         mySpcBody.style.backgroundColor='black'
         });
         myButN.addEventListener('click' ,function(){
            mySpcBody.style.backgroundColor='white'
            }); // غير لاخر حاجة بس معملهمش بترتيب 
 //----------------------------
 //3
 let myInp = document.getElementById('taskNInput')  ;
 let buTon =document.getElementById('addTNaskBtn') ;
 let ulDiv =document.getElementById('taskLNist')  ;
 let liElm =document.createElement('li');
 ulDiv.appendChild(liElm);

 buTon.onclick= function(){
   ulDiv.textContent=myInp.value;
   myInp.onblur= function(){
      myInp.value ='' 
   };// كنت عازة لما اكتب حاجة تتشال من الانبوت وتنضاف فاللستة واضيف تانى 
};

 //-----------Advanced-----------------
//1
let muInp = document.getElementById('passwordRInput');
let pasBtn = document.getElementById('togglePRassBtn');

pasBtn.onclick=function(){
  // muInp.setAttribute('type' ,'text');
 // عاوزة اقولة لما يدوس تانى يرجع يختفى
 /* 
 if(muInp.hasAttribute('type')){
   muInp.setAttribute('type' ,'text');
if(muInp.hasAttribute('type')){
   muInp.setAttribute('type' ,'password');

}}
*/
muInp.classList.toggle('type')// مشتغلتش بردو :(

}
//-------------------------
window.addEventListener('load' , function(){
   this.window.scrollTo({
      top: this.document.body.scrollHeight,
      behavior:"smooth"
   })
   console.log(this.window.scrollX)
})
//------------------------
//2
let myTbn = document.getElementById('downIBtn');
let myPT = document.getElementById('countDIownText')
let downC = 4;
myTbn.onclick= function(){
   if(myPT.textContent > 0 &&myPT.textContent != 0){
      myPT.textContent=downC--
   }if(myPT.textContent == 0){
      myPT.textContent='Done'  

   }
};
//------------------------
//3
let myMg = document.getElementById('myImOage');
let myBtM = document.getElementById('changeIOmgBtn');

myBtM.onclick= function(){
   myMg.setAttribute('src' ,'https://cdn.pixabay.com/photo/2017/08/07/18/57/dog-2606759_640.jpg')
}; 
//-----------Advanced--------------
//1
let rndBtn= document.getElementById('changeBgGBtn');
rndBtn.onclick=function(){
   let colors = ['red','pink','blue','grey' ,'black' ,'purple'];
let indcolr= Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor=colors[indcolr];
};
//--------------------------
//2
let dowBtn = document.getElementById('startFCountBtn');
let txTdow = document.getElementById('timerFText');
let doCunt = 9;
dowBtn.onclick= function(){
   if(doCunt>0 && doCunt!=0 ){
      txTdow.textContent=doCunt--

   }else{
      txTdow.textContent= 'Done'
   }};
//----------------------------
//3
let myNPt = document.getElementById('listFInput');
let myBton = document.getElementById('addToFListBtn');
let myUl = document.getElementById('myLFist');

myBton.onclick= function(){
   let mylI1 = document.createElement('li');
   let myLI2 = document.createElement('li');
   myUl.appendChild(mylI1);
   myUl.appendChild(myLI2);
   mylI1.textContent = myNPt.value;
   // عاوزة بقى لما اليوزر يخلص كتابة ويضيف الانبوت يفضى واقدر اضيف مرة كمان حاجة مختلفة فالليست التانى 
};
//myNPt.onblur= function(){
  // myNPt.value=''
//} لما عملتها منعتلى الاكشن اللى فوق

//---------------------------
//4
let bigBtn = document.getElementById('increaVseFontBtn');
let smBtn = document.getElementById('decreasVeFontBtn');
let textP = document.getElementById('resizaVbleText');
textP.style.fontSize='18px';

bigBtn.onclick= function(){
   textP.style.fontSize='25px'
};
smBtn.onclick= function(){
   textP.style.fontSize='15px'

};

//---------------------------
//5
let darkModebtn =document.getElementById('darkMFodeBtn');

darkModebtn.addEventListener('click',function(e){
   if(darkModebtn.textContent == 'الوضع الليلي 🌙'){
   document.body.style.backgroundColor= 'black';
   darkModebtn.textContent= 'الوضع الافتراضى العادى'
   }else{
      document.body.style.backgroundColor= 'white';
      darkModebtn.textContent = 'الوضع الليلي 🌙'
   }
  // if(   darkModebtn.textContent== 'الوضع الافتراضى العادى'){
  //    document.body.style.backgroundColor= 'white'; 
//
  // }
})
  /*
darkModebtn.addEventListener('click',function(){
   if(darkModebtn.textContent == 'الوضع الافتراضى العادى'){
      document.body.style.backgroundColor= 'white'; 
      darkModebtn.textContent= 'الوضع الليلي 🌙'


   }
})*/
 // كنت عاوزة اقولة لما تلاقى الوضع الليلى يقلب اسود ويغير النص ولما يدوس تانى عالوضع الافتراضى يقلب ابيض ويغير النص
//----------------------------
//6
let togNgleBtn = document.getElementById('togNgleBtn')
let hiddeBnText =document.getElementById('hiddeBnText')
togNgleBtn.onclick= function(){
   if(hiddeBnText.style.display=='none'){
      hiddeBnText.style.setProperty('display' , 'block')
   }else{
      hiddeBnText.style.display='none'
   }};
   
//-----------------------------
//7
let autoFCount =document.getElementById('autoFCount')
autoFCount.style.fontSize= '25px'
autoFCount.style.fontWeight='bold'
autoFCount.style.color = 'blue'
let hiCou =1;
/*
window.addEventListener('load',function(){
   autoFCount.textContent=hiCou++
   // عمل واحد بس بعد اللود مش عداد 
})
*/
window.setInterval(function(){
   autoFCount.textContent=hiCou++

},1000) ;
//-----------------------------
//8
let hoveGrZone = document.getElementById('hoveGrZone');
let hoverGResult = document.getElementById('hoverGResult')
hoveGrZone.onmouseenter= function(){
if(hoverGResult.style.display== 'none'){
   hoverGResult.style.display= 'block'
}else{
   hoverGResult.style.display= 'none'
};};
//----------------------------
//9 مش فاهمة فكرتها بس هحاول 
let copyIKnput = document.getElementById('copyIKnput');
let copyBKtn = document.getElementById('copyBKtn');
let input4Cloned = document.createElement('div')
copyBKtn.after(input4Cloned);
let cK = true ;
copyBKtn.onclick= function(){
if( cK == true){
   let inputClone = copyIKnput.cloneNode(true)
   inputClone.id ='copyIKnputC'
   input4Cloned.append(inputClone)
}else{
return cK =false // كل مااضغط بينسخ مرة واتنين 
}
}
//-------------------------------
//10
let capInMput= document.getElementById('capInMput')
let capResMult= document.getElementById('capResMult')
let makeCaMpBtn= document.getElementById('makeCaMpBtn')

makeCaMpBtn.onclick=function(){
   let value = capInMput.value.split('').charAt(0).toUpperCase().join('')
   capResMult.textContent=  value
// معرفتهاش
}
//-------------Advanced DOM-----------------
//1
let textColoMrChanger = document.getElementById('textColoMrChanger')
let togglMeTextColorBtn = document.getElementById('togglMeTextColorBtn')
let isColored = false ;

togglMeTextColorBtn.onclick= function(){
   if(isColored == false){
      textColoMrChanger.style.color='red'
       isColored= true
   }else{
      textColoMrChanger.style.color='black'
      isColored = false;

   } // اية الفكرة هنا اللى ميخليهوش يكرر
   console.log(togglMeTextColorBtn)
   console.log(textColoMrChanger)
};
//---------------------
//2
let countdownMTimer= document.getElementById('countdownMTimer')
let startTiMmerBtn = document.getElementById('startTiMmerBtn')
let dCounT = 9 ;
/*
startTiMmerBtn.onclick= window.setInterval(function(e){
   if(dCounT >0){
      countdownMTimer.textContent = dCounT--

   };if(dCounT==0){
      countdownMTimer.textContent= 'Done'
   }
   
   if(dCounT<0){
      clearInterval(e)
   }
      
//if(dCounT==0){
//   clearInterval(e)
//}
// مش عارفة تشتغل ازاى وبتبدأ عد من غير ماادوس على الزرار 
},1000)
*/
// الحل الصحيح %%%%%%%%%%%%%%
startTiMmerBtn.onclick = function () {
   let interval = setInterval(function () {
     if (dCounT > 0) {
       countdownMTimer.textContent = dCounT--;
     } else {
       countdownMTimer.textContent = 'Done';
       clearInterval(interval);
     }
   }, 1000);
 };
 
 //-----------------------
 //3 عرض عدد الحروف تلقائيا فال p
let liveChParInput= document.getElementById('liveChParInput')
let charCounPtResult= document.getElementById('charCounPtResult')

liveChParInput.addEventListener('change',function(){
// الحل المباشر العادى
 charCounPtResult.textContent =` عدد الحروف ${liveChParInput.value.length}`
   // اذا فى مسافات فالكتابة يجب تتلاشى ولا تحسب

  let trans= liveChParInput.value.split(' ').join('').trim()
console.log(trans.length)
charCounPtResult.textContent =` عدد الحروف بدون مسافات : ${trans.length}`
});
//-------------------------
//4
let myDynaKmicList = document.getElementById('myDynaKmicList')
let addListKItemBtn= document.getElementById('addListKItemBtn')

addListKItemBtn.onclick= function(){
   let newLi = document.createElement('li');
   myDynaKmicList.appendChild(newLi);
   newLi.textContent= 'Im a new element :-)'
   newLi.style.color='green'
   newLi.style.fontSize='18px'
   newLi.style.fontWeight='bold'
}
//-------------------------
//5
let liveNClock= document.getElementById('liveNClock');
// الحل الصح %%%%%%%%%%
setInterval(function () {
   let now = new Date();
   let hour = now.getHours();
   let min = now.getMinutes();
   let sec = now.getSeconds();
   liveNClock.textContent = `${hour}:${min}:${sec}`;
 }, 1000);
 


/*
let now = new Date
let hour = now.getHours()
let minS = now.getMinutes()
//let counTs = 1
let seCnd = now.getSeconds()
liveNClock.textContent= `${hour}:${minS}:${seCnd}`

//---------------------
 let seCnd = window.setInterval(function(){
   if(counTs<= 59 && counTs>=1){
      seCnd =counTs++
   
   } // جه عند 59 ووقف ومش ماشى مع الدقايق فالطبيعى هو الحل الاول ولا اية هو الطبيعى ؟
   liveNClock.textContent= `${hour}:${minS}:${seCnd}`

 },1000)

*/


/*
let counTs = 1 // كنت عاوزة اخلى الثوانى كعداد ظاهر 
console.log(`${hour}:${minS}:${seCnd}`)
liveNClock= window.setInterval(function(){
   if(counTs<= 59 && counTs>=1){
      seCnd =counTs++
   
   }
  return liveNClock.textContent= `${hour}:${minS}:${seCnd}`

},1000)
*/
//--------------------------
//6
let togglNePic =document.getElementById('togglNePic');
let cat = false;
togglNePic.onclick= function(){
if(cat==false){
  togglNePic.src ='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
cat= true;
}else{
   togglNePic.src ='https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk='
   cat = false;
}}
//----------------------------
//7
let msBgInput = document.getElementById('msBgInput')
let sendMsBgBtn= document.getElementById('sendMsBgBtn')
let messaBgeOutput= document.getElementById('messaBgeOutput')
sendMsBgBtn.onclick= function(){
   let myForm = document.createElement('form')
   messaBgeOutput.appendChild(myForm)
   //console.log(messaBgeOutput)
   myForm.textContent=msBgInput.value
   myForm.style.border = '12px solid red';

   myForm.style.borderColor= 'red' // انا مش مهتمة اوى بالcssبس مش باين انه فورم
};
//------------------------------
//8
let hoverBXox= document.getElementById('hoverBXox');

hoverBXox.addEventListener('mouseenter',function(){
   hoverBXox.style.backgroundColor= 'pink'

});
hoverBXox.addEventListener('mouseleave',function(){
   hoverBXox.style.backgroundColor= 'grey'

});
/*
let iScoloRd= false;
hoverBXox.onmouseenter= function(){
if(iScoloRd== false){
   hoverBXox.style.backgroundColor= 'pink'
   iScoloRd= true;
}else{
hoverBXox.style.backgroundColor= 'grey'
iScoloRd= true;

}
}*/

//-------------------------
//9 مش عارفة ال rotation دا 


let rotateMeText = document.getElementById('rotateMeText');
let rotateBtn = document.getElementById('rotateBtn');
let deg = 0;

rotateBtn.onclick = function () {
  
  deg += 45;
  rotateMeText.style.transform = `rotate(${deg}deg)`;
  
  rotateMeText.style.color='yellow'
  rotateMeText.style.fontWeight='bold'
  rotateMeText.style.fontSize='30px'
};

//-------------------------
//10
let nuSSGm1= document.getElementById('nuSSGm1')
let nuGKm2= document.getElementById('nuGKm2')
let calcBHSumBtn= document.getElementById('calcBHSumBtn')
let sumReLKKsult= document.getElementById('sumReLKKsult')
calcBHSumBtn.onclick= function(){

   let rezY = +(nuSSGm1.value) + +(nuGKm2.value)
  sumReLKKsult.textContent= `حاصل الجمع هو ${rezY}`
};
//------------------------
//1
let countKResult= document.getElementById('countKResult');
let counKtBtn= document.getElementById('counKtBtn');
let eltarget= document.querySelectorAll('.target')
//let checkElement = document.createElement('div');
//checkElement.appendChild(eltarget)كنت عاوزة احطهم جوا ديف وابحث 
//console.log(countKResult.previousElementSibling()) // مش عارفة لية مشتغلتش


counKtBtn.onclick= function(){
   eltarget.forEach((el)=>{
      if(el.classList.contains('target')== true){
         console.log(el.classList.length)
console.log(el.textContent.split(' ').length) // هنا جابلى واحد اتنين واحد اتنين معرفش ليه
         countKResult.textContent=`عدد العناصر هى ${el.textContent.split(' ').length}` 
      }
   })

}
//-------------------------
//2
let reverseIOnput = document.getElementById('reverseIOnput')
let reversOeBtn = document.getElementById('reversOeBtn')
let reverseReOsult = document.getElementById('reverseReOsult')

reversOeBtn.onclick= function(){

    
   /* $$ عاوزاك تشوف طريقة تفكيرى وازاى احسن تفكيرى $$
هو عاوز يعكس القيمة اللى اليوز هيدخلها 
ومفيش حاجة فاللغة بتعكس غير ال reverse ودى بتشتغل بس على ال مصوفات 
فبالتالى لازم احول القيمة اللى هتدخل لمصفوفة 

*/
let reversedValue = reverseIOnput.value.split(' ').reverse( ).join(' ');

reverseReOsult.textContent= reversedValue
};
//--------------------------
//3
wordInpJut= document.getElementById('wordInpJut')
countWorJdsBtn= document.getElementById('countWorJdsBtn')
wordsCountReJsult= document.getElementById('wordsCountReJsult')

countWorJdsBtn.onclick= function(){
  let valueArr= wordInpJut.value.split(' ').length
 
 console.log(valueArr)
 
  wordsCountReJsult.textContent= `عدد الكلمات هى ${valueArr}`
};
//--------------------------
//4
let myIKList = document.querySelectorAll('#myIKList li')
let colorizJKeBtn =document.getElementById('colorizJKeBtn')

colorizJKeBtn.onclick= function(){

myIKList.forEach((el)=>{
let myColors = ['red' , 'blue' , 'pink' , 'white' ,'orange']
let iDx = Math.floor(Math.random()* myColors.length)
el.style.color= myColors[iDx];
})}
//---------------------------
//5
let numberLInput = document.getElementById('numberLInput')
let checkLEvenOddBtn = document.getElementById('checkLEvenOddBtn')
let evenOddRLesult = document.getElementById('evenOddRLesult')

checkLEvenOddBtn.onclick= function(){

  let CheckNumb= numberLInput.value ;
  if(CheckNumb %2 ==0){
   evenOddRLesult.textContent=`العدد ${CheckNumb} يكون زوجى `
  }else{
   evenOddRLesult.textContent=`العدد ${CheckNumb} يكون  فردى `
  }
  evenOddRLesult.style.color= 'green'
  evenOddRLesult.style.fontSize= '20px'
  evenOddRLesult.style.fontWeight= 'bold'

}
//------------------------------
//6
let sentencPeInput= document.getElementById('sentencPeInput')
let longePstWordBtn= document.getElementById('longePstWordBtn')
let longestResuPlt= document.getElementById('longestResuPlt')


longePstWordBtn.onclick= function(){

let checkArr = sentencPeInput.value.split(' ')
//console.log(checkArr.sort((a,b)=>{
   a.length <b.length
//}))
//  كنت عاوزة ارتب اجيب اول كلمة تبقى اطول واحدة وبعد كدا اخد اول اندكس يبقى هو اطول كلمة معرفتش

//console.log(checkArr.filter((el)=>{
 //  el
//}))

/*console.log(checkArr[0].length)
console.log(checkArr.filter((el,ind)=>{
   el[ind].length 
}))
*/
console.log(checkArr.reduce((acc,curr)=>{
if(acc +curr.length > acc +curr.length ){
 return  curr
}
// معرفتهاش خااالص :\
},0))
}
//------------------------------
//7
let incremenJtByTwo = document.getElementById('incremenJtByTwo')
let incremenJtBtn = document.getElementById('incremenJtBtn')
let incCount =0
incremenJtBtn.onclick= function(){
   incremenJtByTwo.textContent=incCount+=2
}
//------------------------------
//8
let myParaGgraph= document.getElementById('myParaGgraph')
let deleGteTrigger= document.getElementById('deleGteTrigger')

deleGteTrigger.addEventListener('input',function(){

   if(deleGteTrigger.value == 'delete'){
      myParaGgraph.textContent=''
   }else{
      myParaGgraph.textContent ='لو كتبتى "delete" هتمسحي الكلام دا' 
   }

})
//-------------------------------
//9
let deletahbJleList = document.querySelectorAll('#deletahbJleList li');

deletahbJleList.forEach((el)=>{
el.onclick= function(){
el.remove()
}})

//-------------------------------
//10
let numsIInput= document.getElementById('numsIInput')
let calcIAvgBtn= document.getElementById('calcIAvgBtn')
let avgReIsult= document.getElementById('avgReIsult')

calcIAvgBtn.onclick=function(){
/*
let chang= numsIInput.value.split(' ')
let chanGred= chang.reduce((acc,curr)=>{
   if(!isNaN(curr)){
      return acc+curr

   }
  },0)/chang.length
  console.log(chanGred)
*/
let nums = numsIInput.value.split(',').map(n => +n.trim()); 
let avg = nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
avgReIsult.textContent = `المتوسط: ${avg}`; 
console.log(nums);
console.log(avg)
 



 // avgReIsult.textContent= chanGred.join(',')
}// بيطلعلى NaN
//--------------More Advanced DOM--------------
//1
let wordsIknput= document.getElementById('wordsIknput');
let wordskBtn= document.getElementById('wordskBtn');
let wordsOutkput= document.getElementById('wordsOutkput');

wordskBtn.onclick= function(){
   // creating elements
   let div = document.createElement('div');
   let ul = document.createElement('ul');
   let li1= document.createElement('li')
   let li2= document.createElement('li')
// appending !
   div.appendChild(ul)
   ul.appendChild(li1)
   ul.appendChild(li2)
// appending elements to parent
wordsOutkput.appendChild(div);
// when user write something
div.textContent= wordsIknput.value
};
//---------------------------
//2
let revCharOInput= document.getElementById('revCharOInput')
let revChOarBtn= document.getElementById('revChOarBtn')
let revCharROesult= document.getElementById('revCharROesult')

revChOarBtn.onclick= function(){

let chanG= revCharOInput.value.split('').map((el)=>el.trim()).reverse().join('')
 revCharROesult.textContent= chanG
};
//---------------------------
//3
let textTooCheck= document.getElementById('textTooCheck')
let wordTooFind= document.getElementById('wordTooFind')
let couontWordBtn= document.getElementById('couontWordBtn')
let countRoesult= document.getElementById('countRoesult')

couontWordBtn.onclick= function(){









   // تحويل قيمة الكلام لمصفوفة 
   let changTArr = textTooCheck.value.split(' ')
   // البحث عن اول عنصر مكرر
   let findArr =changTArr.find((el)=> el= el)//.map((el)=>el) لية الماب هنا مشتغلتش كنت عاوزة احط الكلمة المكررة فمصفوفة واحسب عدد طولها لحاسب كم مرة اتكررت 
   console.log(findArr)
      // التحقيق لو العنصر المكرر هو نفس الكلمة المدخلة يكتبها
if(wordTooFind.value == findArr){
      countRoesult.textContent=findArr
   }    // مش عارفة ازاى اجيب الحاجة المكررة واكتبها


};
//---------------------------
//4
let primeIlnput= document.getElementById('primeIlnput');
let primeClheckBtn= document.getElementById('primeClheckBtn');
let primeReslult= document.getElementById('primeReslult');

primeClheckBtn.onclick= function(){
let arr= [2,3,4,5,6,8,9];
let num= primeIlnput.value
if(num/(Math.floor(Math.random()* arr.length)) !=1 && num / num == 1){
   primeReslult.textContent=`${num} Is a Prime Number`

}else{
   primeReslult.textContent=`${num} Isn't a Prime Number`

}}// مبتطلعش واول مرة اخدها مش عارفاها

//----------------------------
//5
let bgChIeckInput = document.getElementById('bgChIeckInput')
let bgBIox = document.getElementById('bgBIox')

bgChIeckInput.addEventListener('input',function(){
   let arrC = bgChIeckInput.value.split('')
if(arrC.length >10){
   bgBIox.style.backgroundColor='pink'
}else{
    bgBIox.style.backgroundColor='lightgray'
}});
//---------------------------
//6
let longWUordInput= document.getElementById('longWUordInput')
let starUtChar= document.getElementById('starUtChar')
let longUWordBtn= document.getElementById('longUWordBtn')
let longWordUResult= document.getElementById('longWordUResult')

longUWordBtn.onclick= function(){
   
let arrVal =longWUordInput.value.split(' ');
let letter =starUtChar.value
let filterAnSort = arrVal.filter((el)=>el[0]==letter).find((el)=>{ return el.length >=6 })// مش عارفة اجيب اطول كلمة عن غيرها})// مشتغلتش.sort((a,b)=>{ return a.length>b.length})
longWordUResult.textContent= filterAnSort
};
//----------------------------
//7
let countGSpecialBtn = document.getElementById('countGSpecialBtn')
let specialGCountResult = document.getElementById('specialGCountResult')

countGSpecialBtn.onclick= function(){

   let serchClasses = document.querySelectorAll('.speciial')
   /*
   serchClasses.forEach((el)=>{
      let add= []
      add+= el.textContent
      console.log(add)
   
 return specialGCountResult.textContent= `${add[0]}and ${add[1]}` // بتطلعلى undefined

console.log(el.textContent)   })
console.log(serchClasses)
*/
//specialGCountResult.textContent=`${serchClasses.classList}`
//if(serchClasses.classList.contains('speciial')== true){
//   specialGCountResult.textContent= serchClasses.textContent
//}

//specialGCountResult.textContent=`${serchClasses.classList.trim()}`

console.log(serchClasses.textContent)
specialGCountResult.textContent= serchClasses
}; //مش عارفاها خالص :(
//-------------------------------

//8 حذف العناصر اللى نصها حروفو اطول من 5 حروف
let longUItems = document.querySelectorAll('#longUItems li')
let removeYLongBtn = document.getElementById('removeYLongBtn')
removeYLongBtn.onclick= function(){
   longUItems.forEach((el)=>{
      if(el.textContent.length>5){
         el.remove()
      }
   })
};
//------------------------------
//9
let addItOemInput= document.getElementById('addItOemInput')
let addOItemBtn= document.getElementById('addOItemBtn')
let itemOLis= document.querySelector('#itemOList ')


addOItemBtn.onclick= function(){
  let li= document.createElement('li');
   itemOLis.appendChild(li)
   console.log(itemOLis)

li.textContent=addItOemInput.value

}

//-------------------------------
//10
let sortNumsVInput= document.getElementById('sortNumsVInput')
let sortBBtn= document.getElementById('sortBBtn')
let sortRIesult= document.getElementById('sortRIesult')
/*
console.log(sortNumsVInput)
console.log(sortBBtn)
console.log(sortRIesult)
*/
sortBBtn.onclick= function(){
    let value =sortNumsVInput.value.split(' ')
    console.log(value)
    if(!isNaN(value)){
    // لية السورت هنا مشتغلتش ؟  console.log(value.sort((a,b)=> a.length < b.length).reverse()) 

    }
    sortRIesult.textContent= value.sort().join(' | ')
}
//---------------------------------
//11
let oddLPist= document.querySelectorAll('#oddLPist li')
let removUeOddBtn= document.getElementById('removUeOddBtn')

removUeOddBtn.onclick= function(){
oddLPist.forEach((el)=>{
   if(el.textContent %2 !=0){
      el.remove()
   }})};
//----------------------------------
//12
let myPPara = document.querySelectorAll('.myPPara')
let higIhlightSecretBtn = document.getElementById('OhighlightSecretBtn')

//console.log(myPPara)
higIhlightSecretBtn.onclick= function(){
   myPPara.forEach((el)=>{

    let v=  el.textContent.split(' ')
   //v.filter((vl)=>{
  //  return vl.includes('secret') //مش شغالة 
  // })
v.forEach((e)=>{
   if(e.includes('secret')){
      console.log(v.join(' '))
    el.style.color='red'
   }
//el.textContent.style.color='red'
//let i= v.join('')
//i.style.color= 'red'
//let i = v.join(' ')
//i.style.color='red'
})
//v.join(' ').style.color= 'red'
   }) // مش عارفاها خالص :(

};
//------------------------------
//13
let reverOseList= document.querySelectorAll('#reverOseList li')
let reverseLOistBtn= document.getElementById('reverseLOistBtn')


reverseLOistBtn.onclick=function(){
   reverOseList.forEach((el)=>{
    //return el.textContent.reverse()
    let e =el.textContent.split(' ').sort().reverse().join('')
    console.log(e)
    //console.log(e.reverse().join('')) 
   // console.log(el.textContent)
el.textContent=e
   })
// انما لما انادى عالليستات فالكويرى سليكتور زى دلوقتى السورت والريفيرس مبتشتغلش
  // reverOseList.textContent=
// بتتعمل بشكل افقى ك ul مش جوة ليستات لو ناديت عالul كلها فالكويرى سلكتور
}// مش عاراهااااااا :\
//-----------------------------
//14
let evenNuNsInput= document.getElementById('evenNuNsInput')
let countENvenBtn= document.getElementById('countENvenBtn')
let evenCountRNesult= document.getElementById('evenCountRNesult')

countENvenBtn.onclick= function(){
/* 
  let inpuT = evenNuNsInput.value.split(' ')
  // checking value to array
  console.log(inpuT)
  inpuT.forEach((el)=>{
 //console.log(el)
  if(el%2 == 0 ){
   let result =[]
 result+=el
  console.log(result.length)
  let numC = result.length
  evenCountRNesult.textContent=`There is a ${numC} of Positive Numbers`}})*/

  let inpuT = evenNuNsInput.value.split(' ')
  console.log(inpuT)
 let pArr = inpuT.filter((el)=>el%2 == 0)
 console.log(pArr.length)
 evenCountRNesult.textContent=`There is a ${pArr.length} of Positive Numbers`
}
//---------------------------------
//15
let starOtFrom= document.getElementById('starOtFrom')
let starPtCountBtn= document.getElementById('starPtCountBtn')
let counterHerOe= document.getElementById('counterHerOe')
//let rcont = 0
starPtCountBtn.onclick= function(){
 //  rcont++
 //  counterHerOe.textContent=`${starOtFrom.value +rcont}`
 counterHerOe.textContent= starOtFrom.value.setInterval(function(){

   },1000)
}// معرفتهاش
//--------------------------------
//16 ✅ 16. غيري كل الحروف الكبيرة لصغيرة والعكس
let casePInput= document.getElementById('casePInput')
let switchPCaseBtn= document.getElementById('switchPCaseBtn')
let casePResult= document.getElementById('casePResult')

switchPCaseBtn.onclick= function(){

let vArr = casePInput.value.split(' ')

let rezult = vArr.map((el)=>{
   return el=== el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
})  
casePResult.textContent= rezult.join(' ')

/*
console.log(vArr.map((el)=>{
 return el=== el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()


 if(el=== el.toLowerCase()){
   el.toUpperCase()
}else{
   el.toLowerCase()
}
*/
}

  // casePResult.textContent= casePInput.value



//--------------------------------
//17✅ 17. احذفي كل العناصر اللي نصها فيه رقم
let digiItItems= document.querySelectorAll('#digiItItems li')
let remoDveDIigitBtn= document.getElementById('remoDveDIigitBtn')

remoDveDIigitBtn.onclick= function(){

   digiItItems.forEach((el)=>{

  
    if (/\d/.test(el.textContent)){
      el.remove()
    }


   })
}
//-------------------------------
//18✅ 18. كرري النص اللي المستخدم كتبه عدد معين من المرات

let reDpeLatInput= document.getElementById('reDpeLatInput')
let repeaLtDTimes= document.getElementById('repeaLtDTimes')
let repLeatDBtn= document.getElementById('repLeatDBtn')
let repeatDRLesult= document.getElementById('repeatDRLesult')

repLeatDBtn.onclick= function(){
let arr=reDpeLatInput.value
let num = Number(repeaLtDTimes.value);
let result=''

for(let i=0;i<num ; i++){
   result+=arr + '<br>'
   console.log(result)
}
repeatDRLesult.innerHTML= result

}
//--------------------------------
//19✅ 19. اعملي كل كلمة أول حرف فيها كابيتال
let capInLDput= document.getElementById('capInLDput')
let caLpBDtn= document.getElementById('caLpBDtn')
let capReDLsult= document.getElementById('capReDLsult')

caLpBDtn.onclick= function(){

   let stri =capInLDput.value.split(' ')
let arr= stri.map((el)=>el[0].toUpperCase()+stri.slice(1))
console.log(arr)
capReDLsult.textContent=arr.join(' ')
}

let lllklf = 'nora'
console.log(lllklf[0].toUpperCase()+lllklf.slice(1))

//----------------------------------
// tasks for logic programming
let aGes = [22, 35, 19, 40, 31, 28, 50];
/*
 1- دى array فلازم استخدم الميثود الخاصة بالمصفوفة لحل المشكلة 
/2- لو ملقتش ميثود خاصة بالمصفوفة تحل المشكلة هحولها لنص او ارقام عادية 
3- مطلوب ميثود تخلينى امر على كل الاندكس واحط فيها شرط المطلوب
4- ميثود تانية ترجعلى العدد النهائى

*/

console.log(aGes.filter((el)=>el>30).reduce((acc,curr)=>{
return acc+curr // عدد اعمارهم
},0))

// عدد الافراد 
console.log(aGes.filter((el)=>el>30).length)

//---------------------------------------
//1
let itemlsList= document.querySelectorAll('#itemlsList li')
let coulntBtn= document.getElementById('coulntBtn')
let countRelsult= document.getElementById('countRelsult')

coulntBtn.onclick= function(){

   // الشكل الظاهرى هو ليستة وهى مش unique فالصفحة هستخدم حاجة تمر عليهم كلهم واحدة واحدة 
  /*
   itemlsList.forEach((el)=>{
      // للتاكد
    // X  console.log(el.textContent.length) X
    // el.length لوحدها طلعتلى undefined
    console.log(el.map((el)=>el))
   // كنت عاوزة احط العناصر جوا ماب واحسب طولها

   })
*/
console.log(itemlsList.length)
   countRelsult.textContent= `عدد العناصر هم ${itemlsList.length}`

}
//-----------------------------------------
//2
let textOInput= document.getElementById('textOInput')
let upperOBtn= document.getElementById('upperOBtn')
let textROesult= document.getElementById('textROesult')

upperOBtn.onclick= function(){

// اول خطوة من تحت لفوق مكان العرض 

//textROesult.textContent= textOInput.value

//بس احنا عاوزين نغير فقيمة الانبوت نخليها حروف كابيتال 
let valCa= textOInput.value.split(' ').map((el)=>el.toUpperCase())
// للتاكد
console.log(valCa) // done
textROesult.textContent= valCa.join(' ')

}
//------------------------------------------
//3 تغيير لون الخلفية بزر
let changeCoflorBtn= document.getElementById('changeCoflorBtn')
let isCozlored = false;

changeCoflorBtn.onclick= function(){
// عاوز الزرار يتحكم فصفحة البادى كلها ويغير لونها 
// هدخل على البادى ازاى 
// البادى جزء من الدوم فهجرب استخدم document!

//document.body.style.backgroundColor='pink'
// عاوزة لما ادوس تانى اللون يرجع زى زمان
// مش عارفة بفكر اعمل شرط اية وليكن display <منفعتش>
//if(changeCoflorBtn.hasAttribute('display')){
//   document.body.style.backgroundColor='black'
//}else{
//   document.body.style.backgroundColor='pink' 
//}
// اخلى متغير برا 
if(!isCozlored){
   window.document.body.style.backgroundColor='pink'
   isCozlored = true
}else{
   window.document.body.style.backgroundColor=''
isCozlored = false 
}
}
//----------------------------------
//✅ المسألة 4: عداد يزيد وينقص
let incPBtn= document.getElementById('incPBtn');
let countPer= document.getElementById('countPer');
let dePcBtn= document.getElementById('dePcBtn');

let coUnI =0 // المتغير برا الفنكشن عشان قيمتة تفضل ثابتة وميتنساش
//let coUnD =0  
/*
incPBtn.onclick=function(){
   countPer.textContent=coUnI++
}

dePcBtn.onclick=function(){
   countPer.textContent=coUnD-- 

}
   // بيصفر مش بينقص واحد
*/
let ic =countPer.textContent=coUnI++

incPBtn.addEventListener('click',function(){
   coUnI++
   countPer.textContent=coUnI
   // return ic

})
dePcBtn.addEventListener('click',function(){
  // countPer.textContent=coUnI--
 // لقيت فالتنقيص بيحصل مشكلة وبيبدأ بالزياة الاول وبعدها ينقص
// countPer.textContent=(coUnI++)-- مشتغلتش

// ic-=coUnI-- مشتغلتش بردو

// هو عاوز نفس القيمة اللى وصلتلها فالزيادة تنقص واحد
//countPer.textContent=`${ic--}` // نزل للصفر وبقى بينقص بالاتنين
coUnI--
countPer.textContent=coUnI

})
//----------------------------------
//5 اظهار واخفاء الباسورد
let passwlord= document.getElementById('passworodInput')
let togglleBtn= document.getElementById('togglleBtn')
let togglOleBtn = document.getElementById('togglOleBtn')
let notess= document.getElementById('notess')


togglOleBtn.onclick= function(){

  //let C= passwlord.value.Copy() // مش عارفة النسخ ليه ميثود ولا لا 
  notess.textContent = `✅ Password is copied successfully!`;

  setTimeout(function() {
    notess.textContent = '';
  }, 2000);
  
}
togglleBtn.onclick=function(){
   
   if(passwlord.type == 'password'){
      passwlord.type='text'
   }else{
      passwlord.type='password'
 
   }
      // نفس المشكلة ظهرت بس لما دوست تانى مختفتش
 //if(passwlord.type == 'text'){
     // passwlord.type ='passwrd'<---- spellingالمشكلة هنا

   //}
   togglleBtn.textContent = passwlord.type === 'password' ? '👁️ Show' : '🙈 Hide';

}

//---------------------------------
//1🌟 مسألة 1: إظهار الكلمة الأكثر تكرارًا
//❓ عند كتابة جملة، اعرض الكلمة اللي اتكررت أكتر من غيرها.

let sentencLeInput= document.getElementById('sentencLeInput')
let mostReLpeatedBtn= document.getElementById('mostReLpeatedBtn')
let mostRepeatLedResult= document.getElementById('mostRepeatLedResult')

mostReLpeatedBtn.onclick= function(){
let arr =sentencLeInput.value.split(' ')
arr.map((el)=>{
   
})

// مش عارفاها
   mostRepeatLedResult.textContent= sentencLeInput.value
}

//------------------------------------
//2🌟 مسألة 2: تحديد الحروف الكبيرة
let capIKnput= document.getElementById('capIKnput')
let capKBtn= document.getElementById('capKBtn')
let capReKsult= document.getElementById('capReKsult')

capKBtn.onclick= function(){

   let arr = capIKnput.value.split('')//.map((el)=>el.trim()) // لية الماب هنا مشتغلتش وشالت المسافات
let capital = arr.filter((el)=>el>='A'&& el<='Z').join(' , ')
//console.log(fArr) 
   capReKsult.textContent= `capital letter in sentence are ${capital}`
}

//-------------------------------------
//3 اخفاء الارقام الفردية 
let oddJList= document.querySelectorAll('#oddJoList li')
let hideOJddBtn= document.getElementById('hideOoJddBtn')

hideOJddBtn.onclick=function(){
   oddJList.forEach((el)=>{
      if(Number(el.textContent)%2 !== 0 ){
el.remove()
      }
   })
}
//--------------------------------------
//4 تحديد الكلمات التى تحتوى على حروف معينة 
let charSePnktence= document.getElementById('charSePnktence')
let charSePakrch= document.getElementById('charSePakrch')
let searcPhkCharBtn= document.getElementById('searcPhkCharBtn')
let charMatcPhRkesult= document.getElementById('charMatcPhRkesult')

searcPhkCharBtn.onclick= function(){
  
let inputArr =charSePnktence.value.split(' ') 
let letterArr = charSePakrch.value.split('')

let rezult= inputArr.filter((el)=>el.includes(letterArr) && el>='A' || el<='Z')

console.log(rezult)


charMatcPhRkesult.textContent=`${rezult.join(' , ')} : هم ${charSePakrch.value} الكلمات التى تحتوى على الحرف `
}
//---------------------------------------
// 5 الترتيب التصاعدى
let nulmkList= document.querySelectorAll('#nulmkList li')
let sortLlikstBtn= document.getElementById('sortLlikstBtn')

sortLlikstBtn.onclick= function(){
let nums = []
   nulmkList.forEach((el)=>{
  let nwArr= nums.push(el.textContent).sort((a,b)=>a-b)
 // nwArr.forEach((c)=>)
//let nwEl =parseInt('el.textContent')
  // console.log(el.textContent.split('').sort((a,b)=>{ // اشمعنى لما حطيت المتغير nwEl مشتغلتش 
   //   return a-b})) // مشتغلتش اصلا

   //console.log(Array(el.textContent).sort((a,b)=>a-b))

   //console.log(Array(Number(el.textContent)).sort((a,b)=>a-b))

   //  console.log(el.textContent.sort((a,b)=>a-b)) مشتغلتش بردو
   //ولا واحدة اشتغلت
//console.log(nums.sort((a,b)=>a-b).join(' , '))
})}
// التصحيح
sortLlikstBtn.onclick = function () {
  let numbers = [];

  // 1. نملأ المصفوفة بالأرقام
  nulmkList.forEach((el) => {
    numbers.push(parseInt(el.textContent));
  });

  // 2. نرتب الأرقام
  numbers.sort((a, b) => a - b);

  // 3. نرجع نعرضهم بالترتيب
  nulmkList.forEach((el, index) => {
    el.textContent = numbers[index];
  });
};
//---------------------------------------
//1لما تكتبي جملة وتضغطي زرار، يظهرلك عدد الكلمات اللي في الجملة.

let wordCountLerInput= document.getElementById('wordCountLerInput')
let countWoLrdsBtn= document.getElementById('countWoLrdsBtn')
let wordCounteLrResult= document.getElementById('wordCounteLrResult')

countWoLrdsBtn.onclick= function(){
let inputArr =wordCountLerInput.value.trim().split(/\s+/)
console.log(inputArr.length)
// Notes if(inputArr.length== 0) لما حطيت دى فالشرط طلعلى 1مش zero

if(wordCountLerInput.value.trim()==''){
wordCounteLrResult.textContent= `Zero :عدد الكلمات التى أدخلت `

}else{
wordCounteLrResult.textContent= `${inputArr.length} :عدد الكلمات التى أدخلت `
}}
//--------------------------------------
//2 لما تدخلي نص وتضغطي زرار، يتم نسخه في مكان تاني (يعني زي نسخ ولصق).


let copyPInput= document.getElementById('copyPInput')
let copyTPextBtn= document.getElementById('copyTPextBtn')
let copyRPesult= document.getElementById('copyRPesult')

copyTPextBtn.onclick= function(){
let inpArr =copyPInput.value.split(' ')
// معرفتهاش

  copyRPesult.textContent= copyPInput.value
}
//------------------------------------
//3عندك مجموعة أرقام في li، لما تضغطي زرار يظهرلك بس الأرقام الزوجية.
let numbeprList= document.querySelectorAll('#numbeprList li')
let filterpEvenBtn= document.getElementById('filterpEvenBtn')
let evenNumbeprsResult= document.getElementById('evenNumbeprsResult')
/*
filterpEvenBtn.onclick= function(){
   numbeprList.forEach((el)=>{
      if(Number(el.textContent) %2 ==0){
         evenNumbeprsResult.textContent= el.textContent
      }else{
         evenNumbeprsResult.textContent=`There No +Numbers in list`
      }})}
*/
// التصحيح 
filterpEvenBtn.onclick = function() {
   let evens = [];
   numbeprList.forEach((el) => {
     if (Number(el.textContent) % 2 == 0) {
       evens.push(el.textContent);
     }
   });
   
   if (evens.length > 0) {
     evenNumbeprsResult.textContent = evens.join(', ');
   } else {
     evenNumbeprsResult.textContent = `There are no even numbers in the list.`;
   }
 }
 
//------------------------------------
//4تدخلي نص في input، ولما تضغطي زرار، يظهرلك النص كله حروف صغيرة (lowercase).
let lowercasOeInput= document.getElementById('lowercasOeInput')
let lowercaOseBtn= document.getElementById('lowercaOseBtn')
let lowercaseOResult= document.getElementById('lowercaseOResult')
let islowerC = false
lowercaOseBtn.onclick= function(){
   let inpArr=lowercasOeInput.value.split(' ')
   
//console.log(inpArr.map((el)=>el.toUpperCase()))
if(islowerC == false){
   console.log(inpArr.map((el)=>el.toLowerCase()))
   lowercaseOResult.textContent=inpArr.map((el)=>el.toLowerCase()).join(' ')
   islowerC = true
}else{
console.log(lowercasOeInput.value)
lowercaseOResult.textContent=lowercasOeInput.value
}}
//------------------------------------
//5 تدخلي جملة، وتكتبي كمان كلمة جديدة، لما تضغطي زرار:
// كل كلمة "قديمه" في الجملة تتغير بالكلمة الجديدة.

let replaceSoentenceInput= document.getElementById('replaceSoentenceInput')
let newWoordInput= document.getElementById('newWoordInput')
let replaceWorodBtn= document.getElementById('replaceWorodBtn')
let replaceReosult= document.getElementById('replaceReosult')

/*
replaceWorodBtn.onchange=function(){
   let oldArr =replaceSoentenceInput.value.split(' ')
   let nwArr =newWoordInput.value.split(' ')
   replaceSoentenceInput.textContent=nwArr.join('')
   replaceReosult.textContent=nwArr.join('')
   // مشتغلتش
}

replaceWorodBtn.onclick=function(){
   let oldArr =replaceSoentenceInput.value.split(' ')
   let nwArr =newWoordInput.value.split(' ')
   replaceSoentenceInput.onchange= function(){ 
      replaceSoentenceInput.value=nwArr.join('')
// شتغلتش كنت عاوزة اول مايكتب كلمة جديدة تنكتب فالبرجراف وتنكتب جوا الانبوت القديم 
   }
   replaceReosult.textContent=nwArr.join(' ')
}
*/
replaceWorodBtn.onclick = function() {
   let sentence = replaceSoentenceInput.value;
   let newWord = newWoordInput.value;
   
   let updatedSentence = sentence.replaceAll('قديمه', newWord);
   
   replaceReosult.textContent = updatedSentence;
 }
 //--------------------------------
 //1 عكس الكلام حرف حرف
let reverpseInput= document.getElementById('reverpseInput')
let reveprseBtn= document.getElementById('reveprseBtn')
let reverseRpesult= document.getElementById('reverseRpesult')

reveprseBtn.onclick= function(){
   let inpArr = reverpseInput.value.split('').reverse().join('')
   console.log(inpArr)
   reverseRpesult.textContent= inpArr
}
//--------------------------------
//2 مجموع الارقام
let sulmInput= document.getElementById('sulmInput')
let sulmBtn= document.getElementById('sulmBtn')
let sumRlesult= document.getElementById('sumRlesult')


sulmBtn.onclick= function(){
   // تحويل قيمة الانبوت لمصفوفة للتعامل معها
   let inpArr = sulmInput.value.trim().split(' ')
   // مجموع الارقام 
   let nums= inpArr.map((el)=>parseInt(el)).reduce((acc,curr)=>{
return acc+curr
   },0)
   console.log(nums)
   sumRlesult.textContent= `Total is ${nums}`

}
//-----------------------------------
//3 عد الحروف دون مسافات
let charpInput= document.getElementById('charpInput')
let chaprBtn= document.getElementById('chaprBtn')
let charRepsult= document.getElementById('charRepsult')


chaprBtn.onclick=function(){

let inpArr = charpInput.value.split('').map((el)=>el.trim()).filter((el)=>el!= '')
console.log(inpArr.length)
}
// Notes لية ال trim مشتغلتش مع الماب ؟!
//-----------------------------------------
//4 الدومين 

let emailIonput= document.getElementById('emailIonput')
let domaionBtn= document.getElementById('domaionBtn')
let domainResuolt= document.getElementById('domainResuolt')

domaionBtn.onclick= function(){

let inpArr = emailIonput.value.split('')
console.log(inpArr.indexOf('@'))
if(inpArr.includes('@')){
  console.log( inpArr.slice(inpArr.indexOf('@')).join(''))

  domainResuolt.textContent=inpArr.slice(inpArr.indexOf('@')).join('')

}
}
//------------------------------------------
//5
let capitallInput= document.getElementById('capitallInput')
let capitallBtn= document.getElementById('capitallBtn')
let capitalResullt= document.getElementById('capitalResullt')

capitallBtn.onclick= function(){
let inpArr =capitallInput.value.split('').filter((el)=>el.trim()&& el>='A' && el<='Z')
console.log(inpArr.length)
}
//-----------------------------
//1 مسألة 1: حساب الطول والعرض
let lengtphInput= document.getElementById('lengtphInput')
let widtphInput= document.getElementById('widtphInput')
let arepaBtn= document.getElementById('arepaBtn')
let areaRpesult= document.getElementById('areaRpesult')

arepaBtn.onclick=function(){
   //Notes if(typeof lengtphInput.value =='number' && typeof widtphInput.value =='number' ){
// لما عملتها كدا مشتغلتش مع ان اللى داخل ارقام ولا هى بتعتبرو نص ؟
if(lengtphInput.value !=='' && widtphInput.value !=='' ){
   console.log(lengtphInput.value * widtphInput.value)
   areaRpesult.textContent=lengtphInput.value * widtphInput.value

}if(lengtphInput.value== '' || widtphInput.value=='' ){
   areaRpesult.textContent="Please Check Values You've Entered "
}
}
//---------------------------------
//2 اول حرف كابيتال
let texIput= document.getElementById('textInpput')
let capBtn= document.getElementById('capitaplizeBtn')
let cResult= document.getElementById('capitalizpeResult')

capBtn.onclick=function(){
let inpArr = texIput.value.split('').find((el)=> el>= 'A' && el<='Z')// لما عملت el.toUpperCase() مطلعليش حاجة
console.log(inpArr)
}

//----------------------------------
//3 فلترة الكلمات الطويلة
let senput = document.getElementById('sentenckeInput')
let fidsBtn = document.getElementById('filterkWordsBtn')
let fiult = document.getElementById('filterReksult')

fidsBtn.onclick=function(){
let inpArr =senput.value.trim().split(' ').filter((el)=>el.length>4)
console.log(inpArr)
fiult.textContent= inpArr.join(' , ') }

//-------------------------------------
//4🌟 مسألة 4: معرفة اذا الرقم موجب او سالب
let nuInput= document.getElementById('numberlInput')
let chemrBtn= document.getElementById('checkNulmberBtn')
let chelsult= document.getElementById('checkRelsult')

chemrBtn.onclick= function(){
   let num= nuInput.value
if(num * -1 < 0 ){
   chelsult.textContent= `${num} العدد موجب`
}else{
   chelsult.textContent= `${num} العدد سالب`
//Notes لما عملت if(num*-1 == num) مشتغلتش صح
}
}
//--------------------------------------
//5🌟 مسألة 5: اظهار عدد الحروف المتكررة
let chtInput= document.getElementById('charCoxuntInput')
let counBtn= document.getElementById('countxCharsBtn')
let couResult= document.getElementById('countChxarsResult')

counBtn.onclick= function(){
   let inpArr =chtInput.value.split('').map((el)=>el.trim())

console.log(inpArr.filter((e,ind)=>inpArr.indexOf(e)!=ind))
// عاوزة اعرف تكنيك البحث اكتر عن التكرار بيتم ازاى فالمصفوفات والكائنات

}
// مراجعة عامة اليوم الأول
// مثال عد الكلمات
let Rew=document.getElementById('Rew')
let seInput=document.getElementById('senteTnceInput')
let coTBtn=document.getElementById('countTBtn')
let reult=document.getElementById('reTRsult')

Rew.style.color='white'
Rew.style.fontSize='35px'
Rew.style.backgroundColor='brown'

countTBtn.onclick= function(){
// string value To Array
let iArr = seInput.value.trim().split(' ')
// for testing
console.log(iArr.length)
// Apply to page
reult.textContent=`Numbers of Word are ${iArr.length}`
}

//----------------------------------
//2
let arnput= document.getElementById('arrKayInput')
let arBtn= document.getElementById('arrayKBtn')
let arsult= document.getElementById('arraKyResult')

arBtn.onclick= function(){
let aR = arnput.value.trim().split(' ')
console.log(aR)
arsult.textContent= `[${aR}]`
}
//---------------------------------
//3 استخراج الحروف فقط من الحروف والارقام
let lInput= document.getElementById('letteDrsInput')
let lersBtn= document.getElementById('letDtersBtn')
let lesult= document.getElementById('lettDersResult')

lersBtn.onclick= function(){
   let aRR = lInput.value.split('').filter(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')).join('')//.filter((el)=>el>='a' || el <='z'|| el>='A' || el <='Z' && el != '')//filter((el)=>el!= '' && el!= /\d/ )
console.log(aRR)
lesult.textContent=aRR
}
//-----------------------------------
//4  التحقق من وجود كلمة

let snput= document.getElementById('senteKnceInput')
let woput= document.getElementById('wordIKnput')
let shBtn= document.getElementById('searKchBtn')
let sesult= document.getElementById('searchRKesult')

shBtn.onclick= function(){
let sArr = snput.value.trim().split(' ')
let wArr = woput.value.trim().split(' ').join('')
//console.log(wArr)
if(sArr.includes(wArr)){
   sesult.textContent= 'Found'
}else{
   sesult.textContent= 'Not Found'

}
};
//---------------------------------
//5 تغير الخلفية حسب الانبوت
let bgIonput = document.getElementById('bgIonput')
let bgBotn = document.getElementById('bgBotn')
let bgReosult = document.getElementById('bgReosult')

bgBotn.onclick= function(){

let pArr=bgIonput.value.split('')
console.log(pArr.length)
if(pArr.length >10){
   document.body.style.backgroundColor='green'
}if(pArr.length <=10){
   document.body.style.backgroundColor='red'
}
};
//--------------------------------
// Rev DOM Day 2 
document.getElementById('day2').style.color='blue'
//1
let colofrBtn =document.getElementById('colofrBtn')

colofrBtn.ondblclick= function(){
   let colors =['red' ,'blue' , 'grey' , 'yellow' ,'pink']
let ind=Math.floor(Math.random()* colors.length)
console.log(colors[ind])
document.body.style.backgroundColor=colors[ind]
}
//---------------------------------
//2
let hoveTInput= document.getElementById('hoveTInput')

hoveTInput.onmouseenter= function(){
 document.body.style.backgroundColor='purple'  
}
//----------------------------------
//3
let leavIeBtn=document.getElementById('leavIeBtn')

leavIeBtn.onmouseleave=function(){
   document.body.style.cssText='background-color: rgba(0, 0, 0, 0.856);' 
}
//---------------------------------
//4
let texftSize= document.getElementById('texftSize')
let sizefBtn= document.getElementById('sizefBtn')
let isBigger = false
sizefBtn.onmousedown=function(){
   if(isBigger == false){
      texftSize.style.fontSize='20px'
      isBigger= true
   }else{
      texftSize.style.fontSize='15px'
      isBigger= false
}}
//---------------------------------
//5
let textRekset= document.getElementById('textRekset')
let resketBtn= document.getElementById('resketBtn')

resketBtn.onmouseup= function(){
   textRekset.style.fontSize='17px'
}
//--------------------------------
//6
let keykInput= document.getElementById('keykInput')
let keyDiksplay= document.getElementById('keyDiksplay')

keykInput.oninput= function(){
   keyDiksplay.textContent=keykInput.value
}
//--------------------------------
//7 حساب طول النص 
let lengpthInput= document.getElementById('lengpthInput')
let lengthRpesult= document.getElementById('lengthRpesult')

lengpthInput.oninput= function(){
   let arr= lengpthInput.value.trim().split(' ').join('')
   console.log(arr.length)
   lengthRpesult.textContent=`طول حروف النص هو  ${arr.length}`
}
//--------------------------------
//8
let colorPiRcker = document.getElementById('colorPiRcker')
let colorCedText = document.getElementById('colorCedText')

colorPiRcker.oninput= function(){
let color=colorPiRcker.value

console.log(color)

 colorCedText.style.cssText=`color:${color} ; font-size:30px ; font-weight:bol;`
}
//---------------------------------
//9 اختيار 
let selecitMenu= document.querySelectorAll('#selecitMenu option')
let selectfedValue= document.getElementById('selectfedValue')
 /*
console.log(selecitMenu)

selecitMenu.forEach((el)=>{
   if(el.value != ''){
   el.onchange= function(){
      selectfedValue.textContent=el.textContent
      console.log(el.textContent)

   }}
}) 
*/
//----------------------------------
//10
let weMsg =document.getElementById('welcjomeMsg')

window.addEventListener('load',function(){
   console.log('Hi')
   weMsg.textContent='Welcome '
})

//-------------------------------------
// Rev DOM Day 3
document.getElementById('day3').style.color='blue'
//1
let newItemInzput= document.getElementById('newItemInzput')
let addItezmBtn= document.getElementById('addItezmBtn')
let itemszList= document.querySelector('#itemszList')

addItezmBtn.onclick= function(){
   let newElementLi = document.createElement('li')
   newElementLi.id='idLi'
   itemszList.append(newElementLi)
   // للتأكد من اضافتة
   console.log(itemszList)
   newElementLi.textContent= newItemInzput.value
}
//--------------------------------
//2
let reBtn= document.getElementById('removeLaostBtn')
let deletoeList= document.querySelectorAll('#deletoeList')

reBtn.onclick= function(){
   deletoeList.forEach((el)=>{
      console.log(el.lastElementChild) 
      el.lastElementChild.remove()
   })
}
//----------------------------------
//3
let chage =document.getElementById('changieImage')
let chaBtn =document.getElementById('chahngeImageBtn')

let isImg = false
chaBtn.onclick= function(){
if(isImg == false){
   chage.src='https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg'
   isImg = true
}else{
   chage.src='img1.jpg'
   isImg = false
}}
//-----------------------------------
//4
let hiext= document.getElementById('hidieText')
let hidwBtn= document.getElementById('hideoShowBtn')
let isShowing =false

hidwBtn.onclick= function(){
if(isShowing ==false){
   hiext.textContent='' 
 //hiext.setAttribute('display' , 'none') مشتغلتش لية !!
   isShowing =true
}else{
   hiext.textContent= 'هذا النص سيتم إخفاؤة'

   //hiext.setAttribute('display' , 'block')
   isShowing =false
   console.log(hiext)
}}
//------------------------------------
//5
let colorYSelect= document.getElementById('colorYSelect')
let colorYedText= document.getElementById('colorYedText')

colorYSelect.onchange= function(){
  let color= colorYSelect.options[colorYSelect.selectedIndex]
console.log(color)
console.log(colorYSelect.selectedIndex)
colorYedText.style.color=color.value
}
//------------------------------------
//6
let copkyInput= document.getElementById('copkyInput')
let copyfBtn= document.getElementById('copyfBtn')
let copiedkText= document.getElementById('copiedkText')

copyfBtn.onclick=function(){
   copiedkText.textContent=copkyInput.value
}
//--------------------------------------
//7

let hovBtn = document.getElementById('hoverChKangeBtn')
let isChanged =false
hovBtn.onmouseenter= function(){
   if(isChanged ==false){
      hovBtn.style.cssText='border:2px solid ;border-radius:10px; background-color: black ; font-weight:bold ; font-size : 20px ; color: pink'
      isChanged =true
   }else{
      //hovBtn.style='none'
      hovBtn.removeAttribute('style'); // الأصح

      isChanged =false
   }
}
//-------------------------------------
//8
let clasck= document.getElementById('classCkheck')
let cheBtn= document.getElementById('checkkClassBtn')

cheBtn.onclick= function(){
   let element= document.createElement('p')
   element.id='hid'
   cheBtn.after(element)
if(clasck.classList.contains('highlight')== true){
   element.textContent="it has class 'highlight' "
   element.style.cssText='font-size:20px ; color:yellow ; font-weight:bold'
   }
   //console.log(clasck.classList.contains('highlight'))
}
//--------------------------------------
//9
let linput= document.getElementById('linkoInput')
let monk= document.getElementById('myLionk')
let seBtn= document.getElementById('setLoinkBtn')

let msg= false
// كنت عاوزة اكتب مسدج تظهر لليوزر بشكل الرابط الصحيح ولو مش بالبروتوكول لصحيح تظهر ان تاكد ان الرابط صحيح
linput.addEventListener('mouseenter',function(){
   
  if(msg== false){
   let element= document.createElement('p')
   element.id='gf'
   linput.before(element)
  element.textContent= ' https://www.website-name.com تأكد ان الرابط صحيح بنفس النمط  '
element.style.color='red'
element.style.fontWeight='bold'
element.style.fontSize='20px'
  msg=true
  }else{
element.remove()
   msg=false
 }// مشتغلتش فضل كل ما بعمل بفوكس على الانبوت يكتب يكتب مش بيطلع مسج واحدة 

})
/*
linput.addEventListener('mouseleave',function(){
   let element= document.createElement('p')
   linput.before(element)
   element.textContent=''
})
*/

seBtn.onclick= function(){
 //monk.href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjTh-6plIKNAxVnhv0HHV5xOg0QPAgI'
monk.href=linput.value
}

//------------------------------------
//10
let numInput= document.getElementById('numbperDoubleInput')
let doeBtn= document.getElementById('doupbleBtn')
let doesult= document.getElementById('doublepResult')

doeBtn.onclick=function(){
   let num= (Number(numInput.value))

  // console.log(num *2)
  doesult.textContent=`${num *2}`
  doesult.style.cssText='font-weight:bold ; font-size:20px'
}
//-------------------------------------
//Rev DOM 4
let day4= document.getElementById('day4')
day4.style.color='blue'
//-----------
//1
let prependoInput= document.getElementById('prependoInput')
let prepeondBtn= document.getElementById('prepeondBtn')
let prepenodList= document.getElementById('prepenodList')

prepeondBtn.onclick=function(){
   let element= document.createElement('li')
   prepenodList.prepend(element)
  // element.textContent= 'first li'
  // console.log(prepenodList)
  element.textContent=prependoInput.value
}
//========================================
//2
let insertBTeforeInput= document.getElementById('insertBTeforeInput')
let inserTtBeforeBtn= document.getElementById('inserTtBeforeBtn')

inserTtBeforeBtn.onclick=function(){
   let element= document.createElement('p')
   inserTtBeforeBtn.before(element)
   element.style.cssText='font-size:18px ; font-weight: bold'
element.textContent=insertBTeforeInput.value
}
//========================================
//3 احذف class من عنصر لو كانت موجودة

let classtTarget= document.getElementById('classtTarget')
let removetClassBtn= document.getElementById('removetClassBtn')
let checkClass = document.querySelector('.red-text')

checkClass.style.color='red' ;
removetClassBtn.onclick= function(){
 if(classtTarget.classList.contains('red-text')== true){
      classtTarget.classList.remove('red-text')
      console.log(classtTarget)
      checkClass.style.color='black'

   }
}
//========================================
//4 تبديل الكلاسات
let togglefBox= document.getElementById('togglefBox')
let toggfleClassBtn= document.getElementById('toggfleClassBtn')

toggfleClassBtn.onclick=function(){
   togglefBox.classList.replace('red' ,'green')
console.log(togglefBox)
}

//========================================
//5
let showToimeBtn= document.getElementById('showToimeBtn')
let timeDiisplay= document.getElementById('timeDiisplay')

showToimeBtn.onclick= function(){
   let nowTime = new Date
  console.log(nowTime)
   let hours= nowTime.getHours()
   let mins =nowTime.getMinutes()
   let secS=nowTime.getSeconds()
   console.log(mins)
   timeDiisplay.textContent=`${hours}:${mins}:${secS}`

}
//=========================================
//6
let startCoountdownBtn= document.getElementById('startCoountdownBtn')
let countdowonDisplay= document.getElementById('countdowonDisplay')
let cm= 10
/*
startCoountdownBtn.onclick=function(){
let cm= setTimeout(function(){
   cm--
console.log(cm)
if(cm<=0){
   clearTimeout(c) // معرفتش اعملها

}
cm--

countdowonDisplay.textContent=cm //بدأ من 3 ولازم اضغط بالزر 
},1000)
}*/
startCoountdownBtn.addEventListener('click',function(){
  
  let w= setInterval(function(){
      countdowonDisplay.textContent=cm
      cm--
      if(cm<0){
         countdowonDisplay.textContent='Done'
clearInterval(w)
      }
   },1000)
})
//=========================================
//7
let delayedoMessage = document.getElementById('delayedoMessage')

window.addEventListener('load',function(){
   setTimeout(function(){
      delayedoMessage.textContent='Hi'
   },2000)
})

//=========================================
//8 حساب عدد الكلمات
let worfdArea= document.getElementById('worfdArea')
let countfWordsBtn= document.getElementById('countfWordsBtn')
let wordCounftResult= document.getElementById('wordCounftResult')

countfWordsBtn.onclick= function(){
   let inpArr= worfdArea.value.trim().split(' ')
   wordCounftResult.textContent=`Characters Length Are ${inpArr.length}`
}
//=========================================
//9
let generakteListBtn= document.getElementById('generakteListBtn')
let generaktedList= document.getElementById('generaktedList')

generakteListBtn.onclick= function(){
   
   // creating lists
   let list1= document.createElement('li')
   let list2= document.createElement('li')
   let list3= document.createElement('li')
   let list4= document.createElement('li')
   let list5= document.createElement('li')
   let list6= document.createElement('li')

   //getting into ul
   generaktedList.append(list1)
   generaktedList.append(list2)
   generaktedList.append(list3)
   generaktedList.append(list4)
   generaktedList.append(list5)
   generaktedList.append(list6)

   // for sure 
   console.log(generaktedList)
   // texts
   list1.textContent='List 1'
   list2.textContent='List 2'
   list3.textContent='List 3'
   list4.textContent='List 4'
   list5.textContent='List 5'
   list6.textContent='List 6'
/*
// الحل الديناميكى
let items = ['List 1', 'List 2', 'List 3'];
items.forEach(txt => {
  let li = document.createElement('li');
  li.textContent = txt;
  generaktedList.append(li);
});
*/
}
//=====================================
//10
let reverseInput= document.getElementById('reverseInput')
let reverseBtn= document.getElementById('reverseBtn')
let reverlseResult= document.getElementById('reverlseResult')

reverseBtn.onclick= function(){
let inpArr= reverseInput.value.trim().split(' ').reverse().join(' ')

//for sure
console.log(inpArr)

reverlseResult.textContent=`${inpArr} : النص المعكوس`
}
//=====================================
//Rev DOM 5
let day5= document.getElementById('day5')
day5.style.color='blue'

//1
let listkToClear= document.getElementById('listkToClear')
let clearkListBtn= document.getElementById('clearkListBtn')

clearkListBtn.onclick= function(){
   listkToClear.remove()
}
//====================================
//2
let hiddlenBox= document.getElementById('hiddlenBox')
let togglleBoxBtn= document.getElementById('togglleBoxBtn')
let isShown = false 
togglleBoxBtn.onclick= function(){

   if(!isShown){
      //hiddlenBox.setAttribute('display' ,'none')
      hiddlenBox.removeAttribute('style')
      isShown = true
   }else{
     // hiddlenBox.setAttribute('display' ,'block')
     hiddlenBox.setAttribute('style' , 'width:100px; height:100px; background:red;')
      isShown = false}}

//=====================================
//3
let addIteomInput= document.getElementById('addIteomInput')
let iteomsList= document.getElementById('iteomsList')   
let worD = false

addIteomInput.oninput= function(){
   let inpArr = addIteomInput.value//.trim().split(/\s+/).filter((el)=>el != '')
if(!worD && inpArr != '' ){
   let element= document.createElement('li')
   iteomsList.append(element)
   element.textContent=inpArr
   console.log(inpArr)
   worD=true
}else{
worD=false
}} // لما باجى اضيف عنصر مش بيضيف العنصر التانى الا لما اعمل مسافة بعدة 

//======================================
//4
let charkText= document.getElementById('charkText')
let charkCount= document.getElementById('charkCount')

charkText.oninput=function(){
   let inpArr =charkText.value.trim().split(/\s+/).filter((el)=>el!='')
   console.log(inpArr.length )
   charkCount.textContent=inpArr.length
}
//======================================
//5
let bgColorkSelect= document.getElementById('bgColorkSelect')

bgColorkSelect.onchange= function(){
   let color = bgColorkSelect.options[bgColorkSelect.selectedIndex]
// for sure
   console.log(color.value)
   document.body.style.backgroundColor= color.value

}

//======================================
//6
let divClass=document.querySelectorAll('.tasok button')
let datiaMsg= document.getElementById('datiaMsg')

divClass.forEach((el)=>{
   if(el.textContent == 'Say Hello'){
el.onclick=function(){
   datiaMsg.textContent= 'Hello'
}
   }if(el.textContent == 'Say Goodbye'){
      el.onclick=function(){
         datiaMsg.textContent= 'Goodbye'

      }
   }

   //console.log(el.hasAttribute('data-msg'))
})

//=========================================
//7
let delList=document.querySelectorAll('#delegkatedList li')

delList.forEach((el)=>{
   console.log(el)
   el.onclick=function(){
      el.remove()
   }

})
//========================================
//8 مش عارفة المطلوب بالظبط بس حليتها كدا
let valInput= document.getElementById('validgateInput')
let valMsg= document.getElementById('validgateMsg')

valInput.onblur= function(){
   let value= valInput.value

   if(!(/\s+/).test(value)){
      valMsg.textContent= "Don't Leave me Empty !!"
   }else{
      valMsg.textContent=value
   }
}
//=========================================
//9
let dNumP= document.getElementById('countdkownNum')
let nIm=5
window.addEventListener('load',function(){
   let s=this.setInterval(function(){

      if(nIm== 0){
         dNumP.textContent='Done'
      }else{
         dNumP.textContent=nIm 
         nIm--
      }

   },1000)
})
//=========================================
//10 مش فاهمة المطلوب ولا عارفة ctrl k

let shorxt= document.getElementById('shortkcutText')
//مش عارفاها
document.addEventListener('keydown', function(e) {
   if (e.ctrlKey && e.key === 'k') {
     e.preventDefault(); // يمنع المتصفح من تنفيذ الاختصار الافتراضي
     alert('You pressed Ctrl + K');
   }
 });
 
//==========================================
//Rev DOM 6
let day6= document.getElementById('day6')
day6.style.color='blue'

//1 
let numIknput= document.getElementById('numIknput')
let addNumkberBtn= document.getElementById('addNumkberBtn')
let sumReksult= document.getElementById('sumReksult')
let total =0

addNumkberBtn.onclick=function(){
   let num= (Number(numIknput.value))
   total+= num
   sumReksult.textContent=`Sum:${total}`
  }

//===========================================
//2
let liveiClock= document.getElementById('liveiClock')

window.addEventListener('load',function(){
   let time =this.setInterval(function(){
      let now= new Date()
      let hours = now.getHours()
      let mins = now.getMinutes()
      let sec = now.getSeconds()
      liveiClock.textContent=`Time Live || ${hours}:${mins}:${sec}`
   },1000)
})

//===========================================
//3

let prepeondTask= document.getElementById('prepeondTask')
let prepoendBtn= document.getElementById('prepoendBtn')
let taskoList= document.getElementById('taskoList')

prepoendBtn.onclick=function(){
let element =document.createElement('li')
taskoList.prepend(element)
element.textContent=prepeondTask.value

}

//=======================================
//4
let listhToEdit= document.getElementById('listhToEdit')
let removehLastBtn= document.getElementById('removehLastBtn')

removehLastBtn.onclick=function(){
   listhToEdit.lastElementChild.remove()

}
//========================================
//5
let checkoText= document.getElementById('checkoText')
let sWord= document.getElementById('searchoWord')
let checkoWordBtn= document.getElementById('checkoWordBtn')
let checkoResult= document.getElementById('checkoResult')

checkoWordBtn.onclick=function(){
   let inpArr = checkoText.value.trim().split(/\s+/)
   //console.log(inpArr)
if(inpArr.includes(sWord.value)== true){
   checkoResult.textContent= 'Word Found'
}else{
   checkoResult.textContent= 'Word Not Found'
}}
//=========================================
//6
let cSlctr=document.getElementById('colorTSelector')

cSlctr.onchange=function(){
   let color = cSlctr.options[cSlctr.selectedIndex]
   document.body.style.backgroundColor=color.value
}
//==========================================
//7

let copyfProtected= document.getElementById('copyfProtected')
let copyfAlert= document.getElementById('copyfAlert')

document.addEventListener('keydown',function(e){
if(e.ctrlKey && e.key=='c'){
   copyfAlert.textContent="Don't Copy Me"
   copyfAlert.style.cssText='color:red ; font-weight:bold;font-size:20px;'
//alert("Don't Copy Me")
}})

//==========================================
//8
let enput= document.getElementById('enteorInput')
let entsult= document.getElementById('enterRoesult')

enput.onchange=function(){
   entsult.textContent=enput.value

}
//==========================================
//9
let chairCountArea= document.getElementById('chairCountArea')
let charCiountResult= document.getElementById('charCiountResult')

chairCountArea.addEventListener('input',function(){
   let inpArr=chairCountArea.value.split('').filter((el)=>el!=' ')
if(inpArr !=''){
charCiountResult.textContent=`Letter's Count are ${inpArr.length}`
}})

//===========================================
//10
let shortcutMsg= document.getElementById('shortcutMsg')

document.addEventListener('keydown',function(e){
if(e.ctrlKey && e.key==='m'){
   e.preventDefault()
   shortcutMsg.textContent ='Shortcut Triggered!'
}
})

//==========================================
//Rev DOM 7
let day7= document.getElementById('day7')
day7.style.color='blue'

//1
let helrloInput= document.getElementById('helrloInput')

helrloInput.oninput=function(){
let inpArr =helrloInput.value.trim().split(/\s+/)
if(inpArr.includes('hello') == true || inpArr.includes('Hello')== true){
   alert('Hello Baby')
}
}
//===========================================
//2
let toBtn= document.getElementById('togglUeBtn')
let isToggle =false
toBtn.onclick=function(){
   if(!isToggle){
      toBtn.textContent= 'ON'
      isToggle =true
}else{
   toBtn.textContent= 'OFF'
      isToggle= false
}}

//=============================================
//3
let dbnput= document.getElementById('dblIPnput')
let dbist= document.getElementById('dblPList')


dbnput.ondblclick= function(){
   if(dbnput.value !=''){
      let element= document.createElement('li')
      dbist.append(element)
      element.textContent=dbnput.value
   }}
//============================================
//4
document.addEventListener('keydown',function(e){
if(e.shiftKey && (e.key=='b'||e.key=='B')){
e.preventDefault()
document.body.style.backgroundColor='red'
}})
//============================================
//5
let enTCnt= document.getElementById('enterpCount')
let save= []
document.addEventListener('keypress',function(e){
   //e.preventDefault()
   
   if(e.key ==='Enter'){
      save.push(e.key)
console.log(save.length)
enTCnt.textContent=`${save.length}`
   }
})
//============================================
//6
let thrBtn= document.getElementById('three3ClickBtn')
let countClk=[]
let isVisible =false
thrBtn.addEventListener('click',function(){
   countClk.push(thrBtn.click.length)
   
if(countClk.length==3 && isVisible ==false){
   thrBtn.style.display='none'
   isVisible =true
}else{
thrBtn.style.display='block'
isVisible =false
}console.log(countClk.length)})

//===============================================
//7
let livepTextInput= document.getElementById('livepTextInput')
let livepTextView= document.getElementById('livepTextView')

livepTextInput.oninput=function(){
   livepTextView.textContent=livepTextInput.value
}
//===============================================
//8
let evInput= document.getElementById('evenvNumberInput')
let addnBtn= document.getElementById('addvEvenBtn')
let evList= document.getElementById('evenVList')

addnBtn.onclick=function(){
   let num =(Number(evInput.value.trim()))
   console.log(num)
   if(num%2 == 0){
      let element= document.createElement('li')
      evList.append(element)
      element.textContent=num
   }
}
//================================================
//9
let copypFrom= document.getElementById('copypFrom')
let copypTo= document.getElementById('copypTo')

copypFrom.onblur= function(){
   if(copypFrom.value != ''){
      copypTo.value=copypFrom.value

   }
}
//================================================
//10

// solution No1
//let deletUeList =document.querySelectorAll('#deletUeList li')
//deletUeList.forEach((el)=>{
//el.onclick=function(){
//el.remove()
//}})

// another solution
//let deletUeList =document.getElementById('deletUeList')
//deletUeList.addEventListener('click',function(){
//deletUeList.firstElementChild.remove()
//})

//Main Answer

let deletUeList =document.getElementById('deletUeList')


deletUeList.onmouseenter=function(){
   document.addEventListener('keydown',function(e){
if(e.key=='Delete'){
   deletUeList.firstElementChild.remove()
}})} 

//==============================================
//Extra Problem Solving for Day 7
//1 حساب عدد الارقام المدخلة
let digitstInput= document.getElementById('digitstInput')
let digitstCount= document.getElementById('digitstCount')

/*
digitstInput.oninput= function(){
let inpArr =(digitstInput.value.split(' ').filter(el=> el!='' ).map((e)=>{
   if(/\d/.test(inpArr)== true){
     return  digitstCount.textContent=`Numbers Count : ${inpArr.length}` //بيقولى undefined
      console.log((inpArr)) 

   }
}))//.map((e)=>typeof e =='number'))
//digitstInput.type='number' كنت عاوزة اخلى المصفوفة ارقام بس
// Number(digitstInput.value.split(' ').filter(el=> el!='')) لية لما عملت دى ادانى undefined
(digitstInput.value.split(/\d/)).toFixed()
} 


digitstInput.oninput= function(){
   let inpNum= digitstInput.value
   if(inpNum != '' && typeof inpNum !== 'string'){
      digitstCount.textContent=`Numbers Count : ${inpNum.length}`
   }
   console.log(inpNum)
}
 */


digitstInput.oninput= function(){
let nums= digitstInput.value.split('').filter((el)=> el !=' ').map((x)=> !isNaN(x)) //? digitstCount.textContent=`Numbers Count : ${nums.length}`: console.log('Theres No Number'))
let filterNums =nums.filter((el)=>el== true)
digitstCount.textContent=`Numbers Count : ${filterNums.length}`
console.log(filterNums.length)
}

//===================================================

//2 منع ادخال اكتر من 10 حروف

let limittedInput= document.getElementById('limittedInput')
let limittedMsg = document.getElementById('limittedMsg')

limittedInput.oninput=function(){
   let inpArr= limittedInput.value.split('').filter((el)=>el != ' ')
   console.log(inpArr) 
if(inpArr.length>10){
document.addEventListener('keydown',function(e){
   e.preventDefault()
   
})
   limittedMsg.textContent="Stop , letters must be less than 10 letters"
   limittedMsg.style.cssText='color:red;font-size:20px;font-weight:bold'
}else{
   limittedMsg.textContent=limittedInput.value 

}}

//===================================================
//3

let hBox= document.getElementById('hoverzBox')
let isHover = false
hBox.onmouseenter= function(){
if(!isHover){
   hBox.style.backgroundColor='green'
   isHover= true
}else{
   hBox.style.backgroundColor='grey'
   isHover= false
}}
//=============================================
//4
let iteInput= document.getElementById('itemCoPuntInput')
let generatBtn= document.getElementById('generatPeItemsBtn')
let itPainer= document.querySelector('#itemsContPainer')
let cNt=0
generatBtn.onclick= function(){
let num=iteInput.value
cNt +=Number(num)
for(let i=1;i<=cNt ; i++){
   let i=document.createElement('li')
   itPainer.append(i) 
}

console.log(itPainer)
}
//===============================================
//5
let toggleuBtn= document.getElementById('toggleuBtn')
let isTog =false
toggleuBtn.onclick=function(){
if(!isTog){
   toggleuBtn.textContent='OFF'
   isTog =true
}else{
   toggleuBtn.textContent='ON'
   isTog =false
}}
//================================================
//6
let textWordosArea= document.getElementById('textWordosArea')
let wordsoCountMsg= document.getElementById('wordsoCountMsg')

textWordosArea.oninput= function(){
let inpArr= textWordosArea.value.trim().split(/\s+/).filter((el)=>el!=' ')
console.log(inpArr)
wordsoCountMsg.textContent=`Words Count: ${inpArr.length}`
wordsoCountMsg.style.cssText='font-size:18px;font-weight:bold;'
}
//=================================================
//7
let taskkInput= document.getElementById('taskkInput')
let addTkaskBtn= document.getElementById('addTkaskBtn')
let tasiks= document.querySelector('.tasiks')

addTkaskBtn.onclick=function(){

   let input=taskkInput.value

   let p=document.createElement('p')
   tasiks.append(p)
   p.textContent=input
   console.log(tasiks)
}

//=================================================
//8
let evenuList= document.querySelectorAll('#evenuList li')
let coBtnlet = document.getElementById('colorpEvenBtnlet')

coBtnlet.onclick=function(){
   evenuList.forEach((el)=>{
     let val =Number(el.textContent.trim().split(/\s+/).map((ex)=>{
     return !isNaN(ex)?ex :''}).filter((fl)=> fl !=''))
   console.log(val)
   if(val %2 == 0){
      el.style.color='green'
   }})}
//===============================================
//9
let copyStaUtus= document.getElementById('copyStaUtus')

document.addEventListener('keydown',function(e){
if(e.ctrlKey && (e.key=='c' || e.key =='C')){
   copyStaUtus.textContent='تم النسخ'
   copyStaUtus.style.cssText='font-size:18px;font-weight:bold;'
}
})
//================================================
//10
let delextableList= document.getElementById('delextableList')
let deletexFirstBtn= document.getElementById('deletexFirstBtn')


deletexFirstBtn.onclick= function(){

   delextableList.firstElementChild.remove()
}

//==============================================
//Rev DOM day8
let day8 =document.getElementById('day8')

day8.style.color='blue'

//1
let nOnput = document.getElementById('noNumbersPInput')

nOnput.addEventListener('keydown',function(e){
let inp=nOnput.value.trim()//.split(' ').map((el)=>!isNaN(el)? el :'')
//if(isNaN(e.key)){
//   console.log(inp)
//   inp
//}
//typeof e.key !=='number' ?nOnput.value : ''
//if(e.key >= 'a' && e.key<='z'){
//   nOnput.value 
//}
if(!isNaN(e.key)){
console.log(inp)
e.preventDefault()
//inp=nOnput.value
}
})
//========================================
//2
let onLput =document.getElementById('onlyLoettersInput')

onLput.addEventListener('keydown',function(e){
if((e.key >='ا' && e.key <='ى' )||( e.key >='أ' && e.key<='ي') || !isNaN(e.key)){
   e.preventDefault()
//مش عارفة اللغة العربية 
}else{
   onLput.value=onLput.value.trim() // لو عاوزة اكتبها علطول من غير trim()
}})

//=========================================
//3
let cosInput= document.getElementById('countLetptersInput')
let letMsg= document.getElementById('letterspCountMsg')

cosInput.addEventListener('input',function(){
let inp=cosInput.value.split('').filter((el)=>el!==' ')
letMsg.textContent=` Leters Count : ${inp.length}`
letMsg.style.cssText='font-size:18px ; font-weight:bold;color:red;'
})

//=========================================
//4
//لو المستخدم كتب كلمة زي
//"bad" أو "stupid"، امسحيها تلقائيًا واظهري رسالة تحذير.


let blockInput= document.getElementById('blockWorjdsInput')
let bloKdMsg= document.getElementById('blockjWordMsg')
let badWords=["stupid","bad"]
//let bAd=false
blockInput.addEventListener('keydown',function(e){
let inpArr=blockInput.value.trim().split(' ')
badWords.forEach((el)=>{
   if(inpArr.includes(el.toUpperCase()) ||inpArr.includes(el.toLowerCase())){
e.preventDefault()
bloKdMsg.textContent="WARNING PlEASE DON'T WRITE BAD WORDS"
bloKdMsg.style.cssText='color:red;font-size:18px;font-weight:bold;'
//bAd=true
}
//if(e.key=='Backspace'){
//   bAd=false
//}
else if(e.key=='Backspace' ||e.key=='Delete') {
e.defaultPrevented()
      blockInput.value=blockInput.value.trim()
      //bAd=false
}})})
//=============================================
//5
let rangnput=document.getElementById('rangeIonput')
let rangMsg=document.getElementById('rangoeMsg')
/*
rangnput.addEventListener('keydown',function(e){
  let inpArr =rangnput.value.trim().split(/\d/)
   console.log(inpArr)
   if(!(inpArr>=1 ||  inpArr<=100)){
    e.preventDefault()  
    rangMsg.textContent="WARNING PlEASE WRITE ONLY NUMBERS FROM 1 TO 100"
    rangMsg.style.cssText='color:red;font-size:18px;font-weight:bold;'

   }else if(inpArr>=1 ||  inpArr<=100){
      e.defaultPrevented()
      rangnput.value=rangnput.value.trim().split(/\d/) 
   }
})

rangnput.addEventListener('keydown',function(e){
   let inpArr =rangnput.value.trim()//.split(/\d/)
    console.log(inpArr)
    if((e.key>=1 || e.key<=100)){
      rangnput.value=rangnput.value.trim()//.split(/\d/) 
    //}else if(!(e.key>=1 || e.key<=100 || typeof e.key=='string')){
     }else{ e.preventDefault()  
     rangMsg.textContent="WARNING PlEASE WRITE ONLY NUMBERS FROM 1 TO 100"
     rangMsg.style.cssText='color:red;font-size:18px;font-weight:bold;'
 
    }})



rangnput.addEventListener('keydown',function(e){
   let num=Number(rangnput.value)
if(num>= 1 || num <=100){
   //e.defaultPrevented()
   rangnput.value=rangnput.value.trim()//.split(/\d/) 

}else{
   //e.defaultPrevented()
   rangnput.value=rangnput.value.trim()//.split(/\d/) 
    // e.preventDefault()
    rangMsg.textContent="WARNING PlEASE WRITE ONLY NUMBERS FROM 1 TO 100"
    rangMsg.style.cssText='color:red;font-size:18px;font-weight:bold;'
 
// انا مش عارفاها خاااااااااااالص :\\\\\\
}
})

*/

rangnput.addEventListener('input',function(){
   let inpArr =Number(rangnput.value)//.trim().split(/\d/)
    console.log(typeof(inpArr))
    if((inpArr>=1 &&  inpArr<=100)){
      rangnput.value=rangnput.value//.trim().split(/\d/) 
      rangMsg.textContent=''
    
    }else{
     // e.preventDefault()  
     rangMsg.textContent="WARNING PlEASE WRITE ONLY NUMBERS FROM 1 TO 100"
     rangMsg.style.cssText='color:red;font-size:18px;font-weight:bold;'
 
    }
 })

//===========================================
//6
let passInput=document.getElementById('passwocrdInput')
let toPaBtn=document.getElementById('togglecPasswordBtn')
let isShown1= false

toPaBtn.addEventListener('click',function(){
   if(!isShown1){
      passInput.type='text'
      toPaBtn.textContent='Hide'
      isShown1= true
   }else{
      passInput.type='password'
      toPaBtn.textContent='Show'
      isShown1=false
   }
})
//=============================================
//7
let counInput=document.getElementById('countdlownInput')
let coundnMsg=document.getElementById('countdlownMsg')
let cDown =10

counInput.addEventListener('input',function(e){
  
let setS=setInterval(function(){
   coundnMsg.textContent=cDown
   cDown--
  
   if(cDown<=0){
      coundnMsg.textContent='تم إيقـاف التسجـيل'
      coundnMsg.style.cssText='color:red;font-size:16px;font-weight:bold;'
 clearInterval(setS)
//e.preventDefault()
counInput.value=''
   }
},1000)})

//=============================================
//8
let noPnput=document.getElementById('noPagsteInput')

noPnput.addEventListener('keydown',function(e){
if(e.ctrlKey && (e.key=='V' || e.key=='v')){
   e.preventDefault()

}
})
//=============================================
//9

let coLivnput= document.getElementById('copyLivieInput')
let coLivTput= document.getElementById('copyLiveiOutput')

coLivnput.addEventListener('input',function(){
coLivTput.textContent=coLivnput.value
})

//=============================================
//10
let entSInput=document.getElementById('entertSendInput')
let entSdMsg=document.getElementById('entertSendMsg')

entSInput.addEventListener('keydown',function(e){
   if(e.key=='Enter'){
      e.preventDefault()
      entSdMsg.textContent='تم الإرسال'
      entSdMsg.style.cssText='color:green;font-size:15px;font-weight:bold;'
   }
})

//===============================================
//Rev DOM Day 9
let day9 =document.getElementById('day9')
day9.style.color='blue'

//1

let emailInput=document.getElementById('emailInput')

emailInput.addEventListener('paste',function(e){
e.preventDefault()
}) 

//===========================================
//2
let pasInput= document.getElementById('pass1Input')
let pasnput= document.getElementById('pass2Input')
let passMsg= document.getElementById('passMatchMsg')

pasnput.addEventListener('input',function(){
if(pasInput.value !==pasnput.value ){
   passMsg.textContent= 'Be sure of password , must be identical !'
   passMsg.style.cssText='color:red;font-size:16px;font-weight:bold;'
}else{
   passMsg.textContent=''
}})

//========================================
//3
let phoneInput=document.getElementById('phoneInput')
let phoneMsg=document.getElementById('phoneMsg')

phoneInput.addEventListener('input',function(e){
let inpArr= phoneInput.value.trim().split('')//.map((el)=>!isNaN(el)?el:'').filter((x)=>x!=''))
console.log(inpArr)
if(inpArr[0] ==0 && inpArr[1] == 1 && (inpArr[2] ==0 ||inpArr[2] ==1 ||inpArr[2] ==2 ||inpArr[2] ==5 ) && inpArr.length >=11){
   phoneMsg.textContent='Confirmed'
   phoneMsg.style.cssText='color:green;font-size:16px;font-weight:bold;'
}else{
   phoneMsg.textContent='WARNING'
   phoneMsg.style.cssText='color:red;font-size:16px;font-weight:bold;'

}})
//عارفة انه مش عملى بس معرفتش غير كدا

//=========================================
//4
let pauseInput= document.getElementById('pauseInput')
let pauseMsg= document.getElementById('pauseMsg')

/*
pauseInput.addEventListener('pause',function(){
let setTime=setTimeout(function(){
   pauseMsg.textContent='توقف المستخدم عن الكتابة'
console.log(setTime)
},3000)
}) // مش عارفاها 
 */ // الحل الصحيح
let typingTimer;
pauseInput.addEventListener('input', function () {
  clearTimeout(typingTimer);
  pauseMsg.textContent = '';
  typingTimer = setTimeout(function () {
    pauseMsg.textContent = 'توقف المستخدم عن الكتابة';
  }, 3000);
});

//==========================================
//5
let emailCheckInput=document.getElementById('emailCheckInput')
let emailCheckMsg=document.getElementById('emailCheckMsg')

emailCheckInput.addEventListener('input',function(){

   let inpArr =emailCheckInput.value.trim().split('').filter((el)=>el!=' ').join('')
console.log(inpArr.slice(-4))
if(inpArr.includes('@') == true && inpArr.slice(-4)=='.com'){
   console.log('Validated')
   emailCheckMsg.textContent='Validated'
   emailCheckMsg.style.cssText='color:green;font-weight:bold;font-size:16px'
  // if(emailCheckInput= ''){
   //   emailCheckMsg.textContent=''
   //} كنت عاوزة لما المستخدم يمسح اللى كتبة المسدج تختفى 
}else{
   emailCheckMsg.textContent="e-mail must inclued '@' and '.com'"
   emailCheckMsg.style.cssText='color:red;font-weight:bold;font-size:16px'
}})
emailCheckInput.addEventListener('keydown',function(e){
if(e.key=='Backspace' || emailCheckInput.value =='' ){
   emailCheckMsg.textContent=''
}})

//===========================================
//6
let enterPasswordInput= document.getElementById('enterPasswordInput')
let enterPasswordMsg= document.getElementById('enterPasswordMsg')


enterPasswordInput.addEventListener('keydown',function(e){
   if(e.key =='Enter'){
      enterPasswordMsg.textContent='تم التسجيل بنجاح'
      enterPasswordInput.value=''
   }
})
//=============================================
//7
let disableInput=document.getElementById('disableInput')
let disableBtn=document.getElementById('disableBtn')
/*
disableInput.addEventListener('keydown',function(e){
disableBtn.onclick=function(){
      e.preventDefault()
   }
})
*/

disableBtn.onclick=function(){
   disableInput.addEventListener('keydown',function(e){
      e.preventDefault()
      })
}
//=============================================
//8
let wordTxtRea=document.getElementById('wordCounterTextarea')
let wordCtMsg=document.getElementById('wordCountMsg')

wordTxtRea.addEventListener('input',function(){
let inpArr= wordTxtRea.value.trim().split(/\s+/).filter((el)=>el!=' ')
console.log(inpArr.length)
wordCtMsg.textContent=`Words Count : ${inpArr.length}`
})

//=============================================
//9
let capitalOnlyInput=document.getElementById('capitalOnlyInput')

capitalOnlyInput.addEventListener('keydown',function(e){
if((e.key >= 'a' && e.key<='z')){
   e.preventDefault()
}else{
   capitalOnlyInput.value=capitalOnlyInput.value
}})

//=============================================
//10
let resetAllBtn=document.getElementById('resetAllBtn')
/*
resetAllBtn.onclick=function(){
  let inputs=document.getElementsByTagName('input')
 // console.log( inputs)
 // inputs.forEach((el)=>{
 //  el.remove()
 // })
 let inpArr=inputs.map((el=>el.remove()))
 console.log(inpArr)
  
} مش عارفاها خالص 
*/
// الحل الصحيح
resetAllBtn.onclick = function () {
   const inputs = document.querySelectorAll('input, textarea');
   const msgs = document.querySelectorAll('p');
 
   inputs.forEach(el => el.value = '');
   msgs.forEach(el => el.textContent = '');
 };
 
//=============================================
let day10= document.getElementById('day10')
day10.style.color='blue'

//1
/*
// عند إرسال الفورم الأول، امنعي الإرسال
//  وشيكي إن الإيميل يحتوي على @ و.com،
//  واظهري رسالة.
 
let emailForm= document.getElementById('emailForm')
let formEmailInput= document.getElementById('formEmailInput')
let butTon= document.querySelector('#emailForm button')
let emailFormMsg= document.getElementById('emailFormMsg')
//console.log(butTon)

butTon.addEventListener('click',function(e){
   // لما عملت سبميت بدل كليك بردو رسل البيانات رغم انى مانعة الافتراضى لكن كليك منع الافتراضى 
   
   let statue=false
   if(!statue){
      e.preventDefault()
      statue=true
   } 
      let statue=true // دى حطتها برا مشتغلتش بس لما حطيتها جوا اشتغلت لية
  if(statue == true){
   e.preventDefault()
   statue=false
  }else{
   formEmailInput.addEventListener('input',function(){
      let inpArr= formEmailInput.value.trim().split('')
      console.log(inpArr)
      statue=true // مشتغلتش لا جوا ولا برا 
   
     })
  }}) 
*/

let emailForm = document.getElementById('emailForm');
let formEmailInput = document.getElementById('formEmailInput');
let emailFormMsg = document.getElementById('emailFormMsg');

emailForm.addEventListener('submit', function (e) {
  e.preventDefault(); // نمنع الإرسال

  let email = formEmailInput.value.trim();

  if (email.includes('@') && email.endsWith('.com')) {
    emailFormMsg.textContent = 'Valid e-mail';
    emailFormMsg.style.color = 'green';
  } else {
    emailFormMsg.textContent = 'e-mail must include @ and end with .com';
    emailFormMsg.style.color = 'red';
  }
});

//===========================================
//2
let colorSelect= document.getElementById('colorSelect')
let colorSelectMsg= document.getElementById('colorSelectMsg')

//console.log(colorSelect)


   colorSelect.addEventListener('change',function(){
   let color= colorSelect.options[colorSelect.selectedIndex]
   colorSelectMsg.textContent= color.value

})

//===========================================
//3
let termsCheckbox=document.getElementById('termsCheckbox')
let submitTermsBtn=document.getElementById('submitTermsBtn')
let termsMsg=document.getElementById('termsMsg')
/*
submitTermsBtn.onclick=function(){
 //  if(termsCheckbox.value=== true){
 //     termsMsg.textContent='yes' 
 //  }else{
 //     termsMsg.textContent='no'  // ليه هنا جابلى نو علطول سواء علمت او لا
 //  }

 if(termsCheckbox.value==termsCheckbox.change() ){
     termsMsg.textContent='yes' 
  }else{
       termsMsg.textContent='no'  // ليه هنا جابلى نو علطول سواء علمت او لا
 }}


-----------------------------------
termsCheckbox.addEventListener('change',function(e){
   submitTermsBtn.addEventListener('click',function(){
if(e.key === 'click'){
termsMsg.textContent='yes'
}else{
  termsMsg.textContent='no' 
}
   })

})

submitTermsBtn.onclick=function(){
   termsCheckbox.addEventListener('change',function(e){
if(e.key === 'click'){
termsMsg.textContent='yes'
}else{
  termsMsg.textContent='no' 
}
})

}

*/


submitTermsBtn.onclick = function () {
  if (termsCheckbox.checked) {
    termsMsg.textContent = 'yes ✅';
    termsMsg.style.color = 'green';
  } else {
    termsMsg.textContent = 'no ❌';
    termsMsg.style.color = 'red';
  }
};

//================================================

//4
//let inputMale = document.querySelector('[value="male"]')
//let inputFemale =document.querySelector('[value="female"]')
let inputGenders=document.querySelectorAll('[name="gender"]')
let genderMsg=document.getElementById('genderMsg')


inputGenders.forEach((el)=>{
el.addEventListener('change',function(){
   if(el.checked ){
      genderMsg.textContent=`Your Gender Is : ${el.value}`
      if(el.value=='male'){
      genderMsg.style.color ='blue'

      }if(el.value== 'female'){
          genderMsg.style.color ='pink'
      }
   }
})})

//===============================================
//5
let usernameInput=document.getElementById('usernameInput')
let usernameMsg=document.getElementById('usernameMsg')

//username must be 5 charchter or more


usernameInput.addEventListener('input',function(){
let inpArr= usernameInput.value.trim().split('').filter((el)=>el!=' ')
if(inpArr.length<5){
   usernameMsg.textContent='Username Must Be 5 Charchter Or More'
usernameMsg.style.cssText='color:red;font-weight:18px;font-weight:bold;'
}else{
   usernameMsg.textContent=''
}})

usernameInput.addEventListener('blur',function(){
      if(usernameInput.value==''){
   usernameMsg.textContent=''

      }})

//============================================
//6
let showPassInput= document.getElementById('showPassInput')
let showPassToggle= document.getElementById('showPassToggle')

showPassToggle.addEventListener('change',function(){
   if(showPassToggle.checked){
      showPassInput.type='text'
   }else{
            showPassInput.type='password'

   }
})
//=============================================
//7
let ageForm=document.getElementById('ageForm')
let ageInput=document.getElementById('ageInput')
let ageMsg=document.getElementById('ageMsg')


ageForm.addEventListener('submit',function(e){
e.preventDefault()
if(ageInput.value <=18){
   ageMsg.textContent='WARNING, THIS WEBSITE NOT SUITABLE FOR YOU'
   ageMsg.style.cssText='color:red;font-size:20px;font-weight:bold;'
}else{
   ageMsg.textContent=''
}
})

//==============================================
//8
let bioTextarea=document.getElementById('bioTextarea')
let bioLengthMsg=document.getElementById('bioLengthMsg')

bioTextarea.addEventListener('input',function(){
   let inpArr =bioTextarea.value.trim().split('').filter((el)=>el!=' ')
if(bioTextarea.value !=''){
bioLengthMsg.textContent=`letters Count : ${inpArr.length}`

}else{
   bioLengthMsg.textContent=''
}})

//===============================================
//9
let liveNameInput=document.getElementById('liveNameInput')
let livePreviewMsglet =document.getElementById('livePreviewMsglet')


liveNameInput.addEventListener('input',function(){
   if(liveNameInput.value != ''){
      livePreviewMsglet.textContent=liveNameInput.value
   }else{
     livePreviewMsglet.textContent='' 
   }
})
//================================================

//10

let resetyAllBtn=document.getElementById('resetyAllBtn')

resetyAllBtn.onclick=function(){
   let inputZ = document.querySelectorAll('input, textarea');
   inputZ.forEach((el)=>{
      el.value=''
   })
}

//==================================================
//rev DOM Day11
let day11= document.getElementById('day11')
day11.style.color='blue'

//1
let emailCheckForm= document.getElementById('emailCheckForm')
let emailInput1= document.getElementById('emailInput1')
let formbut =document.querySelector('#emailCheckForm button')
let emailMsg1= document.getElementById('emailMsg1')

emailCheckForm.addEventListener('submit',function(e){
e.preventDefault()
let inpArr=emailInput1.value.trim()
if(inpArr.includes('@') == true && inpArr.endsWith('.com')){
  emailMsg1.textContent='VALIDATE' 
     emailMsg1.style.color='green'
}else{
   emailMsg1.textContent="'e-mail must include @ and end with .com'"
   emailMsg1.style.color='red'
}


})

//كنت محولة الانبوت لمصفوفة وعملت slice(-4) مشتغلتش لية 

//==========================================
//2
let stgPassnput= document.getElementById('strongPasswordInput')
let strongPassMsg= document.getElementById('strongPassMsg')
/*
stgPassnput.addEventListener('input',function(e){
   let passArr= stgPassnput.value.trim().split('').filter((el)=>el!=' ')
if((e.key>='A' || e.key<='Z') && (e.key>='a' || e.key<='z') && passArr.length>11  && passArr.includes('@')){
   strongPassMsg.textContent='Valid Password'
   strongPassMsg.style.color='green'
   console.log(passArr)// مش شغالة لا بانبوت ولا ب keydown
}else{// لاحظت انه بيكتب بعد مابكتب بواحد يعنى لو كتبت 1 و 2 يظهرلى 1 بس ولوكتبت 3 يظهرلى 2 وهكذا
  //لكن العكس مع انبوت بيكتب مرة واحدة بس المسدج مبتظهرش خالص
  
   strongPassMsg.textContent='Invalid Password'
   strongPassMsg.style.color='red'
   console.log(passArr)
}*/
// Correcting

stgPassnput.addEventListener('input', function () {
  let value = stgPassnput.value.trim();
  let hasUpper = /[A-Z]/.test(value);
  let hasLower = /[a-z]/.test(value);
  let hasAt = value.includes('@');
  let isLong = value.length > 11;

  if (hasUpper && hasLower && hasAt && isLong) {
    strongPassMsg.textContent = 'Valid Password';
    strongPassMsg.style.color = 'green';
  } else {
    strongPassMsg.textContent = 'Invalid Password';
    strongPassMsg.style.color = 'red';
  }
});

//=============================================
//3

let passOne= document.getElementById('passOne')
let passTwo= document.getElementById('passTwo')
let checkPassBtn= document.getElementById('checkPassBtn')
let passMatchMsg= document.querySelector('.mssdg') // ناديت علية بال اى دى getelmentbyId مظهرش

checkPassBtn.addEventListener('click',function(){
  
   let value1=Number(passOne.value.trim())
   let value2=Number(passTwo.value.trim())
   if(value1 == value2 ){
      // let element=document.createElement('p')
      // passMatchMsg.append(element) لو كنت حابة اخلق عنصر المفروض يتكتب فين

      passMatchMsg.textContent='Confirmed'
      passMatchMsg.style.color='green'
      console.log('yes')
   }else{
     passMatchMsg.textContent='Make Sure Your Password Must Be Idenical'
     passMatchMsg.style.color='red' 
           console.log('No')
 
   }})
//================================================
//4
let nameInput= document.getElementById('nameInput')
//console.log(nameInput)
/*
nameInput.addEventListener('input',function(){
// let inpArr=nameInput.value.trim().split('').filter((el)=>isNaN(el))
//console.log(inpArr)
//if(/[/\d/]/.test(inpArr) ){}

if(!isNaN(nameInput.value )){}})
*/

nameInput.addEventListener('keydown',function(e){
if(!isNaN(e.key)){
   e.preventDefault()
}})
//=================================================
// Tasks about Destructing
// 1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
 [,,,a,e]=myNumbers

console.log(a * e); // 5

//====================================

//2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
[aZ,bZ,cZ,[dZ,eZ,[fZ,gZ]]]=mySkills
console.log(`My Skills: ${aZ}, ${bZ}, ${cZ}, ${dZ}, ${eZ}, ${fZ}, ${gZ}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//===================================
//3

let arur1 = ["Ahmed", "Sameh", "Sayed"];
let arur2 = ["Mohamed", "Gamal", "Amir"];
let arur3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let favFrndz=[...arur1 ,...arur2,...arur3]
console.log(favFrndz)
let [cM,,,,,,,aM,bM]=favFrndz

console.log(`My Best Friends: ${aM}, ${bM}, ${cM}`);

// My Best Friends: Shady, Mahmoud, Ahmed
//=====================================
//4
const meMber = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {age:ap,wp}=meMber

let {country:cIp}=meMber

let {hobbies:[h1 , ,h3]}=meMber

console.log(`My Age Is ${ap} And Iam ${wp ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${cIp}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

//==============================================
//5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
let {title:t}=game
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

let {developer:d}=game
console.log(`And I Love ${d} Games`);
// And I Love Falcom Games
 
let arrObj= Object.entries(game.releases)
console.log(...arrObj)

let[oT,[uiF,jF]]=arrObj[0]

console.log(`My Best Release Is ${oT} It Released in ${uiF} & ${jF}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

let [aL,]=arrObj[1]
console.log(`Although I Love ${aL}`);
// Although I Love Ark Of Napishtim
let [ad,{US:u_price}]=arrObj[1]
console.log(`${ad} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

let [ar,{JAP:j_price}]=arrObj[1]

console.log(`${ar} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

let{Origin:or}=game.releases
console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

//===============================================
//6
let chosen = 2;

let myFriends5 = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
if(chosen==1){
let { title, age, available, skills: [, skill] } = myFriends5[chosen - 1];
console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skill);
}


// If chosen === 1

"Osama"
39
"Available"
"CSS"
if(chosen==2){
let { title, age, available, skills: [, skill] } = myFriends5[1];
console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skill);
}
// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"
if(chosen==3){
let { title, age, available, skills: [, skill] } = myFriends5[2];
console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skill);
}
// If chosen === 3
if(chosen==3){
let { title, age, available, skills: [, skill] } = myFriends5[1];
console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skill);
}
"Sayed"
33
"Available"
"Laravel"

//===========================================
//Tasks about OOP
//1
/*
function Coar(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}المطلوب تحويل الكونستركتور الى كلاس 
*/
class Car {
   constructor(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price; 
   }
run(){
return`Car Is Running Now`
};
stop(){
   return `Car Stopped`
}
}

let carOne=new Car('MG',2022,420000)
let carTwo=new Car('VOLVO',2022,450000)
let carThree=new Car('Tesla',2022,850000)
// Needed Output
console.log(`Car One Name Is ${carOne.n} And Is ${carOne.m} And Price Is ${carOne.p}`)
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
console.log(carOne.run())
"Car Is Running Now"

//==============================================
//2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here

class Tablet extends Phone {
   constructor(name, serial, price,size){
super(name, serial, price)
    this.name = name;
    this.serial = serial;
    this.price = price;
    this.size=size || 'Unknown'
   }
   fullDetails(){
      return `${this.name} Serial is ${this.serial} And Size ${this.size}`
   }
}
let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//================================================
//3
// Edit The Class
class User {
   #c ;// التعديل اللى عدلتة هنا
   constructor(username, card) {
    this.u = username;
    this.#c = card.toString().match(/\d{4}/).join("-");

  }// وهنا
 showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}
// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


//================================================

//4
// Write Your Code Here
class String{
   constructor(name){
      this.n= name ;
   }
   addLove(){
      return`I Love ${this.n} Web School`
   }
}

// Do Not Edit Below
let myStr = "Elzero";
myStr = new String('Elzero')
console.log(myStr.addLove()); // I Love Elzero Web School

//================================================
//5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
// معرفتهاش 
delete myObj.country;

//myObj.score = 500;

//Dont edit below
for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

/* Needed Output

"username => Elzero"
"score => 1000"
{username: 'Elzero', score: 1000, id: 100}
*/

//==============================================

//Tasks about OOP from chatGPT
//1
/*
✅ المسألة 1: Class + Method + Private Property
أنشئي كلاس اسمه Student يحتوي على:

name (عام)

#grades (خاص): مصفوفة درجات

دالة addGrade(grade) لإضافة درجة

دالة getAverage() لحساب متوسط الدرجات

دالة info() تعرض:
"Student Name: Nour - Average Grade: 87"
*/

class Student{
         #g;
   constructor(name, averageGrades){
      this.n=name;
      this.#g=averageGrades;
   }
   addGrade(){

   };
   getAverage(){
   };
   info(){
return`Student Name:${this.n}- Average Grade: ${this.#g}`
   }
}
let studenT= new Student('Nour', 87)

console.log(studenT.info())
//=============================================
/*✅ المسألة 2: Inheritance + Override
اعملي كلاس اسمه Employee فيه:

name, salary

دالة details() تطبع "Name: Nour, Salary: 5000"

اعملي كلاس يرث منه اسمه Manager فيه:

bonus

تعدلي دالة details() علشان تطبع:
"Name: Nour, Salary: 5000, Bonus: 2000"
*/

class Employee {
   constructor(name, salary){
      this.n=name;
      this.s= salary;
   };
   details(){
      return`"Name:${this.n}, Salary: ${this.s}"`
   }
}

class Manager extends Employee{
   constructor(name, salary,bonus){
      super(name, salary)
      this.n=name;
      this.s= salary;
      this.b=bonus;
   }
   details(){
      return`"Name: ${this.n}, Salary:${this.s}, Bonus: ${this.b}"`
   }
}

let employeOne= new Employee('Nour',5000)
let manaGer=new Manager('Nour',5000,2000)

console.log(manaGer.details())

//===========================================
/*
✅ المسألة 3: Static Method
اعملي كلاس اسمه MathHelper فيه:

دالة static add(a, b)

دالة static multiply(a, b)

واستخدميهم بدون ما تعملي new.
*/

class MathHelper{
   //constructor(a=2 ,b=4){
// مش محتاجين الكونستركتور عشان نتعامل مع دوال ستاتيك بس
   static add(aU , bU){
     // return this.a + this.b
     return aU + bU
    //return +this.aU + +this.bU
   };
   static multiply(aU , bU){
return aU * bU
   }

}
console.log(MathHelper.add(6,9))
console.log(MathHelper.multiply(2,4))

// cant solve it
//==========================================
/*
✅ المسألة 4: Class + Setters/Getters
اعملي كلاس اسمه Book فيه:

title, author

دالة set rating(val) بتقبل رقم من 1 إلى 5 فقط

دالة get rating() بترجع: "Rating for [Book Title] is: 4"
*/

class Book {
   constructor(title, author){
      this.t=title;
      this.au=author;
   }
   setRating(){
      let arr=[1,2,3,4,5]
      return arr.find((el)=>el==4)
   };
   getRating(){
return `Rating for ${this.t} is : ${this.setRating()}`
   }
}

let inFoBook = new Book('JavaScript Book','chatGPT')

console.log(inFoBook.getRating())

//===============================================
/*
✅ المسألة 5: Composition
اعملي كلاس Engine فيه:

power و دالة start()

اعملي كلاس Car فيه:

model, و engine (من كلاس Engine)

دالة startCar() تطبع:
"Car Tesla with 200HP engine is starting..."
*/

class Engine{
   constructor(power ,engine){
   this.p=power;
   this.eg=engine;
   }
   start(){

   }
}

class CAar extends Engine{
   constructor(power ,engine,model){
super(power ,engine)
   this.p=power;
   this.eg=engine;
   this.mo=model;
   }
   startCar(){
      return`"Car ${this.mo} with ${this.eg} engine is starting..."`
   }
}

let moDel4 = new CAar('','200HP', 'Tesla')
console.log(moDel4.startCar())
let eng=new Engine('200HP')
//==============================================
/*
✅ المسألة 6: Validation + Encapsulation
اعملي كلاس Account فيه:

#balance يبدأ من 0

دالة deposit(amount) تقبل بس أرقام موجبة

دالة withdraw(amount) تتأكد إن فيه رصيد كفاية

دالة getBalance() ترجع الرصيد الحالي
*/

class Account{
   constructor(balance){
   this.blc=balance
   }
   deposit(){
   // مش عارفة مشتغلتش لية return +(this.blc) * 1 == - +(this.blc) ?  'Negative Number' : this.blc
   if(+(this.blc) * 1 == -(this.blc)){
return ` Negative Number `
   }else{
      return this.blc
   }
};
   withdraw(){
      return +(this.blc) <= 0 ? 'No Enough Money' :this.blc
   }

   getBalance(){
   return this.blc
   }

}
let accObj= new Account(0)

console.log(accObj.deposit()) // دى مش شغالة صح
console.log(accObj.withdraw())
console.log(accObj.getBalance())

//==================================================
/*
✅ المسألة 7: Array of Objects
اعملي كلاس Course فيه:

title, students (مصفوفة أسماء)

دالة addStudent(name)

دالة listStudents() تعرض الأسماء

واعملي كائن من Course واسميه "JavaScript" وضيفي عليه 3 طلاب.
*/

class Course{
   constructor([...students]){
this.std= students
   }
   addStudent(name){

   }
   listStudents(){
   return this.std   
   }

}
let javascript = new Course(['NauRaa' , 'Xlina' , 'Ellen'])

console.log(javascript.listStudents())

//==============================================
// Extra OOP chatGPT
//1
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  makeSound() {
    return `The ${this.type} says ${this.sound}`;
  }
}

let caT = new Animal("Cat", "Meow");
console.log(caT.makeSound()); // The Cat says Meow

//==================================

class Device{
   constructor(brand){
      this.brand=brand;
   }
}

class Laptop extends Device{
   constructor(brand,model){
      super(brand)
      this.brand=brand;
      this.model=model;
   }
   info(){
      return `"This is a ${this.brand} laptop, model ${this.model}"`
   }
}
let deviceObj= new Laptop('Dell','XPS')

console.log(deviceObj.info())

//======================================
/*
class BankAccount{
   #balance=0
   constructor(balance){
      this.#balance= balance
   }
  deposit(amount){
if(amount <=0){
return`Not Enough Money`

}else{
return this.#balance += amount

}
  } 
  get balance(){
return`"Current balance is: ${this.#balance}"`
  }
}
let bAObj = new BankAccount()
console.log(bAObj.balance(0))
*/
class BankAccount {
  #balance = 0; // نبدأ من 0 دايمًا

  deposit(amount) {
    if (amount <= 0) {
      return "Invalid amount!";
    }else{
    this.#balance += amount;
    return `Deposited: ${amount}`;}
  }

  get balance() {
    return `Current balance is: ${this.#balance}`;
  }
}

let bAObj = new BankAccount(); // مفيش داعي نمرر قيمة هنا

console.log(bAObj.deposit(1000)); // Deposited: 1000
console.log(bAObj.balance);        // Current balance is: 1000

//===================================
//4
class Converter{
  // constructor(usd){
  //    this.usd=usd;
  //    //this.egp=egp;
  // }
   static toUsed(egp){
      //let usd=1
   if(egp <=0 || isNaN(egp)){
      return`wrong`
   }else{
     // return egp = this.usd *30
   return `${egp} EGP = ${(egp / 30).toFixed(2)} USD`;


   }}
  // لما عملت getter هنا منفعش  get egp(){
  //    return
  // }
//  getCurrency(amount){
//   amount+=egp
//   return `egyptian money ${amount}`
//  }

}


//let conV= new Converter(10,)

//console.log(conV.getCurrency())// undefined
console.log(Converter.toUsed(100))// undefined

//=============================================
//5
class Screen{
   constructor(size){
      this.size=size
   }
}

let scrObj= new Screen()

class Tv {
   constructor(brand,Screen){
      this.b=brand;
      this.sc=Screen
   }
   description(){
     return`"${this.b} TV with ${this.sc} screen"` 
   }
}

let tvObj=new Tv ('Samsung','55-inch')
console.log(tvObj.description())

//============================================
//1 Tasks Abot Static OOP
class Utils{
   static capitalize(str){
      // return first letter Capital and the rest r small
   return str[0].toUpperCase()+str.slice(1).toLowerCase()
   
   }
   static isEmail(str){
      // return true if str has @
     return str.split('').some((el)=>el=='@')
   }

}

console.log(Utils.capitalize("noura")); // "Noura"
console.log(Utils.isEmail("noura@example.com")); // true

//======================================
//2
class Visitor {
   static count = 0
Visitor(){
return count++
   }
  static getCount(num){
   num+=count
return `Total Visitors : ${num}`
  }

}
new Visitor(); // دى تعتبر اية ؟دالة ولا خاصية !! ولا بتعبر عن اية
new Visitor();
console.log(Visitor.getCount(1)); // 2
//========================================
//3

class Person{
static createAdult(name, age){
   if(age >=18){
      return `The Name:${name} , Age:${age}`
   }else{
      return null
   }
}
}

let pE = Person.createAdult("Lina", 20);// مش المفروض تكون new Person('lina' ,20)
console.log(pE); // كائن فيه الاسم والسن

let kid = Person.createAdult("Adam", 12);
console.log(kid); // null
//=======================================
//4
class AppConfig{
   // المطلوب مكنش واضح 
}

//=========================================
//ِAdvanced Tasks About Static OOP
//1
class Calculator{
   static square(n){
     // return square number
     return n**2
   }
   static average(arr){
   // return average nums
   let narr= arr.reduce((acc,curr)=>{
      return acc+ curr
   },0)/arr.length
   return narr
   }
}


console.log(Calculator.square(5))
console.log(Calculator.average([10, 20, 30]))

//==========================================
//2
/*
✅ المسألة 2: Static + Validation
اعملي كلاس اسمه Validator فيه:

دالة static isPhone(str) ترجع true لو الرقم بيتكون من 11 رقم.

دالة static isStrongPassword(str) ترجع true لو الباسورد:

أطول من 6


*/

class Validator {
 static isPhone(str){
// return true if number has 11 charachter
return Array.from(str).length === 11 ? true : 'Unvalied Number'
 }

static isStrongPassword(str){
  // return true if password longer than 6  
  return (str.trim().split('').length >= 6) && (str.trim().split('').some((el)=>el>='a' || el <='z'))  ? true : 'Check Password'
}
}
console.log(Validator.isPhone("01012345678"))
console.log(Validator.isStrongPassword("pass123"))
//==============================================
//3
/*
✅ المسألة 3: Static + Counter (مع Reset)
اعملي كلاس اسمه Tracker فيه:

خاصية static count = 0

دالة static increment() تزود العداد وتعرض القيمة

دالة static reset() تصفر العداد وتعرض رسالة "Reset Done"

*/

class Tracker {
   static count=0;
//constructor(inc){
//inc=Tracker.count++
//}
   static increment(){
      // return increasing count & show value

return Tracker.count++ 
   }

   static reset(){
      // return count zero & showing message 'Reset Done'
count=0
      return `${count} Reset Done`
   }
}

console.log(Tracker.increment()); // 1
console.log(Tracker.increment()); // 2
console.log(Tracker.reset()); // Reset Done
console.log(Tracker.increment()); // 1

//==============================================
//4
/*

✅ المسألة 4: Static + Multiple Classes
اعملي كلاس Circle فيه:

خاصية radius

دالة static area(radius) ترجع مساحة الدائرة

اعملي كلاس Square فيه:

خاصية side

دالة static area(side) ترجع مساحة المربع
*/

class Circle{
   constructor(raduis){

   }
   static area(radius){
      // return circle radius \\ (22*(r)2)/7 
      return (((radius **2 * 22)/7).toFixed(2))
   }
}
class Square{
   constructor(side){

   }
   static area(side){
     // return square area
     return side* side
   }
}

console.log(Circle.area(10)); // 314.15
console.log(Square.area(5)); // 25

//==============================================
//5
/*
✅ المسألة 5: Static + Factory Pattern
اعملي كلاس UserFactory فيه:

دالة static createAdmin(name) ترجع كائن فيه name و role: "admin"

دالة static createGuest(name) ترجع كائن فيه name و role: "guest"
*/

class UserFactory{
  
  static createAdmin(name) {
return {name: name,role:'admin'}
  }
 
}

let admin = UserFactory.createAdmin("Nour");
console.log(admin); // { name: "Nour", role: "admin" }


//==============================================
//7
class Item{
     static counter =0 ;
  constructor(name){
   this.n=name
  }
   getInfo(){
      Item.counter++
      return` ID: ${Item.counter} - Name:${this.n}`

   }
}

new Item("Sugar").getInfo(); // "ID: 1 - Name: Sugar"
new Item("Tea").getInfo(); // "ID: 2 - Name: Tea"

console.log(new Item("Sugar").getInfo()) // "ID: 3 - Name: Sugar" طلعها كدا
// جيت حطتها لوحدها منفعتش لازم new عاوزة اعرف الكيفية بتشتغل ازاى واية الحجات اللى متنفعش 
console.log(new Item("Tea").getInfo())// "ID: 4 - Name: Tea" طلعها كدا
//================================================
//8

class ApptConfig{

static theme = "light";

static setTheme(val){
ApptConfig.theme = val
}
static getTheme(){
   // ترجع "Current Theme is: light"
return `Curren Theme is:${ApptConfig.theme}`
}

}

console.log(ApptConfig.getTheme()); // "Current Theme is: light"
ApptConfig.setTheme("dark");
console.log(ApptConfig.getTheme()); // "Current Theme is: dark"

//================================================
//9
class NotificationFactory{
  
   static createEmail(to){
//{ type: "email", to: "user@example.com" }
return {type:'email',to:to}

   }
static createSMS(to){
   //{ type: "sms", to: "0123456789" }
return {type:'sms',to:to}
}}


console.log(NotificationFactory.createEmail("user@example.com"))

console.log(NotificationFactory.createSMS("0123456789"))

//===================================================
//10

class Temperature{

   static toCelsius(f){
// converting from fehrnhite to celesius
return Number(((f-32)/1.8).toFixed(2))
   }
   static toFahrenheit(c){
     // converting from fehrnhite from celesius
     return (c * 9/5) + 32
   }

}
console.log(Temperature.toCelsius(100)); // 37.78
console.log(Temperature.toFahrenheit(0)); // 32

//=================================================
//11
class Logger{
   static log(msg){
//LOG: msg
return `log: ${msg}`
   }
static error(msg){
   //ERROR: msg
   return `ERROR: ${msg}`
}
}

console.log(Logger.log("User created"));
console.log(Logger.error("Connection failed"));

//===================================================
//Tasks About Encapsulation OOP

class Countr{
   #co=0;
   constructor(count){
      count= this.#co;
      // لية لما عملت العكس كان بيطلعلى NaN ?
   }
   increment(){
      // +1
      //مش عارفة اعملها 
     // return //isNaN(this.#co)? this.#co++ : ''
      return count++
   }
   decrement(){
      //-1
     // return this.#co--
return count>0 ? count-- : 'Cant decrese than zero'
   }
getCount(){
return count
}
}

let c = new Countr();
c.increment();
c.increment();
console.log(c.getCount()); // 2
c.decrement();
console.log(c.getCount()); // 1
c.decrement();
c.decrement(); // مش لازم تنقص عن 0
console.log(c.getCount()); // 0

//===============================================

//2
/*
class Uzer {
   #em
   #pass
   constructor(email,password){
//this.#em= email; مش بيشتغلوا لية !!
//this.#pass
this.#em= email
this.#pass= password
   }
  setEmail(val){
   // check '@'   
  return val = this.#em.split('').some((el)=>el.includes('@')) ? this.#em : 'Check email'
  } 
  setPassword(val){
   // if it has more than 6 character
  return val= this.#pass.split('').length>6 ? this.#pass : 'Check password'
  }
  getInfo(){
   //"Email: nour@example.com - Password: ******"
return `Email:${this.#em} - Password:${this.#pass}`
  }

}

let obj=new Uzer('nour@example.com','12346789')

console.log(obj.getInfo())
 */

//===================================================
// exercise 

class BooIok{
   #title;
constructor(title){
   this.title= title
}

   set title(val){
if(!val){
   console.log('empty title')
}else{
this.#title= val

}
   }
   get title(){
return this.#title 
   }
}

let tiTlle = new BooIok('Title')
console.log(tiTlle.title)

//====================================================

// rest of tasks
//3

class Product {
  #name;
  #price ;

  constructor(name , price){
   this.name= name;
   this.price= price;
  }

  set price(val){
   if(val>0){
      this.#price= val
   }else{
      console.log('wrong price')
   }}
    applyDiscount(percent){
      return ((this.price)*(percent))/100
    }
    getInfo(){
      return `Proudct:${this.name} - price:${this.price}`
    }
  
  }

let pY = new Product("Laptop", 5000);
pY.applyDiscount(10);
console.log(pY.getInfo()); // Product: Laptop - Price: 4500


//=====================================

class Biink {
   constructor(title ,author,year){
      this.t=title
      this.a=author
      this.y=year

   }
   getInFo(){
      return `Book:${this.t} by ${this.a}(${this.y})`
   }
   isRecent(){
     // this.y =yr
      if(this.y > 2020){
         return true
      }else{
         return 'its old'
      }
   }
}

const bkK= new Biink('Stay Strong','NauRaa',2019)
console.log(bkK.getInFo())
console.log(bkK.isRecent())

//==========================================









//==============================================
//3

class EEmployee{
   constructor(name,salary){
   this.n=name;
   this.s=salary;
   }
   getAnnualSalary(){
      return `Annual Salary is:${+(this.s)* 12}`
   }
}
class ManagDer extends EEmployee{
   constructor(name ,salary,bonus){
      super(name,salary)
      this.b=bonus
   }
   getTotalSalary(){
      return `${(this.s *12) +this.b}`
   }
}
const emp=new EEmployee('Nauraa',10000)
const mnG=new ManagDer('Ahmed',5000,10)

console.log(emp.getAnnualSalary())
console.log(mnG.getTotalSalary())

//==================================================
//4

class Uszer {
  #e;

  constructor(email) {
    this.emaIl = email;  // بيستدعي setter
  }

  set emaIl(val) {
    if (!val.includes('@')) {
      console.log('Invalid Email');
    } else {
      this.#e = val;
    }
  }

  get emaIl() {
    return this.#e;
  }
}

let uXz = new Uszer('nauraa1009@gmail.com');
console.log(uXz.emaIl); // undefined لأنه Invalid Email

//=======================================================
//Assaignment 
//📘 امتحان شامل مراجعة JavaScript (12 مسألة)

document.getElementById('hehe').style.color='red'
document.getElementById('hehe').style.fontWeight='bold'

//1
let numeros = [10, 25, 30, 5, 15, 40];
// filtering numbers more than 15
const filterdNumeros= numeros.filter((el)=>el>15)
console.log(filterdNumeros)  // answer 1
// Doubling numbers 
let mapNumeros=filterdNumeros.map((el)=>el*2)
console.log(mapNumeros)// answer 2
// reducing double array
console.log(mapNumeros.reduce((acc,curr)=>{
return acc +curr
},0)) // answer 3

// Filtered: [25, 30, 40]
// Doubled: [50, 60, 80]
// Sum: 190

//=========================================
//2
let prodIcts = [
  { name: "Laptop", price: 4000 },
  { name: "Mouse", price: 200 },
  { name: "Keyboard", price: 500 }
];

const changedArray =prodIcts.map((el)=> el.price < 4000 == true ? el : false).filter((c)=>c!=false).map((el)=>el.name)
console.log(changedArray)
/*
console.log(prodIcts.reduce((acc,curr)=>{
if(acc[curr.price] !==4000){
return acc.curr= (acc[curr.name])
}
},[])) كنت  بحاول اعملها reduce
*/


// output ["Mouse", "Keyboard"]

//=========================================
//3
class Catr {
   constructor(model,year){
      this.m=model;
      this.y= year
   }
   getInfo(){
      return `Model:${this.m} - Year:${this.y}`
   }
}
let caTr = new Catr("Toyota", 2023);
console.log(caTr.getInfo()); 

// Model: Toyota - Year: 2023

//=========================================
//4

class Usuer{
   #e
   constructor(email){
      this.e=email
   }
   set email(val){
this.#e=val
if(val.includes('@')){
   return this.#e
}else{
   return`Unvalid Email`
}
   }
   get email(){
      return this.#e
   }
}
let u = new Usuer();
u.email = "test@site.com";
console.log(u.email); // test@site.com

//=========================================
//5

 class Personn{
   constructor(name,age){
      this.n= name;
      this.a=age;

   }
   getInfo(){
      if(this.a <0){
         return `Wrong`
      }else{
   return`"Name: ${this.n} - Age: ${this.a}"`

      }
   }
 }
let pR= new Personn('Nour',25)
console.log(pR.getInfo())
//===========================================
//6
class Ittem{

constructor(item,price){
  this.it=item
  this.p=price
   }
applyDiscount(percent){
  return this.p -= (this.p*percent)/100

}}

let iO = new Ittem("Chair", 1000);
iO.applyDiscount(10); 
console.log(iO.p); // 900
//============================================
//7
class MathHelpper{
   static square(num){
   return num**2
   }
   static cube(num){
   return num**3
   }
}
console.log(MathHelpper.square(3)); // 9
console.log(MathHelpper.cube(2));   // 8

//============================================
//8


class Aniimal {
   constructor (name,sound){
      this.n=name;
      this.s=sound;
   }
   makeSound(){
      return this.s
   }
}

class Dog extends Aniimal{
   constructor(name,sound){
      super(name,sound)
   }
makeSound(){
   return `"Dog barks!"`
}}
let dI = new Dog("Boby");
console.log(dI.makeSound()); // Dog barks!

//===========================================

//9

class BankiAccount{
  #b
   constructor(balance){
      this.#b=balance
   }
   deposit(val){
   return this.#b+=val

   }
   withdraw(val){
      return this.#b-=val
   }
   getBalance(){
      return this.#b
   }
}
let bI = new BankiAccount(1000);
bI.deposit(500);
bI.withdraw(300);
console.log(bI.getBalance()); // 1200

//===========================================
//10

class UserFactorty{
   static createAdmin(name){
      return { role: "admin", name }
   }
   static createGuest(){
      return { role: "guest" }
   }
}

console.log(UserFactorty.createAdmin('Nauraa'))
console.log(UserFactorty.createGuest())

//============================================
//11


class Rectangle{
   constructor (widht,height){
      this.w=widht;
      this.h= height;
   }
  getter(){
   return this.w * this.h
  }
}
let area =new Rectangle(10,5)
console.log(area.getter())
//=============================================
//12

class TodoItem{
   constructor(title, done){
      this.t= title;
      this.d=done;
   }
   toggle(){
      this.d= false
      if(!this.d){
      this.d='Done'
     return this.d=true
      }
   }
   getInfo(){
   return `"Task: ${this.t} - Status: ${this.d}"`
}
}

let toD= new TodoItem('Learn JS','Done')

console.log(toD.getInfo())
//==========================================================
//🧠 امتحان JavaScript شامل – 20 سؤال

document.getElementById('heha').style.color='red'
document.getElementById('heha').style.fontWeight='bold'

//1
let nuUms = [5, 10, 25, 30, 8, 40];

// Filtering nums more than 20
console.log(nuUms.filter((el)=>el>20))

// Doubling
console.log(nuUms.filter((el)=>el>20).map((el)=>el*2))

// Total
console.log(nuUms.filter((el)=>el>20).map((el)=>el*2).reduce((acc,curr)=>{
return acc + curr
},0))

//==========================================
//2
let itemsZ = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 40 },
  { name: "Bag", price: 150 }
];
// filter price <100
console.log(itemsZ.filter((el)=>el.price<100))
// creating arry with products name by map
console.log(itemsZ.filter((el)=>el.price<100).map((al)=>al.name))

// ['Pen','Notebook']

//==========================================
//3
class Cvar {
   constructor(model,year){
      this.model=model;
      this.year=year;
   }
   getInfo(){
      return `"Model: ${this.model} - Year: ${this.year}"`
   }

}

let myCar= new Cvar('Toyota',2024)

console.log(myCar.getInfo())

//=========================================
//4
class Yzer {
   #email
  constructor(email){
   this.email=email
  } 

set email(val){

this.#email=val

if(val.includes('@')== true){
console.log('Valid email')
}else{
 console.log(`Wrong email`)
}

  }
  get email(){
   return this.#email
}
}
let eMm = new Yzer('nauraa1009@gmail.com')
console.log(eMm.email)

//==========================================
//5

class Persona {
   constructor(name,age){
      this.name=name;
      this.age=age
   }
   propPersona(){
      if(this.age<0){
         return 'Wrong Age'
      }else{
         return `"Name: ${this.name} - Age: ${this.age}"`
      }
   }
}

console.log(new Persona('NauRaa',30)) // answer
const prp=new Persona('NauRaa',30)
console.log(prp.propPersona()) // another answer

//============================================
//6
class Ifem{
   constructor(name,price){
      this.name=name;
      this.price=price
   }
   applyDiscount(percent){
      return this.price - (this.price*percent)/100
   }

}

let ifm = new Ifem('Laptop',15000)
console.log(ifm.applyDiscount(10))

//============================================
//7
class MathHelperr{
   static square(num){
   return num**2
   }
   static cube(num){
   return num**3
   }
}

console.log(MathHelperr.square(5))
console.log(MathHelperr.cube(9))

//===========================================
//8
class Haskey {
constructor(name,sound){
 this.name=name;
 this.sound=sound;  
}
makeSound(){
   return this.sound
}}

class Ddog extends Haskey{
   makeSound(){
      return `"Dog barks!"`
   }
}

let dD=new Ddog()

console.log(dD.makeSound())

//===========================================
//9
class Banckaccount{
   #balance;
constructor(balance){
   this.#balance=balance // عاوزة اعرف اية الفرق بين انى اعملها كدا زى ماعملاها وانى اعملها كدا this.balance=balance
}
 deposit(val){
   this.#balance+=val
  
}
 withdraw(val){
   if(this.#balance<0){
      return `Can't Do that`
   }else{
this.#balance-=val

   }
}
 getBalance(){
return this.#balance
   }
}
let bankere= new Banckaccount(15)
bankere.deposit(10)
bankere.withdraw(5)
bankere.deposit(1000)
console.log(bankere.getBalance())
//===================================================
//10
class Yserfactory{

   static createAdmin(admin){
      this.admin=admin
   return `Hi ${this.admin}`
   };
   static createGuest(guest){
         this.guest=guest
   return `Welcome ${this.guest}`
   }
}

console.log(Yserfactory.createAdmin('NauRaa'))
console.log(Yserfactory.createGuest('Romy'))
//================================================
//11
class Rectange{
   #area
   constructor(width,height){
      this.width=width;
      this.height=height
   }
   set area (val){
    //  (this.width * this.height) = this.#area
      this.#area =val
  if( (this.width * this.height) <= 0) {
   return `be sure of values (width & height)`
  }
   }
   get area(){
return this.width * this.height

   }
}
let aRRea= new Rectange(5 , 10)
console.log(aRRea.area)

//===============================================
//12
class TodoItemm{
   constructor(done,title){
      this.done=done;
      this.title=title
   }
   toggle(val){ 
      this.done=val
      if(!val){
      val=!val
      }
   }
   getInFo(){
   return this.done
   }
}// مطلوب المسألة والمخرجات مش واضحة ليا

console.log(new TodoItemm('Done','Title'))

//================================================
//13

// names more than 4 character

let naNes = ["Nour", "Ali", "Nada", "Mostafa"];

console.log(naNes.filter((el)=>el.length >4))

//================================================
//14

let letters = ["a", "b", "c", "d"];

console.log(letters.reverse())


//================================================
//15

class Biko {
   constructor(title,author ,year){
      this.title=title;
      this.year=year;
      this.author=author;
   }
   isRecent(){
      if(this.year>2020){
         return `Scientist ${this.author} , his book ${this.title } And true its ${this.year}`
      }else{
         return`Not True it's older than 2020`
      }
   }
}


let bko= new Biko('Electricity','Nikola Tisla',2025)
console.log(bko.isRecent())
//=================================================
//16

// مش مدينى معطيات ومخرجات كفايا


//=================================================
//17


//console.log(Object.prototype.constructor('Nauraa'))
console.log((Object.values(new String('Nora'))).map((el)=>el.split('').length).join())


//==================================================
//18

// emails have @

let emails = ["test@gmail.com", "wrongemail", "info@yahoo.com"];

console.log(emails.filter((el)=>el.split('').includes('@')))
//====================================================
//19

class SecureProduct{
   #price;
   constructor (price){
      this.#price=price
   }

   set price(val){
   if(val<=0){
     console.log(`Not enough Price`)
   }else{
       this.#price=val

   }}

   get price(){
      return this.#price
   }}
const setin = new SecureProduct(-10)
setin.price=0 // اشمعنى هنا اشتغلت
   console.log(setin.price) // طلعتلى -10 , set مشتغلتش 
//====================================================
//20




//console.log([ '0', a , '1',b ,'2' , c] = fruIts)

class Friuts{
   constructor([a,b,c]){
      this.a=a
      this.b=b
      this.c=c
   }
 Obi(){
   return ({0:this.a , 1:this.b , 2:this.c})
 }
}
let fruIts = new Friuts(["apple", "banana", "mango"]);

console.log(fruIts.Obi())

/*
{
  0: "apple",
  1: "banana",
  2: "mango"
}

*/

//====================================================
//🧠 امتحان JavaScript شامل in console & DOM

document.getElementById('heho').style.color='red'
document.getElementById('heho').style.fontWeight='bold'

//1
class Proiduct {
  #price;

  constructor(price) {
    this.price = price; // استخدمي الـ setter هنا بدل من التعيين المباشر
  }

  set price(val) {
    // المطلوب: امنعي إدخال قيمة أقل من 1، واعملي console إذا حصل كده
  if(val<1){
   console.log('Wrong Price')
  }else{
   this.#price=val
  }}

  get price() {
    return this.#price;
  }
}

let item = new Proiduct(-5);
//item.price=-1
console.log(item.price); // المفروض يطلع undefined أو ما يتغيرش السعر

//====================================
//2
class Usrer {
  #username;

  constructor(name) {
    // المطلوب: لو الاسم أقل من 3 حروف، ادي رسالة خطأ
    // ولو الاسم كويس، خزنيه في #username
    this.name=name
  }
// هعمل set
set name(val){
   if(val.split('').length < 3){
      console.log('Wrong name')
   }else{
      this.#username=val
   }
}
  get name() {
    return this.#username;
  }
}

let us1 = new Usrer('No');
let us2 = new Usrer('Noura');

console.log(us1.name); // undefined أو خطأ
console.log(us2.name); // Noura

//======================================
//3
function saferDivide(a, b) {
  // المطلوب: استخدمي try/catch علشان تمنعي القسمة على صفر
  // لو حصلت، ارجعي "Can't divide by zero"
  // غير كده ارجعي ناتج القسمة
  this.a=a;
  this.b=b;
  if(this.a <=0 || this.b<=0){
   return `Can't divide by zero`
  }else{
 return this.a / this.b
  }
}

console.log(saferDivide(10, 2)); // 5
console.log(saferDivide(10, 0)); // Can't divide by zero

//=======================================
//4
let emailoInput= document.getElementById('emailoInput')
let btnSub= document.getElementById('subm')

btnSub.onclick= function(){
  let inputV= emailoInput.value.split('')
   if(inputV.includes('@')){
      return window.alert('Valied Email')
   }else{
   return window.alert('InValied Email')

   }
}

//========================================
//5

let bnlist= document.getElementById('bnlist')
let itemGList= document.querySelector('#itemGList')
let couMnt=1
bnlist.addEventListener('click',function(){
 let newLi=  document.createElement('li')
 itemGList.append(newLi)
 newLi.textContent=`Hi im a new List ${couMnt}`
couMnt++

// dynamic way with a same text by using querySelector
})

//==========================================
//6
let liveInput= document.getElementById('liveInput')
let liveText= document.getElementById('liveText')

liveInput.addEventListener('keyup',function(){
   liveText.textContent= liveInput.value
})

//==========================================
//7
//مش عرفاها 

//==========================================
//8
let seCtionB= document.querySelector('#seCtion button')

seCtionB.addEventListener('click',function(){
 window.setTimeout(function(){
   window.alert("You've been Waited 3 second")
 },3000)
})

//==========================================
//9
let sectIntB= document.querySelector('#sectInt button')
let sectIntD= document.querySelector('#sectInt div')
let numCount= 1
sectIntB.addEventListener('click',function(){
   window.setInterval(function(){
sectIntD.textContent=`${numCount}`
numCount++
   },1000)
})
//==========================================

document.getElementById('hehi').style.color='red'
document.getElementById('hehi').style.fontWeight='bold'

//1

let toggileStatus= document.getElementById('toggileStatus')
let staitus= document.getElementById('staitus')
let isTtoggle = false
toggileStatus.addEventListener('click',function(){
   if(!isTtoggle){
      staitus.textContent='Online'
      return isTtoggle=true
   }else{
   staitus.textContent='Offline'
   return isTtoggle=false

   }
})

//=============================================
//2
let pasFsInput= document.getElementById('pasFsInput')
let togglecPass= document.getElementById('togglecPass')
let isTogg=false;

 togglecPass.addEventListener('click',function(){
   if(!isTogg){
pasFsInput.type='text'
togglecPass.textContent='Hide'
return isTogg=true

   }else{
      pasFsInput.type='password'
togglecPass.textContent='Show'
return isTogg=false
   }})
//==============================================
//3
let lEngth= document.getElementById('length')
let width= document.getElementById('width')
let checkwShape= document.getElementById('checkwShape')
let shapetResult= document.getElementById('shapetResult')


checkwShape.addEventListener('click',function(){
  
   if(lEngth.value == width.value){
   shapetResult.textContent="It's A Square" 
   shapetResult.style.fontWeight='bold' 
   }else{
   shapetResult.textContent="It's A Rectangle" 
   shapetResult.style.fontWeight='bold' 

   }if(lEngth.value <=0 || width.value <=0){
   shapetResult.textContent="Wrong Values" 
   shapetResult.style.fontWeight='bold' 
   shapetResult.style.color='red' 
     
   
}})

//=================================================
//4
 let deleteoIndex = document.getElementById('deleteoIndex');
    let deletoeBtn = document.getElementById('deletoeBtn');
    let listItemsz = document.getElementById('listItemsz');

deletoeBtn.addEventListener('click', function () {
      let index = Number(deleteoIndex.value) - 1; // نحول للـ 0-based
      let items = listItemsz.children;
      let message = document.createElement('p')
      listItemsz.after(message)
      if (index >= 0 && index <= items.length) {
        items[index].remove();
        message.textContent = '';
      } else {
        message.textContent = 'There is no item with this number!';
      }

      deleteoIndex.value = '';
    });

//==================================================
//5
let startiCountdown= document.getElementById('startiCountdown')
let countidown= document.getElementById('countidown')
let minCount=10

startiCountdown.onclick=function(){
countidown.textContent=minCount
minCount--
}

//==================================================
//6
let numberskInput= document.getElementById('numberskInput')
let filtekrEven= document.getElementById('filtekrEven')
let evenkResult= document.getElementById('evenkResult')

filtekrEven.addEventListener('click',function(){
let inputValue = numberskInput.value.split(',').map((el)=>+el).filter((ol)=>ol % 2==0 && ol!==' ')
evenkResult.textContent= `Positive Number:${inputValue.join(',')}`
})

//==================================================
//7
let wordJListInput= document.getElementById('wordJListInput')
let addJWords= document.getElementById('addJWords')
let wordJList= document.querySelector('#wordJList')
/*
addJWords.addEventListener('click',function(){
let val=  wordJListInput.value.split(' ')
console.log(val.length)
let ind= Math.floor(Math.random(val.length))
console.log(ind)
wordJList.forEach((el)=>{
   let nwElm= document.createElement('li')
   el.append(nwElm)
console.log(el)
console.log(nwElm)
nwElm.textContent=val[ind]
/*
for(let i= nwElm ; i<=val.length;i++){
i.textContent=val[0]

}

})// معرفتهاش

}) مش عارفة اوزع كل اندكس على ليستة
*/

//================================================
//8 
// 2:12 pm
/*
let searchInput= document.getElementById('searchoInput')
let searchList= document.querySelectorAll('#searchoList li')

console.log(searchList)


searchInput.addEventListener('input',function(){
   let val= searchInput.value.split(/\s+/)
   searchList.forEach((el)=>{
      if(val == el.textContent){
     return    el.style.backgroundColor='green'
      }
   })
}) cant answer it 
2:24
*/
//=====================================================
//9
//2:29pm
let editabrleText= document.getElementById('editabrleText')
let editrInput= document.getElementById('editrInput')
let editrBtn= document.getElementById('editrBtn')
let isTsw=false

editrBtn.onclick=function(){
if(!isTsw && editrInput.value !== editabrleText.textContent ){
   editabrleText.textContent= 'Hi There'
   isTsw=true
}else{
  editabrleText.textContent= 'Hello'
   isTsw=false 
}
}

//=====================================================
//10
//2:35 pm

let firsutText= document.getElementById('firsutText')
let secoundText= document.getElementById('secoundText')
let merugeBtn= document.getElementById('merugeBtn')
let mergeduResult= document.getElementById('mergeduResult')

merugeBtn.onclick= function(){
 mergeduResult.textContent=  firsutText.textContent+ secoundText.textContent
firsutText.textContent=''
secoundText.textContent=''

}

//================================================
/*
    <button data-price="50">Add to Cart</button>
لو ادامى حاجة زى دى انادى عليها ازاى !؟
*/
//////////////////////////////////////////////////
//11

let div1= document.getElementById('div1')
let divbtn1= document.querySelector('#div1 button')
let div2=document.getElementById('div2')
let divbtn2= document.querySelector('#div2 button')
let div3=document.getElementById('div3')
let divbtn3= document.querySelector('#div3 button')
let totaloAmount= document.getElementById('totaloAmount')
//console.log(div1)
let totTal=0

let ob1 =divbtn1.addEventListener('click',function(){
  totTal+= 20
  totaloAmount.textContent=totTal

})

let ob2=divbtn2.addEventListener('click',function(){
   totTal+= 35
   totaloAmount.textContent=totTal

})

let ob3= divbtn3.addEventListener('click',function(){
   totTal+= 50
   totaloAmount.textContent=totTal

})


































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































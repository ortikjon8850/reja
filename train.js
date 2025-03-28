// TASK -F
//function findDoublers(str) {
  // const charSet = new Set();
   
  // for (let char of str) {
   //    if (charSet.has(char)) {
      //     return true; // Agar harf allaqachon uchragan bo'lsa, true 
    //   }
      // charSet.add(char);
  // }
   
 //  return false; // Agar hech qanday harf takrorlanmasa, false 
//}

// Test:
//console.log(findDoublers("hello")); // true
//console.log(findDoublers("world")); // false
//console.log(findDoublers("apple")); // true
//console.log(findDoublers("abcde")); // false

// TASK -E
//function getReverse(str) {
 //  return str.split('').reverse().join('');
//}

// Test qilish
//console.log(getReverse("hello")); // "olleh"
//console.log(getReverse("world")); // "dlrow"
//console.log(getReverse("JavaScript")); // "tpircSavaJ"
//console.log(getReverse("MAX")); // "XAM"

// TASK -D
//function checkContent(str1, str2) {
   
  // return new Set(str1).size === new Set(str2).size && [...new Set(str1)].sort().join('') === [...new Set(str2)].sort().join('');
//}


//console.log(checkContent("mitgroup", "gmtiprou"));  // true qaytarishi kerak
//console.log(checkContent("hello", "world"));       // false qaytarishi kerak
//console.log(checkContent("abc", "cab"));           // true qaytarishi kerak
//console.log(checkContent("test", "tess"));         // false qaytarishi kerak

// TASK -C
// class Shop {
   //constructor(non, lagmon, cola) {
     //  this.products = {
      //     non: non,
       //    lagmon: lagmon,
        //   cola: cola
       //};
   //}

   //logTime() {
      // const now = new Date();
      // return `hozir ${now.getHours()}:${now.getMinutes()}da`;
  // }

  // qoldiq() {
      // return `${this.logTime()} ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
  // }

   //sotish(mahsulot, miqdor) {
  //     if (this.products[mahsulot] !== undefined && this.products[mahsulot] >= miqdor) {
         //  this.products[mahsulot] -= miqdor;
      //     console.log(`${this.logTime()} ${miqdor}ta ${mahsulot} sotildi.`);
     //  } else {
       //    console.log(`${this.logTime()} Sotish amalga oshmadi, yetarli ${mahsulot} yo‘q!`);
      // }
  // }

 //  qabul(mahsulot, miqdor) {
     //  if (this.products[mahsulot] !== undefined) {
      //     this.products[mahsulot] += miqdor;
       //    console.log(`${this.logTime()} ${miqdor}ta ${mahsulot} qabul qilindi.`);
     //  } else {
      //     console.log(`${this.logTime()} Noto'g'ri mahsulot nomi!`);
     //  }
 //  }
//}

// Test qilish:
//const shop = new Shop(4, 5, 2);
//console.log(shop.qoldiq());
//shop.sotish('non', 3);
//shop.qabul('cola', 4);
//console.log(shop.qoldiq());

// TASK -B
// function countDigits(str) {
   // return (str.match(/\d/g) || []).length; 

// } 
// console.log(countDigits("3n3nrwmwnrww24563")); 

// TASK -A
// function countLetter(letter, word) {

   // const array = [...word];  // so'zni belgilar qatoriga aylantirish
  //  const count = array.filter(belgi => belgi === letter).length;  // harflarning yuzaga kelishini sanash
  //  return count;
//}

//console.log(countLetter("a", "ajablanarli"));  // chiqish: 4

//console.log("Jack Ma maslahatlari");
//const list = [
    //"yaxshi talaba boling",  // 0 - 20
   // "togri boshliq tanlang va koproq hato qiling",  // 20 - 30
   // "ozingiz ishlashingizni boshlang",  // 30 - 40
  //  "siz kuchli bolgan narsalarni qiling",  // 40 - 50
  //  "yoshlarga investitsiya qiling",  // 50 - 60
  //  "endi dam oling, foydasi yoq endi",  // 60
//];

// define via CALLBACK functions
//function maslahatBering(a, callback) {
    //if (typeof a !== "number") callback("insert a number", null);
    //else if (a <= 20) callback(null, list[0]);
    //else if (a > 20 && a <= 30) callback(null, list[1]); 
   // else if (a > 30 && a <= 40) callback(null, list[2]); 
    //else if (a > 40 && a <= 50) callback(null, list[3]); 
    //else if (a > 50 && a <= 60) callback(null, list[4]); 
    //else {
       // setInterval(function() {
          //  callback(null, list[5]);   
      // }, 1000);
       //  callback(null, list[5]); 
   // }
//}
 // console.log("passed here 0");
//maslahatBering(65, (err, data) => {
   // if(err) console.log('ERROR:', err);
//else {
  //  console.log('javob:', data);  
 //   }
//});
//console.log("passed here 1");

// CALL via ASYNC functions
//async function maslahatBering(a) {
    //if (typeof a !== "number") throw new arror("insert a number");
    //else if (a <= 20) return list[0];
    //else if (a > 20 && a <= 30) return list[1]; 
    //else if (a > 30 && a <= 40) return list[2];  
    //else if (a > 40 && a <= 50) return list[3]; 
    //else if (a > 50 && a <= 60) return list[4]; 
    //else { 
       //return list[5]; 
      // return new Promise((resolve, reject) =>{
        //setTimeout(() =>{
          // resolve(list[5]);
       // },   5000);
      // });
    //  setInterval(() =>{
    //    resolve(list[5]);
     //},   5000);
    //});

       // setTimeout(function() {
         //   return list[5];   
       // }, 5000);
       // callback(null, list[5]); 
   // }
//}

// CALL via then & catch
//console.log("passed here 0");
//maslahatBering(65)
  //.then(data => {
   // console.log("javob:", data);
//})
//.catch((err) => {
 //   console.log("ERROR:", err)
//})
//console.log("passed here 1");
 
// CALL via async & await
//async function run() {
//let javob = await maslahatBering(65);
//console.log(javob);
//javob =await maslahatBering(65)
//console.log(javob);
//javob = await maslahatBering(41);
//console.log(javob);
//}
//run();

 // console.log("passed here 0");
//maslahatBering(65, (err, data) => {
    //if(err) console.log('ERROR:', err);
   // else {
   // console.log('javob:', data);  
   // }
//});
//console.log("passed here 1");


 //function maslahatBering(a, callback) {
   // if (typeof a !== "number") callback("insert a number", null);
   // else if (a <= 20) callback(null, list[0]);
   // else if (a > 20 && a <= 30) callback(null, list[1]); 
   // else if (a > 30 && a <= 40) callback(null, list[2]); 
   // else if (a > 40 && a <= 50) callback(null, list[3]); 
   // else if (a > 50 && a <= 60) callback(null, list[4]); 
   // else {
    //    setTimeout(function() {
      //      callback(null, list[5]);   
   //     }, 5000);
       // callback(null, list[5]); 
 //   }
//}
 // console.log("passed here 0");
//maslahatBering(65, (err, data) => {
 //   if(err) console.log('ERROR:', err);
 //   else {
 //   console.log('javob:', data);  
 //   }
//});
//console.log("passed here 1");

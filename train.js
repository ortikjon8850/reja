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

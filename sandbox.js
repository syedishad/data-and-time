//date
//  const now = new Date();
// console.log(now);

// // year ,month ,date
// console.log('yetFullYear:', now.getFullYear());
// console.log('yetMonth:', now.getMonth());
// console.log('yetHours:', now.getHours());

// //date  strings
// console.log(now.toDateString());
   

//time stamps
const before = new Date('21 october 2022 19:06');
const now = new Date();
console.log(now.getTime, before.getTime());

const diff = now.getDate() - before.getDate();
console.log(diff);
const mins = Math.round(diff/1000/60);
const hrs = Math.round(mins/60);
console.log(mins, hrs);
 console.log(`the blog was written ${hrs} ago!`);

 //converting timestamp into date objects
 const timestamp =  1666359360000;
 console.log(new Date(timestamp));

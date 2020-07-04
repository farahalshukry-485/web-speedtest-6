// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

let name=[];
greet(name);
function greet(name) {
if (name!==name) {
    console.log("hello"+ name)
}else {
    console.log("hello")
}
}

/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */

function isOdd(n) {
   if (n % 2 ===0) {
       return "true"
   } else if (n % 2 !==0) {
       return"fulse"
   }
}

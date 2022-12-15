// complete the given function

function palindrome(str){
      const len = str.length;

         // loop through half of the string
         for (let i = 0; i < len / 2; i++) {

             // check if first and last string are same
             const l = str[i];
             const r = str[len-1-i];
             if (l.toUpperCase() !== r.toUpperCase()) {
                 return false;
             }
         }
         return true;
}
module.exports = palindrome

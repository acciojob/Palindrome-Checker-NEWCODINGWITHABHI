// complete the given function

function palindrome(str){
      let revStr=str.split('').reverse().join('').toLowerCase();
	return str.toLowerCase()===revStr;
}
module.exports = palindrome

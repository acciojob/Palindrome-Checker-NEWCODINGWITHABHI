// complete the given function

function palindrome(str){
      let revStr=str.split('').reverse().join('');
	return str===revStr;
}
module.exports = palindrome

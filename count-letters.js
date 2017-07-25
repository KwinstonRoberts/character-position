function countLetters(str){
	var letters = {};
	
	str.split('').forEach(function(x){
		if(x!== ' '){
			if(exists(letters, x)){
				letters[x]++;
			}else{
				letters[x] = 1;
			}
		}	
	});
	return letters;
}

function exists(obj, key){
	var result = false;
	Object.keys(obj).forEach(function(x){
		if(x === key){
			result =true;
		}
	});
	return result;
}

console.log(countLetters('lighthouse in the house'));
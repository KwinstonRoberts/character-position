function countLetters(str){
	var letters = {};
	
	for(var i=0; i<str.length; i++){
		console.log(str[i]);
		if(str[i]!== ' '){
			if(exists(letters, str[i])){
				letters[str[i]].push(i);
			}else{
				letters[str[i]] = [i];
			}
		}	
	};
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
function addClassName(element, className){
	var classNames = element.className.split(' ');
	for(var i = 0; i < classNames.length; i++){
		if(classNames[i] === className){
			break;
		}
	}
	
	if(i === classNames.length){
		if(element.className !== ''){
			element.className += ' ' + className;
		}else{
			element.className = className;
		}
	}
}

function removeClassName(element, className){
	var classNames = element.className.split(' ');
	for(var i = 0; i < classNames.length; i++){
		if(classNames[i] === className){
			break;
		}
	}
	
	if(i !== classNames.length){
		classNames.splice(i, 1);
		element.className = classNames.join(' ');
	}
	
}
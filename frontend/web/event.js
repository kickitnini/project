Element.prototype.addEvent = function(type, func){
	var element = this;
	if(element.addEventListener){
		element.addEventListener(type, func);
	}else if(element.attachEvent){
		element.attachEvent('on' + type, function(){
			func.call(element);
		});
	}else{
		element['on' + type] = func;
	}
}

Element.prototype.stopPropagation = function(e){
	e = e || window.event;
	
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}

Element.prototype.preventDefault = function(e){
	e = e || window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}

Element.prototype.getTarget = function(e){
	e = e || window.event;
	return (e.target || e.srcElement);
}

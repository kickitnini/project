function animation(element, leftEnd, duration, interval){
	var leftStart = element.offsetLeft;
	var stepTmp = (leftEnd - leftStart)/(duration/interval);
	var step = Math.floor(stepTmp);
	if(step === 0){
		step = stepTmp > 0 ? 1 : -1;
	}
	element.timer && clearInterval(element.timer);
	
	element.timer = setInterval(function(){
		if(Math.abs(leftEnd - element.offsetLeft) <= Math.abs(step)){
			element.style.left = leftEnd + 'px';
			clearInterval(element.timer);
		}else{
			element.style.left = (element.offsetLeft + step) + 'px';
		}
	}, interval);
}

function changeSpans(spanDiv, spans, oldX, x, className, index){
				spans[oldX].setAttribute('class', '');
				spans[x].setAttribute('class', className);
				spanDiv.dataset[index] = x;
			}
			
function changeSpansBg(spanDiv, spans, oldX, x, oldData, data){
	spans[oldX].style.background = spans[oldX].getAttribute(oldData);
	spans[x].style.background = spans[x].getAttribute(data);
	spanDiv.dataset[index] = x;
}
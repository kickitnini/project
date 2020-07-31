
// ===========f-deal================
var outBox = document.querySelector('#f-deal>.block-190-275:last-child>.out-box');
var innerBox = document.querySelector('#f-deal>.block-190-275:last-child>.out-box>.inner-box');
var scrollSpans = document.querySelectorAll('#f-deal>.block-190-275:last-child>.s-scroll-bar>span');
var boxDiv =  document.querySelector('#f-deal>.block-190-275:last-child');
var blockBoxs =  document.querySelectorAll('#f-deal>.block-190-275:last-child>.out-box>.inner-box>div');
console.log(blockBoxs[0]);

var width = outBox.offsetWidth;
var DURATION = 800;			
var INTERVAL = 20;
// innerBox.style.left = '-180px';
boxDiv.dataset['span'] = '0';
boxDiv.addEvent('mouseover', function(){
	var target = this.getTarget();
	for(x = 0; x < scrollSpans.length; x++){
		if(target === scrollSpans[x]){
			var oldX = parseInt(boxDiv.dataset['span']);
			if(x !== oldX){
				changeSpans(boxDiv, scrollSpans, oldX, x, 'a-active', 'span');
				animation(innerBox, -width*x, DURATION * Math.abs(oldX - x), INTERVAL);
			}
		}
	}
									
});

var LINTERVAL = 4000;			
setTimeout(function(){
	var x = 0;
	var oldX = parseInt(boxDiv.dataset['span']);
	var realDuration = DURATION;
	if(oldX < scrollSpans.length - 1){
		x = oldX + 1;					 
	}else{
		x = 0;
		realDuration = ( scrollSpans.length-1 )*DURATION
	}
	changeSpans(boxDiv, scrollSpans, oldX, x, 'a-active', 'span');
	animation(innerBox, -width*x, realDuration * Math.abs(oldX - x), INTERVAL);
	// innerBox.removeChild(blockBoxs[oldX]);
	// innerBox.appendChild(blockBoxs[oldX]);
	setTimeout(arguments.callee, LINTERVAL);

}, LINTERVAL);


// ====================== content=====================



function blockScroll(blockNum, innerBox, ul, lis, width){
	var innerBox = blockNum.querySelector('.block-body>.ad-inner-box');
	var ul = blockNum.querySelector('.block-body>.ad-inner-box>ul');
	var lis = blockNum.querySelectorAll('.block-body>.scroll-bar>li');
	var width = innerBox.offsetWidth;
	
	var target = blockNum.getTarget();
	for(x = 0; x < lis.length; x++){
		if(target === lis[x]){
			var oldX = parseInt(blockNum.dataset['li']);
			if(x !== oldX){
				changeSpans(blockNum, lis, oldX, x, 'li-active', 'li');
				animation(ul, -width*x, DURATION * Math.abs(oldX - x), INTERVAL);
	
			}
		}
	}
}

function blockSelfScroll(blockNum, innerBox, ul, lis, width){
	var x = 0;
	var oldX = parseInt(blockNum.dataset['li']);
		if(oldX < lis.length - 1){
			x = oldX + 1;					 
		}else{
			x = 0;
		}
		changeSpans(blockNum, lis, oldX, x, 'li-active', 'li');
		animation(ul, -width*x, DURATION * Math.abs(oldX - x), INTERVAL);
}

function scroll(block){
	var innerBox = block.querySelector('.block-body>.ad-inner-box');
	var ul = block.querySelector('.block-body>.ad-inner-box>ul');
	var lis = block.querySelectorAll('.block-body>.scroll-bar>li');
	var width = innerBox.offsetWidth;
	console.log(ul)
	block.dataset['li'] = '0';
	block.addEvent('mouseover', function(){
		blockScroll(block, innerBox, ul, lis, width);
	});
	setInterval(function(){
		blockSelfScroll(block,innerBox, ul, lis, width);
	}, LINTERVAL);
}


var block1C1 = document.querySelector('#content-1>.block-39-45:first-child');
scroll(block1C1);

var block2C1 = document.querySelector('#content-1>.block-39-45:nth-child(2)');
scroll(block2C1);

var block3C1 = document.querySelector('#content-1>.block-39-45:nth-child(3)');
scroll(block3C1);



var leftSpan = block2C1.querySelector('.block-body>.rec');
console.log(leftSpan);
var rightSpan = document.querySelector('.block-body>.arrow-right');

// function ele(block){
// 	var innerBox = block.querySelector('.block-body>.ad-inner-box');
// 	var ul = block.querySelector('.block-body>.ad-inner-box>ul');
// 	var lis = block.querySelectorAll('.block-body>.scroll-bar>li');
// 	var width = innerBox.offsetWidth;
// 	return innerBox,ul,lis,width;
// }

function left(block){
	var innerBox = block.querySelector('.block-body>.ad-inner-box');
	var ul = block.querySelector('.block-body>.ad-inner-box>ul');
	var lis = block.querySelectorAll('.block-body>.scroll-bar>li');
	var width = innerBox.offsetWidth;
	var oldX = parseInt(block.dataset['li']);
	if(oldX > 0){
		var x = oldX - 1;
		changeSpans(block, lis, oldX, x, 'li-active', 'li');
		animation(ul, -width*x, DURATION * Math.abs(oldX - x), INTERVAL);
			
	}
}

function right(block){
	var innerBox = block.querySelector('.block-body>.ad-inner-box');
	var ul = block.querySelector('.block-body>.ad-inner-box>ul');
	var lis = block.querySelectorAll('.block-body>.scroll-bar>li');
	var width = innerBox.offsetWidth;
	var oldX = parseInt(block.dataset['li']);
	if(oldX < lis.length - 1){
		var x = oldX + 1;
		changeSpans(block, lis, oldX, x, 'li-active', 'li');
		animation(ul, -width*x, DURATION * Math.abs(oldX - x), INTERVAL);
	}
}

leftSpan.addEvent('click', function(){
	left(block2C1);
});

rightSpan.addEvent('click', function(){
	right(block2C1);
});
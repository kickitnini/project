var adImags = document.querySelectorAll('.ad>img');
for(var i = 0; i < adImags.length; i++){
	adImags[i].dataset['img'] = i;
}



function animationOpacity(element, speed, interval, alpha){			
	element.timer && clearInterval(element.timer);
	element.timer = setInterval(function(){
	if((100 - alpha) <= speed){
		alpha = 100;
		setOpacity.call(this,element, alpha);
		// element.style.filter='alpha(opacity:'+alpha+')';
		// element.style.opacity= 1 - alpha/100;
		element.style.zIndex = '';
		clearInterval(element.timer);
	}else{
		alpha += speed
		setOpacity.call(this,element, alpha);
		// element.style.filter='alpha(opacity:'+alpha+')';
		// element.style.opacity= 1 - alpha/100;
	}
}, interval)
}

function setOpacity(element, alpha){
	element.style.filter='alpha(opacity:'+alpha+')';
	element.style.opacity= 1 - alpha/100;
}

var divAd = document.querySelector('.ad');
var adLis = document.querySelectorAll('.ad>ul>li');
// for(var j = 0; j < adImags.length; j++){
// 	adlis[j].dataset['li'] = j;
// }
var adUl = document.querySelector('.ad>ul');
adUl.dataset['li'] = '0';

console.log(1,adLis[0].style.zIndex);
// var tmp = []

function changeLis(adUl, adLis, oldK, k){
	adLis[oldK].setAttribute('class', '');
	adLis[k].setAttribute('class', 'active');
	adUl.dataset['li'] = k;
}
	
divAd.addEvent('mouseover', function(){
	var target = this.getTarget();
	var oldK = parseInt(adUl.dataset['li']);
	for(k = 0; k < adLis.length; k++){
		if(target === adLis[k]){
			if( k !== oldK){
				changeLis(adUl, adLis, oldK, k)
				// 先把旧的提到最高,再把新的提高,再把旧的消退							
				adImags[oldK].style.zIndex = 2;
				adImags[k].style.zIndex = 1;							
				animationOpacity(adImags[oldK], 10, 50, 0);
				setOpacity(adImags[k], 0);
			}						
		}															
	}
	
})

var leftA = document.querySelector('.ad>.arrow-left');
var rightA = document.querySelector('.ad>.arrow-right');

divAd.addEvent('click', function(){
	var target = this.getTarget();
	var oldK = parseInt(adUl.dataset['li']);
	if(target === leftA){
		if(oldK > 0){
			var k = oldK - 1;
			changeLis(adUl, adLis, oldK, k)						
			adImags[oldK].style.zIndex = 2;
			adImags[k].style.zIndex = 1;							
			animationOpacity(adImags[oldK], 10, 50, 0);
			setOpacity(adImags[k], 0);						
		}

	}
	
	if(target === rightA){				
		if(oldK < adLis.length - 1){
			var k = oldK + 1;
			changeLis(adUl, adLis, oldK, k)						
			adImags[oldK].style.zIndex = 2;
			adImags[k].style.zIndex = 1;							
			animationOpacity(adImags[oldK], 10, 50, 0);
			setOpacity(adImags[k], 0);						
		}
	}				
})

// 每隔一段时间跑一次
var INTERVAL = 2500;

setInterval(function(){
	var k = 0;
	var oldK = parseInt(adUl.dataset['li']);
	if(oldK < adLis.length - 1){
		k = oldK + 1;					 
	}else{
		k = 0;
	}
	changeLis(adUl, adLis, oldK, k)						
	adImags[oldK].style.zIndex = 2;
	adImags[k].style.zIndex = 1;							
	animationOpacity(adImags[oldK], 10, 50, 0);
	setOpacity(adImags[k], 0);	
	
}, INTERVAL);

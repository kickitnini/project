var search = document.querySelector('#head>.container>.search');
var divInput = document.querySelector('#head>.container>.search>div');
var input = document.querySelector('#head>.container>.search>div>input');
input.value = '投影仪家用';
var divInputCreate = document.createElement('div');
divInput.appendChild(divInputCreate);
divInputCreate.style.display = 'none';

addClassName(divInputCreate, 'createDiv');

input.onfocus = function(){
	if(this.value === '投影仪家用'){
		this.value = '';		
	}
	this.style.color = '#000000';
	divInputCreate.innerHTML = '';
	var divData = [
		'华为',
		'小米',
		'华为',
		'小米',
		'华为',
		'小米',
		'华为',
		'小米'
	]

	function createDiv(divAData){
		var divstr = '';
		for(var i = 0; i < divData.length; i++){
			divstr += '<div><a href="#">' + divData[i] + '</a><span>搜索历史</span></div>'
		}
		divInputCreate.innerHTML += divstr;
		divInputCreate.innerHTML += '<div><a href="#"></a><span></span></div>'
	}
	divInputCreate.style.zIndex = 1;
	divInputCreate.style.display ='block'
	createDiv(divData);	
	// var divInputCreate = document.querySelector('#head>.container>.search>div>div');

	// addClassName(divInputCreate, 'createDiv');
	var divInputHistries = document.querySelectorAll('#head>.container>.search>div>div>div');

	for(var j = 0; j < divInputHistries.length; j++){
		var histry = divInputHistries[j];
		var histryA = histry.querySelector('a');
		histryA.style.color = '#005aa0';
		// 给历史添加属性
		addClassName(histry, 'histry');
	
		if(j === divInputHistries.length-1){
			var span = histry.querySelector('span');
			span.style.color = '#000';
			span.innerText = '全部删除'
			histry.style.width = '488px';
			histry.style.height = '30px';
			histry.style.lineHeight = '30px';
			histry.style.border = '1px solid #eee';
			histry.style.zIndex = 10;
			histry.onmouseover = function(){
				this.style.backgroundColor = '#F0F3EF';
				span = this.querySelector('span');
				span.onclick = function(){
					divInputCreate.innerHTML = '';
				}
			}
			
			histry.onmouseout = function(){
				this.style.backgroundColor = '#fff';
			}
			break;
		}
		
		// 给历史添加事件		
		histry.onmouseover = function(){
			var span = this.querySelector('span');
			this.style.backgroundColor = '#F0F3EF';
			var his = this;
			span.style.color = '#005aa0';
			span.innerText = '删除'
			span.onclick = function(){
				divInputCreate.removeChild(his);
			}
		}
		
		histry.onmouseout = function(){
			var span = this.querySelector('span');
			this.style.backgroundColor = '#fff';
			span.style.color = '#ccc';
			span.innerText = '搜索历史';
		}					
		// 点击历史填空并跳转
		histryA.onclick = function(){
			input.value = this.innerText;
			input.style.color = '#000';
		}
	}

}


input.onblur = function(){	
	if(this.value === ''){
		this.value = '投影仪家用';
		this.style.color = '#ccc';
	}
	var onblur = true;
	var click = true;

	divInputCreate.onclick = function(){
		return click = false;
	}
	setTimeout(function(){
		if(onblur && click){
			divInputCreate.innerHTML = '';
			divInputCreate.style.display = 'none';
		}
	},200);
	
}






// 
input.onmouseleave = function(){
	var timer;
	timer && clearTimeout(timer);
	divInputCreate.onmouseleave = function(){
		timer = setTimeout(function(){
			divInputCreate.style.display = 'none';
			return divInputCreate.innerHTML = '';
		},500);	
	}		
		
}



// 到位置出现
function getScroll(){
	return {
		left: window.pageXOffset
			|| document.documentElement.scrollLeft 
			|| document.body.scrollLeft || 0,
		top: window.pageYOffset
			|| document.documentElement.scrollTop
			|| document.body.scrollTop || 0
	};
}

window.onscroll = function(){
				if(getScroll().top >= 700){
					addClassName(search, 'fixed');
					addClassName(divInput, 'fixed');
				}else{
					removeClassName(search, 'fixed');
					removeClassName(divInput, 'fixed');
				}
			}
			
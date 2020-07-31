var lis = document.querySelectorAll('#banner>.side-pop-nav>.block-19-48>.left-nav>ul>li');
var popDivs = document.querySelectorAll('.pop-nav>div');
var popNav = document.querySelector('.pop-nav');
var ul = document.querySelector('#banner>.side-pop-nav>.block-19-48>.left-nav>ul');
var divBox = document.querySelector('#banner>.side-pop-nav');
var banner = document.querySelector('#banner');
// for(var i = 0; i < lis.length; i++){
// 	lis[i].dataset['index'] = i;
// 	popDivs[i].dataset['index'] = i;
// }

var index = -1; 
var a = [];
banner.addEvent('mouseover', function(){
	var target = this.getTarget();
	for(var j = 0; j < lis.length; j++){
		if(target === lis[j] || target === lis[j].children){
			if(a.length > 0){
				lis[a[0]].style.backgroundColor = '#fff';
				popDivs[a[0]].style.display = 'none';
				a.pop();
			}
			target.style.backgroundColor = '#eee';
			popNav.style.display = 'block';
			popDivs[j].style.display = 'block';	
			index = j;
			a.push(index);
			break;				
		}
	}
});

banner.addEvent('mouseleave', function(){
	var target = this.getTarget();
		popNav.style.display = 'none';
		for(var k = 0; k < lis.length; k++){
			lis[k].style.backgroundColor = '#fff';
		}
		
		if(index !== -1){
			popDivs[index].style.display = 'none';				
		}
		index = -1;

});











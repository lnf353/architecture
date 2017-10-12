;
//1 - 233 - 1371

//2 - 1330 - 2400
//3 - 2400 - 2828
(function(){
    var firstImage = document.querySelector('.parallax-one__img');
        var paraBlockImage = document.querySelector('.parallax-one');
    var scrollPosition;
    var position=0;
    var projectsBlock = document.querySelector(".projects");
    var rectObject;
    var height = 300;
    window.addEventListener('scroll', function (){
	scrollPosition = window.pageYOffset;
	console.log(scrollPosition);
	rectObject = firstImage.getBoundingClientRect().top ;
	console.log(rectObject+" rect ");
	
	if(rectObject <= 300 ) {
	    
	    position = (rectObject)/10 ;
	    console.log("position " + position);
	    firstImage.style.backgroundPositionY = position+"px" ;
	}
	else if (scrollPosition > 1200) {
	     firstImage.style.backgroundPositionY = 0+"px" ;
	}
    });
    
})();


















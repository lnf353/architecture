;
(function(){
    
var makeLogoSliderRun = function(e) {
	    if(e.target.tagName != "SPAN") return;
	    var logoSlider = document.querySelector(".logo-slider__list"),
		list = document.querySelector(".logo-slider__wrapper"),
		logoSliderWidth = logoSlider.getBoundingClientRect().width,
		logoListWidth = list.getBoundingClientRect().width,
		difference;
	    
	    if(list.offsetWidth <= 366) {
		var logoSliderHeight = logoSlider.getBoundingClientRect().height,
		    logoListHeight = list.getBoundingClientRect().height;
		if(e.target.classList.contains("logo-slider__arrow-left")) {
		     difference = 0;
		} else {
		     difference = -logoListHeight + logoSliderHeight - 35;
		}
		list.style.marginTop = difference + "px";
		
	    } else {
		
		if(e.target.classList.contains("logo-slider__arrow-left")) {
		     difference = 0;
		} else {
		     difference = -logoListWidth + logoSliderWidth;
		}

		list.style.marginLeft = difference + "px";
	    }
};
    document.addEventListener("click", makeLogoSliderRun);
})();


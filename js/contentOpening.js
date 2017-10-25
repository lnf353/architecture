
;
(function(){
    var manipulativeBlock = {
	"projects":document.getElementById("hiddenProjects"),
	"blogs":document.getElementById("hiddenBlogs"),
	"blogsLength": function() {
	    return this.blogs.firstElementChild.getElementsByClassName('content').length;
	},
	"projectsLength": function(){
	    return this.projects.firstElementChild.getElementsByClassName('hidden-block').length;
	}
    };
    var currentElem,
	width,
	height,
	row,
	blogsLength,
	styleResult,
	multiplier,
	pasteHeight,
	menuHeight,
	currentAttribute, containerHeight;
    
    window.addEventListener('click',function(e) {
	if(e.target.classList.contains('all-view-btn__link') != true) return; 
	currentAttribute = e.target.getAttribute('data-current');
	    currentElem = manipulativeBlock[currentAttribute];

	    var width = currentElem.getBoundingClientRect().width;
	    var contentElementSize = currentElem
		    .firstElementChild
		    .firstElementChild
		    .getBoundingClientRect();
	
	    var height = contentElementSize.height;
	row = Math.floor(width / contentElementSize.width);
	
	    multiplier = Math.floor(manipulativeBlock[currentAttribute + "Length"]() / row);

	    if(manipulativeBlock[currentAttribute + "Length"]() % row != 0 ) {
		styleResult= height * ++multiplier  ;
	    } else {
		styleResult = height * multiplier;
	    }
	containerHeight = currentElem.firstElementChild.getBoundingClientRect().height % (multiplier*height);
	
	    if(currentElem.classList.contains('overflow-wrapper--height')) {
		currentElem.style.height = menuHeight ;
		currentElem.classList.remove('overflow-wrapper--height');
	    } else {
		pasteHeight = getComputedStyle(currentElem);
		menuHeight = pasteHeight.height;
		currentElem.style.height = styleResult + containerHeight + "px";
		currentElem.classList.add('overflow-wrapper--height');	
	    }
	    
	
    });

    document.querySelector('.projects').addEventListener('click',function(e) {
	
    });
    
})();

















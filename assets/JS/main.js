
//Clicking on arrow in landing page scrolls the page down to projects
function scrollToElement(eid, blk) {
  document.getElementById(eid).scrollIntoView({
    block: blk,
    behavior: 'smooth'
  });
}


//changes gradient
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

AOS.init(
    	{
    		duration: 1500
    	});
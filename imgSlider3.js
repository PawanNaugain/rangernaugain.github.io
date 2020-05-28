const slider = document.querySelectorAll('.slide');
const prevLeft = document.getElementById('prev');
const nextRight = document.getElementById('next');

function prev(){
       const current = document.querySelector('.current');
       current.classList.remove('current');
       if (current.previousElementSibling) {
       	   current.previousElementSibling.classList.add('current');
       	}
       	else {
       		slider[slider.length-1].classList.add('current');
       	}
};

function next(){
	const current = document.querySelector('.current');
	current.classList.remove('current');
	if (current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
	}
	else {
		slider[0].classList.add('current');
	};
}
prevLeft.addEventListener('click', function(){
	    prev();
})

nextRight.addEventListener('click', function(){
	next();
});
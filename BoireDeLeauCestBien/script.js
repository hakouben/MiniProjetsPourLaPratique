const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
	
	if(smallCups[idx].classList.contains('full') &&
		!smallCups[idx].nextElementSibling.classList.contains('full')) {
		idx--;
	}
	
	smallCups.forEach((cup, idx2) => {
	
		if(idx2 <= idx) {
			cup.classList.add('full');
		
		} else {
			cup.classList.remove('full');
		}
	});
	
	updateBigCup();
}

function updateBigCup() {
	const fullGlasses = document.querySelectorAll('.cup-small.full').length;
	const totalGlasses = smallCups.length;
	

	if(fullGlasses === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = '0';
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${fullGlasses / totalGlasses * 330}px`;
		percentage.innerText = `${fullGlasses / totalGlasses * 100}%`;
	}
	
	if(fullGlasses === totalGlasses) {
		remained.style.visibility = 'hidden';
		remained.style.height = '0';
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${(2 - (250 * fullGlasses / 1000)).toFixed(2)}L`;
	}
}//panneau social  
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

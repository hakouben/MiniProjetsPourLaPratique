const form = document.getElementById('form');
const container = document.querySelector('.contact-container');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	container.innerHTML = '<p>Merci pour votre message. <br /> Je vous répondrai bientôt.😃</p>';
});
//panneau social  
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

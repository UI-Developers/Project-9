const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const skillsToReveal = document.querySelectorAll('.card__skill');
const workToReveal = document.querySelectorAll('.card');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Listen for scroll event
function events() {
	window.addEventListener('scroll', () => {
		skillsToReveal.forEach(el => {
			calculateIfScrolledTo(el);
		});
		workToReveal.forEach(el => {
			calculateIfScrolledTo(el);
		});
	});
}

events();

function calculateIfScrolledTo(el) {
	let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
	if (scrollPercent < 90) {
		el.classList.add('reveal-item--is-visible');
	}
}

// Hide Skills and Work elements
function hideInitially() {
	skillsToReveal.forEach(el => el.classList.add('reveal-item'));
	workToReveal.forEach(el => el.classList.add('reveal-item'));
}

hideInitially();

//jQuery Smooth Scroll
$('.main-nav a').on('click', function(e) {
	if (this.hash !== '') {
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 70
		},
		800
		);
	}
});
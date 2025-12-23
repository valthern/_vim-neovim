const slideshow = document.getElementById('slideshow');
const slides = document.getElementById('slides');
const indicadores = document.getElementById('indicadores');
let slideActual = 1;

// Cambiamos el slide de forma automatica
setInterval(() => {
	siguienteSlide();
}, 5000);

const siguienteSlide = () => {
	// Tomamos el primer slide
	const primerSlide = slides.children[0];

	// Cambiamos indicador activo
	// Comprobamos cuantos slides tenemos
	const numeroSlides = slides.children.length;
	// Si el slide actual es menor que el numero de slide, incrementamos
	if (slideActual < numeroSlides) {
		slideActual++;
	} else {
		// De otra forma reiniciamos el slide
		slideActual = 1;
	}
	indicadores.querySelector('.active').classList.remove('active');
	indicadores.children[slideActual - 1].classList.add('active');

	// Cambiamos de slide
	// Establecemos la velocidad (en milisegundos) de transición que tendra
	const velocidad = 200;
	slides.style.transition = `ease-out ${velocidad}ms all`;

	// Calculamos el ancho
	const ancho = primerSlide.offsetWidth;

	// Desplazamos el slideshow
	slides.style.transform = `translateX(-${ancho}px)`;

	// Reiniciamos el slideshow cuando acabe la transición
	setTimeout(() => {
		// Eliminamos el efecto de la transición
		slides.style.transition = 'none';

		// 1. Tomamos el primer elemento y lo mandamos al final
		slides.appendChild(primerSlide);

		// 2. Reiniciamos el posicionamiento
		slides.style.transform = 'translateX(0)';
	}, velocidad);
};

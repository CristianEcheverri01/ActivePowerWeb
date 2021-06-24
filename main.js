//carousel show automatico
const carrusle = num => {
	const e = document.querySelectorAll('.carousel')

	M.Carousel.init(e, {
		duration: 150,
		dist: -150,
		shift: 5,
		padding: 5,
		numVisible: num,
		noWrap: false,
		indicators: true,
	})

	let i = 0
	let instance1 = M.Carousel.getInstance(e[0])
	setInterval(() => {
		i++
		if (i >= 5) {
			i = 0
		} else {
			instance1.next(1)
		}
	}, 2000)
}

const parrafos = e => {
	j = ``
	if (e === 1) {
		j = `<h3>Nuestro numero y correo</h3>
		<p>
			<i class="fas fa-phone-alt black-text"></i
			><a href="#">4811590</a>
		</p>
		<p>
			<i class="fas fa-envelope black-text"></i
			><a href="#">activepower00@gmial.com</a>
		</p>
		<p class="md-10">
			<i class="fab fa-whatsapp black-text"></i
			><a href="#">3016115580</a>
		</p>`
	} else if (e === 'table') {
		j = `<h3>
		Nuestro numero y correo
		</h3>
		<table class="tbl">
			<thead></thead>
			<tbody>
				<tr>
					<td>
						<p>
							<i class="fas fa-phone-alt black-text"></i>
							<a href="#">4811590</a>
						</p>
					</td>
					<td>
						<p>
							<i class="fas fa-envelope black-text"></i>
							<a href="#">activepower00@gmial.com</a>
						</p>
					</td>
				</tr>
				<tr>
					<td>
						<p>
							<i class="fab fa-whatsapp black-text"></i>
							<a href="#">3016115580</a>										</p>
					</td>
				</tr>
			</tbody>
		</table>`
	}
	return j
}
//btn change theme
const btn = document.getElementById('btn-theme')
const body = document.getElementById('body')
btn.addEventListener('click', () => {
	btn.classList.toggle('blue')
	body.classList.toggle('dark')
})

//responsive

const cardNuestroCorreo = document.getElementById('numeros')
const resolucion = () => {
	ancho = window.screen.width
	posicion = window.screen.orientation.type

	if (posicion == 'portrait-primary' && ancho <= 420) {
		cardNuestroCorreo.innerHTML = parrafos(1)
		document.addEventListener('DOMContentLoaded', carrusle(1))
		const hamburgesa = document.getElementById('hamburgesa')
	} else {
		document.addEventListener('DOMContentLoaded', carrusle(5))
	}

	ancho >= 768 ? (cardNuestroCorreo.innerHTML = parrafos(1)) : null
	ancho > 1024 ? (cardNuestroCorreo.innerHTML = parrafos(1)) : null
	ancho <= 1024 && ancho > 768 ? (cardNuestroCorreo.innerHTML = parrafos('table')) : null
}

hamburgesa.addEventListener('click', () => {
	const divBurger = document.getElementById('div-burger')
	divBurger.classList.toggle('active')
	hamburgesa.classList.toggle('active')
})

window.addEventListener('resize', resolucion)
window.addEventListener('load', resolucion)
window.addEventListener('orientationchange', resolucion)

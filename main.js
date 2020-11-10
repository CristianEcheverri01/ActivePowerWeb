//carousel show automatico

document.addEventListener('DOMContentLoaded', () => {
	const e = document.querySelectorAll('.carousel')

	M.Carousel.init(e, {
		duration: 150,
		dist: -150,
		shift: 5,
		padding: 5,
		numVisible: 5,
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
})

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
	if (ancho > 1024) {
		cardNuestroCorreo.innerHTML = `<h3>Nuestro numero y correo</h3>
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
			><a href="#">el numero de su qcha</a>
		</p>`
	}
	if (ancho <= 1024) {
		cardNuestroCorreo.innerHTML = `<h3>
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
							<a href="#">el numero de su qcha</a>										</p>
					</td>
				</tr>
			</tbody>
		</table>`
	}
}

window.addEventListener('resize', resolucion)
window.addEventListener('load', resolucion)

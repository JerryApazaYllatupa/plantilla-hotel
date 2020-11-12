const RUTEPRINCIPAL = location.origin
const getId = (id) => document.getElementById(id)
const getClass = (clase) => document.querySelector(`.${clase}`)
const getAll = (clase) => document.querySelectorAll(`.${clase}`)
const getName = (name) => document.getElementsByName(`${name}`)

let ID = () => {
	return (
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9)
	)
}
let getDataEditor = (idsection) => InlineEditor.instances[idsection].getData()
let setDataEditor = (idsection, content = '') => {
	return InlineEditor.instances[idsection].setData(content)
}
const ruteImg = (rute) => {
	return RUTEPRINCIPAL + `/storage/upload/${rute}`
}
const rutePeticion = (rute) => {
	return RUTEPRINCIPAL, `${'/' + rute}`
}

const listener = (element, evet, funcion) => {
	if (element) {
		let isArray = Array.isArray(element)

		if (isArray) {
			element.forEach((item) => {
				if (item) {
					item.addEventListener(evet, funcion)
				}
			})
		} else {

			element.addEventListener(evet, funcion)
		}
	}

}

// Accept: "text/plain",
const ajax = async (request) => {
	let init = {
		method: request.method || 'POST',
		headers: new Headers(request.headers),
		body: request.body,
	}

	const response = await fetch(request.url, init)
	if (response.status == 200) {
		return await response.json()
	} else {
		return response
	}
}

export {
	getId,
	getClass,
	getAll,
	listener,
	ID,
	getDataEditor,
	setDataEditor,
	getName,
	ajax,
	ruteImg,
	rutePeticion,
	RUTEPRINCIPAL,
}

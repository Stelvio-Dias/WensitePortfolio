const menuBtn = document.querySelector('.btn-area')
const menuBtn2 = document.querySelector('#body')
const menuBtn3 = document.querySelector('#body2')
let menuOpen = false
menuBtn.addEventListener('click', ()=> {
	if(!menuOpen) {
		menuBtn.classList.add('open')
		menuBtn2.classList.add('open')
		menuBtn3.classList.add('open')
		menuOpen = true
	}else {
		menuBtn.classList.remove('open')
		menuBtn2.classList.remove('open')
		menuBtn3.classList.remove('open')
		menuOpen = false
	}
})
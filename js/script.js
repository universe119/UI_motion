const section = document.querySelector("section");
let result = "";

//동적으로 200개의 img태그 생성
for (let i = 0; i < 200; i++) {
	result += `<img src="img/pic${i}.jpg">`;
}
// console.log(result);

section.innerHTML = result;
const imgs = section.querySelectorAll("img");

//브라우저에 mousemove시 200분을 환산
window.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let wid = window.innerWidth;
	let percent = parseInt((x / wid) * 200);
	// console.log(percent);

	for (let i = 0; i < imgs.length; i++) {
		imgs[i].style.display = "none";
	}
	imgs[percent].style.display = "block";
});

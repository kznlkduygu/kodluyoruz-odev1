const nameSurnameDOM = document.getElementById("nameSurname");
const ageDOM = document.getElementById("age");
const linkedinUrlDOM = document.getElementById("linkedinUrl");
const githubUrlDOM = document.getElementById("githubUrl");

linkedinUrlDOM.setAttribute("href", "https://www.linkedin.com/in/kizanlikduygu/");
githubUrlDOM.setAttribute("href", "https://github.com/kznlkduygu");

// Element.setAttribute("name","value") --> 
// name = eklenecek özniteliğin adı 
// value = özniteliğin değeri 
// NOT: Her öznitelik uyulması gereken bir dizi geçerli değere sahiptir.

const btn = document.getElementById("myBtn")
btn.addEventListener("click",function(){
// Element.addEventListener("olay",fonksiyon)
// olay : olayın adını belirten bir tür (load,click,mouseover,keypress gibi)
// fonksiyon : Olay algılandığında çalıştırılacak işlevi belirtir.
	const name = "Duygu ";
	const surname = "Kızanlık";
	const age = 22;

nameSurnameDOM.innerHTML = `${name} ${surname}`
ageDOM.innerHTML =`${age}`
}) 
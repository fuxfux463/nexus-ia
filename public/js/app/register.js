const gerarBtn = document.getElementById("gerarCodigo");
const registrarBtn = document.getElementById("registrar");

gerarBtn.onclick = () => {
const code = Math.floor(10000000 + Math.random()*90000000);
document.getElementById("codigo").value = code;
};

registrarBtn.onclick = () => {
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;
const codigo = document.getElementById("codigo").value;

if(!email || !senha || !codigo) return alert("Preencha tudo");

localStorage.setItem("user", JSON.stringify({email,senha,codigo}));
window.location.href = "index.html";
};

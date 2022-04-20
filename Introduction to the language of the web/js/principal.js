let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoEsValido = true;
  let alturaEsValida = true;

  if (peso <= 0 || peso >= 1000) {
    tdPeso.textContent = "Peso incorrecto";
    pesoEsValido = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (altura <= 0 || altura >= 3) {
    tdAltura.textContent = "Altura incorrect.";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (pesoEsValido && alturaEsValida) {
    let calculoImc = (peso / (altura * altura)).toFixed(2);
    tdImc.textContent = calculoImc;
  }
}

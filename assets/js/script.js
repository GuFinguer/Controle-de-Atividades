const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector(".botao-registrar");

button.addEventListener('click', add);
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-BR').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    return 
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}


nlwSetup.setData(data);
nlwSetup.load();
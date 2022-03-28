// 1. SELECCION
const form = document.getElementById("formulario");
const button = document.getElementById("enviar");
const results = document.getElementById("resultados")

//2.MANIPULACION

//A.EVENTOS
button.addEventListener("click", (event) => {
    event.preventDefault();
    const name = form.nombre.value;
    const email = form.email.value;
    const birthday = form.birthDate.value;
    const dessert = form.dessert.checked;

    let dessertIsCheckedMessage;

    if (dessert){
        dessertIsCheckedMessage = "El usuario Si selecciono el helado"
    }else {
        dessertIsCheckedMessage = "El usuario No selecciono el helado"
    };

    const selectIndex = form.decisions.selectedIndex;
    const selectedOption = form.decisions.options[selectIndex];
    const selectedOptionText = selectedOption.text;
    
    return results.innerHTML = `
    <h1>Datos de envío</h1>
    <p>El nombre es: ${name}</p>
    <p>El email es: ${email}</p>
    <p>El cumpleaños es: ${birthday}</p>
    <p>${dessertIsCheckedMessage}</p>
    <p>El número elegido fue: ${selectedOptionText}</p>
`

});

//AQUI LO MIO

const form2 = document.getElementById("formulario_2");
const button2 = document.getElementById("enviar2");

button2.addEventListener("click", (event) =>{
    event.preventDefault();
    const namePerro = form2.perroNombre.value;
    const emailPerro = form2.email_trabajaperro.value;
    const cumplePerro = form2.cumpleanos_perro.value;
    const buenPerro = form2.buen_perro.value;

    let buenPerroIsGood;

    if(buenPerro){
        buenPerroIsGood = "Este es un buen perro!"
    }else{
        buenPerroIsGood = "Este es un mal dueno"
    };

    const selectIndex2 = form2.raza.selectedIndex;
    const selectedOption2 = form2.raza.options[selectIndex2];
    const selectedOptionText = selectedOption2.text;

})




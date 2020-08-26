
function isCPFInput(elemento) {
    console.log(elemento)
    if (elementHasSpecificNameOrId(elemento, 'cpf')) {
        return true;
    }
    if (elementHasSpecificNameOrId(elemento, 'documentnumber')) {
        return elemento.maxLength === 11 || elemento.maxLength === 14;// CPF com mascara possui 14 caracteres
    }
    return false;
}

function isCNPJInput(elemento) {
    console.log(elemento);
    if (elementHasSpecificNameOrId(elemento, 'cnpj')) {
        return true;
    }
    if (elementHasSpecificNameOrId(elemento, 'documentnumber')) {
        return elemento.maxLength === 14 || elemento.maxLength === 18; //CNPJ com mascara possui 18 caracteres 
    }
    return false;
}

function isPhoneNumberInput(elemento) {
    if(elementHasSpecificNameOrId(elemento, 'phonenumber') 
        || elementHasSpecificNameOrId(elemento, 'phone')
        || elementHasSpecificNameOrId(elemento, 'telefone')) {
        // No futuro, pode ser necessário pensar no que fazer caso um input não tenha o max length
        return elemento.maxLength === 10 || elemento.maxLength === 8 || elemento.maxLength === 14 || elemento.maxLength === 9;
    }
    return false;
}

function isCellphoneInput(elemento) {
    if(elementHasSpecificNameOrId(elemento, 'cellphone') || elementHasSpecificNameOrId(elemento, 'celular')) {
        // No futuro, pode ser necessário pensar no que fazer caso um input não tenha o max length
        return elemento.maxLength === 11 || elemento.maxLength === 9 || elemento.maxLength === 15 || elemento.maxLength === 10;
    }
    return false;
}

function isEmailInput(elemento) {
    if (elemento.type.toLowerCase() === 'email') {
        return true;
    }
    return elementHasSpecificNameOrId(elemento, 'email');
    return false;
}

function elementHasSpecificNameOrId(elemento, stringToSearch) {
    if (elemento.name) {
        return elemento.name.toLowerCase().indexOf(stringToSearch.toLowerCase()) >= 0;
    }
    if (elemento.id) {
        return elemento.id.toLowerCase().indexOf(stringToSearch.toLowerCase()) >= 0;
    }
    return false;
}
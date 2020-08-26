
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

function isEmailInput(elemento) {
    if (elemento.type.toLowerCase() === 'email') {
        return true;
    }
    return elementHasSpecificNameOrId(elemento, 'email');
    return false;
}

function elementHasSpecificNameOrId(elemento, stringToSearch) {
    if (elemento.name) {
        return elemento.name.toLowerCase().indexOf(stringToSearch) >= 0;
    }
    if (elemento.id) {
        return elemento.id.toLowerCase().indexOf(stringToSearch) >= 0;
    }
    return false;
}

function isCPFInput(elemento) {
    if (elementContainsSpecificNameOrId(elemento, 'cpf')) {
        return true;
    }
    if (elementContainsSpecificNameOrId(elemento, 'documentnumber')) {
        return elemento.maxLength === 11 || elemento.maxLength === 14;// CPF com mascara possui 14 caracteres
    }
    return false;
}

function isCNPJInput(elemento) {
    if (elementContainsSpecificNameOrId(elemento, 'cnpj')) {
        return true;
    }
    if (elementContainsSpecificNameOrId(elemento, 'documentnumber')) {
        return elemento.maxLength === 14 || elemento.maxLength === 18; //CNPJ com mascara possui 18 caracteres 
    }
    return false;
}

function isPhoneNumberInput(elemento) {
    if(elementContainsSpecificNameOrId(elemento, 'phonenumber') 
        || elementContainsSpecificNameOrId(elemento, 'phone')
        || elementContainsSpecificNameOrId(elemento, 'telefone')) {
        // No futuro, pode ser necessário pensar no que fazer caso um input não tenha o max length
        return elemento.maxLength === 10 || elemento.maxLength === 8 || elemento.maxLength === 14 || elemento.maxLength === 9;
    }
    return false;
}

function isCellphoneInput(elemento) {
    if(elementContainsSpecificNameOrId(elemento, 'cellphone') || elementContainsSpecificNameOrId(elemento, 'celular')) {
        // No futuro, pode ser necessário pensar no que fazer caso um input não tenha o max length
        return elemento.maxLength === 11 || elemento.maxLength === 9 || elemento.maxLength === 15 || elemento.maxLength === 10;
    }
    return false;
}

function isEmailInput(elemento) {
    if (elemento.type.toLowerCase() === 'email') {
        return true;
    }
    return elementContainsSpecificNameOrId(elemento, 'email');
}

function isCepInput(elemento) {
    if(elementContainsSpecificNameOrId(elemento, 'cep')) {
        return true;
    }
    return false;
}

function isDateInput(elemento) {
    console.log(elemento);
    if(elemento.type.toLowerCase() === 'date') {
        return true;
    }
    return elementContainsSpecificNameOrId(elemento, 'date');
}

function elementContainsSpecificNameOrId(elemento, stringToSearch) {
    if (elemento.name) {
        return elemento.name.toLowerCase().indexOf(stringToSearch.toLowerCase()) >= 0;
    }
    if (elemento.id) {
        return elemento.id.toLowerCase().indexOf(stringToSearch.toLowerCase()) >= 0;
    }
    return false;
}
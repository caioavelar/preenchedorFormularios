chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    console.log(msg, sender, response);
    if(msg.key === 'init') {
        preencherCampos();
        return response({success: true});
    }
    return response({success: false});
 });


function preencherCampos() {
    console.log('Iniciando função');
    const form = document.getElementsByTagName('form')[0];
    console.log(form);
    for(let i = 0; i < form.elements.length; i++) {
        const elemento = form.elements[i];
        console.log(elemento.type);
        if(elemento.type.toLowerCase() === 'text') {
            // Decidir o que inserir em texto com base no nome
            setInputTextValue(elemento);
        } else if (elemento.type.toLowerCase() === 'textarea') {
            // Decidir o tamanho do texto que será criado 
            elemento.value = getLoremIpsumText(elemento.maxLength);
        } else if (elemento.type.toLowerCase() === 'number') {
            // Decidir o que inserir de número com base no nome
            elemento.value = getRandomNumber(elemento.max ? elemento.max : 1000);
        } else if (elemento.type.toLowerCase() === 'date') {
            // Decidir o que inserir de data com base no nome
            elemento.value = randomDate(new Date(), new Date());
        } else if (elemento.type.toLowerCase().includes('select')) {
            // Recuperar opções e selecionar uma aleatoriamente
            console.log('sou um select')
            const options = elemento.options;
            console.log(options.length);
            let index = getRandomNumber(options.length);
            console.log(options[index], index);
            if(options[index].value) {
                elemento.value = options[index].value;
                setElementValue(elemento, options[index].value);
            } else {
                // Talvez, criar uma função para recuperar options aleatoriamente, ou abstrair essa lógica para uma função
            }
        }
    }
}

function getLoremIpsumText(tamanho) {
    const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim inter se dissentiunt. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Haec et tu ita posuisti, et verba vestra sunt. Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D. Nam his libris eum malo quam reliquo ornatu villae delectari. Ergo id est convenienter naturae vivere, a natura discedere. Duo Reges: constructio interrete. Re mihi non aeque satisfacit, et quidem locis pluribus. Ad eos igitur converte te, quaeso. Quare obscurentur etiam haec, quae secundum naturam esse dicimus, in vita beata; Cupit enim dícere nihil posse ad beatam vitam deesse sapienti. Sapiens autem semper beatus est et est aliquando in dolore; Solum praeterea formosum, solum liberum, solum civem, stultost; Longum est enim ad omnia respondere, quae a te dicta sunt. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. At coluit ipse amicitias. Ego vero volo in virtute vim esse quam maximam; Nihil minus, contraque illa hereditate dives ob eamque rem laetus. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.  In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Cum salvum esse flentes sui respondissent, rogavit essentne fusi hostes. Videamus animi partes, quarum est conspectus illustrior;'
    return loremIpsumText.substr(0, tamanho);
}

function randomDate(start, end) {
    const d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime()));
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function setInputTextValue(elemento) {
    if(!elemento) return;
    if(isDocumentNumberInput(elemento)) {
        console.log('Sou um input document Number')
        return setElementValue(elemento, elemento.maxLength === 11 ? generateRandomCPF() : generateRandomCNPJ());
    }
    setElementValue(elemento, 'String randômica');
}

function isDocumentNumberInput(elemento) {
    console.log(elemento.name.toLowerCase())
    if(elemento.name) {
        return elemento.name.toLowerCase().indexOf('cpf') >= 0 || elemento.name.toLowerCase().indexOf('cnpj') >= 0 || elemento.name.toLowerCase().indexOf('documentnumber') >= 0;
    }
    if(elemento.id) {
        return elemento.id.toLowerCase().indexOf('cpf') >= 0 || elemento.id.toLowerCase().indexOf('cnpj') >= 0 || elemento.id.toLowerCase().indexOf('documentnumber') >= 0;
    }
}

function setElementValue(elemento, value) {
    if(!elemento || !value) return;

    try {
        elemento.value = value;
    } catch (error) {
        console.error(error);
    }
}

function emitMessage(putResponseInHtml) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {key: 'init'}, function (response) {
            if(putResponseInHtml) {
                document.getElementById('teste').innerHTML = JSON.stringify(response);
            }
        });
    });
}
document.getElementById("startButton").addEventListener("click", function(){
    document.getElementById("teste").innerHTML = "Hello World";
    emitMessage(true);
});


chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    emitMessage();
});

chrome.contextMenus.create({
    title: 'test',
    onclick: function(e){
        console.log(e);
        emitMessage();
    }

}, function(){});

emitMessage();

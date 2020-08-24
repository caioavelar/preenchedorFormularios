function emitMessage() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {key: 'init'}, function (response) {
            document.getElementById('teste').innerHTML = JSON.stringify(response);
        });
    });
}
document.getElementById("startButton").addEventListener("click", function(){
    document.getElementById("teste").innerHTML = "Hello World";
    emitMessage();
});
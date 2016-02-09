//We are listening for someone who connects here
chrome.extension.onConnect.addListener(function(port) {
    //Once they disconnect we know that the popup was closed
    port.onDisconnect.addListener(function() {
        //You can do what you want here :)
    });
});
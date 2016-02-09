//We connect to background.js, that's listenning for new connections, so that the knows when we close the popup
var port = chrome.extension.connect({name: "SNT"});

//When we're ready... :)
$(document).ready( function() {
    //We try to retrieve the information stored
    chrome.storage.local.get('SNT', function(items) {
        //We insert the information we've received, even if there's none
        $("#SNT").text(items.SNT);
    });

    //Every time we press a key, we save the information to storage
    $("#SNT").bind('keyup', function() {
        chrome.storage.local.set({ 'SNT': $(this).val() }, function(){});
    });
});
// this content-script plays role of medium to publish/subscribe messages from webpage to the background script

// this object is used to make sure our extension isn't conflicted with irrelevant messages!
var rtcmulticonnectionMessages = {
    'are-you-there': true,
    'get-sourceId':  true,
    'audio-plus-tab': true
};

// this port connects with background script
var port = chrome.runtime.connect();

// if background script sent a message
port.onMessage.addListener(function (message) {
    // get message from background script and forward to the webpage
    window.postMessage(message, '*');
    console.log('message = ', message);
});

// // inform browser that you're available!
// window.postMessage('rtcmulticonnection-extension-loaded', '*');
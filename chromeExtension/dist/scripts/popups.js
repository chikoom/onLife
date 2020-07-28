chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
  console.log('Settings saved');
});

var updateTextTo = 'hello';
chrome.tabs.executeScript({
    code: `let newText = "${updateTextTo}";`
}, function () {
    chrome.tabs.executeScript({
        file: "content_all.js"
    });
});
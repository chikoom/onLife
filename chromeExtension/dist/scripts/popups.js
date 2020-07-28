// chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
//   console.log('Settings saved');
// });

// chrome.storage.sync.get(['foo', 'bar'], function(items) {
//   message('Settings retrieved', items);
// });

// var updateTextTo = 'hello';
// chrome.tabs.executeScript({
//     code: `let newText = "${updateTextTo}";`
// }, function () {
//     chrome.tabs.executeScript({
//         file: "content_all.js"
//     });
// });
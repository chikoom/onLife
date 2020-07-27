let currentTab;
let global_button_links;
let webpage;
let singleLink;
let modules;

console.log('pop up script')

document.getElementById('startProcess').onclick = startProcess;

function startProcess() {
  console.log("sending request to background")
  //console.log(webpage)
	var msg = {};
	msg.sender = "popup";
	msg.receiver = "background";
	msg.destination = "content_".concat(webpage);	// it will go to content via events
	msg.action = "scrape";
	msg.tab = currentTab;

	chrome.runtime.sendMessage(msg, function(response) {
		console.log(response.received_by.concat(" heard me."));
	});
}
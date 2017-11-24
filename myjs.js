var selectedFile;

$(".dropdown").on("hide.bs.dropdown", function(event){
    var text = $(event.relatedTarget).text(); // Get the text of the element
    $("#dogDrop").html(text+'<span class="caret"></span>');
    firebase.database().ref('Users/' + user.uid).set({
    	name: user.displayName,
    	email: user.email,
    	password: user.password,
    	favDog: text
  	});

});

$("#file").on("change", function(event) {
	selectedFile = event.target.files[0];
	$("#uploadButton").show();
});

function uploadFile() {
	// Create a root reference
	var filename = selectedFile.name;
	var storageRef = firebase.storage().ref('/PostImages/' + filename);
	var uploadTask = storageRef.put(selectedFile);

	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on('state_changed', function(snapshot){
	  // Observe state change events such as progress, pause, and resume
	  // See below for more detail
	}, function(error) {
	  // Handle unsuccessful uploads
	}, function() {
	  // Handle successful uploads on complete
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  var postKey = firebase.database().ref('Posts/').push().key;
	  var downloadURL = uploadTask.snapshot.downloadURL;
	  var updates = {};
	  var postData = {
	  	url: downloadURL,
	  	caption: $("#imageCaption").val(),
	  	user: user.uid
	  };
	  updates['/Posts/'+postKey] = postData;
	  firebase.database().ref().update(updates);
	});

}

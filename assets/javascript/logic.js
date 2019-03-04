// Initialize Firebase
var config = {
    apiKey: "AIzaSyBMn95v0T9P4WHA8KiFn8QxzQcWAy8Yos0",
    authDomain: "train-schedule-ff233.firebaseapp.com",
    databaseURL: "https://train-schedule-ff233.firebaseio.com",
    projectId: "train-schedule-ff233",
    storageBucket: "train-schedule-ff233.appspot.com",
    messagingSenderId: "1067656970486"
};
firebase.initializeApp(config);

var database = firebase.database();


//add new train function
$("#addTrainBtn").on("click", function () {
    event.preventDefault();

    var trainName = $("#trainNameInput").val().trim();
    var line = $("#lineInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var time = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
    var frequency = $("#frequencyInput").val().trim();

    //console.log(trainName, line, destination, time, frequency);

    var newTrain = {
        ntname: trainName,
        ntline: line,
        ntdestination: destination,
        nttime: time,
        ntfrequency: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.ntline);
    console.log(newTrain.ntdestination);
    console.log(newTrain.nttime);
    console.log(newTrain.ntfrequency);


    //Clear text boxes 
    $("#trainNameInput").val("");
    $("#lineInput").val("");
    $("#destinationInput").val("");
    $("#trainTimeInput").val("");
    $("#frequencyInput").val("");

});

database.ref().on("child_added", function (childSnapshot) {

    var trainName = childSnapshot.val().ntname;
    var line = childSnapshot.val().ntline;
    var destination = childSnapshot.val().ntdestination;
    var time = childSnapshot.val().nttime;
    var frequency = childSnapshot.val().ntfrequency;

    console.log(trainName);
    console.log(line);
    console.log(destination);
    console.log(time);
    console.log(frequency);

    console.log(childSnapshot.val());


    var diffTime = moment().diff(moment.unix(time), "minutes");
    console.log("difft" + diffTime);
    var timeRemainder = moment().diff(moment.unix(time), "minutes") % frequency;
    console.log("TR" + timeRemainder);
    var minutes = frequency - timeRemainder;
    console.log("M" + minutes);

    var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(line),
        $("<td>").text(destination),
        $("<td>").text(frequency + " mins"),
        $("<td>").text(nextTrainArrival),
        $("<td>").text(minutes)
    );

    $("#trainTable").append(newRow);

})



//need to figure out time calculations


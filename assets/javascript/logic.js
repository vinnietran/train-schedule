














$("#addTrainBtn").on("click", function() {
    event.preventDefault();

    var trainName = $("#trainNameInput").val(); 
    var line = $("#lineInput").val();
    var destination = $("#destinationInput").val();
    var time = $("#trainTimeInput").val();
    var frequency = $("#frequencyInput").val();

            console.log(trainName, line, destination, time, frequency);

    var newRow = $("<tr>");
    var newName = $("<td>");
    var newLine = $("<td>");
    var newDestination = $("<td>");
    var newTime = $("<td>");
    var newFrequency = $("<td>");

    
    //newRow.append(newData);

    newName.append(trainName);
    $("#trainTable").append(newName);

    newLine.append(line);
    $("#trainTable").append(newLine);

    newDestination.append(destination);
    $("#trainTable").append(newDestination);

    newTime.append(time);
    $("#trainTable").append(newTime);

    newFrequency.append(frequency);
    $("#trainTable").append(newFrequency);

})

//need to figure out a way to deal with multiple submissions 

//need to figure out time calculations

//need backend component

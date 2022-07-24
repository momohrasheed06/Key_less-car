// keyless car using switch case method

function checkDriverAge(){
    var age =prompt("Input your age")

    switch (true){

    case (age < 18):
    alert("Sorry, you are too young to drive this car, powering off")
    break;

    case (age > 18):
    alert("Powering on.Enjoy the ride")
    break;

    case (age == 18):
    alert("Congratulations on your first year of driving.Enjoy the ride!")
    break;

    default:
    prompt("Invalid Entry, Input your age")
    break;
    }
    }
    
    checkDriverAge()

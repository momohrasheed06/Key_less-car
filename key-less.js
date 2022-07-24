// keyless car using if-else statements

function checkDriverAge() {
    let age = prompt("Enter your Age");
        
    if (age <18){
    alert("Sorry, you are too young to drive this car, powering off")    
    }

    else if(age > 18){    
    alert("Powering On. Enjoy your ride")
    }
        
    else if (age == 18){
    alert("Congratulations on your first year of driving.Enjoy the ride!")
    }
            
    else{
    prompt("Invalid Entry, Input your age")
    }

    }

    checkDriverAge() 
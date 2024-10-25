let days = prompt("Enter the week of the day to select")
switch (days) {
    case "Monday":
        console.log("First week of the day")
        break;
    case "Tuesday":
        console.log("Second week of the day")
        break;
    case "Wednesday":
        console.log("Middle week of the day")
        break;
    case "Thursday":
        console.log("Fourth week of the day")
        break
    case "Friday":
        console.log("Fifth week of the day")
        break
    case "Saturday":
        console.log("Weekend day")
        break
    case "Sunday":
        console.log("Enjoyable day")
        break
    default:
        console.log("select from these options")
}

var a = [1,2,3,4,5]
for (var number of a) {
    console.log(number)
}

var fruits = ["custardApple", "Banana", "Mango", "Orange"]
for (var element of fruits) {
    console.log(element)
}

var string = "Mounika"
for (var char of string) {
    console.log(char)
}
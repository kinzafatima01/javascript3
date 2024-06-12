// number 1 :

var studentName = [];

// number 2 :

var futureStudentNames = new Array();

// number 3 :
var friendName = ["kinza" , "suhaila" , "fatima" , "maria"];

//  number 4 :
var  friendMemberInNumbers= [1,2,3,4];

//  number 5 :
var booleanArray = [True,False];

//  number 6 :
var mixedArray = ["kinza" , "fatima", 1 ,2 ,3, False];


//  number 7 :

document.write("<h1>" + "Qualifications:" + "</h1>")

var quali = ["1) SSC", "2) HSC", "3) BCS" , "4) BS" , "5) BCOM" , "6) MS" , "7) M.Phil" , "8) PHD"]

document.write(quali[0]) 
document.write("<br>")
document.write(quali[1]) 
document.write("<br>")
document.write(quali[2]) 
document.write("<br>")
document.write(quali[3]) 
document.write("<br>")
document.write(quali[4]) 
document.write("<br>")
document.write(quali[5]) 
document.write("<br>")
document.write(quali[6]) 
document.write("<br>")
document.write(quali[7]) 


//  number 8 :

var nameOfStudent = ["rida" , "batool" , "kinza"];
var score = [320 , 230 , 480];

var totalMarks = 500; 

document.write( "</br>" ,"Score of " + nameOfStudent[0] + " is " + score[0] + "." + " Percentage: " + score[0] / totalMarks * 100 + "%" + "<br>")
document.write("Score of " + nameOfStudent[1] + " is " + score[1] + "." + " Percentage: " + score[1] / totalMarks * 100 + "%" + "<br>")
document.write("Score of " + nameOfStudent[2] + " is " + score[2] + "." + " Percentage: " + score[2] / totalMarks * 100 + "%")



//  number 9 :


var colorName = [ "Gray" , " Blue " , " Yellow " , " Black " , " Sky Blue"]

document.write(colorName + "</br>");

// a. 
var begining = prompt("What Color would you add in the begining?");
colorName.unshift(begining);
document.write(colorName + "</br>");


// b. 
var end = prompt("What Color would you add in the end?");
colorName.push(end);
document.write(colorName  + "</br>");


// c.
colorName.unshift("Black" , "White");
document.write(colorName + "</br>");

// d.
colorName.shift();
document.write(colorName  + "</br>");

// e. 
colorName.pop();
document.write(colorName  + "</br>");


// f. 
var newColorAdd = +prompt("What Color would you add in the desired index/position?");
var colorNameIs = prompt("Which color you wanna add?");
colorName.splice(newColorAdd,0 , "<br>" + colorNameIs)
document.write(colorName  + "</br>");


// g. 
var deleteIndex = +prompt("Which color index you wanna delete & how many color you wanna delete?");
var deleteNumber =prompt ("what you wanna remove the same number of color of that position?");
colorName.splice(deleteIndex,deleteNumber);
document.write(colorName + "</br>")


//  number 10 :


var studentscores = [320 , 230 , 480 , 120] 
document.write("Scores of Students : " + studentscores + "</br>");
studentscores.sort()
document.write("Ordered Scores of Students : " + studentscores);


//  number 11 :


var cityList = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
document.write("Cities list:" + "</br>");
document.write(cityList + "</br>");

document.write("Selected cities list:" + "</br>");
selectedCitiesList = cityList.slice(2,4);
document.write(selectedCitiesList);


//  number 12 :

var myCat = ["This" , "is" , "my" , "cat"];
document.write("Array:" + "<br>" + myCat + "<br>");

afterJoining = myCat.join(" ")
document.write("Array:" + "<br>" + afterJoining);


//  number 13 :

document.write("<h1>" + "Devices:" + "</h1>")

var Devices = ["keyboard" , "mouse" , "printer" ,"monitor"]
var shift;

document.write("Devices:" + "</br>");
document.write(Devices + "</br>" + "</br>");
document.write("Out:" + "</br>");
shift = Devices.shift()
document.write(shift + "</br>");
document.write("Out:" + "</br>");
shift = Devices.shift()
document.write(shift + "</br>");
document.write("Out:" + "</br>");
shift = Devices.shift()
document.write(shift + "</br>");
document.write("Out:" + "</br>");
shift = Devices.shift()
document.write(shift);


//  number 14 :

document.write("<h1>" + "Devices:" + "</h1>")

var devices = ["keyboard" , "mouse" , "printer" , "monitor"]

document.write("Devices:" + "</br>");
document.write(devices);
document.write("</br>");
document.write("</br>");

var removeitem = devices.pop()
document.write("Out:" + "</br>");
document.write(removeitem + "</br>");
document.write("Out:" + "</br>");
removeitem = devices.pop()
document.write(removeitem + "</br>");
document.write("Out:" + "</br>");
removeitem = devices.pop()
document.write(removeitem + "</br>");
document.write("Out:" + "</br>");
removeitem = devices.pop()
document.write(removeitem);


//  number 15 :


var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier" ,]

document.write(
    "<select>" + '<option value = '+phoneManufacturers[0]+'>' + phoneManufacturers[0] + '</option>' + '<option value = '+phoneManufacturers[1]+'>' + phoneManufacturers[1] + '</option>' + '<option value = '+phoneManufacturers[2]+'>' + phoneManufacturers[2] + '</option>' + '<option value = '+phoneManufacturers[3]+'>' + phoneManufacturers[3] + '</option>' +
'<option value = '+phoneManufacturers[4]+'>' + phoneManufacturers[4] + '</option>'
+ '<option value = '+phoneManufacturers[5]+'>' + phoneManufacturers[5] + '</option>' +  "</select>")
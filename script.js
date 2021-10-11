var nowtimeEl = document.querySelector('#nowtime');
var time9El = document.querySelector('.time9');
var maincenteEl = document.querySelector('#maincente');
var presenttimeel = document.querySelector('#presenttime');
var textareaEl = document.querySelector('.textarea');
var hourof9El = document.querySelector('#hour9');
var hourof10El = document.querySelector('#hour10');
var hourof11El = document.querySelector('#hour11');
var hourof12El = document.querySelector('#hour12');
var hourof13El = document.querySelector('#hour13');
var hourof14El = document.querySelector('#hour14');
var hourof15El = document.querySelector('#hour15');
var hourof16El = document.querySelector('#hour16');
var hourof17El = document.querySelector('#hour17');
var textbutton9El = document.querySelector('#textbutton9')
var textbutton10El = document.querySelector('#textbutton10')
var textbutton11El = document.querySelector('#textbutton11')
var textbutton12El = document.querySelector('#textbutton12')
var textbutton13El = document.querySelector('#textbutton13')
var textbutton14El = document.querySelector('#textbutton14')
var textbutton15El = document.querySelector('#textbutton15')
var textbutton16El = document.querySelector('#textbutton16')
var textbutton17El = document.querySelector('#textbutton17')
//check today time and date
const todaytime = moment()
nowtimeEl.textContent = todaytime.format("MMMM Do YYYY, h:mm a");
//check today time in hrs 
var now = 15
//moment().hours()
//assign values to the variable for comparison
var hourof9 = 9
var hourof10 = 10
var hourof11 = 11
var hourof12 = 12
var hourof13 = 13
var hourof14 = 14
var hourof15 = 15
var hourof16 = 16
var hourof17 = 17

var hours = [hourof9, hourof10, hourof11, hourof12, hourof13, hourof14, hourof15, hourof16, hourof17]
//to check present past and future time
function changeColor(i, id) {

    if (hours[i] < now) {
        id.style.backgroundColor = '#d3cfcf';
        id.readOnly = true;

    } else if (hours[i] == now) {
        id.style.backgroundColor = '#bfffb6'
    } else {
        id.style.backgroundColor = '#fffab0'
    }
}
//store the textarea text in logalstorage
function storedata() {

    localStorage.setItem("textbutton9", hourof9El.value);
    localStorage.setItem("textbutton10", hourof10El.value);
    localStorage.setItem("textbutton11", hourof11El.value);
    localStorage.setItem("textbutton12", hourof12El.value);
    localStorage.setItem("textbutton13", hourof13El.value);
    localStorage.setItem("textbutton14", hourof14El.value);
    localStorage.setItem("textbutton15", hourof15El.value);
    localStorage.setItem("textbutton16", hourof16El.value);
    localStorage.setItem("textbutton17", hourof17El.value);
}

changeColor(0, hourof9El)
changeColor(1, hourof10El)
changeColor(2, hourof11El)
changeColor(3, hourof12El)
changeColor(4, hourof13El)
changeColor(5, hourof14El)
changeColor(6, hourof15El)
changeColor(7, hourof16El)
changeColor(8, hourof17El)

//onclick store variables entered in textarea
textbutton9El.addEventListener("click", storedata)
textbutton10El.addEventListener("click", storedata)
textbutton11El.addEventListener("click", storedata)
textbutton12El.addEventListener("click", storedata)
textbutton13El.addEventListener("click", storedata)
textbutton14El.addEventListener("click", storedata)
textbutton15El.addEventListener("click", storedata)
textbutton16El.addEventListener("click", storedata)
textbutton17El.addEventListener("click", storedata)

//on relode display the stored variables
hourof9El.innerHTML = localStorage.getItem("textbutton9")
hourof10El.innerHTML = localStorage.getItem("textbutton10")
hourof11El.innerHTML = localStorage.getItem("textbutton11")
hourof12El.innerHTML = localStorage.getItem("textbutton12")
hourof13El.innerHTML = localStorage.getItem("textbutton13")
hourof14El.innerHTML = localStorage.getItem("textbutton14")
hourof15El.innerHTML = localStorage.getItem("textbutton15")
hourof16El.innerHTML = localStorage.getItem("textbutton16")
hourof17El.innerHTML = localStorage.getItem("textbutton17")















// function hour9() {

//     if (hours[0] > now) {
//         hourof9El.style.backgroundColor = '#d3cfcf'
//     }
//     if (hours[0] = now) {
//         hourof9El.style.backgroundColor = '#bfffb6'
//     } else {
//         hourof9El.style.backgroundColor = '#fffab0'
//     }
// }
// hour9()
//--------------------------------
// function changeColor(obj) {
//     var allDivs = textareaEl;
//     for (var i = 0; i < allDivs.length; ++i) {
//         allDivs[i].style.color = '';
//     }

//     // Now set the color to the obj passed
//     obj.style.color = 'red';
// }


// function timeupdate(i) {

//     if (hours[i] > now) {
//         $('#hour9').addClass('pasttime')
//     }

// }
// timeupdate(9)
// timeupdate(10)
// timeupdate(11)

// for (var i = 0; i < hours.length; i++) {
//     var timestamp = '';
//     if (hours[i] > now) {
//         timestamp += hours[i].addClass('pasttime') + ",";
//     }
//     if (hours[i] = now) {
//         timestamp += hours[i].removeClass('pasttime') + ",";
//         timestamp += hours[i].addClass('presenttime') + ",";
//     } else {
//         timestamp += hours[i].addClass('futuretime') + ",";
//     }

// }
// console.log(timestamp)

// function timecheck(){
//     if (hourof9 < now) {
//         $('#hour9').addClass("backgroundColor", "red");
//     }

// }



// var timechecker =["hourof9",]
// for (var i = 0; i < length;i++) {



// }


// function timecheck() {

// }
// timecheck()





// if (starttime < now) {
//     hour9EL.style.backgroundColor = "#bebaba";

// }
// if (starttime == now) {
//     hour9EL.style.backgroundColor = "#7F9172";
// }
// if (starttime > now) {
//     hour9EL.style.backgroundColor = "#7F9172";
// }





// x = starttime.isBefore(now)
// y = starttime.isAfter(now)




// console.log(x)
// console.log(y)

// function timecheck(){


//     }
// }




// function timecheck() {

//     if (x == true) {
//         console.log("ram")
//     } else{

//     }
// }
// timecheck()


// var date = moment("2013-03-24")
// var now = moment();

// if (now > date) {
//    // date is past
// } else {
//    // date is future
// }

// constant
let sliderNumber = document.getElementById("slider-number");
let allimage = document.querySelectorAll(".images img");
let indicators = document.getElementById("indicators");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
//  reste numberof slides
let currentslides = 0;

// put current slides on sliderNumber

sliderNumber.appendChild(document.createTextNode(`image number #${currentslides + 1}`));


// array from images
let imgArry = Array.from(allimage);
// console.table(imgArry)

// to create spans and put them in indicators 

for (let i = 1; i <= imgArry.length; i++) {
    let spans = document.createElement("span");


    spans.appendChild(document.createTextNode(i));
    spans.setAttribute("data-index", i);
    indicators.appendChild(spans);

}

// handel next and prev

nextButton.onclick = nextHandel;
prevButton.onclick = prevHandel;
// 
// first handel bulltes 
let bulltes = document.querySelectorAll("#indicators span");
let allBulltes = Array.from(bulltes);
// toset active class on number first span in bulltes
allBulltes[currentslides].classList.add("active");


// function of next and prev


function nextHandel() {
    // if reach final number of span disable nect click
    if (currentslides + 1 === allBulltes.length) {
        nextButton.classList.add("disable");

    } else {
        // remove class disable frpm prev button 
        if (prevButton.classList.contains("disable")) {
            prevButton.classList.remove("disable");
        }
        // console.log(currentslides);
        // console.log(allBulltes.length)
        currentslides++;
        // removeActive();
        addActive();
    }


}
function prevHandel() {
    // if reach final number of span disable prev click

    if (currentslides == 0) {
        prevButton.classList.add("disable");


    } else {
        // remove class disable from next button
        if (nextButton.classList.contains("disable")) {
            nextButton.classList.remove("disable");
        }
        currentslides--;

        sliderNumber.innerHTML = "";
        //active classon images;
        allimage[currentslides + 1].classList.remove("active");
        // remove class active on numbers inse span
        allBulltes[currentslides + 1].classList.remove("active");
        sliderNumber.appendChild(document.createTextNode(`image number #${currentslides + 1}`));
        allimage[currentslides].classList.add("active");
        allBulltes[currentslides].classList.add("active");
    }


}

// create function to add active class


function addActive() {
    removeActive();
    // put current slides on sliderNumber

    sliderNumber.appendChild(document.createTextNode(`image number #${currentslides + 1}`));
    //active classon images;
    allimage[currentslides].classList.add("active");
    // add class active on numbers inse span
    allBulltes[currentslides].classList.add("active");



}
function removeActive() {
    // to empty filed of sliderNumber befor add number
    sliderNumber.innerHTML = "";
    //active classon images;
    allimage[currentslides - 1].classList.remove("active");
    // remove class active on numbers inse span
    allBulltes[currentslides - 1].classList.remove("active");
    // console.log(allBulltes[currentslides - 1]);
    // console.log(allimage[currentslides - 1]);

    // console.log(sliderNumber.removeChild);


}

// to add class active on number in side span of bulltes
for (let i = 0; i < allBulltes.length; i++) {
    // add function on click on all number in bulltes
    allBulltes[i].onclick = function () {
        // check if least number in bulltes add dis able on next click button
        if (i === allBulltes.length - 1) {
            // check on disable class in next button befor add new class 
            nextButton.classList.forEach((el) => {
                if (el === "disable") {
                    nextButton.classList.remove("disable");
                }
            })
            // after verify from last number add class disable

            nextButton.classList.add("disable");
            // remove class disable from prevbutton if found it

            prevButton.classList.forEach((el) => {
                if (el === "disable") {
                    prevButton.classList.remove("disable");
                }
            })

        } else {
            // add class disable in prev button if click on frist number in bulltes
            if (i === 0) {
                prevButton.classList.forEach((el) => {
                    // remove class disable before add any thing
                    if (el === "disable") {
                        prevButton.classList.remove("disable");
                    }
                })
                prevButton.classList.add("disable");

            } else {
                // in case click on number between 2-4 remove class disable from prev button
                prevButton.classList.forEach((el) => {
                    if (el === "disable") {
                        prevButton.classList.remove("disable");
                    }
                })
            }

            nextButton.classList.forEach((el) => {
                // in case click on number between 2-4 remove class disable from next button

                if (el === "disable") {
                    nextButton.classList.remove("disable");
                }
            })

        }
        currentslides = i;
        // remove active class from bulltes
        allBulltes.forEach((el) => {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
            }

        })
        // to empty filed of sliderNumber befor add number
        sliderNumber.innerHTML = "";
        // to remove active class from images
        allimage.forEach((img) => {
            if (img.classList.contains("active")) {
                img.classList.remove("active")

            }

        })
        // add class active
        sliderNumber.appendChild(document.createTextNode(`image number #${i + 1}`));
        //active classon images;
        allimage[i].classList.add("active");
        // add class active on numbers inse span
        allBulltes[i].classList.add("active");

        console.log(i);
        console.log(allBulltes.length);
    }

}


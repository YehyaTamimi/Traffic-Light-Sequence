const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");

function activateLight(light, duration) {
    // Set opacity for inactive lights
    redLight.style.opacity = 0.3;
    yellowLight.style.opacity = 0.3;
    greenLight.style.opacity = 0.3;

    // Activate the selected light
    light.style.opacity = 1;
    setTimeout(() => {
        light.style.opacity = 0.3;
    }, duration);
}

//original function 
function sequenceLights() {
    setInterval(() => {
        activateLight(redLight, 1000);
        setTimeout(() => {
            activateLight(yellowLight, 1000);
            setTimeout(() => {
                activateLight(greenLight, 1000);
            }, 1000);
        }, 1000);
    }, 3000); // 3000ms total cycle time (1s red + 1s yellow + 1s green)
}

sequenceLights(); // Start the sequence immediately


//make the yellow light appear along with the red light before turning green
// function activateSecondLight(light, duration) {
//     light.style.opacity = 1;
//     setTimeout(() => {
//         light.style.opacity = 0.3;
//     }, duration);
// }

//simulate traffic light, where the red lights followed by yellow together, before turning green.
// function differentSequenceLights() {
//     setInterval(() => {
//         activateLight(redLight, 2000);
//         setTimeout(() => {
//             activateSecondLight(yellowLight, 1000);
//             setTimeout(() => {
//                 activateLight(greenLight, 1000);
//             }, 1000);
//         }, 1000);
//     }, 3000); // 3000ms total cycle time (1s red + 1s yellow + 1s green)
// }

//differentSequenceLights();
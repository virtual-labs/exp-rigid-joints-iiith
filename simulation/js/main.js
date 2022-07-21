'use strict';

(function() {
    console.log("printdropdown");
    generateDropdown();
})();

// this function generate the dropdown
function generateDropdown() {
    console.log("printdropdown");
    var dropdown = ['Select Joints Type', 'Rigid Joints']
    var select = document.getElementById("dropdown");
    for (var i = 0; i < dropdown.length; i++) {
        var optn = dropdown[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
    document.getElementById("procedure-message").innerHTML = "Select Joint Type from the dropdown menu";
}

function onSelection() {
    var selectedDropdown = document.getElementById("dropdown");
    console.log(selectedDropdown);
    var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
    if (selectedDropdownval === "Rigid Joints") {
        document.getElementById("procedure-message").innerHTML = "<li>Select the Joint type, selection load type parameter and click on Start button</li>" + "<li>Observe the angle of the beam corners in the observation section </li>";
        //    document.getElementById("main-beam1").style.display="block";   

    } 
}


//this function shows the animations in the observations section 
function showObservations(ele1, ele2) {
    var path1 = document.getElementsByClassName(ele1)[0].getElementsByTagName("path")[0];
    var path1Val = path1.getAttribute("d")
    var path2 = document.getElementsByClassName(ele2)[0].getElementsByTagName("path")[0];
    var path2Val = path2.getAttribute("d")
    animateObserve(ele1, path1Val);
    console.log(path1Val);
    // animateObserve(ele2, path2Val);
    console.log(path2Val);
}
var previousClickedarrow = [];
var previousClickedEle = [];
var previousClickedBeam = [];
var previousClickedMainBeam = [];
var mainBeamDisplay = [];

// function play() {
//    // moveArrowDown("arrow", 150);
//     // const myTimeout = setTimeout(playSimulation, 2000);
//     // setTimeout(playSimulation, 3000);
//     // playSimulation();
// }

function playSimulation() {
    console.log("printplay");
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
            var selectedDropdown = document.getElementById("dropdown");
            console.log(selectedDropdown);
            var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
            // var lengthval = document.getElementById("length").value
            // console.log(lengthval);
            // var depthval = document.getElementById("depth").value
            // console.log(depthval);


            
            if (previousClickedEle.length > 0) {
                for (var i = 0; i < previousClickedEle.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedEle[i]).style.display = "none";
                }
            }

            if (previousClickedBeam.length > 0) {
                for (var i = 0; i < previousClickedBeam.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedBeam[i]).style.display = "none";
                }
            }
            if (previousClickedMainBeam.length > 0) {
                for (var i = 0; i < previousClickedMainBeam.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedMainBeam[i]).style.display = "none";
                }
            }
            if (mainBeamDisplay.length > 0) {
                for (var i = 0; i < mainBeamDisplay.length; i++) {
                    console.log("test");
                    document.getElementById(mainBeamDisplay[i]).style.display = "none";
                }
            }
            if (value === "Load" && selectedDropdownval === "Rigid Joints") {
                document.getElementById("arrow").style.display = "block";
                moveArrowDown("arrow", 95);
                const myTimeout = setTimeout(function() { previousClickedEle.push("set1");
                document.getElementById("set1").style.display = "block";
                //document.getElementById("procedure-message").innerHTML = "Select Cantilever from the dropdown menu";
                document.getElementById("mes1").innerHTML = "The angle of corner of joints are 90 degrees";
                //document.getElementById("mes2").innerHTML = "Maiximum bending movement occurs at the initial fixed end";
                cantiPlBeam("#canti-pl-main-beam", "#canti-beam-pl");
                previousClickedBeam.push("beam1");
                document.getElementById("beam1").style.display = "none";
                // console.log("beam1");
                previousClickedMainBeam.push("main-beam1");
                document.getElementById("main-beam1").style.display = "none";
                mainBeamDisplay.push("main-beam1");
                document.getElementById("main-beam1").style.display = "block";
                //showObservations('svg-sfd','svg-bmd');
                animateObserve('.canti-pl-sfd path', 'M 200 450 C 250 300 200 250 200 150 L 250 150 L 250 200 L 200 200 L 200 150 C 300 100 350 100 450 150 L 450 200 L 400 200 L 400 150 L 450 150 C 450 250 400 350 450 450');
               // animateObserve('.canti-pl-bmd path', 'M 0 150 L 800 150 L 350 200 L 350 150 L 350 200 L 150 100 L 0 150');
            }, 100);
            }
            if (value === "UDL" && selectedDropdownval === "Rigid Joints") {
                document.getElementById("arrow").style.display = "none";
                document.getElementById("arrow-udl").style.display = "block";
                moveArrowDown("arrow-udl", 135);
                const myTimeout = setTimeout(function() {previousClickedEle.push("set2");
                document.getElementById("set2").style.display = "block";
                document.getElementById("mes3").innerHTML = "The angle of corner of joints are 90 degrees";
                //document.getElementById("mes4").innerHTML = "text message bm";
                // console.log("test");
                cantiUdlBeam("#canti-udl-main-beam", "#canti-beam-udl");
                previousClickedBeam.push("beam2");
                document.getElementById("beam2").style.display = "none";
                previousClickedMainBeam.push("main-beam2");
                document.getElementById("main-beam2").style.display = "block";
                animateObserve('.canti-udl-sfd path', 'M 200 450 C 250 300 200 250 200 150 L 250 150 L 250 200 L 200 200 L 200 150 C 300 100 350 100 450 150 L 450 200 L 400 200 L 400 150 L 450 150 C 450 250 400 350 450 450');
               // animateObserve('.canti-udl-bmd path', 'M 0 150 L 800 150 L 350 250 C 200 0 100 0 0 150');
            }, 100);
               
            }
        
           
       
            
    }}
}
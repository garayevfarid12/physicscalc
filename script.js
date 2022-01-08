function radiochange1(){
    var element = document.getElementById("divhomework2");

    element.style.visibility = "visible";
    element.style.height = "auto";


    var element2 = document.getElementById("divhomework1");

    element2.style.visibility = "hidden";
    element2.style.height = "0px";
}



function radiochange2(){
    var element = document.getElementById("divhomework1");

    element.style.visibility = "visible";
    element.style.height = "auto";

    var element2 = document.getElementById("divhomework2");

    element2.style.visibility = "hidden";
    element2.style.height = "0px";
}


function calculate(){
    var element = document.getElementById("hw1");
    var homework = 0;

    if(element.checked){
        var homework1 = 0;
        homework1 = (document.getElementById("hwinput1").value == "") ? 0 : parseFloat(document.getElementById("hwinput1").value);
        var homework2 = 0;
        homework2 = (document.getElementById("hwinput2").value == "") ? 0 : parseFloat(document.getElementById("hwinput2").value);
        var homework3 = 0;
        homework3 = (document.getElementById("hwinput3").value == "") ? 0 : parseFloat(document.getElementById("hwinput3").value);
        var homework4 = 0;
        homework4 = (document.getElementById("hwinput4").value == "") ? 0 : parseFloat(document.getElementById("hwinput4").value);
        var homework5 = 0;
        homework5 = (document.getElementById("hwinput5").value == "") ? 0 : parseFloat(document.getElementById("hwinput5").value);
        var homework6 = 0;
        homework6 = (document.getElementById("hwinput6").value == "") ? 0 : parseFloat(document.getElementById("hwinput6").value);
        var homework7 = 0;
        homework7 = (document.getElementById("hwinput7").value == "") ? 0 : parseFloat(document.getElementById("hwinput7").value);
        var homework8 = 0;
        homework8 = (document.getElementById("hwinput8").value == "") ? 0 : parseFloat(document.getElementById("hwinput8").value);
        var homework9 = 0;
        homework9 = (document.getElementById("hwinput9").value == "") ? 0 : parseFloat(document.getElementById("hwinput9").value);
        var homework10 = 0;
        homework10 = (document.getElementById("hwinput10").value == "") ? 0 : parseFloat(document.getElementById("hwinput10").value);
        var homework11 = 0;
        homework11 = (document.getElementById("hwinput11").value == "") ? 0 : parseFloat(document.getElementById("hwinput11").value);
        var homework12 = 0;
        homework12 = (document.getElementById("hwinput12").value == "") ? 0 : parseFloat(document.getElementById("hwinput12").value);

        homework = ((homework1 + homework2 + homework3 + 
                       homework4 + homework5 + homework6 +
                       homework7 + homework8 + homework9 +
                       homework10 + homework11 + homework12)/12).toFixed(4);
                       
        homework = parseFloat((homework * 15 / 100).toFixed(4));
        
    }else{
        homework = (document.getElementById("hwinput").value == "") ? 0 : parseFloat(document.getElementById("hwinput").value);
    }

    

    //alert(homework);
    var exam1 = 0;
    exam1 = (document.getElementById("exam1input").value == "") ? 0 : parseFloat(document.getElementById("exam1input").value);

    //alert(exam1);
    var exam2 = 0;
    exam2 = (document.getElementById("exam2input").value == "") ? 0 : parseFloat(document.getElementById("exam2input").value);

    //alert(exam2);
    var exam3 = 0;
    exam3 = (document.getElementById("exam3input").value == "") ? 0 : parseFloat(document.getElementById("exam3input").value);

    //alert(exam3);
    var finalexam = 0;
    finalexam = (document.getElementById("finalexaminput").value == "") ? 0 : parseFloat(document.getElementById("finalexaminput").value);
    var scheme1 = 0;
    scheme1 = parseFloat(((homework + (15*exam1/100) + (15*exam3/100) + (23*exam2/100) + (32*finalexam/100)) * 1.00)).toFixed(4);

    var scheme2 = 0;
    var maxscheme2 = 0;
    if(exam3>exam1){
        maxscheme2 = exam3;
    }else{
        maxscheme2 = exam1;
    }

    scheme2 = parseFloat(((homework +  (22*maxscheme2/100) + (27*exam2/100) + (36*finalexam/100)) * 1.00)).toFixed(4);

    

    alert("Homework: " + homework + "\r\n" +
          "Exam 1: " + exam1 + "\r\n" +
          "Exam 2: " + exam2 + "\r\n" +
          "Exam 3: " + exam3 + "\r\n" +
          "Final Exam: " + finalexam + "\r\n" + "\r\n" +
          "Scheme 1: " + scheme1+ "\r\n" +
          "Scheme 2: " + scheme2);

}


function clearInputs(){
    var slides = document.getElementsByClassName("inputs");
    for (var i = 0; i < slides.length; i++) {
        slides.item(i).value = "";
    }

    var slides = document.getElementsByClassName("homework2input");
    for (var i = 0; i < slides.length; i++) {
        slides.item(i).value = "";
    }
}


   

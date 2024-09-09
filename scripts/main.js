

/*
    *****************
    DONE BY:-   ABHISHEK PANDEY
    
    *****************
*/

/* array speed,size,generate ko bhi buttlocked krna hai*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
let inp_as = document.getElementById("a_size"),
  array_size = inp_as.value;
let inp_gen = document.getElementById("array_generate");
let inp_aspeed = document.getElementById("a_speed");
let butts_algos = document.querySelectorAll(".sortingAlgo");
let sortButton = document.querySelector(".sort_button");
let pauseButton = document.querySelector(".pausebtn");
let algoSelected = null;
let len = butts_algos.length;
let div_sizes = [];
let divs = [];
let margin_size;
let cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//array generation and updation
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size); //when slider changes , change the array size

function generate_array() {
  cont.innerHTML = "";

  for (let i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:#6399f1; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size();

//running appropriate algorithms
// butts_algos = 6 childs

for (let i = 0; i < len; i++) {
  butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
  for (let i = 0; i < len; i++) {
    butts_algos[i].classList.add("butt_locked");
  }
  // inp_as.disabled = true;
  /*inp_gen.disabled = true; --> it is not working because , inp_gen is not a form element , so do something else*/
  inp_gen.classList.add("inp_genDisable");
  // inp_aspeed.disabled = true;
  inp_as.classList.add("inp_genDisable");
  inp_aspeed.classList.add("inp_genDisable");
}

function runalgo() {
  for (let i = 0; i < len; i++) {
    butts_algos[i].classList.remove("butt_selected");
  }
  this.classList.add(
    //this refers to the button which triggers this function
    "butt_selected"
  ); /*element when selected , at that time only add butt_selected*/
  algoSelected = this;
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
  sortButton.removeEventListener("click", sortButtonClickHandler);
  sortButton.classList.remove("inp_genDisable");
  sortButton.classList.add("hovered");
  sortButton.addEventListener("click", sortButtonClickHandler);
}

function sortButtonClickHandler() {
  disable_buttons();
  sortButton.style.color = "yellow";
  sortButton.classList.add("butt_locked");
  pauseButton.classList.remove("inp_genDisable");
  pauseButton.classList.add("Hovered");
  // inp_as.disabled = true;
  // /*inp_gen.disabled = true; --> it is not working because , inp_gen is not a form element , so do something else*/
  // inp_gen.classList.add("inp_genDisable");
  // inp_aspeed.disabled = true;
  switch (algoSelected.innerHTML) {
    case "Bubble Sort":
      Bubble();
      break;
    case "Selection Sort":
      Selection_sort();
      break;
    case "Insertion Sort":
      Insertion();
      break;
    case "Merge Sort":
      Merge();
      break;
    case "Quick Sort":
      Quick();
      break;
    case "Heap Sort":
      Heap();
      break;
  }
}

/*
    *****************
    DONE BY:-   ABHISHEK PANDEY
    
    *****************
*/

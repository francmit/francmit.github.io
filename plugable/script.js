// Define the HTML content to be injected
var htmlContent = `
<div class="container">
<h1>Docking Station Finder</h1>
  <h2 class="text-center">Connect <u>This</u> With <em>That</em>.</h2>
  <div class="steps">
    <div>
      <span id="back" class="d-none" onclick="back()">Back</span>
    </div>
    <div class="nav-step-1 active-step fw-bolder">Step 1</div>
    <div class="nav-step-2 nav-step-2a disabled">Step 2</div>
    <div class="nav-step-3 disabled">Step 3</div>
  </div>
  <div class="step-1 active">
    <p>Let's start with your computer. Which operating system are you using?</p>
    <div class="card-grid">
      <div>
        <div class="card rounded text-center">
          <div onclick="selectOS('windows')">
            <p class="fw-bolder pb-2">Windows</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card rounded text-center">
          <div onclick="selectOS('macos')">
            <p class="fw-bolder pb-2">macOS</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card rounded text-center">
          <div onclick="selectOS('chromeos')">
            <p class="fw-bolder pb-2">ChromeOS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Define the alternative CSS
var alternativeCSS = `
.position-relative {
    position: relative !important;
  }

@media (min-width: 2200px) {
.prod-card-img-container {
    width: 100%;
    height: 435px;
    position: relative;
}
}
.active {
  display: initial !important;
}

.btn {
    border: 2px solid #d6e4f9;
    border-radius: 8px;
    background-color: #2f6bed;
    color: white;
    padding: 7px;
    margin-left: -2px;
    padding-left: 17px;
    padding-right: 17px;
    cursor: pointer;
  }

.container {
  display: grid;
  grid-template-columns: 33% 33% 33%
  grid-template-rows: auto auto auto;
  gap: 10px;
  max-width: 1140px;
  margin: auto;
  background-color: rgba(244, 244, 244, 1);
}

.text-center {
    text-align: center;
}

.step-1, .step-2, .step-2a {
    text-align: center;
}

.step-1 {
  display: grid;
  grid-template-rows: auto auto;
}

.steps {
  display: grid;
  grid-template-columns: 5% 30% 30% 30% 5%;
  border-bottom: #505759 solid 1px;
  text-align: center;
}

.card {
    border: 1px solid rgba(0, 0, 0, .175);
    border-radius: .25rem;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: white;
}

.card-grid {
  display:grid;
  grid-template-columns: 33% 33% 33%
}

.d-none {
    display: none;
}

.mx-pro {
  background: #CFCFCF;
  background: linear-gradient(to top right, #CFCFCF 0%, #1345CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mx-max {
  background: #CFCFCF;
  background: linear-gradient(to top right, #CFCFCF 0%, #7C34CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h1 {
    font-size: 1.75rem;
}

button svg {
    margin-left: 0px !important;
}

.modal-lg {
    margin-top: 8%;
}

.step-1,
.step-2a,
.step-2 {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
}

.step-1,
.step-2,
.step-2a,
.step-3,
.step-4 {
    display: none;
}

.step-1.active,
.step-2.active,
.step-2a.active,
.step-3.active {
    animation: scale-display .3s;
}

.step-2.out,
.step-2a.out,
.step-3.out {
    animation: scale-display--reversed .3s;
    animation-fill-mode: forwards;
    display: block;
}

@keyframes scale-display {
    0% {
        opacity: 0;
        transform: translateX(-30px);
        -webkit-transform: translateX(-30px);
    }

    100% {
        opacity: 1;
        transform: translateX(0));
        -webkit-transform: translateX(0);
    }
}

@keyframes scale-display--reversed {
    0% {
        display: inline-flex;
        opacity: 1;
        transform: translateX(30px);
        -webkit-transform: translateX(30px);
    }

    99% {
        display: inline-flex;
        opacity: 0;
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }

    100% {
        display: none;
        opacity: 0;
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}

.card:hover {
    background-color: #006341;
}

.card:hover * {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    color: white;
}

.selectedCard {
    background-color: #006341;
    color: white;
}

.active-step {
    margin-bottom: -1.2rem;
    font-weight: bold;
}

.active-step::after {
    content: '';
    display: block;
    position: relative;
    top: 0%;
    width: 16%;
    left: 42%;
    border-top: 3px solid #006341;
}

.disabled {
    color: #484848;
}

#results {
    color: white;
}

#back {
    cursor: pointer;
}

.card>button {
    position: absolute;
    top: 15px;
    right: 15px;
}

.custom-switch {
    margin-bottom: 10px;
}

.prod-card-img {
  height: auto;
  width: auto;
  max-height: 85%;
  max-width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 1rem;
}
}

.form-row {
    margin-top: 25px;
}
.form-control {
  margin: 10px 10px;
  display: block;
  width: 75%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.form-control::-moz-placeholder {
  color: #999999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999999;
}
.form-control::-webkit-input-placeholder {
  color: #999999;
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #eeeeee;
  opacity: 1;
}
.form-control[disabled],
fieldset[disabled] .form-control {
  cursor: not-allowed;
}
textarea.form-control {
  height: auto;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"].form-control,
  input[type="time"].form-control,
  input[type="datetime-local"].form-control,
  input[type="month"].form-control {
    line-height: 34px;
  }
  input[type="date"].input-sm,
  input[type="time"].input-sm,
  input[type="datetime-local"].input-sm,
  input[type="month"].input-sm,
  .input-group-sm input[type="date"],
  .input-group-sm input[type="time"],
  .input-group-sm input[type="datetime-local"],
  .input-group-sm input[type="month"] {
    line-height: 30px;
  }
  input[type="date"].input-lg,
  input[type="time"].input-lg,
  input[type="datetime-local"].input-lg,
  input[type="month"].input-lg,
  .input-group-lg input[type="date"],
  .input-group-lg input[type="time"],
  .input-group-lg input[type="datetime-local"],
  .input-group-lg input[type="month"] {
    line-height: 46px;
  }
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}
.radio label,
.checkbox label {
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  cursor: pointer;
}

.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
.form-control-static {
  min-height: 34px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
}
.form-control-static.input-lg,
.form-control-static.input-sm {
  padding-right: 0;
  padding-left: 0;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.form-group-sm select.form-control {
  height: 30px;
  line-height: 30px;
}
.form-group-sm textarea.form-control,
.form-group-sm select[multiple].form-control {
  height: auto;
}
.form-group-sm .form-control-static {
  height: 30px;
  min-height: 32px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.form-group-lg .form-control {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.form-group-lg select.form-control {
  height: 46px;
  line-height: 46px;
}
.form-group-lg textarea.form-control,
.form-group-lg select[multiple].form-control {
  height: auto;
}
.form-group-lg .form-control-static {
  height: 46px;
  min-height: 38px;
  padding: 11px 16px;
  font-size: 18px;
  line-height: 1.3333333;
}

.input-lg + .form-control-feedback,
.input-group-lg + .form-control-feedback,
.form-group-lg .form-control + .form-control-feedback {
  width: 46px;
  height: 46px;
  line-height: 46px;
}
.input-sm + .form-control-feedback,
.input-group-sm + .form-control-feedback,
.form-group-sm .form-control + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}

@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}

.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 11px;
    font-size: 18px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
    font-size: 12px;
  }
}
.clearfix:before,
.clearfix:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after {
  display: table;
  content: " ";
}
.clearfix:after,
.form-horizontal .form-group:after {
  clear: both;
}
`;

// Function to inject HTML into the specified div
function injectHTML() {
  // Find the div element with id "dock-finder"
  var dockFinderDiv = document.getElementById('dock-finder');

  //temp override - delete later
  var styleElement = document.createElement('style');

  // Set the CSS text
  styleElement.innerHTML = alternativeCSS;

  // Append the style element to the document head
  document.head.appendChild(styleElement);
  
  // Check if the div is found
  if (dockFinderDiv) {
    // Inject the HTML content into the div
    dockFinderDiv.innerHTML = htmlContent;
    // Create a style element to hold the CSS
    var styleElement = document.createElement('style');

    // Set the CSS text
    styleElement.innerHTML = alternativeCSS;
    
    // Append the style element to the document head
    document.head.appendChild(styleElement);
  } else {
    console.error('Div with id "dock-finder" not found.');
  }
}
var os = "";
var hostType = "";
var macCPUModel = "";
var step1Values = [];
var step2Values = [];
var step3Values = [];
var numD;
var maxR; 

var startingURL = "https://plugable.com/collections/docking-stations/";
document.addEventListener("DOMContentLoaded", function() {
    injectHTML();
    if (window.location.href.split("#").length > 1) {
        selectOS(window.location.href.split("#")[1].toLowerCase());
    }
});

// Step 1
function selectOS(x) {
    os = x;

    if (os == "macos") {
        transitionSteps("step-1", "step-2a", true);
    } else { // os == windows or chromeos
        transitionSteps("step-1", "step-2", true);
    }
}

// Step 2
function selectHostType(x) {
    hostType = x;
    step2Values.push(hostType);

    preventDeadEndResults();
    transitionSteps("step-2", "step-3", true);
}

// Step 2a
function selectMacCPU(model) {
    macCPUModel = model;
    if (macCPUModel == "m1-m2") {
        step2Values.push('displaylink');
    }
    if (macCPUModel == "m1-pro-max") {
        step2Values.push('thunderbolt-to-host');
    }

    preventDeadEndResults();
    transitionSteps("step-2a", "step-3", true);
}

// Step 3
function selectVideoInput(card) {
    // Selected card is was already selected
    if (card.classList.contains("selectedCard")) {
        card.classList.remove("selectedCard");
        step3Values.length = 0;
    } else {
        // Selected card was not selected
        if (document.querySelector(".selectedCard")) {
            document.querySelector(".selectedCard").classList.remove("selectedCard");
            step3Values.length = 0;
        }
        card.classList.add("selectedCard");
        document.querySelector("#results").classList.remove("disabled");
        document.querySelector("#results").tabIndex = 0;
    }
    step3Values.push(card.id);
}

function updateFeature(x) {
    if (x.checked) {
        step3Values.push(x.id); 
    } else {
        step3Values.pop(x.id);
    }
}

function numDisplays(x) {
    numD = x.value;
}

function maxRes(x) {
    maxR = x.value;
}

// Prevent dead ends by hiding options that result in no dock results
function preventDeadEndResults() {
    if (os == "macos") {
        document.querySelector('[value="4x-displays"]').classList.add("d-none");
    }
    if (hostType == "usb-type-a-to-host") {
        // No USB 3.0 docks with PD
        document.querySelector("#power-delivery-host-charging").parentElement.classList.add("d-none");
        // No USB 3.0 docks with SD card reader
        document.querySelector("#has-sd-reader").parentElement.classList.add("d-none");
        // No USB 3.0 docks with triple output
        document.querySelector('[value="3x-displays"]').classList.add("d-none");
        // No USB 3.0 docks with USB-C/TBT3
        document.querySelector("#has-usb-c-ports").parentElement.classList.add("d-none");
        document.querySelector("#has-thunderbolt-3-ports").parentElement.classList.add("d-none");
        // No USB 3.0 docks with quad output
        document.querySelector('[value="4x-displays"]').classList.add("d-none");
    }
    if (hostType == "usb-type-c-to-host") {
        // No TBT3 docks with VGA video output
        document.querySelector("#vga-output").classList.add("d-none");
        // No TBT3 docks with DVI video output
        document.querySelector("#dvi-output").classList.add("d-none");
        // No USB-C docks with Thunderbolt ports
        document.querySelector("#has-thunderbolt-3-ports").parentElement.classList.add("d-none");
    }
    if (hostType == "thunderbolt-to-host") {
        // No TBT3 docks with VGA video output
        document.querySelector("#vga-output").classList.add("d-none");
        // No TBT3 docks with DVI video output
        document.querySelector("#dvi-output").classList.add("d-none");
    }

    if (macCPUModel == "m1-pro-max") {
        document.querySelector('[value="3x-displays"]').classList.add("d-none");
        document.querySelector("#vga-output").classList.add("d-none");
        document.querySelector("#dvi-output").classList.add("d-none");
    }
}

function transitionSteps(current, next, updateNavRequired) {
    var navClass = ".nav-" + next;
    var nextStepClass = "." + next;
    var currentStepClass = "." + current;
    if (next == "step-1") {
        document.querySelector("#back").classList.add("d-none");
    } else {
        document.querySelector("#back").classList.remove("d-none");
    }
    // For switching between step number navigation
    if (updateNavRequired) {
        document.querySelector(".nav-" + current).classList.toggle("disabled");
        document.querySelector(".nav-" + current).classList.toggle("fw-bolder");
        document.querySelector(".nav-" + current).classList.toggle("active-step");
        document.querySelector(navClass).classList.toggle("disabled");
        document.querySelector(navClass).classList.toggle("fw-bolder");
        document.querySelector(navClass).classList.toggle("active-step");
    }
    // Toggle d-block to next step
    document.querySelector(nextStepClass).classList.add("active");
    document.querySelector(currentStepClass).classList.remove("active");
}


function resetStepOptions(stepNum) {
    var step = "." + stepNum;
    var h = document.querySelector(step).querySelectorAll(".d-none:not(.alert)");
    for (i = 0; i < h.length; i++) {
        h[i].classList.remove("d-none");
    }
    //document.querySelector("#m1-alert").classList.add("d-none");
    //document.querySelector("#dl-app-alert").classList.add("d-none");
}

function back() {
    const activeStep1 = document.querySelector(".nav-step-1").classList.contains("active-step");
    // Only proceed if the user is NOT on step 1
    if (!activeStep1) {
        //const resultsLink = document.querySelector("#results");
        //resultsLink.href = startingURL;
        // Get the current and next step names
        const currentStep = getCurrentStep();
        const nextStep = getNextStep(currentStep);
        // Transition between steps
        transitionSteps(currentStep, nextStep, true);
        // Reset specific step options and elements
        if (currentStep === "step-2") {
            step2Values.length = 0;
            resetStepOptions("step-3");
            document.querySelector(".step-2a").classList.remove("active");
        } else if (currentStep === "step-3") {
            step2Values.length = 0;
            step3Values.length = 0;
            document.querySelector(".step-3 form").reset();
        }
        // Enable disabled elements
        document.querySelectorAll('[disabled]').forEach(el => el.disabled = false);
        document.querySelectorAll('.disabled').forEach(el => el.classList.remove('disabled'));
        document.querySelectorAll('.d-none').forEach(el => el.classList.remove('d-none'));
        // Remove the selected card class if exists
        const selectedCard = document.querySelector(".selectedCard");
        if (selectedCard) {
            selectedCard.classList.remove("selectedCard");
        }
        // Clear dock results
        document.querySelector('.step-4').querySelector('.card-grid').replaceChildren();
        // Reset filter
    }
}

function getCurrentStep() {
    if (document.querySelector(".nav-step-2").classList.contains("active-step") || document.querySelector(".step-2a").classList.contains("active")) {
        return "step-2";
    } else {
        return "step-3";
    }
}

function getNextStep(currentStep) {
    if (currentStep === "step-2") {
        return "step-1";
    } else {
        return os === "macos" ? "step-2a" : "step-2";
    }
}

async function displayResults() {
    //let jsonDataSrc = "https://cdn.shopify.com/s/files/1/0006/9045/4575/files/docks.json?v=1722393540"
    //let jsonDataSrc = "https://media.plugable.com/dockfinder/data.json";
    let jsonDataSrc = "https://d2k3ryp93mcqg.cloudfront.net/dockfinder/data.json";
    let data = await getData(jsonDataSrc);
    transitionSteps("step-3", "step-4", false);
    let compatibleDockList = [];
    
    maxR != null && step3Values.push(maxR);
    numD != null && step3Values.push(numD);

    let values = step1Values.concat(step2Values, step3Values);

    data.products.forEach(product => {
        // Reformat tags to replace whitespace with hyphens, and remove parantheses
        let newTags = product.tags.map(function(e) {
            return e.replace(/[\s\.]/g, "-").replace(/[\(\)]/g, "").toLowerCase();
        })
        // Check if all values in the "values" array are in the "tags" array of the product
        const allValuesPresent = values.every(value => newTags.includes(value) && !newTags.includes('hide'));
        // If all values are present, add the SKU to the compatibleDockList
        if (allValuesPresent) {
            compatibleDockList.push(product.sku);
        }
    });
    console.log(values);
    createProductCards(data.products, compatibleDockList);
}

// Function to create and append product cards
function createProductCards(products, compatibleDockList) {
    const resultsDiv = document.querySelector('.step-4').querySelector('.card-grid');
    
    compatibleDockList.forEach(sku => {
        const product = products.find(p => p.sku === sku);
        if (product) {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            
            const cardLink = document.createElement('a');
            cardLink.href = `/products/${product.sku}`;
            
            const cardImageDiv = document.createElement('div');
            cardImageDiv.className = 'prod-card-img-container position-relative';
            
            const cardImage = document.createElement('img');
            cardImage.className = 'prod-card-img';
            cardImage.alt = product.title;
            cardImage.src = `https://images.plugable.com/${product.sku}/main_ori.jpg`;
            cardImage.sizes = "(min-width: 960px) 33vw, 100vw";
            cardImage.srcset = `https://images.plugable.com/${product.sku}/main_ori.jpg 768w`;
            
            cardImageDiv.appendChild(cardImage);
            cardLink.appendChild(cardImageDiv);
            cardDiv.appendChild(cardLink);
            
            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body d-flex flex-column pt-0';
            
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = product.title;
            
            const cardPrice = document.createElement('p');
            cardPrice.className = 'card-text';
            cardPrice.innerText = `$${(product.price / 100).toFixed(2)}`;
            
            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardPrice);
            cardDiv.appendChild(cardBodyDiv);
            
            resultsDiv.appendChild(cardDiv);
        }
    });
}

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

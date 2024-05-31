// Define the HTML content to be injected
var htmlContent = `
<div class="container">
  <h1>Docking Station Finder</h1>
  <div class="row">
    <div class="col-12">
      <div class="w-100 rounded bg-light p-6">
        <h2 class="text-center">Connect <u>This</u> With <em>That</em>.</h2>
        <div class="steps row mt-5 text-center pb-3">
          <div class="col-lg-2 d-block">
            <span id="back" class="d-none" onclick="back()"><i class="fa fas fa-angle-left"></i> Back</span>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-2 col-4 nav-step-1 active-step fw-bolder">Step 1</div>
          <div class="col-lg-2 col-4 nav-step-2 nav-step-2a disabled">Step 2</div>
          <div class="col-lg-2 col-4 nav-step-3 disabled">Step 3</div>
          <div class="col-lg-3"></div>
        </div>
        <div class="step-1 py-4 text-center active d-block">
          <p>Let's start with your computer. Which operating system are you using?</p>
          <div class="row my-4">
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="selectOS('windows')">
                  <i class="fab fa-fw fa-4x fa-windows my-5"></i>
                  <p class="fw-bolder pb-2">Windows</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="selectOS('macos')">
                  <i class="fab fa-fw fa-4x fa-apple my-5"></i>
                  <p class="fw-bolder pb-2">macOS</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="selectOS('chromeos')">
                  <i class="fab fa-fw fa-4x fa-chrome my-5"></i>
                  <p class="fw-bolder pb-2">ChromeOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2 py-4 text-center">
          <p>Next, which port are you connecting to?</p>
          <div class="row my-4">
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="selectHostType('usb-type-a-to-host')">
                  <i class="fa-4x fac fa-custom-usb3 my-5"></i>
                  <p class="fw-bolder pb-2">USB 3.0</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="selectHostType('usb-type-c-to-host')">
                  <i class="fa-4x fac fa-custom-usbc my-5"></i>
                  <p class="fw-bolder pb-2">USB-C</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="selectHostType('thunderbolt-to-host')">
                  <i class="fa-4x fac fa-custom-tbt3 my-5"></i>
                  <p class="fw-bolder pb-2">Thunderbolt/USB4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step-2a py-4 text-center">
          <p>Since you're running macOS, can you tell me if your Mac uses Apple silicon (M1, M2, or M3) or an Intel CPU?</p>
          <p>
            Not sure? You can check by clicking the <strong>Apple icon</strong> at the top-left of your screen, choose
            <strong>About This Mac</strong>, and inspecting the <strong>Processor</strong> or
            <strong>Chip</strong> fields, or by referring to Apple's
            <a href="https://support.apple.com/en-us/HT211814" target="_blank">support guide</a>.
          </p>
          <div class="row my-4">
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="handleMacCPU('m1-m2')">
                  <p class="fw-bolder pb-2">
                    <span style="font-size:3rem"
                      >M1, M2, M3<br>
                      Base</span
                    ><br>
                    Apple Silicon
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="handleMacCPU('m1-pro-max')">
                  <p class="fw-bolder pb-2">
                    <span style="font-size:3rem"
                      >M1, M2, M3<br>
                      <span class="mx-pro">Pro</span>/<span class="mx-max">Max</span
                    ></span><br>
                    Apple Silicon
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="handleMacCPU('intel')">
                  <p class="fw-bolder pb-2">
                    <span style="font-size:3rem"
                      >Intel<br>
                      Core</span
                    ><br>
                    Pre-2020 models
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step-3 py-4 text-center">
          <p>
            Almost there! Let's look at the display (monitor, TV, projector, etc.) you want to connect. Select which
            video port you'd like to use, as well as any other display and feature preferences down below.
          </p>
          <div class="row my-4">
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div id="hdmi-output" onclick="selectCard(this)">
                  <i class="fa-4x fac fa-custom-hdmi my-5"></i>
                  <p class="fw-bolder pb-2">HDMI</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div id="displayport-output" onclick="selectCard(this)">
                  <i class="fa-4x fac fa-custom-dp my-5"></i>
                  <p class="fw-bolder pb-2">DisplayPort (DP)</p>
                </div>
              </div>
            </div>
            <div id="dvi-card" class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div id="dvi-output" onclick="selectCard(this)">
                  <i class="fa-4x fac fa-custom-dvi my-5"></i>
                  <p class="fw-bolder pb-2">DVI</p>
                </div>
              </div>
            </div>
            <div id="vga-card" class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div id="vga-output" onclick="selectCard(this)">
                  <i class="fa-4x fac fa-custom-vga my-5"></i>
                  <p class="fw-bolder pb-2">VGA</p>
                </div>
              </div>
            </div>
            <div id="usbc-card" class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-4">
              <div class="card rounded text-center">
                <div onclick="selectCard(this)" id="usb-type-c-output">
                  <i class="fa-4x fac fa-custom-usbc my-5"></i>
                  <p class="fw-bolder pb-2">USB-C</p>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div class="form-row">
              <div class="form-group col-md-3 text-left">
                <label for="displays">Number of Displays</label>
                <select class="form-control mb-3" onchange="numDisplays(this)" id="displays">
                  <option disabled="" hidden="" selected="" value="">Select number of displays</option>
                  <option value="">Any</option>
                  <option value="1x-display">1</option>
                  <option value="2x-displays">2</option>
                  <option value="3x-displays">3</option>
                  <option value="4x-displays">4</option>
                </select>
                <label for="max-res">Maximum Resolution</label>
                <select class="form-control" onchange="maxRes(this)" id="max-res">
                  <option disabled="" hidden="" selected="" value="">Select maximum resolution desired</option>
                  <option value="">Any</option>
                  <option value="1080p">1080p</option>
                  <option value="1440p">1440p</option>
                  <option value="4k">4K</option>
                </select>
              </div>
              <div class="col-md-1"></div>
              <div class="form-group col-md-3 text-left">
                <label>Additional Features</label>
                <div class="custom-control custom-switch">
                  <input
                    onclick="updateFeature(this)"
                    type="checkbox"
                    class="custom-control-input"
                    id="power-delivery-host-charging"
                  >
                  <label class="custom-control-label" for="power-delivery-host-charging"
                    ><i class="fas fa-fw fa-lg fa-plug"></i> Laptop Charging</label
                  >
                </div>
                <div class="custom-control custom-switch">
                  <input onclick="updateFeature(this)" type="checkbox" class="custom-control-input" id="has-ethernet">
                  <label class="custom-control-label" for="has-ethernet"
                    ><i class="fac fa-fw fa-lg fa-custom-ethernet"></i> Ethernet</label
                  >
                </div>
                <div class="custom-control custom-switch">
                  <input onclick="updateFeature(this)" type="checkbox" class="custom-control-input" id="has-sd-reader">
                  <label class="custom-control-label" for="has-sd-reader"
                    ><i class="fal fa-fw fa-lg fa-hdd"></i> SD Card Reader</label
                  >
                </div>
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="audio">
                  <label class="custom-control-label" for="audio"
                    ><i class="fal fa-fw fa-lg fa-headphones"></i> 3.5mm Audio</label
                  >
                </div>
              </div>
              <div class="form-group col-md-3 text-left ">
                <label>&nbsp;</label>
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="usb-a">
                  <label class="custom-control-label" for="usb-a"
                    ><i class="fac fa-fw fa-lg fa-custom-usb3"></i> USB-A Ports</label
                  >
                </div>
                <div class="custom-control custom-switch">
                  <input
                    onclick="updateFeature(this)"
                    type="checkbox"
                    class="custom-control-input"
                    id="has-usb-c-ports"
                  >
                  <label class="custom-control-label" for="has-usb-c-ports"
                    ><i class="fac fa-fw fa-lg fa-custom-usbc"></i> USB-C Ports</label
                  >
                </div>
                <div class="custom-control custom-switch">
                  <input
                    onclick="updateFeature(this)"
                    type="checkbox"
                    class="custom-control-input"
                    id="has-thunderbolt-3-ports"
                  >
                  <label class="custom-control-label" for="has-thunderbolt-3-ports"
                    ><i class="fac fa-fw fa-lg fa-custom-tbt3"></i> Thunderbolt ports</label
                  >
                </div>
              </div>
            </div>
          </form>
          <div id="m1-alert" class="alert alert-warning d-none" role="alert">
            If you're using a Mac with the M1 chip, please note that these systems are limited to a single native
            external display through any Thunderbolt docking station. For connecting more than one display, please refer
            to our <a href="https://kb.plugable.com/question/846497">USB-C or USB 3.0 docks</a> which use DisplayLink
            USB graphics technology, or see our
            <a href="/blogs/news/how-to-connect-more-external-displays-to-apple-silicon-m1-macs" target="_blank"
              >blog post</a
            >
            and <a href="https://www.youtube.com/watch?v=gEhoFz6ldSU" target="_blank">video</a> to learn more about
            these solutions.
          </div>
          <div id="dl-app-alert" class="alert alert-info d-none" role="alert">
            Our USB 3.0 and USB-C docking stations use DisplayLink USB graphics technology which requires the manual
            installation of the <a href="/pages/displaylink" target="_blank">DisplayLink Manager App on macOS</a> in
            order for the device to function as expected. More information can be found on our product pages, or
            <a href="https://kb.plugable.com/questions/1185378" target="_blank"
              >detailed instructions for macOS 11 and 12</a
            >, as well as <a href="https://kb.plugable.com/questions/1595423" target="_blank">macOS 13</a> are available
            in our knowledgebase.
          </div>
          <div class="text-center">
            <a
              id="results"
              class="btn disabled btn-primary btn-round mx-auto"
              tabindex="-1"
              href="/collections/docking-stations/"
              ><span class="px-2">See results</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Define the alternative CSS
var alternativeCSS = `
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

.step-2,
.step-2a,
.step-3 {
    display: none;
}

.step-1.active,
.step-2.active,
.step-2a.active,
.step-3.active {
    animation: scale-display .3s;
    display: inline-flex;
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
}

.active-step::after {
    content: '';
    display: block;
    position: relative;
    top: 30%;
    width: 30%;
    left: 35%;
    border-top: 3px solid #006341;
}

.disabled {
    color: #484848;
}

#results {
    color: white;
}

.steps {
    border-bottom: #505759 solid 1px;
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
`;

// Function to inject HTML into the specified div
function injectHTML() {
  // Find the div element with id "dock-finder"
  var dockFinderDiv = document.getElementById('dock-finder');
  
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

var hostType = "";
var os = "";
var macCPUModel = "";
var startingURL = "https://plugable.com/collections/docking-stations/";
document.addEventListener("DOMContentLoaded", function() {
    injectHTML();
    if (window.location.href.split("#").length > 1) {
        //selectHostType(window.location.href.split("#")[1]);
        selectOS(window.location.href.split("#")[1].toLowerCase());
    }
});

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
    document.querySelector(nextStepClass).classList.toggle("d-block");
    document.querySelector(currentStepClass).classList.remove("d-block");
    document.querySelector(nextStepClass).classList.add("active");
    document.querySelector(currentStepClass).classList.remove("active");
    document.querySelector(currentStepClass).classList.add("d-none");
    document.querySelector(nextStepClass).classList.remove("d-none");
}

function selectHostType(x) {
    hostType = x;
    // No docks with USB-C video output
    document.querySelector("#usbc-card").classList.add("d-none");
    document.querySelector("#has-thunderbolt-3-ports").parentElement.classList.add("d-none");
    if (x == "usb-type-a-to-host") {
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
    if (x == "usb-type-c-to-host") {
        // No TBT3 docks with VGA video output
        document.querySelector("#vga-card").classList.add("d-none");
        // No TBT3 docks with DVI video output
        document.querySelector("#dvi-card").classList.add("d-none");
        // No USB-C docks with Thunderbolt ports
        document.querySelector("#has-thunderbolt-3-ports").parentElement.classList.add("d-none");
    }
    if (x == "thunderbolt-to-host") {
        // No TBT3 docks with VGA video output
        document.querySelector("#vga-card").classList.add("d-none");
        // No TBT3 docks with DVI video output
        document.querySelector("#dvi-card").classList.add("d-none");
        document.querySelector("#has-thunderbolt-3-ports").parentElement.classList.add("d-none");
    }
    if ((document.querySelector("#results").href.includes("usb-type-a-to-host") || document.querySelector("#results").href.includes("usb-type-c-to-host")) && os == "macos") {
        document.querySelector("#dl-app-alert").classList.remove("d-none");
    }
    //next();
    if (x != "NA") {
        document.querySelector("#results").href += x;
        transitionSteps("step-2", "step-3", true);
    }
}

function handleMacCPU(model) {
    // if (model == "m1-pro-max" && macCPUModel) {
    //     document.querySelector("#results").href = hostType;
    // }
    // if (model == "m1-pro-max" && hostType == "usb-type-c-to-host") {
    //     document.querySelector("#results").href = startingURL + "thunderbolt-3-to-host";
    // }
    if (model == "m1-m2") {
        document.querySelector("#results").href = document.querySelector("#results").href + "displaylink";
        document.querySelector('[value="3x-displays"]').classList.remove("d-none");
        //document.querySelector("#results").href = document.querySelector("#results").href.replace("thunderbolt", "usb-type-c");
    }
    if (model == "m1-pro-max") {
        document.querySelector("#results").href = document.querySelector("#results").href + "thunderbolt-to-host";
        document.querySelector('[value="3x-displays"]').classList.add("d-none");
        document.querySelector("#vga-card").classList.add("d-none");
        document.querySelector("#dvi-card").classList.add("d-none");
    }
    document.querySelector(".step-2a").classList.remove("active");
    document.querySelector(".step-2a").classList.add("d-none");
    document.querySelector(".step-2a").classList.remove("d-block");
    macCPUModel = model;
    if ((document.querySelector("#results").href.includes("usb-type-a-to-host") || document.querySelector("#results").href.includes("usb-type-c-to-host")) && os == "macos") {
        document.querySelector("#dl-app-alert").classList.remove("d-none");
    }
    transitionSteps("step-2", "step-3", true);
}

function selectOS(x) {
    if (x == "windows" || x == "macos" || x == "chromeos") {
        os = x;
    }
    if (x == "macos") {
        document.querySelector('[value="4x-displays"]').classList.add("d-none");
        selectHostType("NA");
    }
    if (x == "windows" || x == "chromeos" || document.querySelector("#results").href.includes("usb-type-a-to-host")) {
        //next();
        transitionSteps("step-1", "step-2", true);
    } else if (x == "macos") {
        transitionSteps("step-1", "step-2a", true);
    }
}

function resetStepOptions(stepNum) {
    var step = "." + stepNum;
    var h = document.querySelector(step).querySelectorAll(".d-none:not(.alert)");
    for (i = 0; i < h.length; i++) {
        h[i].classList.remove("d-none");
    }
    document.querySelector("#m1-alert").classList.add("d-none");
    document.querySelector("#dl-app-alert").classList.add("d-none");
}

function back() {
    const activeStep1 = document.querySelector(".nav-step-1").classList.contains("active-step");
    // Only proceed if the user is NOT on step 1
    if (!activeStep1) {
        const resultsLink = document.querySelector("#results");
        resultsLink.href = startingURL;
        // Get the current and next step names
        const currentStep = getCurrentStep();
        const nextStep = getNextStep(currentStep);
        // Transition between steps
        transitionSteps(currentStep, nextStep, true);
        // Reset specific step options and elements
        if (currentStep === "step-2") {
            resetStepOptions("step-3");
            document.querySelector(".step-2a").classList.remove("active", "d-block");
        } else if (currentStep === "step-3") {
            document.querySelector(".step-3 form").reset();
        }
        // Enable disabled elements
        document.querySelectorAll('[disabled]').forEach(el => el.disabled = false);
        document.querySelectorAll('.disabled').forEach(el => el.classList.remove('disabled'));
        // Remove the selected card class if exists
        const selectedCard = document.querySelector(".selectedCard");
        if (selectedCard) {
            selectedCard.classList.remove("selectedCard");
        }
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

function selectCard(card) {
    // Selected card is was already selected
    if (card.classList.contains("selectedCard")) {
        card.classList.remove("selectedCard");
        document.querySelector("#results").classList.add("disabled");
        document.querySelector("#results").tabIndex = -1;
    } else {
        // Selected card was not selected
        if (document.querySelector(".selectedCard")) {
            document.querySelector(".selectedCard").classList.remove("selectedCard");
        }
        card.classList.add("selectedCard");
        document.querySelector("#results").classList.remove("disabled");
        document.querySelector("#results").tabIndex = 0;
    }
    updateResults();
}

function updateResults() {
    var options = ["hdmi-output", "displayport-output", "usb-type-c-output", "vga-output", "dvi-output"];
    if (document.querySelector(".selectedCard")) {
        adjustResults(options, document.querySelector(".selectedCard").id);
    } else {
        adjustResults(options, "");
    }
}

function numDisplays(x) {
    var options = ["1x-display", "2x-displays", "3x-displays", "4x-displays"];
    adjustResults(options, x.value);
    document.querySelector("#results").classList.remove("disabled");
    document.querySelector("#results").tabIndex = 0;
    if (document.querySelector("#results").href.includes("thunderbolt-to-host") && os == "macos" && macCPUModel == "m1-m2" && x.value == "2x-displays") {
        document.querySelector("#m1-alert").classList.remove("d-none");
    }
    if (document.querySelector("#results").href.includes("displaylink") && os == "macos" && macCPUModel == "m1-m2" && x.value == "1x-display") {
        document.querySelector("#results").href = document.querySelector("#results").href.replace("+displaylink", "");
    }
}

function maxRes(x) {
    var options = ["1080p", "1440p", "4K"];
    adjustResults(options, x.value);
}

function updateFeature(x) {
    if (x.checked) {
        document.querySelector("#results").href = document.querySelector("#results").href + "+" + x.id;
    } else {
        document.querySelector("#results").href = document.querySelector("#results").href.replace("+" + x.id, "");
    }
}

function adjustResults(options, x) {
    const dviOrVgaOutput = x === "dvi-output" || x === "vga-output";
    const resultsLink = document.querySelector("#results");
    // Hide/show options based on dviOrVgaOutput
    const hideOptions = ["3x-displays", "1440p", "4k"];
    hideOptions.forEach(option => {
        document.querySelector(`[value="${option}"]`).classList.toggle("d-none", dviOrVgaOutput);
    });
    // Disable/enable elements and update their title
    const disableElements = [{
        element: document.getElementById('power-delivery-host-charging'),
        title: "No DVI or VGA docks with laptop charging"
    }, {
        element: document.getElementById('has-sd-reader'),
        title: "No DVI or VGA docks with SD readers"
    }, {
        element: document.getElementById('has-usb-c-ports'),
        title: "No DVI or VGA docks with USB-C ports"
    }];
    disableElements.forEach(({
        element,
        title
    }) => {
        element.disabled = dviOrVgaOutput;
        element.parentNode.classList.toggle('disabled', dviOrVgaOutput);
        element.parentNode.title = dviOrVgaOutput ? title : "";
        element.checked = false;
        updateFeature(element);
    });
    // Replace options in the results link
    for (var i = 0; i < options.length; i++) {
        const option = options[i];
        const regex = x ? new RegExp(option) : new RegExp(`\\+${option}`);
        if (resultsLink.href.indexOf(option) > -1) {
            resultsLink.href = resultsLink.href.replace(regex, x ? x : "");
            return;
        }
    }
    // Append the selected option to the results link
    if (x) {
        resultsLink.href = resultsLink.href === startingURL ? resultsLink.href + x : resultsLink.href + "+" + x;
    }
}

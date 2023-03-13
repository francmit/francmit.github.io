 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
 import { getDatabase, ref, child, get, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration

 const firebaseConfig = {
     apiKey: "AIzaSyAJ6-aeMLms4Y6tnCvPPwG2cgTtBULAKvE",
     authDomain: "mj-wedding-rsvp.firebaseapp.com",
     databaseURL: "https://mj-wedding-rsvp-default-rtdb.firebaseio.com",
     projectId: "mj-wedding-rsvp",
     storageBucket: "mj-wedding-rsvp.appspot.com",
     messagingSenderId: "143415773960",
     appId: "1:143415773960:web:0e2f2f0f16e8a60d5bbabd"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 const dbRef = ref(getDatabase(app));

 function authenticate(fname, lname) {
    get(child(dbRef, `guests/`)).then((snapshot) => {
        if (snapshot.exists()) {
            let authSuceeded = false;
            snapshot.val().forEach(function(g, index) {
                if (g.firstName.toLowerCase() == fname.toLowerCase() && g.lastName.toLowerCase() == lname.toLowerCase()) {
                    loadRSVP(snapshot.val(), g);
                    authSuceeded = true;
                    logGuestRSVPVisit(index);
                }
            })
            if (authSuceeded) {
                document.querySelector("#rsvp").querySelector('form').remove();
                document.querySelector('.alert').classList.add('d-none');
            } else {
                if (!(fname || lname)) {
                    document.querySelector('.alert').innerText = "Please enter both your first and last name to locate your invitation!";
                } else if (!lname) {
                    document.querySelector('.alert').innerText = "Please enter your last name to locate your invitation!";
                } else if (!(fname)) {
                    document.querySelector('.alert').innerText = "Please enter  your first name to locate your invitation!";
                } else {
                    document.querySelector('.alert').innerText = "Unable to locate invitation. Please ensure first and last name are spelled correctly and try again.";
                }
                document.querySelector('.alert').classList.remove('d-none');
            }
        }
        }).catch((error) => {
            console.error(error);
        });
    
    }

function logGuestRSVPVisit(index) {
    update(ref(db, 'guests/' + index), {
        hasCheckedRSVP: true
      })
      .then(() => {
        // Data saved successfully!
      })
      .catch((error) => {
        // The write failed...
      });
}

function createElementHelper(el, css) {
    let element = document.createElement(el);
    css.forEach(function(c) {
        element.classList.add(c);
    });
    return element;
}

function loadRSVP(db, user) {
    let guestGroup = [];
    let guestGroupKeys = [];
    let groupID = user.groupID;

    db.forEach(function(g, index) {
        if (g.groupID == groupID) {
            guestGroup.push(g);
            guestGroupKeys.push(index);
        }
    });

    guestGroup.forEach(function(g) {
        loadGuestRsvpRow(g);
    });

    let submitButton = createElementHelper('button', ['btn', 'btn-primary', 'mb-2', 'mt-4']);
    submitButton.setAttribute('type', 'button');
    submitButton.id = "submitRsvp";
    submitButton.innerText = "Submit RSVP";

    submitButton.onclick = function () {
        updateRsvp(guestGroupKeys);
        if (guestGroup.length > 1) {
            document.querySelector('.alert').innerText = "Thank you " + user.firstName + "! Your responses have been received.";
        } else {
            document.querySelector('.alert').innerText = "Thank you " + user.firstName + "! Your response has been received.";
        }
        document.querySelector('.alert').classList.remove('d-none');
    }
    document.querySelector("#rsvp").querySelector(".container").append(document.createElement('br'));
    document.querySelector("#rsvp").querySelector(".container").append(submitButton);
}

function loadGuestRsvpRow(g) {
    let divRow = createElementHelper('div', ['row']);
    let divCol4First = createElementHelper('div', ['col-md-3','d-none', 'd-md-block']);
    let divCol4Second = createElementHelper('div', ['col-md-3','d-none', 'd-md-block']);
    let divName = createElementHelper('div', ['col-md-2','col-sm-4']);
    let divRsvp = createElementHelper('div', ['col-md-2', 'col-sm-4', 'btn-group', 'btn-group-toggle']);
    let labelAccept = createElementHelper('label', ['btn', 'btn-outline-primary']);
    let labelDecline = createElementHelper('label', ['btn', 'btn-outline-secondary']);
    let inputAccept = document.createElement('input');
    let inputDecline = document.createElement('input');
    let inputDietCheckbox = document.createElement('input');
    let labelDietCheckbox = document.createElement('label');
    let divDietCheckbox = createElementHelper('div', ['col-md-2', 'col-sm-4']);
    let dietInput = createElementHelper('input', ['d-none']);

    divRsvp.setAttribute('data-toggle', 'buttons');
    inputAccept.setAttribute('type', 'radio');
    inputAccept.setAttribute('id', g.firstName+g.lastName+"1");
    inputDecline.setAttribute('type', 'radio');
    inputDecline.setAttribute('id', g.firstName+g.lastName+"2");
    inputDietCheckbox.setAttribute('type', 'checkbox');
    dietInput.setAttribute('type', 'text');

    divName.innerText = g.firstName + " " + g.lastName;
    labelAccept.innerText = "Accept";
    labelDecline.innerText = "Decline";
    labelDietCheckbox.innerText = "Diet Restrictions?";

    inputDietCheckbox.id = g.firstName.replace(/\s+/g, '').toLowerCase() + g.lastName.replace(/\s+/g, '').toLowerCase();
    dietInput.id = g.firstName.replace(/\s+/g, '').toLowerCase() + g.lastName.replace(/\s+/g, '').toLowerCase() + "input";
    inputDietCheckbox.onclick = function () {
        document.getElementById(g.firstName.replace(/\s+/g, '').toLowerCase() + g.lastName.replace(/\s+/g, '').toLowerCase() + "input").classList.toggle('d-none');
    }

    if (g.dietaryNeeds !== "") {
        dietInput.value= g.dietaryNeeds; 
    } else {
        dietInput.setAttribute('placeholder', "E.g., allergies, no gluten");
    }

    if (g.rsvp !== "") {
        if (g.rsvp) {
            labelAccept.classList.add('active');
            labelAccept.innerText = "Accepted";
        } else {
            labelDecline.classList.add('active');
            labelDecline.innerText = "Declined";
        }
    }

    labelAccept.append(inputAccept);
    labelDecline.append(inputDecline);
    divRsvp.append(labelAccept);
    divRsvp.append(labelDecline);
    divDietCheckbox.append(inputDietCheckbox);
    divDietCheckbox.append(labelDietCheckbox);
    divRow.append(divCol4First);
    divRow.append(divName);
    divRow.append(divRsvp);
    divRow.append(divDietCheckbox);
    divRow.append(divCol4Second);
    document.querySelector("#rsvp").querySelector(".container").append(divRow);
    document.querySelector("#rsvp").querySelector(".container").append(dietInput);
}

function updateRsvp(keys) {
    let selections = document.querySelector("#rsvp").querySelector(".container").querySelectorAll('.active');
    let guestDiets = document.querySelector("#rsvp").querySelector(".container").querySelectorAll('input[type=checkbox]');
    keys.forEach(function(g, index) {
        let rsvpValue = selections[index].classList.contains('btn-outline-primary');
        let dietaryNeedsValue = "";
        if (guestDiets[index].checked) {
            dietaryNeedsValue = document.querySelector("#rsvp").querySelector(".container").querySelectorAll('input[type=text]')[index].value;
        }
        update(ref(db, 'guests/' + g), {
            rsvp: rsvpValue,
            dietaryNeeds: dietaryNeedsValue
          })
          .then(() => {
            // Data saved successfully!
          })
          .catch((error) => {
            // The write failed...
          });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#verify").onclick = function () {
        authenticate(document.querySelector('#firstName').value , document.querySelector('#lastName').value );
    };
    window.addEventListener("scroll", reveal);
    console.info("Hope you admire my spaghetti code website. I'd like to thank Stack Overflow, because without it, I couldn't have done this. :) \n -Mitch")
}, false);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  
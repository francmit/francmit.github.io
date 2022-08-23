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
                document.querySelector("#nav-rsvp").querySelector('form').remove();
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

function loadRSVP(db, user) {
    let guestGroup = [];
    let guestGroupKeys = [];
    let groupID = user.groupID;

    db.forEach(function(g, index) {
        if (g.groupID == groupID) {
            guestGroup.push(g);
            guestGroupKeys.push(index);
        }
    })

    guestGroup.forEach(function(g) {
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        let divCol4First = document.createElement('div');
        divCol4First.classList.add('col-3');
        let divCol4Second = document.createElement('div');
        divCol4Second.classList.add('col-3');
        let divName = document.createElement('div');
        divName.classList.add('col-2');
        divName.innerText = g.firstName + " " + g.lastName;
        let divRsvp = document.createElement('div');
        divRsvp.classList.add('col-2', 'btn-group', 'btn-group-toggle');
        divRsvp.setAttribute('data-toggle', 'buttons');
        let labelAccept = document.createElement('label');
        labelAccept.classList.add('btn', 'btn-outline-primary');
        let labelDecline = document.createElement('label');
        labelDecline.classList.add('btn', 'btn-outline-secondary');
        let inputAccept = document.createElement('input');
        inputAccept.setAttribute('type', 'radio');
        inputAccept.setAttribute('id', g.firstName+g.lastName+"1");
        labelAccept.innerText = "Accept";
        let inputDecline = document.createElement('input');
        inputDecline.setAttribute('type', 'radio');
        inputDecline.setAttribute('id', g.firstName+g.lastName+"2");
        labelDecline.innerText = "Decline";
        let inputDietCheckbox = document.createElement('input');
        inputDietCheckbox.setAttribute('type', 'checkbox');
        inputDietCheckbox.id = g.firstName.replace(/\s+/g, '').toLowerCase() + g.lastName.replace(/\s+/g, '').toLowerCase();
        inputDietCheckbox.onclick = function () {
            document.getElementById(g.firstName.replace(/\s+/g, '').toLowerCase() + g.lastName.replace(/\s+/g, '').toLowerCase() + "input").classList.toggle('d-none');
        }
        let labelDietCheckbox = document.createElement('label');
        labelDietCheckbox.innerText = "Diet Restrictions?";
        let divDietCheckbox = document.createElement('div');
        divDietCheckbox.classList.add('col-2');
        let dietInput = document.createElement('input');
        dietInput.setAttribute('type', 'text');
        dietInput.classList.add('d-none');
        dietInput.id = g.firstName.replace(/\s+/g, '').toLowerCase() + g.lastName.replace(/\s+/g, '').toLowerCase() + "input";

        if (g.dietaryNeeds !== "") {
            dietInput.value= g.dietaryNeeds; 
        } else {
            dietInput.setAttribute('placeholder', "E.g., allergies, no gluten");
        }

        if (g.rsvp !== "") {
            if (g.rsvp) {
                labelAccept.classList.add('active');
            } else {
                labelDecline.classList.add('active');
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
        document.querySelector("#nav-rsvp").querySelector(".container").append(divRow);
        document.querySelector("#nav-rsvp").querySelector(".container").append(dietInput);
    });
    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.id = "submitRsvp";
    submitButton.classList.add('btn', 'btn-primary', 'mb-2', 'mt-4');
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
    document.querySelector("#nav-rsvp").querySelector(".container").append(document.createElement('br'));
    document.querySelector("#nav-rsvp").querySelector(".container").append(submitButton);
}

function updateRsvp(keys) {
    let selections = document.querySelector("#nav-rsvp").querySelector(".container").querySelectorAll('.active');
    let guestDiets = document.querySelector("#nav-rsvp").querySelector(".container").querySelectorAll('input[type=checkbox]');
    keys.forEach(function(g, index) {
        let rsvpValue = selections[index].classList.contains('btn-outline-primary');
        let dietaryNeedsValue = "";
        if (guestDiets[index].checked) {
            dietaryNeedsValue = document.querySelector("#nav-rsvp").querySelector(".container").querySelectorAll('input[type=text]')[index].value;
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
  
  
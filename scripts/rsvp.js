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
            snapshot.val().forEach(function(g) {
                if (g.firstName == fname && g.lastName == lname) {
                    loadRSVP(snapshot.val(), g);
                }
            })
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    document.querySelector("#nav-rsvp").querySelector('form').remove();
    document.querySelector("#submitRsvp").classList.remove('d-none');
    
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
        divCol4First.classList.add('col-4');
        let divCol4Second = document.createElement('div');
        divCol4Second.classList.add('col-4');
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
        labelDecline.innerText = "Declined";

        if (g.rsvp) {
            labelAccept.classList.add('active');
        } else {
            labelDecline.classList.add('active');
        }

        labelAccept.append(inputAccept);
        labelDecline.append(inputDecline);
        divRsvp.append(labelAccept);
        divRsvp.append(labelDecline);
        divRow.append(divCol4First);
        divRow.append(divName);
        divRow.append(divRsvp);
        divRow.append(divCol4Second);
        document.querySelector("#nav-rsvp").querySelector(".container").append(divRow);
        document.querySelector("#submitRsvp").onclick = function () {
            updateRsvp(guestGroupKeys);
        }
    });
}

function updateRsvp(keys) {
    let selections = document.querySelector("#nav-rsvp").querySelector(".container").querySelectorAll('.active');
    keys.forEach(function(g, index) {
        let rsvpValue = selections[index].classList.contains('btn-outline-primary');
        update(ref(db, 'guests/' + g), {
            rsvp: rsvpValue
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
}, false);
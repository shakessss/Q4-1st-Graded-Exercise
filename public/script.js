function solve(){

    const form = document.getElementById('input_form');
    const formData = new FormData(form);
 
    const name = formData.get('name')
    let gender = formData.get('gender');
    const guests = formData.getAll('guests');

    if (!name || !gender || !guess.length === 0) {
     alert("Please input an answer to all of these needed details; Celebrant's name, gender, and at least one guest.")
     return;
    }

    let pronoun = gender === "male" ? "he's: : she's;
    const happyBirthday = `Happy birthday to you. Happy birthday to you. Happy birthday dear ${name}. Happy birthday to you!`.split('')
    const goodFellow = `For ${name} a jolly good fellow. For ${name} a jolly good fellow. For ${name} a jolly good fellow, which nobody can deny!`;

    let output = "";
    let index = 0;

    while (index < guests.length || index < happyBirthday.length) {
     let singer = guests[index % guests.length];
     let word =happyBirthday[index % happyBirthday.length];
     output += `{singer}: {word} <br>`;
     index ++
    }

    output += `<br><strong>${goodFellow.replace(/_/g, pronoun)}</strong>`;

    document.getElementById('output').innerHTML = output;\
}
 
  // PLEASE STUDY THE CODES BELOW, BUT DO NOT CHANGE ANYTHING 

  // this function will create the needed input fields and corresponding Going checkboxes for the number of expected guests

  
  // A quick data dump on Output div to show users input on the browser.
  function printFormData() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2> Output <h2>';
    for (let [key, value] of formData.entries()){
      outputDiv.innerHTML += `${key}: ${value} <br>`;
    }
    const myData = Object.fromEntries(formData.entries());
    console.log(myData)
    console.log(formData.entries())
  }

//Sanity
console.log('home_script.js loaded')

//Create the variables 'name', 'email', and 'contactMessage' as empty strings
let name = '';
let email = '';
let contactMessage = '';

//Create a loop that runs while either of the created variables are empty
while (name == '' || email == '' || contactMessage == ''){
//Prompt the user for their name and store it in the 'name' variable
name = prompt("Enter your name");
//Prompt the user for their email and store it in the 'email' variable
email = prompt("Enter your email");
//Prompt the user for their contact message and store it in the 'contactMessage' variable
contactMessage = prompt("Enter your contact message");
//Alert the user if either field is empty and start the loop over
if (name == '' || email == '' || contactMessage == ''){
    alert("All fields must be filled!!!");
    continue;
}
}
//Create an array to store the above variables in, but do not put them in yet
let contactList = [];
//Display the user what they entered and confirm with if they want to contact you
let userConfirm = confirm(`Name:\n${name}\n\nEmail:\n${email}\n\nContact Message:\n${contactMessage}`);
//If the user selects confirm, display an alert thanking them for contacting you, store their information in to the previously created array, and print the array into the console.
if (userConfirm == true) {
    alert(`Thank you,${name}, for contacting me!`);
    contactList.push(name);
    contactList.push(email);
    contactList.push(contactMessage);
    for (let i = 0; i < contactList.length; i++){
        console.log(contactList[i]);
    }

}
//If the user selects cancel, display an alert that says 'Maybe Next Time...'
else {
    alert('Maybe next time...');
}
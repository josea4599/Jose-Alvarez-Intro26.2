
const footer = document.createElement("footer");
document.body.appendChild(footer);
let today = new Date();
let thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.textContent = `Jose J Alvarez ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsList = document.querySelector("#Skills ul");
for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}

const messageForm = document.querySelector('form[name="leave_message]');
messageForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = event.target.userName.value;
    const email = event.target.userEmail.value;
    const message = event.target.userMessage.value;

    console.log(name);
    console.log(email);
    console.log(message);

    const messageSelection = document.querySelector("#messages ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
    <a href="mailto:${userEmail}"
        ${userName}
        </a>
        `;
        document.querySelector("#messageList").appendChild(newMessage); 

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = event.target.parentElement;
        entry.remove();
        
        newMessage.appendChild(removeButton);
    })
    

    messageForm.reset();
}); 

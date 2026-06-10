
const footer = document.createElement("footer");


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

const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function(event){

    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    const messageList = document.querySelector("#messages ul");


    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    //const messageSelection = document.querySelector("#messages ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}"> ${usersName}</a>
    <span>${usersMessage}</span>
        `;
        //document.querySelector("#messageList").appendChild(newMessage); 

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(event) {
        const entry = event.target.parentElement;
        entry.remove();

    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    

    messageForm.reset();
}); 


//lesson 9
fetch("https://api.github.com/users/josea4599/repos")
    .then(response => response.json())
    .then(repositories => {
        for (let i = 0; i < repositories.length; i++) {

            const project = document.createElement("li");
            project.innerHTML = `
                <a href="${repositories[i].html_url}" target="_blank">
                    ${repositories[i].name}
                </a>
            `;
            projectList.appendChild(project);

        }
    })
    .catch(error => {
        console.error("Error: ", error);
    });

const projectSelection = document.querySelector("#Projects");

const projectList = projectSelection.querySelector("ul");
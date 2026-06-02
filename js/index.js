const footer = document.createElement("footer");
footer.textContent = "Jose A's Portfolio";
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

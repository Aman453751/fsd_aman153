// DATA (Fetched from earlier given details)
const aboutData = `
I am Aman Choudhary, a B.Tech Computer Science Engineering student at
ABES Engineering College, Ghaziabad. I am passionate about web development,
programming, and problem solving, and I enjoy building real-world projects.
`;

const skillsData = [
    { title: "Web Development", desc: "HTML, CSS, JavaScript responsive websites" },
    { title: "Programming", desc: "C, C++, Python with strong fundamentals" },
    { title: "DSA", desc: "Data Structures & Algorithms for problem solving" },
    { title: "Core CS", desc: "DBMS, OS, Computer Networks" },
    { title: "Version Control", desc: "Git & GitHub collaboration" }
];

const projectData = [
    {
        title: "Student Management System",
        desc: "Academic system to manage student records using C/Python."
    },
    {
        title: "Personal Portfolio Website",
        desc: "Dark themed portfolio using HTML, CSS, JavaScript."
    },
    {
        title: "Sorting Algorithm Visualizer",
        desc: "Visualization of sorting algorithms like Bubble & Insertion."
    }
];

// LOAD CONTENT
document.getElementById("aboutText").innerText = aboutData;

const skillsContainer = document.getElementById("skillsContainer");
skillsData.forEach(skill => {
    skillsContainer.innerHTML += `
        <div class="skill-card">
            <h3>${skill.title}</h3>
            <p>${skill.desc}</p>
        </div>
    `;
});

const projectContainer = document.getElementById("projectContainer");
projectData.forEach(project => {
    projectContainer.innerHTML += `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        </div>
    `;
});

// FUNCTIONS
function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function showAlert() {
    alert("Thank you for contacting Aman Choudhary!");
}

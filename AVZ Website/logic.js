/*navbar*/
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


/*Home*/
const content = [
    {
        headline: "EXPERTISE AND EXPERIENCE",
        description: "AVZ has a proven track record of successfully delivering diverse construction projects, from residential to commercial, demonstrating a high level of skill and experience in the industry."
    },
    {
        headline: "COMPREHENSIVE SERVICES",
        description: "Offering a full range of services, including construction, project management, and supply, ensures clients can rely on AVZ as a one-stop solution for their building needs."
    },
    {
        headline: "COMMITMENT TO QUALITY",
        description: "AVZ stands out for its unwavering commitment to high-quality materials, craftsmanship, and safety standards, ensuring every project meets or exceeds industry regulations and client expectations."
    },
    {
        headline: "CUSTOMER-CENTRIC APPROACH",
        description: "AVZ goes beyond construction by providing personalized client service, transparent communication, and a focus on understanding each client's unique vision and requirements."
    },
    {
        headline: "REPUTATION FOR RELIABILITY",
        description: "Known for consistently meeting deadlines and budgets, AVZ builds trust through dependable project delivery, minimizing delays and cost overruns."
    }
];

const headline = document.getElementById("headline");
const description = document.getElementById("description");

let index = 0;
headline.textContent = content[index].headline;
description.textContent = content[index].description;



function updateContent(index) {

    headline.style.opacity = "0";
    description.style.opacity = "0";

    setTimeout(() => {
        headline.textContent = content[index].headline;
        description.textContent = content[index].description;

        headline.style.opacity = "1";
        description.style.opacity = "1";
    }, 300); 
}

setInterval(() => {
    index = (index + 1) % content.length; 
    updateContent(index);
}, 5000); 

function openModal(element) {
    
    const title = element.dataset.title;
    const description = element.dataset.description;
    const imgSrc = element.dataset.imgSrc;
    
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-img").src = imgSrc;

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    
    document.getElementById("modal").style.display = "none";
}

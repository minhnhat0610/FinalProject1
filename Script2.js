let home = document.getElementById('home');
let bio = document.getElementById('bio');
let skills = document.getElementById('skills');
let education = document.getElementById('education');
let tags = document.getElementById('tags');

let profileTab = document.getElementById('profileTab');
let bioTab = document.getElementById('biographyTab');
let skillsTab = document.getElementById('skillsTab');
let educationTab = document.getElementById('educationTab');
let tagsTab = document.getElementById('tagsTab');

home.addEventListener('click', ()=> {
    profileTab.style.opacity = 1;
    bioTab.style.opacity = 0;
    skillsTab.style.opacity = 0;
    educationTab.style.opacity = 0;
    tagsTab.style.opacity = 0;
})

bio.addEventListener('click', ()=> {
    profileTab.style.opacity = 0;
    bioTab.style.opacity = 1;
    skillsTab.style.opacity = 0;
    educationTab.style.opacity = 0;
    tagsTab.style.opacity = 0;
})

skills.addEventListener('click', ()=> {
    profileTab.style.opacity = 0;
    bioTab.style.opacity = 0;
    skillsTab.style.opacity = 1;
    educationTab.style.opacity = 0;
    tagsTab.style.opacity = 0;
})

education.addEventListener('click', ()=> {
    profileTab.style.opacity = 0;
    bioTab.style.opacity = 0;
    skillsTab.style.opacity = 0;
    educationTab.style.opacity = 1;
    tagsTab.style.opacity = 0;
})

tags.addEventListener('click', ()=> {
    profileTab.style.opacity = 0;
    bioTab.style.opacity = 0;
    skillsTab.style.opacity = 0;
    educationTab.style.opacity = 0;
    tagsTab.style.opacity = 1;
})
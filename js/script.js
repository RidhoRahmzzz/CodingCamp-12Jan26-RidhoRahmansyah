// 1. SCROLL ANIMATION (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Jika elemen adalah stat-item, jalankan counter
            if(entry.target.querySelector('.counter')) {
               startCounters();
            }
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. NUMBER COUNTER ANIMATION
let hasCounted = false;
function startCounters() {
    if(hasCounted) return;
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        const updateCounter = () => {
            const c = +counter.innerText;
            if(c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
    hasCounted = true;
}

// 3. NAVBAR SCROLL EFFECT
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// 4. MOBILE MENU
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// 5. DYNAMIC NAME GREETING
const nameInput = document.getElementById('nameInput');
const updateBtn = document.getElementById('updateNameBtn');
const userNameDisplay = document.getElementById('userName');

updateBtn.addEventListener('click', () => {
    const newName = nameInput.value;
    if (newName.trim() !== "") {
        userNameDisplay.textContent = newName;
        localStorage.setItem('kargooUser', newName);
        nameInput.value = "";
    }
});

window.addEventListener('load', () => {
    const savedName = localStorage.getItem('kargooUser');
    if (savedName) userNameDisplay.textContent = savedName;
});

// 6. MESSAGE FORM HANDLING
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("formName").value;
    const email = document.getElementById("formEmail").value;
    const service = document.getElementById("serviceType").value;
    
    document.getElementById("resName").textContent = name;
    document.getElementById("resService").textContent = service;
    document.getElementById("resEmail").textContent = email;
    
    const now = new Date();
    document.getElementById("timestamp").textContent = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

    document.getElementById("resultBox").style.display = "block";
    this.reset();
});

// 7. LIVE CLOCK
function updateClock() {
    const now = new Date();
    document.getElementById('liveClock').textContent = now.toLocaleTimeString() + " WIB";
}
setInterval(updateClock, 1000);
updateClock();
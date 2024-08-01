let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Send Email

const form = document.querySelector("form");

const fullName = document.querySelector("name");
const email = document.querySelector("email");
const phone = document.querySelector("phone");
const subject = document.querySelector("subject");
const text_message = document.querySelector("text_message");

function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
}

function sendEmail() {
    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var text_message = document.getElementById("text_message").value;

    var messageBody = "Name: " + fullName + 
    "<br>Email: " + email + 
    "<br>Phone: " + phone +
    "<br>Message: " + text_message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "elshereefwork@gmail.com",
        Password : "0325A6A63B14616B254E9E06BA7B0C9C8833",
        To : 'elshereefwork@gmail.com',
        From : "elshereefwork@gmail.com",
        Subject : subject,
        Body : messageBody
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Thank you!",
                    text: "Your message has been sent!",
                    icon: "success",
                });
                form.reset();
            }else{
                alert("Error");
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})
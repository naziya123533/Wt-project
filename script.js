// Toggle Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});
document.querySelectorAll(".overlay i").forEach(icon => {
    icon.addEventListener("click", () => {
        alert("Action clicked: " + icon.className);
    });
});
const data = [
    {
        img: "images/man1.avif",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laboriosam fuga dolore omnis.",
        name: "Izabella Diana"
    },
    {
        img: "images/man2.webp",
        text: "Second testimonial text goes here. Quae debitis tempora neque repellendus numquam!",
        name: "Michael Smith"
    },
    {
        img: "images/man3.avif",
        text: "Third review example. Cupiditate ad dolore error facere recusandae facilis laudantium!",
        name: "Sarah Johnson"
    }
];

function changeTestimonial(index) {
    document.querySelector(".left-img img").src = data[index].img;
    document.querySelector(".text").innerText = data[index].text;
    document.querySelector(".name").innerText = data[index].name;

    // dot active effect
    document.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === index);
    });

    // fade animation
    document.querySelector(".testimonial-box").classList.add("fade");
    setTimeout(() => {
        document.querySelector(".testimonial-box").classList.remove("fade");
    }, 500);
}
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const productSelect = document.getElementById("productSelect");
const messageBox = document.getElementById("messageBox");
const sendBtn = document.getElementById("sendBtn");

function checkForm() {
    if (
        nameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        productSelect.value.trim() !== "" &&
        messageBox.value.trim() !== ""
    ) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
}

nameInput.addEventListener("keyup", checkForm);
emailInput.addEventListener("keyup", checkForm);
productSelect.addEventListener("change", checkForm);
messageBox.addEventListener("keyup", checkForm);

sendBtn.addEventListener("click", function () {
    alert("Your Message Has Been Sent Successfully!");
});


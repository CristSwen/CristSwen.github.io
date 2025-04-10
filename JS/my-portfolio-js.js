function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false )


//JavaScript to handle scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });
    document.querySelectorAll('.scroll-section').forEach(section => {
        observer.observe(section);
    })
})
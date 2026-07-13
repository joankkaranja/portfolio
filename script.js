<script>
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});
</script>

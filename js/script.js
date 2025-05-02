document.addEventListener('DOMContentLoaded', () => {
    // 1. Űrlap validálás
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;
            const inputs = form.querySelectorAll('input, textarea');

            inputs.forEach(input => {
                if (input.value.trim().length < 3) {
                    alert(`${input.name} mező túl rövid (min. 3 karakter)!`);
                    valid = false;
                }

                if (input.type === "email") {
                    const regex = /^\S+@\S+\.\S+$/;
                    if (!regex.test(input.value)) {
                        alert("Érvénytelen email formátum!");
                        valid = false;
                    }
                }
            });

            if (valid) {
                // Toast megjelenítés
                const toastEl = document.getElementById('successToast');
                if (toastEl) {
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                }
                form.reset();
            }
        });
    }

    // 2. Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Tooltip aktiválás
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

    // 4. ScrollSpy aktiválás
    const navEl = document.body.querySelector('[data-bs-spy="scroll"]');
    if (navEl) {
        bootstrap.ScrollSpy.getOrCreateInstance(navEl);
    }

    // 5. Táblázatszűrés keresővel
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toUpperCase();
            document.querySelectorAll('#myTable tbody tr').forEach(row => {
                const text = row.textContent.toUpperCase();
                row.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }

    // 6. További információk gomb (toggle visibility)
    const button = document.getElementById("toggleButton");
    const extraInfo = document.getElementById("extraInfo");

    if (button && extraInfo) {
        button.addEventListener("click", function() {
            if (extraInfo.style.display === "none") {
                extraInfo.style.display = "block";
                button.textContent = "Kevesebb információ";
            } else {
                extraInfo.style.display = "none";
                button.textContent = "További információk";
            }
        });
    }

    // 7. Belső lenyíló tartalom
    const nestedButton = document.querySelector(".btn-secondary"); // Ha az extra gomb osztálya "btn-secondary"
    const nestedInfo = document.getElementById("nestedInfo");

    if (nestedButton && nestedInfo) {
        nestedButton.addEventListener("click", function() {
            if (nestedInfo.style.display === "none") {
                nestedInfo.style.display = "block";
            } else {
                nestedInfo.style.display = "none";
            }
        });
    }
});

function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("toggleButton");
    const extraInfo = document.getElementById("extraInfo");

    if (button && extraInfo) {
        button.addEventListener("click", function() {
            if (extraInfo.style.display === "none") {
                extraInfo.style.display = "block";
                button.textContent = "Kevesebb információ"; // Gomb szövegének változtatása
            } else {
                extraInfo.style.display = "none";
                button.textContent = "További információk"; // Gomb szövegének visszaállítása
            }
        });
    }
});
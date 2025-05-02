// ===== 1. Űrlap validálás =====
document.addEventListener('DOMContentLoaded', () => {
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

    // ===== 2. Smooth scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== 3. Tooltip aktiválás =====
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

    // ===== 4. ScrollSpy aktiválás =====
    const navEl = document.body.querySelector('[data-bs-spy="scroll"]');
    if (navEl) {
        bootstrap.ScrollSpy.getOrCreateInstance(navEl);
    }

    // ===== 5. Táblázatszűrés keresővel =====
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

});
document.addEventListener("DOMContentLoaded", function () {
    const logoLink = document.querySelector(".flex.items-center a");
    if (logoLink) {
        logoLink.addEventListener("click", function (e) {
            e.preventDefault();
            k;
            const logoImg = this.querySelector("img");
            logoImg.style.transform = "scale(1.1)";
            setTimeout(() => {
                logoImg.style.transform = "scale(1)";
            }, 200);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputs = form.querySelectorAll("input");
            let isValid = true;

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add("border-red-500");
                } else {
                    input.classList.remove("border-red-500");
                }
            });

            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    isValid = false;
                    emailInput.classList.add("border-red-500");
                }
            }

            const passwordInput = form.querySelector('input[type="password"]');
            const confirmPasswordInput = form.querySelectorAll(
                'input[type="password"]'
            )[1];

            if (passwordInput && confirmPasswordInput) {
                if (passwordInput.value !== confirmPasswordInput.value) {
                    isValid = false;
                    confirmPasswordInput.classList.add("border-red-500");
                    alert("Passwords do not match");
                }
            }

            if (isValid) {
                alert("Form submitted successfully!");
            } else {
                alert("Please fill in all required fields correctly");
            }
        });
    }

    const photoContainer = document.getElementById("photoContainer");
    const addPhotoButton = document.getElementById("addPhotoBtn");
    const profilePhoto = document.getElementById("profilePhoto");
    const deletePhotoButton = document.getElementById("deletePhotoBtn");

    if (addPhotoButton && profilePhoto && deletePhotoButton) {
        setTimeout(() => {
            profilePhoto.src = "public/images/najib.png";
            profilePhoto.classList.remove("hidden");
            addPhotoButton.classList.add("hidden");
            deletePhotoButton.classList.remove("hidden");
        }, 500);

        addPhotoButton.addEventListener("click", function () {
            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.accept = "image/*";

            fileInput.addEventListener("change", function (e) {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        profilePhoto.src = e.target.result;
                        profilePhoto.classList.remove("hidden");
                        addPhotoButton.classList.add("hidden");
                        deletePhotoButton.classList.remove("hidden");
                    };

                    reader.readAsDataURL(e.target.files[0]);
                }
            });

            fileInput.click();
        });

        deletePhotoButton.addEventListener("click", function () {
            profilePhoto.src = "";
            profilePhoto.classList.add("hidden");
            addPhotoButton.classList.remove("hidden");
            deletePhotoButton.classList.add("hidden");
        });
    }
});

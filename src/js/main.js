// Main JavaScript file

document.addEventListener("DOMContentLoaded", function () {
    // Form validation
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

            // Email validation
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    isValid = false;
                    emailInput.classList.add("border-red-500");
                }
            }

            // Password validation
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
                // Here you would typically send the data to a server
                // form.submit();
            } else {
                alert("Please fill in all required fields correctly");
            }
        });
    }

    // Add photo functionality
    const addPhotoButton = document.querySelector(".w-32.h-32 button");
    if (addPhotoButton) {
        addPhotoButton.addEventListener("click", function () {
            // Create a file input element
            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.accept = "image/*";

            fileInput.addEventListener("change", function (e) {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        const photoContainer =
                            document.querySelector(".w-32.h-32");
                        photoContainer.style.backgroundImage = `url(${e.target.result})`;
                        photoContainer.style.backgroundSize = "cover";
                        photoContainer.style.backgroundPosition = "center";

                        // Hide the button
                        addPhotoButton.style.display = "none";
                    };

                    reader.readAsDataURL(e.target.files[0]);
                }
            });

            fileInput.click();
        });
    }
});

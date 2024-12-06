document.addEventListener('DOMContentLoaded', function() {
    var section0 = document.querySelector('main > div:nth-of-type(1)');
    if (!section0) return; 
    var bootstrapLogoImage = section0.querySelector('img');
    var title = section0.querySelector('h1');

    if (bootstrapLogoImage) {
        bootstrapLogoImage.setAttribute('src', 'https://www.webyn.ai/user/themes/webyn/images/logo/logo-webyn.webp');
        bootstrapLogoImage.style.width = "350px";
    }

    if (title) {
        title.innerHTML = 'Generate <span style="color: #0ea5e9;">more revenue</span> with your website!';
    }

    var description = '97% of your traffic does not convert. Webyn automatically generates <br> improvements on your website to maximize your conversions.<br> 100% No-Code.';
    var descriptionContainer = section0.querySelector('div > p');

    if (descriptionContainer) {
        descriptionContainer.innerHTML = description;
        descriptionContainer.style.textAlign = "center";
    }

    var leftButton = section0.querySelector('div div button:nth-of-type(1)');
    var rightButton = section0.querySelector('div div button:nth-of-type(2)');

    if (leftButton) {
        leftButton.innerText = "Book a demo";
        leftButton.style.borderRadius = "30px";
        leftButton.style.backgroundColor = "#0ea5e9";
        leftButton.style.borderColor = "#0ea5e9";
        leftButton.style.paddingTop = "0.6rem";
    }

    if (rightButton) {
        rightButton.innerHTML = 'Analyse my website &#8594;';
        rightButton.style.borderRadius = "30px";
        rightButton.style.paddingTop = "0.6rem";
    }

    // Bonus 1
    var parentSection = document.querySelector('main');
    var divider = document.querySelectorAll('.b-example-divider');
    var sections = document.querySelectorAll('main > div:not(.b-example-divider)');

    if (parentSection && sections.length >= 3 && divider.length >= 2) {
        parentSection.insertBefore(sections[2], sections[1]);
        parentSection.insertBefore(sections[1], divider[1].nextSibling);
    }

    // Bonus 2 Add an email input field above the existing buttons
    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.style.width = "50%";
    emailInput.style.margin = "0px auto 30px";

    if (descriptionContainer && descriptionContainer.nextSibling) {
        descriptionContainer.parentNode.insertBefore(emailInput, descriptionContainer.nextSibling);

        var buttons = section0.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                var email = emailInput.value;
                if (email !== "") {
                    if (validateEmail(email)) {
                        alert(email);
                    } else {
                        alert(email + " is not a valid email format");
                    }
                }else {
                    alert('Please enter an email address');
                }
            });
        }
    }

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

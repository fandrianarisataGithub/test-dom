document.addEventListener('DOMContentLoaded', () => {
    const section0 = document.querySelector('main > div:nth-of-type(1)');
    if (!section0) return; 

    const elements = {
        logo: section0.querySelector('img'),
        title: section0.querySelector('h1'),
        descriptionContainer: section0.querySelector('div > p'),
        buttons: section0.querySelectorAll('div div button'),
        parentSection: document.querySelector('main'),
        dividers: document.querySelectorAll('.b-example-divider'),
        sections: document.querySelectorAll('main > div:not(.b-example-divider)')
    };

    if (elements.logo) {
        elements.logo.src = 'https://www.webyn.ai/user/themes/webyn/images/logo/logo-webyn.webp';
        elements.logo.style.width = "350px";
    }

    if (elements.title) {
        elements.title.innerHTML = `Generate <span style="color: #0ea5e9;">more revenue</span> with your website!`;
    }

    if (elements.descriptionContainer) {
        elements.descriptionContainer.innerHTML = `
            97% of your traffic does not convert. Webyn automatically generates <br>
            improvements on your website to maximize your conversions.<br> 100% No-Code.
        `;
        elements.descriptionContainer.style.textAlign = "center";
    }

    const updateButton = (button, text, styles = {}) => {
        if (button) {
            button.innerHTML = text;
            Object.assign(button.style, styles);
        }
    };

    updateButton(elements.buttons[0], "Book a demo", {
        borderRadius: "30px",
        backgroundColor: "#0ea5e9",
        borderColor: "#0ea5e9",
        paddingTop: "0.6rem"
    });

    updateButton(elements.buttons[1], `Analyse my website &#8594;`, {
        borderRadius: "30px",
        paddingTop: "0.6rem"
    });

    // Bonus 1
    if (elements.parentSection && elements.sections.length >= 3 && elements.dividers.length >= 2) {
        elements.parentSection.insertBefore(elements.sections[2], elements.sections[1]);
        elements.parentSection.insertBefore(elements.sections[1], elements.dividers[1].nextSibling);
    }

    // Bonus 2
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    Object.assign(emailInput.style, {
        width: "50%",
        margin: "0 auto 30px",
        display: "block" 
    });

    if (elements.descriptionContainer && elements.descriptionContainer.parentNode) {
        elements.descriptionContainer.parentNode.insertBefore(emailInput, elements.descriptionContainer.nextSibling);
    }

    const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    elements.buttons.forEach(button => {
        button.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (email) {
                if (validateEmail(email)) {
                    alert(email);
                } else {
                    alert(`${email} is not a valid email format`);
                }
            } else {
                alert('Please enter an email address');
            }
        });
    });
});

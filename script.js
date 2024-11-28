document.addEventListener('DOMContentLoaded', () => {
    const section0 = document.querySelector('main > div:nth-of-type(1)');
    const bootstrapLogoImage = section0.querySelector('img')
    const title = section0.querySelector('h1')
    if(bootstrapLogoImage) {
        bootstrapLogoImage.setAttribute('src', 'https://www.webyn.ai/user/themes/webyn/images/logo/logo-webyn.webp');
        bootstrapLogoImage.style.width = "350px";
        //bootstrapLogoImage.style.height = "92px";
    }
    if(title) {
        title.innerHTML = `
            Generate <span style="color: #0ea5e9;">more revenue</span> with your website!
        `
    }
    const description = `97% of your traffic does not convert. Webyn automatically generates <br> improvements on your website to maximize your conversrions.<br> 100% No-Code.`; 
    const descriptionContainer = section0.querySelector('div > p')
    if(descriptionContainer) {
        descriptionContainer.innerHTML = description;
        descriptionContainer.style.textAlign = "center"
    }
    const leftButton = section0.querySelector('div div button:nth-of-type(1)');
    const rightButton = section0.querySelector('div div button:nth-of-type(2)');

    if(leftButton) {
        leftButton.innerText = "Book a demo";
        leftButton.style.borderRadius = "30px";
        leftButton.style.backgroundColor = "#0ea5e9";
        leftButton.style.borderColor = "#0ea5e9";
        leftButton.style.paddingTop = "0.6rem";

    }
    
    if(rightButton) {
        rightButton.innerHTML = `Analyse my website &#8594;`;
        rightButton.style.borderRadius = "30px";
        rightButton.style.paddingTop = "0.6rem";
    }

    // Bonus 
    const parentSection = document.querySelector('main');
    const divider = document.querySelectorAll('.b-example-divider');
    const sections = document.querySelectorAll('main > div:not(.b-example-divider)');

    //Swap second (Centered screenshot) and third blocs (Responsive left-aligned hero with image)
    parentSection.insertBefore(sections[2], sections[1]);
    parentSection.insertBefore(sections[1], divider[1].nextSibling);

    //  Add an email input field above the existing buttons (”Book a demo” & “Analyse my website”). When the buttons are clicked, display an alert that shows the entered email address.
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.style.width = "50%";
    emailInput.style.margin = "0px auto 30px";

    if(descriptionContainer && descriptionContainer.nextSibling) {
        descriptionContainer.parentNode.insertBefore(emailInput, descriptionContainer.nextSibling);

        section0.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                const email = emailInput.value;
                if(email != "") {
                    if(validateEmail(email)) {
                        alert(emailInput.value);
                    }else {
                        alert("please enter a valid email format");
                    }
                }
            });
        });
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
})